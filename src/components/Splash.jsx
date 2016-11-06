import React, { Component } from 'react';

export default class Splash extends Component{
  render(){
    return(
       <div className="container-fluid">
 		<div className="row">
 			{/* Main search bar */}
 			<input type="text" placeholder="Type the name of a movie or show" id="mainSearch" /> 
 			<button type = "button" className="btn btn-default" alt="Search"> 
 				<span className="glyphicon glyphicon-search"></span>
 			</button>
 		</div>
 		<div className="row">
			<button data-toggle="collapse" data-target="#advanced" id="advancedButton">Advanced Search</button>
		</div>
			{/* Collapsing portion */}
			<div id="advanced" className="collapse">
			<form className="form-inline">
					<div className="form-group" id="advSearch">
					{/* Type selection (check boxes)*/}
					<div className="row">
						<h4>Type</h4>
						<div className="checkbox">
							<label className="checkbox-inline">
								<input type="checkbox" value=""></input>movie
							</label>
							<label className="checkbox-inline" value="">
								<input type="checkbox" value=""></input>series
							</label>
							<label className="checkbox-inline" value="">
								<input type="checkbox" value=""></input>episode
							</label>
						</div>
					</div>
					{/* Year selection (radio/text) */}
					<div className="row">
						<div className="col-xs-2">
							<h4>Year</h4>
						</div>
						<div className="col-xs-10">
							<div className="radio">
								{/* Exact year */}
								<label className="radio">
									<input type="radio" name="optradio"></input>
									<input type="text" className="year" id="yearExact"></input>
								</label>	
								{/* Year before */}
								<label className="radio">
									<input type="radio" name="optradio"></input>
									Before <input type="text" className="year" id="yearBefore"></input>
								</label>
								{/* Year after */}
								<label className="radio">
									<input type="radio" name="optradio"></input>
									After <input type="text" className="year" id="yearAfter"></input>
								</label>
								{/* Year between */}
								<label className="radio">
									<input type="radio" name="optradio"></input>
									Between <input type="text" className="year" id="yearStart"></input> and&nbsp;
									<input type="text" className="year" id="yearStart"></input>
								</label>
							</div>
						</div>
					</div>
					{/* Plot selection (check boxes)*/}
					<div className="row">
						<h4>Plot</h4>
						<div className="checkbox">
							<label className="checkbox-inline">
								<input type="checkbox" value=""></input>short
							</label>
							<label className="checkbox-inline" value="">
								<input type="checkbox" value=""></input>full
							</label>
						</div>
					</div>
				</div>	
			</form>
			</div>
			
		  </div>
		
    )
  }
}
