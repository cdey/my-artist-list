import React from 'react';
import SearchBar from './SearchBar.jsx';

export class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    )
  }
};

export default HomePage;