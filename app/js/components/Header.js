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
      marginLeft: "auto",
      marginRight: "auto",
      color: "gray",
      height: "200px",
      marginBottom: "100px",
      marginTop: "150px"
    }

    var content = {
      textAlign: "center"
    }

    return (
      <header>

       <div className="wrapper-title" style={wrapper}>
          <p className="title" style={title}>trysnippets</p>
       </div>
       <div className="header col-lg-12" style={header}> 
        <h1 style={content} >trysnippets is a place to look up snippets of code to use, so you can save time</h1>
       </div>

      </header>
    );
  }

}

export default Header;
