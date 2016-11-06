import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addCount, minusCount } from '../actions/UserActions';

class WarningTags extends Component {
  constructor(props){
    super(props);

    this.addCounter = this.addCounter.bind(this);
    this.minusCounter = this.minusCounter.bind(this);
  }
  addCounter(id, imdbID){
    this.props.addCount(id, imdbID);
  }
  minusCounter(id, imdbID){
    this.props.minusCount(id, imdbID);
  }
  render(){
    let { warning, imdbID } = this.props;
    let { _id, name, counter } = warning;
    return(
      <ul className="list-inline">
        <li><h5> {name.toUpperCase()} | {counter} </h5></li>
        <li><i className="glyphicon glyphicon-chevron-up" onClick={this.addCounter.bind(null, _id, imdbID)}></i></li>
        <li><i className="glyphicon glyphicon-chevron-down" onClick={this.minusCounter.bind(null, _id, imdbID)}></i></li>
      </ul>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCount: (id, imdbID) => { dispatch(addCount(id, imdbID)) },
    minusCount: (id, imdbID) => { dispatch(minusCount(id, imdbID)) }
  }
}

export default connect(null, mapDispatchToProps)(WarningTags)
