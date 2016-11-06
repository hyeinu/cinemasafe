import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getAll, searchMovies } from '../actions/UserActions'

class MovieView extends Component {
  constructor(props){
    super(props);

    this.state = {
      movies: props.movies
    }
  }
  componentDidMount(){
    let query = 's=strange&y=&'
    this.props.searchMovies(query)
  }
  render(){
    return(
      <h1>Movies</h1>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies.allMovies
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAll: () => { dispatch(getAll()) },
    searchMovies: (query) => { dispatch(searchMovies(query)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieView)
