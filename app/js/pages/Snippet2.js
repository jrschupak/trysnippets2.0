import React 			from "react";
import DocumentTitle	from "react-document-title";
import {link}			from "react-router";

class Snippet2 extends React.Component {

	constructor(){
		super();
			this.state ={
				snippet: { snippetArr: [{id:0, content: "<div>"}, {id: 2, content: "<p>"}, {id: 3, content: "Your paragraphs content"}, {id: 4, content: "</p>"}, {id: 5, content: "</div>"}]}
			}
	}

	render() {

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
      border: '5px solid gray'
    }
		return(
			<DocumentTitle title="snippet2">
				<section className="snippet2-page">
					<h1>Basic container with paragraph tag</h1>
					<a href="/"><button id="btnClear" className="btn btn-default btn-md" style={homeBtn}>Home</button></a>
					<div className="snippets-container" style={snipCont} id={0} >{this.state.snippet.snippetArr.map(function(line) {
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

export default Snippet2;