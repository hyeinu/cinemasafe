import React, { Component } from 'react';
import { Link } from 'react-router';


export default class Header extends Component{
	render(){
		return(
			<div id="header" className="siteTitle">
	          <Link to="/">CinemaSafe</Link>
	        </div>
		)
	}
}