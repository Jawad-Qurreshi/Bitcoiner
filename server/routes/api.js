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

//const db = "mongodb://localhost:27017/bitcoinerDB";
const db = "mongodb+srv://mybitcoiner:123456789db@cluster0-8jh11.mongodb.net/test?retryWrites=true&w=majority"
//const db newFunction()y";
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
      console.log('error while saving new buyer');
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
      console.log('error while saving Seller');
      // res.json(newClient);
    } else {
      res.json(insertedSeller);
    }
  }
  );
});

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
router.post('/Addtorequests', async (req, res) => {

  const newrequest = new Request();
  newrequest.Username = req.body.Username;
  newrequest.Email = req.body.Email;
  newrequest.Phone = req.body.Phone;
  newrequest.Address = req.body.Address;
  newrequest.Status = req.body.status;
  newrequest.TypeOfRequest = req.body.TypeOfRequest;
  newrequest.BTC = req.body.BTC;
  newrequest.ETC = req.body.ETC;
  newrequest.Dollars = req.body.Dollars;

  await newrequest.save(function (err, insertedRequest) {
    if (err) {
      console.log('error while adding to request');
      // res.json(newClient);
    } else {
      res.json(insertedRequest);
    }
  }
  );
});

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

router.put('/updaterequest/:id', function (req, res) {
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
    newClient.save()
    .then(client => {
      res.json(client)

    })
    .catch(err => {
      res.json(err);

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

router.post('/btcaddress', async (req, res) => {
  const body = req.body;
  const AddressBTC = body.AddressBTC;
  const AddressETH = body.AddressETH;
  const result1 = await BtcAddress.findOne({ "AddressBTC": AddressBTC });
  console.log('data in result1', result1);
  const result2 = await BtcAddress.findOne({ "AddressETH": AddressETH });
  console.log('data in result2 ' , result2);;
  if (!result1) // this means result is null
  {
    if (!result2) {
      var newAddress = new BtcAddress();
      //newAddress.id = req.body.id;
      newAddress.AddressBTC = body.AddressBTC;
      newAddress.AddressETH = body.AddressETH;
      newAddress.save(function (err, insertedAddress) {
        if (err) {
          console.log('error while saving eth address');
          // res.json(newClient);
        } else {
          res.json(insertedAddress);
        }
      });
    }
    else {
      console.log('AddressETH already exist');
    }
  }
  else {
    console.log('AddressBTC already exist');
  }
});

router.get('/getAddresses', function (req, res) {
  // console.log('get request of all clients');
  //const allClients = await Client.find();
  BtcAddress.find({})
    .exec(function (err, btcaddresses) {
      if (err) {
        console.log('Error while retrieving address');
      } else {
        res.json(btcaddresses);
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
  // console.log('get request of all clients');
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
       // console.log('Error while retrieving video');
      } else {
        res.json(client);
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
  nc.ClientRequest = newreq._id;
  await nc.save()
  // nc.ClientRequest.pus;
});

//dill main ajeeb si hulchal hai lagta hai k tou naraz hai
//hum pr bhi tou nazare kram kr yeh khan ka insaf hai

router.get('/getmyrequests/:id', async (req, res) => {
  let userid = req.params.id;
 // console.log('error while saving client'+ userid);
  ClientRequest.findOne({ 'client': userid })
   // console.log('error while getting my requests'+ result)
    //res.send ({result});
    .exec(function (err, myrequest) {
      if (err) {
        res.status(500).json({
          message: err.message
        });
      } else {
        res.json(myrequest);
      }
    });
});




module.exports = router;
function newFunction() {
  return "mongodb+srv://mybitcoiner:123456789db@cluster0-8jh11.mongodb.net/test?retryWrites=true&w=majority";
}

