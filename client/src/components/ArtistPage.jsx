import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import SearchBar from './SearchBar.jsx';
import TrackList from './TrackList.jsx';
import ConcertList from './ConcertList.jsx';

export class ArtistPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props, "ARTIST INFO")
    return (
      <div>
        <div>
        { this.props.artistInfo['artist_name'] }
        </div>
        <div>
        <img src={ this.props.artistInfo.artist_url } />
        </div>
        <button onClick={ this.props.addToFavorites }>
          Favorite
        </button>
        <TrackList
          tracks={ this.props.artistInfo.tracks }
        />
        <ConcertList
          concerts={ this.props.artistInfo.concerts }
        />
        <div>
          <Link to='/favorites'>Favorites</Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state, "STATE");
  return {
    ...state,
    artistInfo: state.artist.artistInfo
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToFavorites: () => { dispatch(favoriteArtist(this.state.props.artistInfo)) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtistPage);