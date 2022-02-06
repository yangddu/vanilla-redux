import { createStore } from "redux";

//action type
const ADD = "ADD";
const DELETE = "DELETE";

//actionCreators
export const addToDo = (text) => {
  return {
    type: ADD,
    text,
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE,
    id,
  };
};

//reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now(), ...state }];
    case DELETE:
      return state.filter((toDo) => toDo !== action.id);
    default:
      return state;
  }
};

//store
const store = createStore(reducer);

export default store;