const express = require('express');
const dotenv = require('dotenv').config();
const path = require('path');
const bodyParser = require('body-parser');
const Artists = require('../database/Artists.js');
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

app.get('/favoriteslist', function(req, res) {
  //db query
});

app.post('/favorite', function(req, res) {
  // Artists.findAndUpdate(searchQuery, )
});

var server = app.listen(port, function() {
  console.log(`Magical unicorns will arrive on port ${port}!`);
});