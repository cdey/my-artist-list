import axios from 'axios';

// ------------ SEARCH ------------
function searchingArtist(searchQuery) {
  return {
    type: 'SEARCHING_ARTIST',
    searchQuery
  }
};

function searchedArtist(results) {
  return {
    type: 'SEARCHED_ARTIST',
    results
  }
};

function searchArtistError(searchError) {
  return {
    type: 'SEARCH_ARTIST_ERROR',
    searchError
  }
};

export function searchArtist(searchQuery) {
  return (dispatch) => {
    dispatch(searchingArtist(searchQuery));

    axios.post('/search', { searchQuery })
    .then(results => {
      const route = results.data['artist_name'].split(' ').join('');
      dispatch(searchedArtist(results.data));
      if (typeof route === 'string') {
        window.location = '/#' + route
      }
    })
    .catch(error => {
      dispatch(searchArtistError(error));
    });
  }
};