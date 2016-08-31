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
      boxesArr: []
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

  boxIsClicked() {
    console.log("The box was clicked");
  }


  // isChecked(){
  //   console.log("isChecked function starting");

  //   for(let i of this.state.checkboxes){
  //     if(this.state.checkboxes[i].checked === true){
  //       console.log("isChecked function");
  //       this.state.checkedBoxArr.push(this.state.checkboxes[i].value);
  //       console.log("checkboxarr ", this.state.checkedBoxArr);
  //     }
  //   }
  //   for(var i = 0; i < this.state.checkedBoxArr.length; i++){
  //     console.log("checkedBoxArr[i] ", this.state.checkedBoxArr[i]);
  //     for(var j = 0; j < this.state.snippets.snippetArr.length; j++){
  //       console.log("snippets[j] ", this.state.snippets.snippetArr[j]);
  //       if(this.state.checkedBoxArr[i] == this.state.snippets.snippetArr[j].id){
  //         this.state.displaySnippets.push(this.state.snippets.snippetArr[j]);
  //       }
  //     }
  //   }
  //   this.setState({
  //     displaySnippets: this.state.displaySnippets
  //   })
  //   return console.log(this.state.displaySnippets);
  //  } 
  // }

     

  renderChildren() {
    return React.cloneElement(this.props.children, {
      params: this.props.params,
      query: this.props.query,
      currentUser: this.state.currentUser
    });
  }


  render() {
    return (
      <div>

        <Header />

        <Form snippets={this.state.displaySnippets}  isChecked={this.isChecked} boxIsClicked={this.boxIsClicked}/>

        {this.renderChildren()}

        <Footer />

      </div>
    );
  }

}

App.propTypes = propTypes;

export default App;
