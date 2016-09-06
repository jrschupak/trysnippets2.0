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
      padding: "20px"
    }
    return (
      <header>

       <div className="wrapper-title">
          <p className="title" style={title}>TrySnippets</p>
       </div>

      </header>
    );
  }

}

export default Header;
