const initialState = {
  searchQuery: null,
  artistInfo: null,
  searchingArtist: false,
  searchArtistError: null
};

const artist = (state = initialState, action) => {
  switch(action.type) {
    // ------------ SEARCH ------------
    case 'SEARCHING_ARTIST':
      return {
        ...state,
        searchQuery: action.searchQuery,
        searchingArtist: true
      }
    case 'SEARCHED_ARTIST':
      return {
        ...state,
        artistInfo: action.results
      }
    case 'SEARCH_ARTIST_ERROR':
      return {
        ...state,
        searchArtistError: action.searchError,
        searchingArtist: false
      }
    default:
      return state;
  }
};

export default artist;