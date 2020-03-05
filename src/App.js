import React, {Component} from 'react';
import './App.css';

import {connect} from "react-redux";
import AddTodo from "./components/AddTodo/AddTodo";
import List from "./components/List/List";
import {getTodos} from './actions'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(getTodos());
  }

  render() {
    return (
      <div className="App">
        <AddTodo/>
        <List/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.user.username,
  }
};

export default connect(mapStateToProps)(App);
