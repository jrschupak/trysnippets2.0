'use strict';

import React         from 'react';
import {Link}        from 'react-router';
import DocumentTitle from 'react-document-title';
import Form          from "./../components/Form.js";
import Snippets      from "./../components/Snippets.js";

const propTypes = {
  currentUser: React.PropTypes.object
};

class HomePage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var row = {
      height: "50px"
    }
    
    var btn = {
      display: "inline-block",
      verticalAlign: "top",
      height: "300px",
      width: "300px",
      margin: "10px"
    }

    return (
      <DocumentTitle title="Home">
        <section className="home-page">
          
        <div className="row" style={row}>
          <div className="col-sm-12 text-center" >
            <a href="/snippet1"><button id="btnSearch" className="btn btn-primary btn-md center-block" style={btn} onClick={this.props.boxIsClicked} value={0}>Hello World</button></a>
            <button id="btnClear" className="btn btn-danger btn-md center-block" style={btn} onClick={this.props.boxIsClicked} value={1}>Hello World </button>
            <button id="btnClear" className="btn btn-success btn-md center-block" style={btn} onClick={this.props.boxIsClicked} value={1}>Hello World </button>
            <button id="btnClear" className="btn btn-info btn-md center-block" style={btn} onClick={this.props.boxIsClicked} value={1}>Hello World </button>
            <button id="btnClear" className="btn btn-warning btn-md center-block" style={btn} onClick={this.props.boxIsClicked} value={1}>Hello World </button>
          </div>
        </div>
        </section>
      </DocumentTitle>
    );
  }

}

HomePage.propTypes = propTypes;

export default HomePage;
