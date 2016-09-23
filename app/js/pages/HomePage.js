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

    return (
      <DocumentTitle title="Home">
        <section className="home-page">
          
          <a href="/snippet1"><button id="btnSearch" className="btn btn-primary btn-md center-block" style={btn} onClick={this.props.boxIsClicked} value={0}>Hello World</button></a>

        </section>
      </DocumentTitle>
    );
  }

}

HomePage.propTypes = propTypes;

export default HomePage;
