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

    var header = {
      color: "gray",
      height: "200px",
      marginBottom: "100px",
      marginTop: "150px",
    }

    var content = {
      textAlign: "center"
    }

    var main = {
      background: "none"
    }

    return (
      <header style={main}>

       <div className="wrapper-title" style={wrapper}>
          <p className="title" style={title}>trysnippets</p>
       </div>
       <div className="header col-lg-12 text-center" style={header}> 
        <h1 style={content} >trysnippets saves you time by providing precoded snippets for you to use for free</h1>
       </div>

      </header>
    );
  }

}

export default Header;
