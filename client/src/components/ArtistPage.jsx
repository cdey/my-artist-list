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
    return (
      <div>
        <SearchBar />
        <div>
        { this.state.props.artistInfo.artist_name }
        </div>
        <div>
        { this.state.props.artistInfo.artist_url }
        </div>
        <button onClick={ this.props.addToFavorites }>
          Favorite
        </button>
        <TrackList
          artistInfo={ this.props.artistInfo.tracks }
        />
        <ConcertList
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
    artistInfo: state.props.artistInfo
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToFavorites: (artistInfo) => { dispatch(favoriteArtist(this.state.props.artistInfo)) }
  }
};

export default connect(mapStateToProps)(ArtistPage);