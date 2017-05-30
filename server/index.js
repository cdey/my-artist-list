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

var mostRecentSearch = null;

app.post('/search', function(req, res) {
  AppService(req)
    .then(data => {
      mostRecentSearch = data;
      res.json(data);
    })
    .catch(error => {
      res.send(error);
    });
});

app.get('/favoriteslist', function(req, res) {
  Artists.fetchFavorites()
    .then(results => {
      res.send(results);
    })
    .catch(error => {
      res.send(error);
    });
});


app.post('/favorite', function(req, res) {
  Artists.findAndUpdate({ artist_name: req.body }, mostRecentSearch, function(results, error) {
    if (results) {
      res.JSON(results);
    } else {
      res.send(error);
    }
  });
});

var server = app.listen(port, function() {
  console.log(`Magical unicorns will arrive on port ${port}!`);
});