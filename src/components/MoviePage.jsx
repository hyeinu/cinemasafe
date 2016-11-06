import React, { Component } from 'react';

export default class MoviePage extends Component {
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
  }
  render(){
    let { title, year, poster, warnings, runtime, genre, plot, writer, director, actors, language, country, awards, rating} = this.state.movie;
    return(
      <div className="container">
        <div className="row">
          <div className="col-xs-4">
        <img src={poster} alt=""/>
        </div>
        <div className="col-xs-8">
        <h1>{title} ({year})</h1>
        <h3>{rating} | {genre}</h3>

        <div className="movieInfo">

        <p>
          {plot}
        </p>
        <b>Runtime:</b> {runtime} 

        </div>
        </div>
        </div>
      </div>
    )
  }
}
