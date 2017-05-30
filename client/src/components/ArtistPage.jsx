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
      <div className='container-fluid'>

        <div className='col-md-6 col-md-offset-3'>
          <SearchBar />
        </div>

        <p></p>

        <div className='container'>
          <div className ="row">
            <div className='col-md-6 col-md-offset-3'>
              <div className ="thumbnail">
                <img src={ this.props.artistInfo.artist_url } alt="..." className="img-rounded" />
                <div className ="caption">
                  <h3>{ this.props.artistInfo['artist_name'] }</h3>
                  <button onClick={ this.props.addToFavorites }>
                    Favorite
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className="row">
            <div className="col-md-6">
              <TrackList
                tracks={ this.props.artistInfo.tracks }
              />
            </div>
            <div className="col-md-6">
              <ConcertList
                concerts={ this.props.artistInfo.concerts }
              />
            </div>
          </div>
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