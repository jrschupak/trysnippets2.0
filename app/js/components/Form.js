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


    return (
      <div className="col-sm-12" >
        <div className="wrapper">
          <div className="wrapper-title">
            <p className="title" style={title}>TrySnippets</p>
          </div>
          <div className="wrapper-form col-md-6 col-md-offset-3 text-center">
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