//npm install node-binance-api --save

const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');

//Initializing
const router = express.Router();
//Models
const Client = require('../models/client');
const Request = require('../models/requests');
const ClientSeller = require('../models/clientSeller');
const ClientBuyer = require('../models/clientBuyer');
const BtcAddress = require('../models/btcaddress');
const config = require('../config');

//Check User middleware
const user = require('../middlewares/user-middlware');


//const db = "mongodb://localhost:27017/bitcoinerDB";
const db = "mongodb+srv://mybitcoiner:123456789db@cluster0-8jh11.mongodb.net/test?retryWrites=true&w=majority"

mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);

mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true }, function (err) {
  if (err) {
    console.error("Error ! " + err);
  }
});



///////////////////////////////////BIT API/////////////////////////////////////
const binance = require('node-binance-api')().options({
  APIKEY: 'https://api.binance.com/api/v3/ticker/price',
  useServerTime: true // If you get timestamp errors, synchronize to server time at startup
});
//Getting bitcoin price
router.get('/bitapi', function (req, res) {
  binance.prices('BTCUSDT', (error, ticker) => {
    res.send({
      ticker: ticker
    });
  });
});
//Getting ethereium price
router.get('/ethapi', user.checAuth, function (req, res) {
  binance.prices('ETHUSDT', (error, ticker) => {
    res.json({
      ticker: ticker
    });
  });
});

////////////////////////////Buyers////////////////////////////////
router.post('/buyer/add', user.checAuth, async (req, res) => {
  const body = req.body;
  const email = body.email;
  const limit = body.limit;
  limit.minimum = parseFloat(limit.minimum);
  limit.maximum = parseFloat(limit.maximum);

  const buyer = new ClientBuyer({
    name: body.name,
    email: body.email,
    cryptoType: body.cryptoType,
    price: body.price,
    walletAddress: body.walletAddress,
    description: body.description,
    limit: limit
  });

  Client.findOne({ email: email }).exec()
    .then(client => {

      client.reservedDollar += buyer.limit.maximum;
      client.dollar -= buyer.limit.maximum;
      buyer.clientId = client._id;

      client.save()
        .then(saved => {
          buyer.save()
            .then(result => {

              res.status(201).json({
                message: 'Request Posted!',

                isSuccess: true
              });
            })
            .catch(err => {
              console.log("1::::" + err)
              res.status(500).json({
                message: err.message,

                isSuccess: false
              });
            });
        })
        .catch(err => {
          console.log("2::::" + err)
          res.status(500).json({
            isSuccess: false,
            message: err.message
          });
        });
    })
    .catch(err => {
      console.log("3::::" + err)
      res.status(500).json({
        isSuccess: false,
        message: err.message
      });
    });
});

router.get('/buyer/all', user.checAuth, function (req, res) {
  ClientBuyer.find({})
    .exec()
    .then(result => {

      res.status(200).json({
        result: result,
        isSuccess: true
      });
    })
    .catch(err => {
      res.status(500).json({
        message: err.message,
        isSuccess: false
      })
    });
});

router.delete('/buyer/:id', user.checAuth, function (req, res) {
  console.log('Deleting a buyer');
  ClientBuyer.findByIdAndRemove(req.params.id, function (err, deletedBuyer) {
    if (err) {
      res.send("Error deleting buyer")
    } else {
      res.json(deletedBuyer);
    }
  })
});

router.post('/confirm/buy', user.checAuth, (req, res) => {
});

