const Promise = require('bluebird');
const request = Promise.promisify(require('request'));

module.exports = {
  searchArtist: function(artistName) {
    let artistSearchQuery = artistName.searchQuery.split(' ').join('%20');
    return new Promise(function(resolve, reject) {
      let requestString = `http://api.spotify.com/v1/search?q=${artistSearchQuery}&type=artist&limit=1`;
      request(requestString, function(error, response) {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          resolve(getArtistInfo(response.body));
        }
      });
    }).then(function(artistInfo) {
      return new Promise(function(resolve, reject) {
        let requestString = `http://api.spotify.com/v1/artists/{artistInfo.id}/top-tracks?country=US`;
        request(requestString, function(error, response) {
          if (error) {
            console.log(error);
            reject(error);
          } else {
            artistInfo.tracks = getTrackInto(response.body);
            resolve(artistInfo);
          }
        });
      });
    });
  }
};

let getArtistInfo = apiResult => {
  let artist = JSON.parse(apiResult).artists;
  console.log(artist, "ARTIST");
  return {
    spotify_artist_id: artist.id,
    artist_name: artist.name,
    artist_url: artist.images[1].url
  };
};

let getTrackInfo = apiResult => {
  let tracks = JSON.parse(apiResult).tracks;
  return tracks.map(track => {
    return {
      track_name: track.name,
      album: track.album.name,
      track_url: track.images[2].url
    };
  });
};