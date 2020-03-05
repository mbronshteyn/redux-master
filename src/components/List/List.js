import React from 'react';
import {connect} from "react-redux";
import {randomInt} from "../../util/Util";
import {deleteTodo} from '../../actions'

const List = (props) => {

  const deleteTodoDispatch = (id) => {
    props.dispatch(deleteTodo(id));
  };

  return (
    <div>
      <h3>Todo List</h3>
      <ul>
        {props.data.map((todo) => {
          return (<div key={randomInt()}>
            <li key={randomInt()}><span>{todo.text}</span>
              <button
                onClick={() => deleteTodoDispatch(todo.id)}>Delete
              </button>
            </li>
          </div>)
        })}
      </ul>
    </div>
  )
};


const mapStateToProps = (state) => {
  return {
    data: state.todos.data,
  }
};

export default connect(mapStateToProps)(List);