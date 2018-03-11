import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateUser } from './actions/user-actions';

class App extends Component {

  // Constructor
  constructor(props){
    super(props);

    // bind events to this
    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  onUpdateUser = (event) => {
    this.props.onUpdateUser(event.target.value);
  }

  render() {
    //console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Redux Sample</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input onChange={this.onUpdateUser}/>
        {this.props.user}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    products: state.products,
    user: state.user,
    userPlusProp: `${state.user} ${props.aRandomProps}`
  }
};

const mapActionsToProps = (dispatch, props) => {
  console.log(props);

  return bindActionCreators({
    onUpdateUser: updateUser
  }, dispatch);
};

const mergeProps = (propsFromState, propsFromDispatch, ownProps) =>{
  console.log(propsFromState, propsFromDispatch, ownProps);
  return {};
};

//export default connect(mapStateToProps, mapActionsToProps, mergeProps) (App);
export default connect(mapStateToProps, mapActionsToProps) (App);