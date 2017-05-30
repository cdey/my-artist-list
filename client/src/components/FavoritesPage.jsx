import React from 'react';
import { Link } from 'react-router';
import SearchBar from './SearchBar.jsx';

export class FavoritesPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>

      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    ...state,
    artists: state.props.artists
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage);