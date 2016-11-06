import React, { Component } from 'react';

export default class AddWarning extends Component {
  constructor(props){
    super(props);
    this.state = {
      warning: ''
    }
    this.onChange = this.onChange.bind(this);
  }
  onChange(e){
    this.setState({
      warning: e.target.value
    })
  }
  render(){
    return(
      <div className="col-xs-4">
        <div className="input-group">
        <input type="text" placeholder="Add Warning" className="form-control" value={this.state.warning} onChange={this.onChange} />
        <span className="input-group-addon redbtn">+</span>
        </div>
      </div>
    )
  }
}
