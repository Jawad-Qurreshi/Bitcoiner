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
//const db newFunction()y";
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

  const allClients = await Client.find();
  console.log('allClients', allClients);

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
router.post('/Addtobuyers', async (req, res) => {

  const newbuyer = new ClientBuyer();

  newbuyer.Name = req.body.Name;
  newbuyer.Type_of_currency = req.body.Type_of_currency;
  newbuyer.Price = req.body.Price;
  newbuyer.Quantity = req.body.Quantity;
  newbuyer.Change = req.body.Change;
  newbuyer.Wallet = req.body.Wallet;

  await newbuyer.save(function (err, insertedBuyer) {
    if (err) {
      console.log('error while saving new buyer in api.js');
      // res.json(newClient);
    } else {
      res.json(insertedBuyer);
    }
  }
  );
});

router.get('/ShowAllBuyers', function (req, res) {
  //const allClients = await Client.find();
  ClientBuyer.find({})
    .exec(function (err, ClientBuyer) {
      if (err) {
        console.log('Error while retrieving All buyer in api.js');
      } else {
        res.json(ClientBuyer);
      }
    })
})

router.delete('/DeleteBuyer/:id', function (req, res) {
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
router.post('/Addtosellers', async (req, res) => {

  const newseller = new ClientSeller();

  newseller.Name = req.body.Name;
  newseller.Type_of_currency = req.body.Type_of_currency;
  newseller.Price = req.body.Price;
  newseller.Limit = req.body.Limit;
  newseller.Change = req.body.Change;
  newseller.Wallet = req.body.Wallet;

  await newseller.save(function (err, insertedSeller) {
    if (err) {
      console.log('error while saving Seller in api.js');
      // res.json(newClient);
    } else {
      res.json(insertedSeller);
    }
  }
  );
});
// router.post('/receivecoins', async (req, res) => {

//   const body = req.body;
//   //console.log('body', body);

//   try {
//     const result = await ClientRequest.create(body);
//     //console.log('result->', result);
//     res.send({ code: 200, data: result });

//   }
//   catch (ex) {
//     //console.log('ex->', ex);
//     res.send({ code: 500, error: ex });
//   }

// });

router.get('/ShowAllSellers', function (req, res) {
  //const allClients = await Client.find();
  ClientSeller.find({})
    .exec(function (err, ClientSeller) {
      if (err) {
        console.log('Error while retrieving All seller in api.js');
      } else {
        res.json(ClientSeller);
      }
    })
})

router.delete('/DeleteSeller/:id', function (req, res) {
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
    if (!result) // this means result is null
    {
      res.status(401).send({
        Error: 'This user doesnot exists. Please signup first'
      });
    }
    else {
      pass = result.Password;
      console.log(pass);
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

// router.put('/client/:id',function(req,res){
//   console.log('update a client');
//   Request.findByIdAndUpdate(req.params.id,{
//       $set: {username: req.body.username,
//          email: req.body.email,
//           password: req.body.password,
//           phone: req.body.phone,
//           //DOB: req.body.DOB,
//           Address: req.body.Address,
//       }
//   },
//   {
//       new: true
//   },
//   function(err, updatedRequest){
//       if(err){
//           res.send("Error updating client")
//       }else{
//           res.json(updatedRequest);
//       }
//   });
// })

/////////////////////////All requests////////////////////////////////////////
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


router.get('/request/all', function (req, res) {
  console.log('get request of all clients', req.body);
  //const allClients = await Client.find();
  Request.find({})
    .exec(function (err, requests) {
      if (err) {
        console.log('Error while retrieving All requests');
      } else {
        res.json(requests);
      }
    })
})

router.delete('/request/:id', function (req, res) {
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
})

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
        console.log('Request Already Approved!')
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
            message: 'Address Added!'
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
  // console.log('get request of all clients');
  //const allClients = await Client.find();
  BtcAddress.find({})
    .exec(function (err, btcaddresses) {
      if (err) {
        console.log('Error while retrieving address');
      } else {
        res.status(200).json(btcaddresses);
      }
    });
  // console.log('allClients', allClients);
  // res.send(allClients);
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


router.post('/sendmyrequest/:id', async (req, res) => {
  let userid = req.params.id;

  const nc = await Client.findById(userid);
  //console.log('this is client id',nc);
  const newreq = new ClientRequest();
  newreq.status = 'under process';
  newreq.request_type = req.body.request_type;
  newreq.crypto_type = req.body.crypto_type;
  newreq.amount = req.body.amount;
  newreq.date = new Date();
  newreq.client = req.params.id;

  await newreq.save(function (err, insertedRequest) {
    if (err) {
      console.log('error while saving my request');
      // res.json(newClient);
    } else {
      res.json(insertedRequest);
    }
  }
  );
  nc.ClientRequest.push(newreq._id);

  await nc.save();
  // nc.ClientRequest.push();
});

//dill main ajeeb si hulchal hai lagta hai k tou naraz hai
//hum pr bhi tou nazare kram kr yeh khan ka insaf hai

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
        res.json(myrequest);
        console.log(myrequest)
      }
    });
});




module.exports = router;
function newFunction() {
  return "mongodb+srv://mybitcoiner:123456789db@cluster0-8jh11.mongodb.net/test?retryWrites=true&w=majority";
}

