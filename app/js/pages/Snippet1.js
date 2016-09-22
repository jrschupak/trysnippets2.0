import React         from 'react';
import {Link}        from 'react-router';
import DocumentTitle from 'react-document-title';
import Snippets      from "./../components/Snippets.js";

const propTypes = {
  currentUser: React.PropTypes.object
};

class Snippet1 extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DocumentTitle title="Snippets">
        <section className="Snippet1">

          <div>
            <h1>SNIPPET1 Page</h1>
          </div>
          <Snippets snippets={this.props.snippets}/>
          <div>
            
          </div>

        </section>
      </DocumentTitle>
    );
  }

}

Snippet1.propTypes = propTypes;

export default Snippet1;
