'use strict';

import React from 'react';
import Snippets from './Snippets'

class Form extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount(){
    
  }

  componentDidMount(){
    

  }

  mouseEnter = (e) => {
    console.log("e.target: ", e.target)
    e.target.style.height = "325px"
    e.target.style.width = "325px" 
  }

  mouseLeave = (e) => {
    console.log("e.target: ", e.target)
    e.target.style.height = "300px"
    e.target.style.width = "300px" 
  }

  
  

  render() { 

    var box = {
      width: "300px",
      height: "300px",
      background: "gray",
      display: "inline-flex",
      margin: "10px",
      textAlign: "center",
      display: "none"
     }
    

    var wrapper = {
      
      height: "500px",
      display: "none"

    }

    var p = {
      marginLeft: "auto",
      marginRight: "auto",
      height: "20px",
      width: "100px"
    }

    

    

    return (
      <div className="col-sm-12 text-center" style={wrapper}>
        <div className="wrapper text-center">
          <div className="wrapper-boxes text-center">
            <a href="#snippets-cont"><div className="box" style={box}  onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
              <h4 style={p}>React init state syntax</h4>
            </div></a>
            <a href="/display"><div className="box" style={box}  onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
              <h4 style={p}>Basic div container</h4>
            </div> </a>         
          </div>
        </div>
        
        

      </div>
    );
  }

}

export default Form;