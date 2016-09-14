'use strict';

import React from 'react';

class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var title = {
      fontSize: "20px",
      color: "white",
      paddingLeft: "25px"
      
    }

    var wrapper = {
      position: "absolute",
      top: "0px",
      left: "0px",
      background: "black",
      width: "100%"
    }
    return (
      <header>

       <div className="wrapper-title" style={wrapper}>
          <p className="title" style={title}>trysnippets</p>
       </div>

      </header>
    );
  }

}

export default Header;
