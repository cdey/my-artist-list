var mongoose = require('mongoose');
var db = require('./config.js');

var artistsSchema = mongoose.Schema({
  artist_id: Number,
  artist_spotify_id: String,
  artist_name: String,
  artist_url: String,
  tracks: Array,
  concerts: Array
});

