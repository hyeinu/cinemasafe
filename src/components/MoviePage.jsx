import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addWarning } from '../actions/UserActions';
import RouteActions  from '../actions/RouteActions';

import AddWarning from './AddWarning.jsx';
import WarningTags from './WarningTags.jsx';

class MoviePage extends Component {
  constructor(props){
    super(props);

    this.addWarning = this.addWarning.bind(this);
  }
  addWarning(warn){
    let { _id } = this.props.movie;
    this.props.addWarning(_id, warn);
  }
  route(path){
    RouteActions.route(`/${path}`);
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
      <div style={{marginTop: "15px"}}>
      <i style={{color: "#14265C", fontSize: "30px" }} className="glyphicon glyphicon-fast-backward" onClick={this.route.bind(null, '')}></i>
      <i style={{color: "#FB3F39", fontSize: "30px" }} className="glyphicon glyphicon-backward" onClick={this.route.bind(null, 'results')}></i>
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
