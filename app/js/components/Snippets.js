'use strict';

import React from 'react';

class Snippets extends React.Component {

  constructor () {
    super();
    this.state = {
      snippet1: ["<div>This is snippet 1</div>",  "<div>Part2 of snippet</div>"],
      snippet2: "<div>This is snippet 2</div>"
     }
    } 
  
  componentWillMount(){
    console.log("Snippets.js ", this.props.snippets);
  }

  componentDidMount(){
    console.log("snippet1", this.state.snippet1[1]);
  }


  snippetsContainer(){
    var snipCont = document.querySelector('snippets-container');
    console.log(snipCont);
  }

  
  render() {

    var displayNone = {
    display: "none"
    } 
    var display = {

    }
    return (
      <div>
        <div className="snippets-cont">
          <p id={0} style={displayNone}>{this.state.snippet1[0]} <br/> {this.state.snippet1[1]}</p>
          <p id={1} style={displayNone}>{this.state.snippet2}</p>
        </div>


      </div>
    );
  }

}

export default Snippets;