////////////////////////////Sellers//////////////////////////////////
router.post('/seller/add', user.checAuth, async (req, res) => {
  const body = req.body;
  const clientId = body.clientId;
  const limit = req.body.limit;
  limit.minimum = parseFloat(limit.minimum);
  limit.maximum = parseFloat(limit.maximum);
  const seller = new ClientSeller({
    name: body.name,
    limit: limit,
    email: body.email,
    cryptoType: body.cryptoType,
    price: body.price,
    sellerId: body.clientId,
    description: body.description,
    quantity: body.quantity,
    clientId: clientId
  });
  console.log("this is body of seller" + seller);
  Client.findById({ _id: clientId })
    .exec()
    .then(client => {
      if (body.cryptoType === 'BTC') {
        client.btc -= parseFloat(body.quantity);
        client.reservedBtc += parseFloat(body.quantity);
        console.log
      } else {
        client.eth -= parseFloat(body.quantity);
        client.reservedEth += parseFloat(body.quantity);
      }
      client.save()
        .then(client => {
          console.log(client);
          seller.save()
            .then(seller => {
              res.status(201).json({
                isSuccess: true,
                message: 'Sell Posted!'
              });
            })
            .catch(err => {
              res.status(500).json({
                isSuccess: false,
                message: err.message
              });
            });
        })
        .catch(err => {
          res.status(500).json({
            isSuccess: false,
            message: err.message
          });

        });
    })
    .catch(err => {
      res.status(500).json({
        isSuccess: false,
        message: err.message
      });
    });
});

router.get('/seller/all', user.checAuth, function (req, res) {
  ClientSeller.find({})
    .exec(function (err, ClientSeller) {
      if (err) {
        console.log('Error while retrieving All seller in api.js');
      } else {
        res.json({
          result: ClientSeller
        });
      }
    });
})

router.delete('/seller/:id', user.checAuth, function (req, res) {
  console.log('Deleting a client');
  ClientSeller.findByIdAndRemove(req.params.id, function (err, deletedSeller) {
    if (err) {
      res.send("Error deleting client")
    } else {
      res.json(deletedSeller);
    }
  })
})

router.post('/confirm/sell', user.checAuth, (req, res) => {

});

router.post('/sendmail', user.checAuth, async (req, res) => {
  try {
    const body = req.body;
    let pass = "";
    console.log("my client email", body.email);
    const result = await Client.findOne({ "Email": body.email });
    if (!result) {
      res.status(401).send({
        Error: 'This user doesnot exists. Please signup first'
      });
    }
    else {
      pass = result.Password;
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'moviecon3327@gmail.com',
          pass: '03105593105'
        }
      });
      var mailOptions = {
        from: 'moviecon3327@gmail.com',
        to: body.email,
        subject: 'Password Recovery Movie-Con',
        html: `<h1>Hello</h1><p>Thanks a lot for using Bitcoiner, your password is: ${pass} </p> <h2>regards:</h2> <p>Bitcoiner</p>`
      };
      transporter.sendMail(mailOptions, function (error, info) {

        if (error) {
          console.log(error);
          res.send({ message: 'we got a problem' });
        } else {
          console.log('Email sent: ' + info.response);
          res.send({ message: 'successfull!' });
        }
      });
    }
  }
  catch (ex) {
    console.log('ex', ex)
  }
});

/////////////////////////All requests////////////////////////////////////////

//Admin's requests routes
//This approves a request
router.put('/request/approve/:id', user.checAuth, async function (req, res) {
  Request.findById({ _id: req.params.id }).exec()
    .then(async request => {
      if (request.status === 'Under Process') {
        const client = await Client.findById({ _id: request.clientId }).exec();
        if (request.requestType === 'Receive') {
          if (request.cryptoType === 'BTC') {
            client.btc += parseFloat(request.amount);
            client.save();
          } else {
            client.eth += parseFloat(request.amount);
            client.save();
          }
        }
        request.status = 'Approved';
        request.approvedAt = Date.now();
        request.save()
          .then(request => {
            res.status(200).json({
              message: 'Request Approved!',
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
          message: 'Request Already Approved!'
        });
      }
    })
    .catch(err => {
      console.log(err)
    });
});
router.get('/request/approved/all', user.checAuth, (req, res) => {

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
        message: err.message
      });
    });
});
router.get('/request/pending/all', user.checAuth, (req, res) => {

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
});

