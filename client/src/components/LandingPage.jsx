import React from 'react';
import SearchBar from './SearchBar.jsx';

export class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="cover-container">
        <h1 className="cover-heading">My Artist List.</h1>
        <p className="lead">
          Find your favorite artists.
          View their tracks.
          View their upcoming events.
        </p>
        <SearchBar />
      </div>
    )
  }
};

export default LandingPage;