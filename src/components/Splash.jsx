import React, { Component } from 'react';
import { connect } from 'react-redux';

import { searchMovies } from '../actions/UserActions'

class Splash extends Component{
  constructor(props){
    super(props);
    this.state = {
      title: ''
    }
    this.onChange = this.onChange.bind(this);
    this.searchTerm = this.searchTerm.bind(this);
    this.keyPress = this.keyPress.bind(this);
  }
  onChange(e){
    this.setState({
      title: e.target.value
    })
  }
  searchTerm(){
    let query = 's=' + this.state.title + '&';
    this.props.searchMovies(query);
    this.setState({
      title: ''
    })
  }
  keyPress(target){
    if(target.charCode === 13){
      this.searchTerm()
    }
  }
  render(){
    return(
      <div>
        {/* Main search bar */}
        <h1 className="text-center splashText">Cinema Safe</h1>
        <div style={{marginTop: '10vh'}} className="input-group" onKeyPress={this.keyPress}>
          <input type="text" onChange={this.onChange} value={this.state.title} className="form-control" placeholder="Type the name of a Movie or Show" />
          <span type="button" className=" input-group-addon" alt="Search" onClick={this.searchTerm}>
          <i className="glyphicon glyphicon-search"></i>
          </span>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchMovies: (query) => { dispatch(searchMovies(query)) }
  }
}

export default connect(null, mapDispatchToProps)(Splash)
