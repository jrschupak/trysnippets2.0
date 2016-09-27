import React          from "react";
import DocumentTitle    from "react-document-title";
import {link}         from "react-router";

class IframeTest extends React.Component {

  constructor(){
    super();
      this.state = {
        snippet: { snippetArr: [{id:0, content: "<div>"}, {id: 2, content: "This is snippet 2"}, {id: 3, content: "</div>"}]}
      }
  }

  render() {

    var body = {
      background: "black",
      width: "100%",
      height: "100%",
      margin: "0px",
      padding: "0px"
    }

    var homeBtn = {
      height: "50px",
      width: "100px",
      position: "absolute",
      right: "10px",
      top: "50px"
    }

    var flush = {
      padding: "0px",
      margin: "0px"
    }

    return(
      <DocumentTitle title="iframe">
        <section className="Iframe-test" style={body}>
          <h1 style={flush}>HELLO WORLD</h1>
          
          
        </section>
      </DocumentTitle>
      )
  }
}

export default IframeTest;