//Client's Requests routes
router.post('/request/add', user.checAuth, (req, res) => {
  const body = req.body;


  const request = new Request({
    username: body.username,
    email: body.email,
    to: body.to,
    from: body.from,
    requestType: body.requestType,
    cryptoType: body.cryptoType,
    amount: parseFloat(body.amount),
    description: body.description,
    status: 'Under Process',
    clientId: ''
  });

  Client.findOne({ email: body.email })
    .exec()
    .then(async client => {
      request.clientId = client._id;
      if (body.requestType === 'Send') {
        const btcCredit = client.btc;
        const ethCredit = client.eth;

        if (body.cryptoType === 'BTC') {

          if (body.amount < btcCredit) {
            const storedRequest = await request.save();
            client.btc -= parseFloat(body.amount);
            client.reservedBtc += parseFloat(body.amount);
            client.clientRequest.push(storedRequest._id);
            client.save()
              .then(client => {
                res.status(201).json({
                  message: 'Request Stored!',
                  isSuccess: true
                });
              })
              .catch(err => {
                res.status(500).json({
                  message: err.message,
                  isSuccess: false
                });
              });

          } else {
            return res.status(400).json({
              isSuccess: false,
              message: 'Not enough credit!'
            })
          }
        } else {

          if (body.amount < ethCredit) {
            const storedRequest = await request.save();
            client.eth -= parseFloat(body.amount);
            client.reservedEth += parseFloat(body.amount);
            client.clientRequest.push(storedRequest._id);
            client.save()
              .then(client => {
                res.status(201).json({
                  message: 'Request Stored!',
                  isSuccess: true
                });
              })
              .catch(err => {
                res.status(500).json({
                  message: err.message,
                  isSuccess: false
                });
              });
          } else {
            res.status(400).json({
              isSuccess: false,
              message: 'Not enough credit!'
            })
          }
        }
      } else {
        const storedRequest = await request.save();
        client.clientRequest.push(storedRequest._id);
        client.save()
          .then(client => {
            res.status(201).json({
              message: 'Request Stored!',
              isSuccess: true
            });
          })
          .catch(err => {
            res.status(500).json({
              message: err.message,
              isSuccess: false
            });
          });
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        isSuccess: false
      });
    });
});
router.delete('/request/:requestId', user.checAuth, async (req, res) => {
  const requestId = req.params.requestId;
  const request = await Request.findById({ _id: requestId });
  const client = await Client.findById({ _id: request.clientId });
  const clientRequests = client.clientRequest;

  if (request.status === 'Under Process') {

    if (request.requestType === 'Send') {

      if (request.cryptoType === 'BTC')
        client.reservedBtc -= request.amount;
      else
        client.reservedEth -= request.amount;
    }

    clientRequests.splice(clientRequests.indexOf(request._id), 1);

    request.remove()
      .then(async removed => {

        await client.save();

      })
      .catch(err => {
        res.status(500).json({
          isSuccess: false,
          message: err.message
        });
      });

  } else {
    return res.status(400).json({
      isSuccess: false,
      message: 'ALREADY_APPROVED'
    });
  }
});
router.get('/request/approved/:clientId', user.checAuth, (req, res) => {
  const clientId = req.params.clientId;
  Request.find({ clientId: clientId, status: 'Approved' })
    .select('-__v -clientId')
    .exec()
    .then(approvedRequests => {
      res.status(200).json({
        isSuccess: true,
        requests: approvedRequests
      });
    })
    .catch(err => {
      res.status(500).json({
        isSuccess: false,
        message: err.message
      });
    });
});
router.get('/request/pending/:clientId', user.checAuth, (req, res) => {
  const clientId = req.params.clientId;

  Request.find({ clientId: clientId, status: 'Under Process' })
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
});
///////////////////////////login   Signup////////////////////////////////////

router.post('/signup', async (req, res) => {
  const body = req.body;
  const email = body.email;
  const saltRounds = 10;
  await bcrypt.hash(body.password, saltRounds, async (err, hash) => {
    const result = await Client.findOne({ email: email });
    if (!result) // this means result is null
    {
      let newClient = new Client({
        username: body.username,
        email: body.email,
        password: hash,
        phone: body.phone,
        address: body.address,
        btcAddress: '',
        ethAddress: ''
      });
      var end = {};
      BtcAddress.find({})
        .exec(function (err, addresses) {
          if (err) {
            console.log('Error while retrieving clients');
          } else {
            const length = addresses.length;
            let val = 1;
            // if (length === 1) {
            //   val = 0;
            // } else {
            //   val = Math.floor(Math.random() * length + 1) + 1;
            // }
            end = addresses[val];
            console.log(val);
            newClient.btcAddress = end.btcAddress;
            newClient.ethAddress = end.ethAddress;
            newClient.save()
              .then(client => {
                res.json(client)
              })
              .catch(err => {
                res.json(err);
              });
          }
        });
    }
    else {
      res.status(401).json({
        message: 'User already exists',
        isSuccess: false
      });
    }
  });
});

