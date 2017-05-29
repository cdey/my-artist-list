import React from 'react';
import { connect } from 'react-redux';
import { searchArtist } from '../actions/Artist.js';

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: ''
    }

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSearchChange(e) {
    this.setState({ searchQuery: e.target.value });
  }

  handleSubmit(e) {
    this.props.submitSearch(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  }

  render() {
    return (
      <div>
        <input
          value={ this.state.searchQuery }
          onChange={ this.handleSearchChange }>
        </input>
        <button
          name="submit"
          onClick={ this.handleSubmit }>
        Search
        </button>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    ...state
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitSearch: (searchQuery) => { dispatch(searchArtist(searchQuery)) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);