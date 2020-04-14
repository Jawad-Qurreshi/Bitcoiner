const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const cors = require('cors');

const port = 4400;

const api = require('./server/routes/api');


app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/api', api);

app.get('*', (req, res) => {
  res.status(404).send({
    isSuccess: false,
    message: 'NOT_FOUND'
  });
});


app.listen(port, function () {
  console.log('Express application running on localhost:' + port);
});
