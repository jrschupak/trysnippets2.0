import React 			    from "react";
import DocumentTitle		from "react-document-title";
import {link}			    from "react-router";

class Snippet5 extends React.Component {

	constructor(){
		super();
			this.state = {
				snippet: { 
          snippetHTML: [{id:0, content: "<div class='name-of-class'>"}, {id: 2, content: "<input type='text' class='one'><br><br>"}, {id: 3, content: "<input type='text' class='two'><br><br>"}, {id: 4, content: "<input type='text' class='three'><br><br>"}, {id: 5, content: "<button class='done-button'>DONE</button>"}, {id: 6, content: "</div>"}],
          snippetJS: [{id:0, content:'var doneButton = document.querySelector(".done-button");'}, {id:1, content:'var input = document.querySelectorAll(".one, .two, .three");'}, {id:3, content:'doneButton.addEventListener("click", function(){'}, {id:4, content:'for(i = 0; i < input.length; i++){'}, {id:5, content:'if(!iAmInput[i].value.length){'}, {id:6, content:'return alert("You Must fill in all the "I am" statements to continue")'}, {id:7, content:'} else {'}, {id:8, content:'if(input[4].value.length){'}, {id:9, content:'var container = document.querySelector(".name-of-class");'}, {id:10, content: 'container.style.display = "none";'}, {id:11, content:'}'}, {id:12, content:'}'}, {id:13, content:'}'}],
          snippetCSS: [{id:0, content:'.name-of-class {'}, {id:1, content:'background: rgba(0, 0, 0, 0.8);'}, {id:2, content:'color: black;'}, {id:3, content:'width: 700px;'}, {id:4, content:'height: 400px;'}, {id:5, content:'font-size: 15px;'}, {id:6, content:'text-align: center;'}, {id:7, content:'padding-top: 20px;'}, {id:8, content:'padding-bottom: 30px;'}, {id:9, content:'margin: 0px;'}, {id:10, content:'}'}, {id:11, content: 'input {'}, {id: 12, content:'width: 75%;'}, {id:13, content:'}'}]
        }             
      }
	}

	render() {

  var wrapper = {
    marginTop: "50px"
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
    	top: "100px",
      zIndex: "1"
    }

    var snipCont = {
    	background: "black",
    	color: "yellow",
   
    	paddingTop: "20px",
    	paddingBottom: "20px",
      overflow: "scroll",
      height: "300px"
    }

    var col4 = {
      margin: "0px"
    }
    var title = {
      position: "relative",
      top: "0px",
      fontSize: "20px"
    }

    var inputWrapper = {
      background: "rgba(0, 0, 0, 0.8)",
      color: "black",
      width: "700px",
      height: "400px",
      fontSize: "20px",
      textAlign: "center",
      paddingTop: "-20px",
      paddingBottom: "30px",
      marginTop: '400px',
      marginLeft: "auto",
      marginRight: "auto",
    }

    var form = {
      paddingTop: "50px"
    }

    var input = {
      width: "75%",
    }

    var doneBtn = {
      color: 'black',
      fontSize: "15px",
    
    }
		return(
			<DocumentTitle title="snippet5" >
				<section className="snippet5-page" >
					<h1>Fixed container to grab users input and will only disappear when user has filled in all fields and clicked done.</h1>
					
          <a href="/"><button id="btnClear" className="btn btn-default btn-md" style={homeBtn}>Home</button></a>
          <div className="wrapper" style={wrapper}>
          <div className="HTML col-lg-4" style={col4}>
            <p style={title}>HTML</p>
            <div className="snippets-container " style={snipCont} id={0} >

              {this.state.snippet.snippetHTML.map(function(line) {
                    console.log(line);
                    return <p  key={line.id} style={lines}>
                                {line.content}
                                <br />
                               </p> 
                         })}
            </div>
          </div> 
          <div className="JS col-lg-4" style={col4}>
           <p style={title}>JS</p>
           <div className="snippets-container" style={snipCont} id={0}>
            
            {this.state.snippet.snippetJS.map(function(line) {
                    console.log(line);
                    return <p  key={line.id} style={lines}>
                                {line.content}
                                <br />
                               </p> 
                         })}
           </div>
          </div>

          <div className="JS col-lg-4" style={col4}>
           <p style={title}>CSS</p>
           <div className="snippets-container" style={snipCont} id={0}>

            {this.state.snippet.snippetCSS.map(function(line) {
              			console.log(line);
              			return <p  key={line.id} style={lines}>
                                {line.content}
                                <br />
                               </p> 
              		       })}
           </div>
          </div>
          </div>
          <div className='name-of-class' style={inputWrapper}>
            <form style={form}>
              <input type='text' style={input} className='one' /><br/><br/>
              <input type='text' style={input} className='two' /><br/><br/>
              <input type='text' style={input} className='three' /><br/><br/>
            </form>
            <button class='done-button' style={doneBtn}>DONE</button>
          </div>
				</section>
			</DocumentTitle>
			)
	}
}

export default Snippet5;
