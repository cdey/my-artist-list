const Spotify = require('./api/spotify.js');
const Setlist = require('./api/setlist.js');

var AppService = function(req) {
  let spotifySearch = Spotify.searchArtist(req.body);
  let setListSearch = Setlist.findConcerts(req.body);
  // let [ spotifySearch, setListSearch ] = Promise.all([ Spotify.searchArtist(req.body), Setlist.findConcerts(req.body)]);
  let apiWrapper = Promise.all([spotifySearch, setListSearch])
  .then(results => {
    results[0].concerts = results[1];
    return results[0];
  })
  .catch(error => {
    return error;
  });

  return apiWrapper;
};

module.exports = AppService;

