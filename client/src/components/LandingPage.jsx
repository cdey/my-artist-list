import React from 'react';
import SearchBar from './SearchBar.jsx';

export class LandingPage extends React.Component {
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

export default LandingPage;