import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getMovie } from '../../actions/UserActions'

class SearchItem extends Component {
  constructor(props){
    super(props);
    
    this.getThisMovie = this.getThisMovie.bind(this);
  }
  getThisMovie(movie){
    let { Poster, Title, Type, Year, imdbID } = movie;
    this.props.getMovie(imdbID, Poster)
  }
  render(){
    let { movie } = this.props;
    let { Poster, Title, Type, Year, imdbID } = movie;
    return(
      <div className="col-sm-6 col-md-4">
        <div className="thumbnail">
        <img style={{height: '450px'}} src={Poster} alt={`${Title} Poster`}/>
        <div className="caption">
          <h4>{Title}</h4>
          <ul className="list-inline">
          <li><strong>{Year}</strong></li>
          <li className="pull-right glyphicon glyphicon-chevron-right" onClick={this.getThisMovie.bind(null, movie)}></li>
          </ul>
        </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    getMovie: (imdbId, poster) => dispatch(getMovie(imdbId, poster))
  }
}

export default connect(null, mapDispatchToProps)(SearchItem);
