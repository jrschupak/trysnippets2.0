'use strict';

import React from 'react';

class Snippets extends React.Component {

  constructor () {
    super();
    this.state = {
      snippet1: { snippetArr: [{id: 0, content: "contstructor () {"}, {id: 1, content:  "super();"}, {id: 2, content: "this.state = {"}, {id: 3, content: "}"}, {id: 4, content: "}"} ]},
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

    var lines = {
      color: "black",
      width: "100%",
      textAlign: "left"
    }

    return (
      <div>
        <div className="snippets-cont">
          <p id={10} style={displayNone}>{this.state.snippet1[0]} <br/> {this.state.snippet1[1]}</p>
          <p id={1} style={displayNone}>{this.state.snippet2}</p>
        </div>

        <div className="snippets-container " id={0} style={displayNone}>{this.state.snippet1.snippetArr.map(function(line) {
              console.log(line);
              return <p  key={line.id} className='zip-comp' style={lines}>
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