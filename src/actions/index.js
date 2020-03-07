import {randomInt} from '../util/Util'
import {backend_url} from '../constants'

const ADD_TODO = 'ADD_TODO';
export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload,
  id: randomInt(),
});

const DELETE_TODO = 'DELETE_TODO';
export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id,
});

export const deleteTodoDB = (id) => {
  console.log(`calling deleteTodoDB ${id}`);
  return dispatch => {
    fetch(`${backend_url}/${id}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(json => dispatch(deleteTodo(json)))
      .catch(err => console.log(err));
  }
};

const RECEIVE_TODOS = 'RECEIVE_TODOS';
const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos,
});

// use async await approach
export const saveTodo = (text) => {
  return async ( dispatch )  => {
    try {
      let response = await fetch(backend_url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            text,
          })
        });
      let json = await response.json();
      return dispatch( receiveTodos( json ));
    } catch ( error ){
      console.log( error );
    }
  }
};

export const getTodos = () => {
  return dispatch => {
    fetch(backend_url, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(todos => dispatch(receiveTodos(todos)))
      .catch(err => console.log(err));
  }
};

