import React, {Component} from 'react';
import './App.css';

import {connect} from "react-redux";
import AddTodo from "./components/AddTodo/AddTodo";
import List from "./components/List/List";

class App extends Component {
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
