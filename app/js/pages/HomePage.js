'use strict';

import React         from 'react';
import {Link}        from 'react-router';
import DocumentTitle from 'react-document-title';
import Form          from "./../components/Form.js";
import Snippets      from "./../components/Snippets.js";
import Header        from "./../components/Header.js";

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
        
        <Header /> 
        <div className="row" style={row}>
          <div className="col-sm-12 text-center">
            <Link to="/snippet1"><button id="btnClear" className="btn btn-primary btn-md center-block" style={btn} value={0}>React.js <br /> constructor to create states</button></Link>
            <Link to="/snippet2"><button id="btnClear" className="btn btn-danger btn-md center-block" style={btn}  value={1}>HTML <br /> Basic container with paragraph tags </button></Link>
            <Link to="/snippet3"><button id="btnClear" className="btn btn-success btn-md center-block" style={btn}  value={1}>CSS <br /> @media syntax for responsive design</button></Link>
            <Link to="/snippet4"><button id="btnClear" className="btn btn-warning btn-md center-block" style={btn}  value={1}>JavaScript <br /> Math.random function </button></Link>
            <Link to="/snippet5"><button id="btnClear" className="btn btn-info btn-md center-block" style={btn}  value={1}>Hello World </button></Link>
          </div>
        </div>
        </section>
      </DocumentTitle>
    );
  }

}

HomePage.propTypes = propTypes;

export default HomePage;
