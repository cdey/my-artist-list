const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const AppService = require('./AppService.js');

const app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.post('/search', function(req, res) {
  AppService(req)
    .then(data => {
      console.log(data, "DATAAA");
      res.json(data);
    })
    .catch(error => {
      res.send(error);
    });
});

var server = app.listen(port, function() {
  console.log(`Magical unicorns will arrive on port ${port}!`);
});