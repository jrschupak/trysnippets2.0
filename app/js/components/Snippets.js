'use strict';

import React from 'react';

class Snippets extends React.Component {

  constructor () {
    super();
    this.state = {
      snippet1: { snippetArr: [{id: 0, content: "contstructor () {"}, {id: 1, content:  "super();"}, {id: 2, content: "this.state = {"}, {id: 3, content: "}"}, {id: 4, content: "}"} ]},
      snippet2: { snippetArr: [{id:0, content: "<div>"}, {id: 2, content: "This is snippet 2"}, {id: 3, content: "</div>"}]}
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

    var lines = {
      color: "black",
      width: "100%",
      textAlign: "left"
    }

    return (
      <div>
        

        <div className="snippets-container " id={0} style={displayNone}>{this.state.snippet1.snippetArr.map(function(line) {
              console.log(line);
              return <p  key={line.id} style={lines}>
                       {line.content}
                       <br />
                     </p> 
              })}

        </div>
        <div className="snippets-container " id={1} style={displayNone}>{this.state.snippet2.snippetArr.map(function(line) {
              console.log(line);
              return <p  key={line.id} style={lines}>
                       {line.content}
                       <br />
                     </p> 
              })}
        </div>


      </div>
    );
  }

}

export default Snippets;