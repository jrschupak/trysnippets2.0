
import React 			    from "react";
import DocumentTitle	from "react-document-title";
import {link}			    from "react-router";

class Snippet3 extends React.Component {

	constructor(){
		super();
			this.state ={
				snippet: { snippetArr: [{id:0, content: "@media(max-width: #px) {"}, {id: 2, content: "container/element {"}, {id: 3, content: "//Your styling here"}, {id: 4, content: "}"}, {id: 5, content: "}"}]}
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
    	background: "#303030",
    	color: "yellow",
    	position: "relative",
    	top: "150px",
    	paddingTop: "20px",
    	paddingBottom: "20px",
      border: '5px solid black'
    }
		return(
			<DocumentTitle title="snippet3">
				<section className="snippet3-page" style={page}>
					<h1 style={h1}>@media syntax for responsive design</h1>
					<a href="/"><button id="btnClear" className="btn btn-default btn-md" style={homeBtn}>Home</button></a>
					<div className="snippets-container col-lg-4" style={snipCont} id={0} >{this.state.snippet.snippetArr.map(function(line) {
              			console.log(line);
              			return <p  key={line.id} style={lines}>
                                {line.content}
                                <br />
                               </p> 
              		       })}
          </div>
				</section>
			</DocumentTitle>
			)
	}
}

export default Snippet3;







