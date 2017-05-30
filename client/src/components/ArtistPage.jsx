import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import SearchBar from './SearchBar.jsx';
import TrackList from './TrackList.jsx';

export class ArtistPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <SearchBar />
        <div>
        { this.state.props.tracksInfo.artist_name }
        </div>
        <div>
        { this.state.props.tracksInfo.artist_url }
        </div>
        <TrackList
          trackInfo={ this.props.tracksInfo.tracks }
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
    tracksInfo: state.props.trackInfo
  }
};

export default connect(mapStateToProps)(ArtistPage);