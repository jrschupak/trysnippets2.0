'use strict';

import React from 'react';

class Footer extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {

    var footer = {
      position: "absolute",
      bottom: "0px"
    }

    return (
      <footer style={footer}>

      &copy; 2016 trysnippets

      </footer>
    );
  }

}

export default Footer;
