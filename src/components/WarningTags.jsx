import React, { Component } from 'react';

const style = {
  display: "inline-block"
}

export default class WarningTags extends Component {
  addCounter(){
    console.log("here");
  }
  minusCounter(){
    console.log("minus");
  }
  render(){
    return(
      <ul className="list-inline">
        <li><h5> Gore | 5 </h5></li>
        <li><i className="glyphicon glyphicon-chevron-up" onClick={this.addCounter}></i></li>
        <li><i className="glyphicon glyphicon-chevron-down" onClick={this.minusCounter}></i></li>
      </ul>
    )
  }
}
