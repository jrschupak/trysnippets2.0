'use strict';

import React from 'react';
import Snippets from './Snippets'

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hover: false
    }
  }

  componentDidMount(){
    console.log("hover, ", this.state.hover);
  }

  toggleHover(){
    this.setState({hover: !this.state.hover})
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
      textAlign: "center",
      marginTop: "150px",
      height: "500px"
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
              <h4 style={p}>React init state syntax</h4>
            </div>
            <div className="box col-md-2" style={box} onClick={this.props.boxIsClicked} value={1}>
              <h4 style={p}>Basic div container</h4>
            </div>          
          </div>
          
        </div>

        <Snippets snippets={this.props.snippets}/>

      </div>
    );
  }

}

export default Form;