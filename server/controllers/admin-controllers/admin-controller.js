const config = require('../../config');
const Admin = require('../../models/admin');
const WithdrawRequest = require('../../models/withdraw-request');
const Request = require('../../models/request');
const Client = require('../../models/client');
const WalletAddress = require('../../models/btc-address');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports.checkAdminAuth = (req, res) => {
	const username = req.body.username;
	const password = req.body.password;

	Admin.findOne({ username })
		.then(admin => {
			bcrypt.compare(password, admin.password, (err, isMatched) => {
				if (!err) {
					if (isMatched) {
						console.log(isMatched)
						const token = jwt.sign({ username: admin.username, role: config.role.ADMIN_ROLE }, config.secret.ADMIN, { expiresIn: '12h', algorithm: 'HS256' });
						res.status(200).json({
							isAuthenticated: true,
							token: token
						})
					} else {
						res.status(401).json({
							isAuthenticated: false,
							message: 'CREDS_INVALID'
						});
					}
				} else {
					console.log(err);
					res.status(500).json({
						isAuthenticated: false,
						message: 'INTERNAL_ERROR'
					});
				}
			});
		})
		.catch(err => {
			res.status(500).json({
				isAuthenticated: false,
				message: 'INTERNAL_ERROR'
			});
		});
};

module.exports.verifyUser = (req, res) => {
	const userId = req.params.userId
	Client.findOne({ _id: userId }).exec()
		.then(async client => {
			client.isVerified = true;
			await client.save();
			res.status(200).json({
				isSuccess: true,
				message: 'USER_VERIFIED'
			});
		})
		.catch(err => {
			res.status(500).json({
				isSuccess: false,
				message: 'INTERNAL_ERROR'
			});
		});
}

module.exports.createAdmin = (req, res) => {
	const username = req.body.username;
	const password = req.body.password;
	const saltRounds = 10;
	const admin = new Admin({
		username,
		password
	});
	bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
		if (!err) {
			admin.password = hashedPassword;
			admin.save()
				.then(admin => {
					res.status(201).json({
						isSuccess: true
					})
				})
				.catch(err => {
					res.status(500).json({
						isSuccess: false
					});
				});
		} else {
			res.status(500).json({
				isSuccess: false,
				message: 'INTERNAL_ERROR'
			});
		}
	});
}

module.exports.addAddress = async (req, res) => {
	const body = req.body;
	const btcAddress = body.btcAddress;
	const ethAddress = body.ethAddress;
	const btc = await WalletAddress.findOne({ btcAddress: btcAddress });
	const eth = await WalletAddress.findOne({ ethAddress: ethAddress });
	if (!btc) {
		if (!eth) {
			const address = new WalletAddress({
				btcAddress: btcAddress,
				ethAddress: ethAddress
			});

			address.save()
				.then(stored => {
					res.status(201).json({
						isSuccess: true,
						message: 'ADDRESS_ADDED'
					});
				})
				.catch(err => {
					res.status(500).json({
						isSuccess: false,
						message: 'ADDRESS_NOT_ADDED!'
					});
				});
		} else {
			res.status(400).json({
				isSuccess: false,
				message: 'ETH_ADDRESS_ALREADY_EXISTS'
			});
		}
	} else {
		res.status(400).json({
			isSuccess: false,
			message: 'BTC_ADDRESS_ALREADY_EXISTS'
		});
	}
}

module.exports.getAllAddress = (req, res) => {

	WalletAddress.find({})
		.exec(function (err, btcaddresses) {
			if (err) {
				res.status().json({
					isSuccess: false,
					message: 'INTERNAL_ERROR'
				});
			} else {
				res.status(200).json(btcaddresses);
			}
		});
}

module.exports.verifyWithdraw = (req, res) => {
	const id = req.params.requestId;

	WithdrawRequest.findOne({ _id: id }).exec()
		.then(request => {
			console.log(request)
			Client.findOne({ _id: request.client }).exec()
				.then(client => {
					request.status = 'Approved';
					request.approvedAt = Date.now();
					client.reservedDollar -= parseFloat(request.amount);
					request.save()
						.then(stored => {
							client.save();
							res.status(200).json({
								isSuccess: true
							});
						})
						.catch(err => {
							res.status(500).json({
								isSuccess: false,
								message: 'INTERNAL_ERROR'
							});
						});
				})
				.catch(err => {

					res.status(500).json({
						isSuccess: false,
						message: 'INTERNAL_ERROR'
					});
				});
		})
		.catch(err => {
			res.status(500).json({
				isSuccess: false,
				message: 'INTERNAL_ERROR'
			});
		});
}

module.exports.getWithdrawRequests = (req, res) => {
	WithdrawRequest.find({ status: 'Under Process' })
		.populate('client', 'username email phone')
		.exec()
		.then(requests => {


			res.status(200).json({
				isSuccess: true,
				requests: requests
			})
		})
		.catch(err => {
			res.status(500).json({
				isSuccess: false,
				message: 'INTERNAL_ERROR'
			});
		});
}

module.exports.getAllClients = (req, res) => {

	Client.find()
	.select('username email address phone btc eth dollar isVerified')
	.exec()
	.then(clients => {
		res.status(200).json({
			isSuccess: true,
			clients: clients
		});
	})
	.catch(err => {
		res.status(500).json({
			isSuccess: false,
			message: 'INTERNAL_ERROR'
		});
	});
}

//Requests
// This approves send or recieve requests
module.exports.approveRequest = async (req, res) => {
	Request.findById({ _id: req.params.id }).exec()
		.then(async request => {
			if (request.status === 'Under Process') {
				const client = await Client.findById({ _id: request.clientId }).exec();
				if (request.requestType === 'Receive') {
					if (request.cryptoType === 'BTC') {
						client.btc += parseFloat(request.amount);
						client.save();
					} else {
						//cryptoType is eth
						client.eth += parseFloat(request.amount);
						client.save();
					}
				} else {
					//Request type is send
					if (request.cryptoType === 'BTC') {
						client.reservedBtc -= parseFloat(request.amount);
						client.save();
					} else {
						client.reservedEth -= parseFloat(request.amount);
						client.save();
					}
				}
				request.status = 'Approved';
				request.approvedAt = Date.now();
				request.save()
					.then(request => {
						res.status(200).json({
							message: 'REQUEST_APPROVED',
							request: request
						})
					})
					.catch(err => {
						res.status(500).json({
							message: err.message
						});
					});

			} else {
				return res.status(400).json({
					isSuccess: false,
					message: 'ALREADY_APPROVED'
				});
			}
		})
		.catch(err => {
			res.status(500).json({
				isSuccess: true,
				message: 'INTERNAL_ERROR'
			});
		});
}

module.exports.getPendingRequests = (req, res) => {
	Request.find({ status: 'Under Process' })
		.select('-__v -clientId -approvedAt')
		.exec()
		.then(pendingRequests => {
			res.status(200).json({
				isSuccess: true,
				requests: pendingRequests
			});
		})
		.catch(err => {
			res.status(500).json({
				isSuccess: false,
				message: err.message
			});
		});
}

module.exports.getApprovedRequests = (req, res) => {
	Request.find({ status: "Approved" })
		.select('-__v -clientId')
		.exec()
		.then(approvedRequests => {
			res.status(200).json({
				requests: approvedRequests,
				isSuccess: true
			});
		})
		.catch(err => {
			res.status(500).json({
				isSuccess: false,
				message: err
			});
		});
}