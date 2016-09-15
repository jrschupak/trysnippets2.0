'use strict';

import React from 'react';
import Snippets from './Snippets'

class Form extends React.Component {

  constructor(props) {
    super(props);
  }

  render() { 

    var box = {
      width: "300px",
      height: "300px",
      background: "gray",
      display: "inline-flex",
      margin: "10px",
      textAlign: "center"
    }

    var wrapper = {
      textAlign: "center"
    }

    var p = {
      marginLeft: "auto",
      marginRight: "auto",
      height: "20px"
    }
    return (
      <div className="col-sm-12" style={wrapper}>
        <div className="wrapper">
          <div className="wrapper-boxes">
            <div className="box col-md-2" style={box} onClick={this.props.boxIsClicked} value={0}>
              <p style={p}>Box for snippet 1</p>
            </div>
            <div className="box col-md-2" style={box} onClick={this.props.boxIsClicked} value={1}>
              <p style={p}>Box for snippet 2</p>
            </div>          
          </div>
          
        </div>

        <Snippets snippets={this.props.snippets}/>

      </div>
    );
  }

}

export default Form;