import React, { Component } from 'react';
import { Link } from 'react-router';


export default class Footer extends Component{
  render(){
    return(
      <div className="footer">
        <nav className="navbar navbar-default navbar-fixed-bottom" id="navBottom">
        <div className="container-fluid" >
          <ul className="nav navbar-nav">
            <li className="active"><Link to="/">Home</Link></li>
            <li><a href="" class="notActive">About</a></li>
            <li><a href="#" class="notActive">FAQ</a></li> 
            <li><a href="#" class="notActive">Contact</a></li> 
            <li><a href="https://www.google.com/search?q=puppies&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjQntTPuJTQAhUp6oMKHQqLAycQ_AUICCgB">Puppies</a></li> 
          </ul>
        </div>
        </nav>
      </div>
    )
  }
}