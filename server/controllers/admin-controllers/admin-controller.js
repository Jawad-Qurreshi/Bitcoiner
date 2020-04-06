const config = require('../../config');
const Admin = require('../../models/admin');
const bcrypt = require('bcrypt');
const BtcAddress = require('../../models/btc-address');
const jwt = require('jsonwebtoken');

module.exports.checkAdminAuth = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  Admin.findOne({ username })
    .then(admin => {
      if (admin.password === password) {
        const token = jwt.sign({ username: admin.username, role: config.role.ADMIN_ROLE }, config.secret.USER, { expiresIn: '1d', algorithm: 'HS256' });
        res.status(200).json({
          isAuthenticated: true,
          token: token
        });
      } else {
        res.status(401).json({
          isAuthenticated: false,
          message: 'INVALID_CREDS'
        });
      }
      // bcrypt.compare(password, admin.password, (err, isMatched) => {
      //   if (!err) {
      //     if (isMatched) {
      //       const token = jwt.sign({ username: admin.username, role: config.role.ADMIN_ROLE }, config.secret.ADMIN, { expiresIn: '1d', algorithm: 'HS256' });
      //       res.status(200).json({
      //         isAuthenticated: true,
      //         token: token
      //       })
      //     } else {
      //       res.status(401).json({
      //         isAuthenticated: false,
      //         message: 'CREDS_INVALID'
      //       });
      //     }
      //   } else {
      //     console.log(err);
      //     res.status(500).json({
      //       isAuthenticated: false,
      //       message: 'INTERNAL_ERROR'
      //     });
      //   }
      // });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        isAuthenticated: false,
        message: 'INTERNAL_ERROR'
      });
    });
};

module.exports.verifyUser = (req, res) => {
  const userId = req.params.userId
  Client.findById({ _id: userId }).exec()
    .then(async client => {
      client.isVerified = true;
      await client.save();
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
}

module.exports.createAdmin = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const admin = new Admin({
    username,
    password
  });

  admin.save()
    .then(admin => {
      res.status(201).json({
        isSuccess: true,
        admin: admin
      })
    })
    .catch(err => {
      res.status(500).json({
        isSuccess: false
      });
    });
}

module.exports.addAddress = async (req, res) => {
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
            message: 'USER_ADDED'
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

  BtcAddress.find({})
    .exec(function (err, btcaddresses) {
      if (err) {
        console.log('Error while retrieving address');
      } else {
        res.status(200).json(btcaddresses);
      }
    });
}