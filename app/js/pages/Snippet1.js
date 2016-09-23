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
    this.state = {
      snippet1: { snippetArr: [{id: 0, content: "contstructor () {"}, {id: 1, content:  "super();"}, {id: 2, content: "this.state = {"}, {id: 3, content: "}"}, {id: 4, content: "}"} ]},
      snippet2: { snippetArr: [{id:0, content: "<div>"}, {id: 2, content: "This is snippet 2"}, {id: 3, content: "</div>"}]}
     }
  }

  render() {

  	var lines = {
      color: "black",
      width: "90%",
      textAlign: "left",
      paddingLeft: "20px"
    }

    var homeBtn = {
    	height: "50px",
    	width: "100px",
    	float: "right"
    }
    return (
      <DocumentTitle title="Snippets">
        <section className="Snippet1">
          
          <div>
            <h1 className="center-block">SNIPPET1</h1>
          </div>
          <a href="/"><button id="btnClear" className="btn btn-default btn-md" style={homeBtn}>Home</button></a>
          <div className="snippets-container " id={0} >{this.state.snippet1.snippetArr.map(function(line) {
              console.log(line);
              return <p  key={line.id} style={lines}>
                       {line.content}
                       <br />
                     </p> 
              })}
          </div>

        </section>
      </DocumentTitle>
    );
  }

}

Snippet1.propTypes = propTypes;

export default Snippet1;
