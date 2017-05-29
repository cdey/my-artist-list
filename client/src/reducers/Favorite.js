const initialState = {
  artists: [],
  favoritingArtist: false,
  favoriteArtistError: null,
  fetchingFavorites: false,
  fetchArtistError: null
};

function favorites(state = initialState, action) {
  switch(action.type) {
    // ------------ FAVORITE ------------
    case 'FAVORITING_ARTIST':
      return {
        ...state,
        favoritingArtist: true
      }
    case 'ARTIST_FAVORITED':
      return {
        ...initialState
      }
    case 'FAVORITE_ARTIST_ERROR':
      return {
        ...state,
        favoriteArtistError: action.favoriteError,
        favoritingArtist: false
      }

    // ------------ FETCH ------------
    case 'FETCHING_FAVORITES':
      return {
        ...state,
        fetchingFavorites: true
      }
    case 'FAVORITES_FETCHED':
      return {
        ...state,
        artists: action.artists
      }
    case 'FETCH_ARTIST_ERROR':
      return {
        ...state,
        fetchArtistError: action.fetchError,
        fetchingFavorites: false
      }
    default:
      return state;
  }
};

export default favorites;