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
    e.preventDefault();
    this.props.submitSearch(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  }

  render() {
    return (
      <div className='row'>
        <div className="input-group">
          <input
            type="text" className="form-control" placeholder="Search for your favorite artist..."
            value={ this.state.searchQuery }
            onChange={ this.handleSearchChange }>
          </input>
          <span className="input-group-btn">
            <button
              className="btn btn-default"
              name="submit"
              onClick={ this.handleSubmit }
              type="button"
            >Go!
            </button>
          </span>
        </div>
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