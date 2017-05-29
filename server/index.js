const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

var server = app.listen(port, function() {
  console.log(`Magical unicorns will arrive on port ${port}!`);
});