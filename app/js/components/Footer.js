'use strict';

import React from 'react';

class Footer extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {

    var footer = {
      position: "relative",
      top: "200px",
      background: "#404040",
      color: "white",
      width: "100%",
      paddingLeft: "25px",
      paddingTop: "15px",
      margin: "0px"
    }

    return (
      <footer style={footer}>

      &copy; 2016 trysnippets

      </footer>
    );
  }

}

export default Footer;
