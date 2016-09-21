'use strict';

import React from 'react';

class Footer extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {

    var footer = {
  
      background: "#404040",
      color: "white",
      width: "100%",
      height: "30px",
      paddingLeft: "25px",
      paddingTop: "15px",
      margin: "0px"
    }

    return (
      <footer >
        <p style={footer}>
          &copy; 2016 trysnippets
        </p>
      </footer>
    );
  }

}

export default Footer;
