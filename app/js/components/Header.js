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
      paddingLeft: "25px",
      paddingTop: "15px",
      paddingBottom: "15px"
    }

    var wrapper = {
      position: "absolute",
      top: "0px",
      left: "0px",
      background: "black",
      width: "100%"
    }

    var header = {
      color: "white",
      background: '#202020',
      height: "200px",
      paddingTop: '100px',
      paddingBottom: '100px',
      marginBottom: "100px",
      marginTop: "50px"
    }

    var content = {
      textAlign: "center"
    }

    var main = {
      background: "#202020"
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
