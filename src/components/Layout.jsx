import React, { Component } from 'react';

import Footer from './Footer.jsx';

export default class Layout extends Component{
  render(){
    return(
    	<div>
	      	<div className="container">
	        	{this.props.children}
	      	</div>
	  		<Footer />
      	</div>
    )
  }
}
