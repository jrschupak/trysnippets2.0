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
      snippet1: { snippetArr: [{id: 0, content: "contstructor ( ) {"}, {id: 1, content:  "super( );"}, {id: 2, content: "  this.state = {"}, {id: 3, content: "  }"}, {id: 4, content: " }"} ]}
     }
  }

  render() {
    var page = {
    background: '#202020'
    }
    var h1 = {
    margin: '0px',
    color: 'white',
    paddingTop: "50px",
    paddingLeft: '25px',
    paddingRight: '100px'
    }

  	var lines = {
      width: "90%",
      textAlign: "left",
      paddingLeft: "20px"
    }

    var homeBtn = {
    	height: "50px",
    	width: "100px",
    	position: "absolute",
    	right: "10px",
    	top: "50px"
    }

    var snipCont = {
    	background: "black",
    	color: "yellow",
    	position: "relative",
    	top: "150px",
    	paddingTop: "20px",
    	paddingBottom: "20px",
      height: "300px",
      width: "400px",
      border: '5px solid gray'
    }
    return (
      <DocumentTitle title="Snippets">
        <section className="Snippet1" style={page}>
          
          <div>
            <h1 className="center-block" style={h1}>React.js constructor snippet</h1>
          </div>
          <a href="/"><button id="btnClear" className="btn btn-default btn-md" style={homeBtn}>Home</button></a>
          <div className="snippets-container" style={snipCont} id={0} >{this.state.snippet1.snippetArr.map(function(line) {
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
