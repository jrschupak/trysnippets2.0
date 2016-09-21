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
          
          <div>
            <Link to="/display"></Link>
          </div>

          <div>
            <Link to="/search"></Link>
          </div>

        </section>
      </DocumentTitle>
    );
  }

}

HomePage.propTypes = propTypes;

export default HomePage;
