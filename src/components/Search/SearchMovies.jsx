import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchItem from './SearchItem.jsx'
import Header from '../Header.jsx'

class SearchMovies extends Component {
  constructor(props){
    super(props)
  }
  render(){
    let { searchMovies } = this.props;
    let searchList = <h3>No Results... Search Again</h3>;
    if(searchMovies){
      searchList = searchMovies.map((movie, index) => {
        return <SearchItem movie={movie} key={index} />
      })
    }
    return(
      <div>
        <Header />
        {searchList}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    searchMovies: state.movies.searchMovies
  }
}

const mapDispatchToProps = (dispatch) => {
  return { }
}

export default connect(mapStateToProps, null)(SearchMovies)
