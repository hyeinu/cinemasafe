import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getAll } from '../actions/UserActions'

class MovieView extends Component {
  constructor(props){
    super(props);

    this.state = {
      movies: props.movies
    }
  }
  componentDidMount(){
    this.props.getAll()
  }
  render(){
    console.log('this.props:', this.props)
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
    getAll: () => { dispatch(getAll()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieView)
