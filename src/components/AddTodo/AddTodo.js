import React from 'react';
import {connect} from 'react-redux'
import {addTodo} from '../../actions'

const AddTodo = (props) => {
  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      let input = event.target.userInput.value;
      props.dispatch(addTodo(input));
      // clear user input
      event.target.userInput.value = '';
    }}>
      <input type='text' name='userInput'/>
      <button>Add Todo</button>
    </form>
  );
};

export default connect()(AddTodo);

