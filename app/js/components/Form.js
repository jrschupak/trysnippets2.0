'use strict';

import React from 'react';
import Snippets           from './Snippets'

class Form extends React.Component {

  constructor(props) {
    super(props);
  }

  render() { 
    var form = {
      color: "white",
      
    }

    var input = {
        marginRight: "10px",
        marginLeft: "20px",
        position: "relative",
        right: "20px"
    }

    var inputSpan = {
      position: "relative",
      right: "20px"
    }

    var title = {
      fontSize: "20px",
      color: "white",
      padding: "20px"
    }

    var submitBtn = {
      color: "black",
      margin: "50px"
    }

    var box = {
      width: "100px",
      height: "100px",
      background: "gray",
      margin: "10px"
    }


    return (
      <div className="col-sm-12" >
        <div className="wrapper">
          <div className="wrapper-title">
            <p className="title" style={title}>TrySnippets</p>
          </div>
          <div className="wrapper-form col-md-6 col-md-offset-3 text-center">
            <div className="box" style={box} onClick={this.props.boxIsClicked} value={0}>Box for snippet 1</div>
            <div className="box" style={box} onClick={this.props.boxIsClicked} value={1}>Box for snippet 2</div>
            <form className="checkboxes" style={form}>    
              <input  type="checkbox" value={0} style={input}/><span style={inputSpan}>Snippet1</span>           
              <input  type="checkbox" value={1} style={input}/><span style={inputSpan}>Snippet2</span>
            </form>
            <button onClick={this.props.isChecked} style={submitBtn}>Submit</button>
          </div>
          
        </div>

        <Snippets snippets={this.props.snippets}/>

      </div>
    );
  }

}

export default Form;