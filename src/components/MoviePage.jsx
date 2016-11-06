import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addWarning } from '../actions/UserActions';
import AddWarning from './AddWarning.jsx';
import WarningTags from './WarningTags.jsx';

class MoviePage extends Component {
  constructor(props){
    super(props);

    this.state = {
      movie: {
        title: 'Doctor Strange',
        year: '2016',
        poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM2ODA4MTM0M15BMl5BanBnXkFtZTgwNzE5OTYxMDI@._V1_SX300.jpg',
        warnings: [{ id: 1, name: 'violence' }, { id: 2, name: 'gore' }],
        runtime: '500 hours',
        genre: 'Documentary',
        plot: 'This is a story about a weird doctor',
        writer: 'Martin Van Buren',
        director: 'Hyein Yoo',
        actors: 'Richard Nixon, Charles Xavier, Monet St. Croix',
        language: 'Esperanto',
        country: 'France',
        awards: 'Best Sheep',
        rating: 'PG-13',
      }
    }
    this.addWarning = this.addWarning.bind(this);
  }
  addWarning(warn){
    let { _id } = this.props.movie;
    this.props.addWarning(_id, warn);
  }
  render(){
    let warnView;
    if(!this.props.movie){
      return (
        <div></div>
      )
    }
    let { Title, Year, Poster, warnings, Runtime, Genre, Plot, Writer, Director, Actors, Language, Country, Awards, imdbRating, imdbID } = this.props.movie;
    if(warnings){
      warnView = warnings.map((warning, index) => {
        return <WarningTags key={index} warning={warning} imdbID={imdbID} />
      })
    }
    return(
      <div style={{marginTop: "45px"}} className="row">
        <div className="col-xs-4">
          <img src={Poster} alt=""/>
        </div>
        <div className="col-xs-8">
          <h1>{Title} ({Year})</h1>
          <h3>Rating: {imdbRating} | {Genre}</h3>
          <div className="movieInfo">
            <p>{Plot}</p>
            <p><b>Writers:</b> {Writer}</p>
            <p><b>Runtime:</b> {Runtime}</p>
          </div>
          <AddWarning id={Year} addWarning={this.addWarning} />
          <div className="col-xs-6">
            {warnView}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    movie: state.movies.movie
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addWarning: (id, warn) => { dispatch(addWarning(id, warn)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage)
