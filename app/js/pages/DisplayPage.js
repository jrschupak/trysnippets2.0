
import React         from 'react';
import {Link}        from 'react-router';
import DocumentTitle from 'react-document-title';

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
            
          </div>

          <div>
            
          </div>

        </section>
      </DocumentTitle>
    );
  }

}

DisplayPage.propTypes = propTypes;

export default DisplayPage;