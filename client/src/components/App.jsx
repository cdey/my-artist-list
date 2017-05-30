import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import { connect } from 'react-redux';
import LandingPage from './LandingPage.jsx';
import FavoritesPage from './FavoritesPage.jsx';
import ArtistPage from './ArtistPage.jsx';

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.sendToHome = this.sendToHome.bind(this);
    this.sendToArtist = this.sendToArtist.bind(this);
    this.sendToFavorites = this.sendToFavorites.bind(this);
  }

  sendToHome() {
    hashHistory.push('/');
  }

  sendToArtist(artistName){
    if (artistName) {
      hashHistory.push('/:artistName');
      return;
    } else {
      hashHistory.push('/');
    }
  }

  sendToFavorites() {
    hashHistory.push('/favorites');
  }

  render() {
    return (
      <div>
        <Router history={ hashHistory }>
          <Route
            path='/'
            component={ LandingPage }
            sendToArtist={ this.sendToArtist }
          />
          <Route
            path='/:artistName'
            component={ ArtistPage }
            sendToFavorites={ this.sendToFavorites }
          />
          <Route
            path='/favorites'
            component={ FavoritesPage }
            sendToArtist= { this.sendToArtist }
          />
        </Router>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {

  }
};

export default connect(mapStateToProps)(App);