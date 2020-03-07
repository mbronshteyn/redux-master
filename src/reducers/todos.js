const initialState = {
  data: [],
};

const todos = (state = initialState, action) => {

  switch (action.type) {
    case 'RECEIVE_TODOS' :
      return {
        ...state,
        data: action.todos,
      };

    case 'DELETE_TODO' :
      const todos = state.data.filter(todo => todo._id !== action.id._id);
      return {
        ...state,
        data: todos,
      };

    default:
      return state;
  }

};

export default todos;