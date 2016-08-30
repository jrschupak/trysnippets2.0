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
      <header>

        Snippets

      </header>
    );
  }

}

export default Snippets;