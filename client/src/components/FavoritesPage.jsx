import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import SearchBar from './SearchBar.jsx';

export class FavoritesPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ol>
        <h1>My Artist List</h1>
        { props.artists.map(artist => {
          return <li>artist.artistName</li>
        }) }
      </ol>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    ...state,
    artists: state.artists
  }
};

export default connect(mapStateToProps)(FavoritesPage);