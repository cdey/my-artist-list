import React from 'react';
import SearchBar from './SearchBar.jsx';

export class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SearchBar
          onClick={ this.props.route.sendToArtist }
        />
      </div>
    )
  }
};

export default HomePage;