router.post('/login', async (req, res) => {
  const body = req.body;
  let id;
  let token;
  const email = body.email;
  const result = await Client.findOne({ email: email });
  if (!result) {
    res.status(401).send({
      error: 'This client does not exists. Please signup first',
      isAuthenticated: false
    });
  } else {
    bcrypt.compare(body.password, result.password, (err, isMatched) => {
      if (!err) {
        if (isMatched) {
          id = result._id;
          token = jwt.sign({ email: email }, config.secrert, { expiresIn: 1000 * 60 * 60, algorithm: 'HS256' });
          res.status(200).json({
            id: id,
            token: token,
            isAuthenticated: true
          });
        } else {
          res.status(401).send({
            message: 'Wrong email or Password',
            isAuthenticated: false
          });
        }
      } else {
        res.status(401).json({
          message: err.message,
          isAuthenticated: false
        });
      }
    });
  }
});

router.post('/address/add', user.checAuth, async (req, res) => {
  const body = req.body;
  const btcAddress = body.btcAddress;
  const ethAddress = body.ethAddress;
  const btc = await BtcAddress.findOne({ btcAddress: btcAddress });
  const eth = await BtcAddress.findOne({ ethAddress: ethAddress });
  if (!btc) {
    if (!eth) {
      const address = new BtcAddress({
        btcAddress: btcAddress,
        ethAddress: ethAddress
      });

      address.save()
        .then(address => {
          res.status(201).json({
            isSuccess: true,
            message: 'Addresses Added!'
          });
        })
        .catch(err => {
          res.status(500).json({
            isSuccess: false,
            message: 'Address not Added!'
          });
        });
    } else {
      res.status(400).json({
        isSuccess: false,
        message: 'ETH Address already exists!'
      });
    }
  } else {
    res.status(400).json({
      isSuccess: false,
      message: 'BTC Address already exists!'
    });
  }
});

router.get('/address/all', user.checAuth, function (req, res) {

  BtcAddress.find({})
    .exec(function (err, btcaddresses) {
      if (err) {
        console.log('Error while retrieving address');
      } else {
        res.status(200).json(btcaddresses);
      }
    });
});

////////////////////////////////Clients///////////////////////////////////////////
router.put('/client/:id', user.checAuth, function (req, res) {
  console.log('update a client');
  Client.findByIdAndUpdate(req.params.id, {
    $set: {
      // username: req.body.username,
      // email: req.body.email,
      // password: req.body.password,
      // phone: req.body.phone,
      // //DOB: req.body.DOB,
      // Address: req.body.Address,

    }
  },
    {
      new: true
    },
    function (err, updatedClient) {
      if (err) {
        res.send("Error updating client")
      } else {
        res.json(updatedClient);
      }
    });
})

router.delete('/client/:id', user.checAuth, function (req, res) {
  console.log('Deleting a client');
  Client.findByIdAndRemove(req.params.id, function (err, deletedClient) {
    if (err) {
      res.send("Error deleting client")
    } else {
      res.json(deletedClient);
    }
  })
})

router.get('/client/all', user.checAuth, function (req, res) {

  Client.find({})
    .exec(function (err, clients) {
      if (err) {
        console.log('Error while retrieving clients');
      } else {
        res.json(clients);
      }
    });
});

router.get('/client/:id', user.checAuth, function (req, res) {
  const userid = req.params.id;
  Client.findById(userid)
    .exec(function (err, client) {
      if (err) {
        // console.log('Error while retrieving video');
      } else {
        res.status(200).json(client);
      }
    });
});

module.exports = router;