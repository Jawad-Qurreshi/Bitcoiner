//npm install node-binance-api --save

const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Client = require('../models/client');
const Request = require('../models/requests');
const ClientSeller = require('../models/clientSeller');
const ClientBuyer = require('../models/clientBuyer');
const ClientRequest = require('../models/clientrequest_model');
const BtcAddress = require('../models/btcaddress');
const nodemailer = require('nodemailer')

//const db = "mongodb://localhost:27017/bitcoinerDB";
const db = "mongodb+srv://mybitcoiner:123456789db@cluster0-8jh11.mongodb.net/test?retryWrites=true&w=majority"

mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);

mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true }, function (err) {
  if (err) {
    console.error("Error ! " + err);
  }
});

router.get('/', function (req, res) {
  res.send('api is working')
});

router.get('/allclients', async (req, res) => {

  const allClients = await Client.find({}).exec();
});

///////////////////////////////////BIT API/////////////////////////////////////
const binance = require('node-binance-api')().options({
  APIKEY: 'https://api.binance.com/api/v3/ticker/price',
  //APISECRET: '<secret>',
  useServerTime: true // If you get timestamp errors, synchronize to server time at startup
});

// router.get('/bitapi', function (req, res) {
//   console.log('get request of all BTC and ETH API');
//     binance.prices('BTCUSDT', (error, ticker) => {
//       if(error){
//         console.log('Error while retrieving eth api');
//       }else{
//         console.log("Price of BTC: $", ticker.BTCUSDT);
//         console.log("Price of BTC: $", ticker.ETHUSDT);
//         res.json(ticker);
//       }
//   });
// });
router.get('/bitapi', function (req, res) {
  //console.log('get request of current bit');
  binance.prices('BTCUSDT', (error, ticker) => {
    //console.log("Price of BTC: $", ticker.BTCUSDT);
    res.send({
      ticker
    });
  });
});

router.get('/ethapi', function (req, res) {
  //console.log('get request of current eth');
  binance.prices('ETHUSDT', (error, ticker) => {
    //console.log("Price of ETH: $", ticker.ETHUSDT);
    res.json({
      ticker
    });
  });
});

////////////////////////////Buyers////////////////////////////////
router.post('/buyer/add', async (req, res) => {
  const body = req.body;

  const newbuyer = new ClientBuyer({
    name: body.name,
    cryptoType: body.cryptoType,
    price: body.price,
    quantity: body.quantity,
    walletAddress: body.walletAddress,
    description: body.description,
    clientId: body.clientId
  });

  newbuyer.save()
    .then(result => {
      res.status(201).json({
        message: 'Request Posted!',
        isSuccess: true
      });
    })
    .catch(err => {
      res.status(500).json({
        message: err.message,
        isSuccess: false
      });
    });

});

router.get('/buyer/all', function (req, res) {

  ClientBuyer.find({})
    .exec()
    .then(result => {
      res.status(200).json(result); //Dislaimer: Don't Change
    })
    .catch(err => {
      res.status(500).json({
        message: err.message,
        isSuccess: false
      })
    });
})

router.delete('/buyer/:id', function (req, res) {
  console.log('Deleting a buyer');
  ClientBuyer.findByIdAndRemove(req.params.id, function (err, deletedBuyer) {
    if (err) {
      res.send("Error deleting buyer")
    } else {
      res.json(deletedBuyer);
    }
  })
});

////////////////////////////Sellers//////////////////////////////////
router.post('/seller/add', async (req, res) => {
  const body = req.body;

  const newseller = new ClientSeller({
    name: body.name,
    cryptoType: body.cryptoType,
    price: body.price,
    walletAddress: body.walletAddress,
    clientId: body.clientId,
    message: body.message,
    description: body.description
  });
  newseller.save()
    .then(result => {
      res.status(201).json({
        message: 'Sell Posted!',
        isSuccess: true
      });
    })
    .catch(err => {
      res.status(500).json({
        message: err.message,
        isSuccess: false
      });
    });
});


