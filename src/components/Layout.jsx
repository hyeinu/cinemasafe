import React, { Component } from 'react';

import MoviePage from './MoviePage.jsx'

export default class Layout extends Component{
  render(){
    return(
      <div className="container">
        <h1>Welcome to React</h1>
        <MoviePage />
      </div>
    )
  }
}
