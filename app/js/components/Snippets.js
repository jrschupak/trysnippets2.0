'use strict';

import React from 'react';

class Snippets extends React.Component {

  componentWillMount(){
    console.log("Snippets.js ", this.props.snippets);

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
          <p id={0} style={displayNone}>Snippet of Code for box 1</p>
        </div>


      </div>
    );
  }

}

export default Snippets;