router.get('/seller/all', function (req, res) {
  ClientSeller.find({})
    .exec(function (err, ClientSeller) {
      if (err) {
        console.log('Error while retrieving All seller in api.js');
      } else {
        res.json(ClientSeller);
      }
    });
})

router.delete('/seller/:id', function (req, res) {
  console.log('Deleting a client');
  ClientSeller.findByIdAndRemove(req.params.id, function (err, deletedSeller) {
    if (err) {
      res.send("Error deleting client")
    } else {
      res.json(deletedSeller);
    }
  })
})

router.post('/sendmail', async (req, res) => {
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
router.put('/request/approve/:id', async function (req, res) {
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
router.get('/request/approved/all', (req, res) => {

  Request.find({ status: 'Approved' })
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
router.get('/request/pending/all', (req, res) => {

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
router.post('/request/add', (req, res) => {
  const body = req.body;
  //console.log(body)

  const request = new Request({
    username: body.username,
    email: body.email,
    to: body.to,
    from: body.from,
    requestType: body.requestType,
    cryptoType: body.cryptoType,
    amount: body.amount,
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
            client.btc -= body.amount;
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
            client.eth -= body.amount;
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
router.delete('/request/:id', (req, res) => {
  console.log('Deleting a client request');
  Request.findByIdAndRemove(req.params.id, function (err, deletedRequest) {
    if (err) {
      res.status(500).send("Error deleting client request")
    } else {
      res.status(200).json({
        isSuccess: true
      });
    }
  })
});
router.get('/request/approved/:clientId', (req, res) => {
  const clientId = req.params.clientId;
  Client.find({ clientId: clientId, status: 'Approved' })
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
router.get('/request/pending/:clientId', (req, res) => {
  const clientId = req.params.clientId;

  Client.find({ clientId: clientId, status: 'Under Process' })
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
  const result = await Client.findOne({ email: email });
  if (!result) // this means result is null
  {
    let newClient = new Client({
      username: body.username,
      email: body.email,
      password: body.password,
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
          let val;
          if (length === 1) {
            val = 0;
          } else {
            val = Math.floor(Math.random() * length + 1) + 1;
          }
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

router.post('/login', async (req, res) => {
  const body = req.body;
  let id;
  const email = body.email;
  const result = await Client.findOne({ email: email });
  if (!result) {
    res.status(401).send({
      Error: 'This client does not exists. Please signup first'
    });
  } else {
    id = result._id;
    if (body.password === result.password) {

      res.status(200).json(id);
      console.log(body.password)
    } else {
      res.status(401).send({
        message: 'Wrong email or Password',
        isSuccess: true
      });
    }
  }
});

router.post('/address/add', async (req, res) => {
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

router.get('/address/all', function (req, res) {

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
router.put('/client/:id', function (req, res) {
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

router.delete('/client/:id', function (req, res) {
  console.log('Deleting a client');
  Client.findByIdAndRemove(req.params.id, function (err, deletedClient) {
    if (err) {
      res.send("Error deleting client")
    } else {
      res.json(deletedClient);
    }
  })
})

router.get('/clients', function (req, res) {

  Client.find({})
    .exec(function (err, clients) {
      if (err) {
        console.log('Error while retrieving clients');
      } else {
        res.json(clients);
      }
    });
});

router.get('/client/:id', function (req, res) {
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

router.get('/singleclient/:id', function (req, res) {
  // console.log('get request of single clients');
  Client.find({})
    .exec(function (err, clients) {
      if (err) {
        console.log('Error while retrieving clients');
      } else {
        res.json(clients);
      }
    });
  // console.log('allClients', allClients);
  // res.send(allClients);
});


///////////////////////////////////////////////////////////////////////////

router.get('/request/:id', async (req, res) => {
  let userid = req.params.id;

  Request.find({ clientId: userid }) //Hamad
    // console.log('error while getting my requests'+ result)
    //res.send ({result});
    .exec(function (err, myrequest) {
      if (err) {
        res.status(500).json({
          message: err.message
        });
      } else {
        res.status(200).json(myrequest);
      }
    });
});

module.exports = router;