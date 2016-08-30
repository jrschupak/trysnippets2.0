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
    return (
      <div className="snippets-container" >{this.props.snippets.map(function(placeData) {
              console.log(placeData);
              return <div  key={placeData.id} className='zip-comp'>
                        <p>{placeData.snippet}</p>
                     </div>
              })}
      </div>
    );
  }

}

export default Snippets;