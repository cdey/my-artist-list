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
      tour_name: concert.tour,
      event_date: concert.eventDate,
      venue: concert.venue.name,
      location: concert.venue.city.name + ',' + concert.venue.city.state
    }
  });
}