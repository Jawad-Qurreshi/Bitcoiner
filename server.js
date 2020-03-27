const express = require('express');
//const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const path = require('path');
const cors = require('cors');

const port = 3004;

const api = require ('./server/routes/api');

app.use(express.static(path.join(__dirname,'dist')));

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/api',api);

app.get('*' , (req, res) => {
  res.send('Page doesnot exists');  
  //res.sendFile(path.join(__dirname,'dist/index.html'));
});


// app.get('*', (req, res) => {
//     res.send('Page doesnot exists');
//   });

  app.listen(port, function(){
    console.log('Express application running on localhost:' + port);
  });
