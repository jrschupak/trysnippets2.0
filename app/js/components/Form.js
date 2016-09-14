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
      margin: "10px"
    }


    return (
      <div className="col-sm-12" >
        <div className="wrapper">
          <div className="wrapper-boxes text-center">
            <div className="box col-md-2" style={box} onClick={this.props.boxIsClicked} value={0}><p>Box for snippet 1</p></div>
            <div className="box col-md-2" style={box} onClick={this.props.boxIsClicked} value={1}><p>Box for snippet 2</p></div>          
          </div>
          
        </div>

        <Snippets snippets={this.props.snippets}/>

      </div>
    );
  }

}

export default Form;