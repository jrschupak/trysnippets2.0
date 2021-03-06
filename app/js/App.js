'use strict';

import React              from 'react';

import CurrentUserActions from './actions/CurrentUserActions';
import CurrentUserStore   from './stores/CurrentUserStore';
import Header             from './components/Header';
import Footer             from './components/Footer';
import Form               from './components/Form';
import Snippets           from './components/Snippets'

const propTypes = {
  params: React.PropTypes.object,
  query: React.PropTypes.object,
  children: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.object
  ])
};

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentUser: {},
      snippets: {snippetArr: [{id:0, snippet:"<div>This is the first snippet of code</div>"}, {id:1, snippet: "<div>This is the second snippet</div>"}] },
      checkedBoxArr: [],
      checkboxes: [],
      displaySnippets: [],
      boxesArr: [],
      boxClicked: {},
      snippet: " "
    };

    this.onUserChange = this.onUserChange.bind(this);    
  }

  onUserChange(err, user) {
    if ( err ) {
      this.setState({ error: err });
    } else {
      this.setState({ currentUser: user || {}, error: null });
    }
  }

  componentWillMount() {
    console.log('About to mount App');
  }

  componentDidMount() {
    this.unsubscribe = CurrentUserStore.listen(this.onUserChange);
    CurrentUserActions.checkLoginStatus();
    this.setState({
        checkboxes: document.querySelectorAll('input'),
        boxesArr: this.state.boxesArr.push(document.querySelectorAll(".box"))
      })
    console.log(this.state.boxesArr);


  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  boxIsClicked(e) {
    console.log("The box was clicked");
    console.log(e.target);

    var clickedBox = e.target.getAttribute('value');
    
    console.log(clickedBox);

    console.log(document.querySelector('.snippet-cont'))

    var snippet = document.getElementById(clickedBox);
    console.log(snippet);

    // grab the style attribute and switch it with a new var style that has no display: "none"

    if(snippet.style.display == "none") {
      console.log('if statement display')
      console.log(snippet.getAttribute('style'));
      snippet.style = '';
      
    } else {
      console.log('else statement display');
      console.log(snippet.innerText)
      console.log(snippet.getAttribute('style'));
      snippet.setAttribute('style', 'display:none');
    } //end of if statement
    
  }  

  renderChildren() {
    return React.cloneElement(this.props.children, {
      params: this.props.params,
      query: this.props.query,
      currentUser: this.state.currentUser
    });
  }


  render() {

    var main = {
      width: "100%"
    }

    return (
      <div style={main}>

      

        <Form snippets={this.state.displaySnippets}  isChecked={this.isChecked} boxIsClicked={this.boxIsClicked}/>

        {this.renderChildren()}

        

      </div>

    );
  }

}

App.propTypes = propTypes;

export default App;
