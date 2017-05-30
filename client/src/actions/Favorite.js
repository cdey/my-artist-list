import axios from 'axios';

// ------------ FAVORITE ------------
function favoritingArtist() {
  return {
    type: 'FAVORITING_ARTIST'
  }
};

function favoritedArtist() {
  return {
    type: 'FAVORITED_ARTIST'
  }
};

function favoriteArtistError(favoriteError) {
  return {
    type: 'FAVORITE_ARTIST_ERROR',
    favoriteError
  }
};

export function favoriteArtist(artistName) {
  return (dispatch) => {
    dispatch(favoritingArtist());

    axios.post('/favorites', { artistName })
    .then(results => {
      dispatch(favoritedArtist());
    })
    .catch(error => {
      dispatch(favoriteArtistError(error));
    });
  }
};

// ------------ FETCH FAVORITES ------------
function fetchingFavorites() {
  return {
    type: 'FETCHING_FAVORITES'
  }
}

function favoritesFetched(results) {
  return {
    type: 'FAVORITES_FETCHED',
    artists: results
  }
}

function fetchFavoritesError(fetchError) {
  return {
    type: 'FETCH_FAVORITES_ERROR',
    fetchFavoritesError: fetchError
  }
}

export function fetchFavorites() {
  return (dispatch) => {
    dispatch(fetchingFavorites());

    axios.get('/favorites')
    .then(results => {
      dispatch(favoritesFetched(results.data));
      window.location = '/#/favorites';
    })
    .catch(error => {
      dispatch(fetchFavoritesError(error));
    });
  }
}