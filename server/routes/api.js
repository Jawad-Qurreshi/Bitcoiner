//npm install node-binance-api --save

const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Client = require('../models/client');
const Request = require('../models/requests');
const ClientSeller = require('../models/clientSeller');
const ClientBuyer = require('../models/clientBuyer');
const ClientRequest = require('../models/clientrequest_model');
const EthAddress = require('../models/EthAddress');
const BtcAddress = require('../models/BtcAddress');

const db = "mongodb://localhost:27017/bitcoinerDB";
mongoose.Promise = global.Promise;

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
router.get('/ShowAllBuyers', function (req, res) {
  //const allClients = await Client.find();
  ClientBuyer.find({})
    .exec(function (err, ClientBuyer) {
      if (err) {
        console.log('Error while retrieving All buyer');
      } else {
        res.json(ClientBuyer);
      }
    })
})

router.delete('/DeleteBuyer/:id', function (req, res) {
  console.log('Deleting a buyer');
  ClientBuyer.findByIdAndRemove(req.params.id, function (err, deletedBuyer) {
    if (err) {
      res.send("Error deleting client")
    } else {
      res.json(deletedBuyer);
    }
  })
})

////////////////////////////Sellers//////////////////////////////////

router.get('/ShowAllSellers', function (req, res) {
  //const allClients = await Client.find();
  ClientSeller.find({})
    .exec(function (err, ClientSeller) {
      if (err) {
        console.log('Error while retrieving All seller');
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

router.get('/ShowAllRequest', function (req, res) {
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

router.delete('/DeleteRequest/:id', function (req, res) {
  console.log('Deleting a client');
  Request.findByIdAndRemove(req.params.id, function (err, deletedRequest) {
    if (err) {
      res.send("Error deleting client")
    } else {
      res.json(deletedRequest);
    }
  })
})

router.put('/request/:id', function (req, res) {
  console.log('update a client');
  Request.findByIdAndUpdate(req.params.id, {
    $set: {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone,
      //DOB: req.body.DOB,
      Address: req.body.Address,
    }
  },
    {
      new: true
    },
    function (err, updatedRequest) {
      if (err) {
        res.send("Error updating client")
      } else {
        res.json(updatedRequest);
      }
    });
})

///////////////////////////login   Signup////////////////////////////////////

router.post('/signup', async (req, res) => {
  const body = req.body;
  console.log('req.body', body);
  console.log('post a video');

  const Email = body.Email;
  const result = await Client.findOne({ "Email": Email });
  if (!result) // this means result is null
  {
    var newClient = new Client();

    newClient.Username = req.body.Username;
    newClient.Email = req.body.Email;
    newClient.Password = req.body.Password;
    newClient.Phone = req.body.Phone;
    // newClient.DOB= req.body.DOB;
    newClient.Address = req.body.Address;

    // const client = new Client(body);
    //const result = await client.save();
    //console.log(result);
    //res.json(newClient);
    newClient.save(function (err, insertedClient) {
      if (err) {
        console.log('error while saving client');
        // res.json(newClient);
      } else {
        res.json(insertedClient);
      }
    });
  }
  else {
    console.log('client already exist');
  }
});

router.post('/login', async (req, res) => {
  const body = req.body;
  var id;
  console.log('req.body', body);
  const Email = body.Email;
  const result = await Client.findOne({ "Email": Email });
  if (!result) // this means result is null
  {
    res.status(401).send({
      Error: 'This client doesnot exists. Please signup first'
    });
  }
  else {
    // email did exist
    id = result._id;
    // so lets match password
    if (body.Password === result.Password) {
      // great, allow this user access
      console.log('match');
      res.json(id);
    }
    else {
      console.log('password doesnot match');
      res.status(401).send({ message: 'Wrong email or Password' });
    }
  }
});

router.post('/ethaddress', async (req, res) =>{
  const body = req.body;
  const Address = body.address;
  const result = await EthAddress.findOne({ "address": Address });
  if (!result) // this means result is null
  {
    var newAddress = new EthAddress();
    //newAddress.id = req.body.id;
    newAddress.address = req.body.address;
    newAddress.save(function (err, insertedAddress) {
      if (err) {
        console.log('error while saving client');
        // res.json(newClient);
      } else {
        res.json(insertedAddress);
      }
    });
  }
  else {
    console.log('Address already exist');
  }
});

router.post('/btcaddress', async (req, res) => {
  const body = req.body;
  const address = body.address;
  const result = await BtcAddress.findOne({ "address": address });
  if (!result) // this means result is null
  {
    var newAddress = new BtcAddress();
    //newAddress.id = req.body.id;
    newAddress.address = req.body.address;
    newAddress.save(function (err, insertedAddress) {
      if (err) {
        console.log('error while saving client');
        // res.json(newClient);
      } else {
        res.json(insertedAddress);
      }
    });
  }
  else {
    console.log('Address already exist');
  }
});

////////////////////////////////Clients///////////////////////////////////////////
router.put('/client/:id', function (req, res) {
  console.log('update a client');
  Client.findByIdAndUpdate(req.params.id, {
    $set: {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone,
      //DOB: req.body.DOB,
      Address: req.body.Address,
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
  console.log('get request of all clients');
  //const allClients = await Client.find();
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

router.get('/client/:id', function (req, res) {
  const userid = req.params.id;
  Client.findById(userid)
    .exec(function (err, client) {
      if (err) {
        console.log('Error while retrieving video');
      } else {
        res.json(client);
      }
    });
});

router.get('/singleclient/:id', function (req, res) {
  console.log('get request of single clients');
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


router.post('/myrequests/:id', async (req, res) => {
  let userid = req.params.id;

  const nc = await Client.findById(userid);
  //console.log('this is client id',nc);
  const newreq = new ClientRequest();
  newreq.status = req.body.status;
  newreq.request_type = req.body.request_type;
  newreq.client = req.params.id;

  await newreq.save(function (err, insertedRequest) {
    if (err) {
      console.log('error while saving client');
      // res.json(newClient);
    } else {
      res.json(insertedRequest);
    }
  }
  );
        nc.ClientRequest = newreq._id;
        await nc.save()
        // nc.ClientRequest.pus;
});

//dill main ajeeb si hulchal hai lagta hai k tou naraz hai
//hum pr bhi tou nazare kram kr yeh khan ka insaf hai

router.get('/myrequests/:id',async (req, res) => {
  let userid = req.params.id;
  //console.log('error while saving client'+ userid);
  ClientRequest.findOne({'client': userid})
  //console.log('error while saving client'+ result);
    //res.send ({result});
    .exec((err, request) => {
      if (err) {
        res.status(500).json({
          message: err.message
        });
      } else {
        res.status(200).json({
          request: request
        });
      }
    });
});




module.exports = router;
