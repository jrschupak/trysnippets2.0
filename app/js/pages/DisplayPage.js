
import React         from 'react';
import {Link}        from 'react-router';
import DocumentTitle from 'react-document-title';
import Snippets      from "./../components/Snippets.js";

const propTypes = {
  currentUser: React.PropTypes.object
};

class DisplayPage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DocumentTitle title="Snippets">
        <section className="display-page">

          <div>
            <h1>THIS IS THE DISPLAY PAGE FOR SNIPPETS</h1>
          </div>
          <Snippets snippets={this.props.snippets}/>
          <div>
            
          </div>

        </section>
      </DocumentTitle>
    );
  }

}

DisplayPage.propTypes = propTypes;

export default DisplayPage;