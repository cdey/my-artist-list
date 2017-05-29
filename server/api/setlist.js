const Promise = require('bluebird');
const request = Promise.promisify(require('request'));

module.exports = {
  findConcerts: function(artistName) {
    let artistSearchQuery = artistName.searchQuery.split(' ').join('%20');
    return new Promise(function(resolve, reject) {
      let requestString = `http://api.setlist.fm/rest/0.1/search/setlists.json?artistName=${artistSearchQuery}`;
      request(requestString, function(error, response) {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          resolve(getConcertInfo(response.body));
        }
      });
    });
  }
}

let getConcertInfo = apiResult => {
  let concerts = JSON.parse(apiResult).setlists.setlist;
  return concerts.map(concert => {
    return {
      // tour_name: tour,
      event_date: eventDate,
      venue: venue.name,
      location: venue.city.name + ',' + venue.city.state
    }
  });
}