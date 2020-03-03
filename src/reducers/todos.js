import {randomInt} from '../util/Util'

const initialState = {
  data: [],
};

const todos = (state = initialState, action) => {

  switch (action.type) {
    case 'ADD_TODO' :
      return {
        ...state,
        data: [...state.data, {id: randomInt(), text: action.payload} ]
      };

    case 'DELETE_TODO' :
      return {};

    default:
      return state;
  }

};

export default todos;