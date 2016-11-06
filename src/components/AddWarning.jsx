import React, { Component } from 'react';

export default class AddWarning extends Component {
  constructor(props){
    super(props);
    this.state = {
      warning: ''
    }
    this.onChange = this.onChange.bind(this);
    this.keyPress = this.keyPress.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e){
    this.setState({
      warning: e.target.value
    })
  }
  keyPress(target){
    if(target.charCode === 13){
      this.onSubmit()
    }
  }
  onSubmit(){
    let { warning } = this.state;
    this.props.addWarning(warning);
    this.setState({
      warning: ''
    })
  }
  render(){
    return(
      <div className="col-xs-4 pull-right" onKeyPress={this.keyPress}>
        <div className="input-group">
        <input type="text" placeholder="Add Warning" className="form-control" value={this.state.warning} onChange={this.onChange} />
        <span onClick={this.onSubmit} className="input-group-addon redbtn">+</span>
        </div>
      </div>
    )
  }
}
