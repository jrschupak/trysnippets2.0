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
          <p id={0} style={displayNone}>Hello snippets</p>
        </div>

        <div className="snippets-container" > {this.props.snippets.map(function(placeData) {
              console.log(placeData);
              return <div  key={placeData.id}>
                        <p>{placeData.snippet}</p>
                     </div>
              })}
        </div>

      </div>
    );
  }

}

export default Snippets;