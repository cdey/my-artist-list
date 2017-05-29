const Spotify = require('./api/spotify.js');
const Setlist = require('./api/setlist.js');

var AppService = function(req) {
  let spotifySearch = Spotify.searchArtist(req.body);
  let setListSearch = Setlist.findConcerts(req.body);
  let apis = Promise.all([spotifySearch, setListSearch]);

  return apis;
};

module.exports = AppService;

