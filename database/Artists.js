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

// artistsSchema.statics.add = function(result) {
//   let newArtists = new Artists(result);

//   return new Promise((resolve, reject) => {
//     newArtists.save()
//       .then(function() {
//         resolve();
//       }).catch(function(error) {
//         reject(error);
//       })
//   });
// };

artistsSchema.statics.findAndUpdate = function(searchQuery, update, callback) {
  let options = {
    new: true,
    upsert: true
  }
  this.findOneAndUpdate(query, update, options, function(error, result) {
    if (error) {
      console.error(error);
    } else {
      callback(result);
    }
  });
}

var Artists = mongoose.model('artists', artistsSchema);

module.exports = Artists;
