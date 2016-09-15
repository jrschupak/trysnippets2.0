'use strict';

import React from 'react';

class Snippets extends React.Component {

  constructor () {
    super();
    this.state = {
      snippet1: [{id: 0, content: "<div>This is snippet 1</div>"}, {id: 1, content:  "<div> part 2 of snippet 1 </div>"}],
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

        <div className="snippets-container" style={snippet}>{this.state.snippet1.map(function(line) {
              console.log(line);
              return <div  key={line.id} className='zip-comp'>
                        <p>{line.snippet}</p>
                     </div>
              })}
        </div>


      </div>
    );
  }

}

export default Snippets;