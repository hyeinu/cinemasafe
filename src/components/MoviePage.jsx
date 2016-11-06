import React, { Component } from 'react';

export default class MoviePage extends Component {
  constructor(props){
    super(props);

    this.state = {
      movie: {
        title: 'Doctor Strange',
        year: '2016',
        poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM2ODA4MTM0M15BMl5BanBnXkFtZTgwNzE5OTYxMDI@._V1_SX300.jpg',
        warnings: [{ id: 1, name: 'violence' }, { id: 2, name: 'gore' }]
      }
    }
  }
  render(){
    let { title, year, poster, warnings } = this.state.movie;
    return(
      <div className="title">
        <div className="row">
          <div className="col-xs-4">
        <img src={poster} alt=""/>
        </div>
        <div className="col-xs-8">
        <h1>{title}</h1>
        <h1>{year}</h1>
        </div>
        </div>
      </div>
    )
  }
}
