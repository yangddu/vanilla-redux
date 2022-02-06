import { createStore } from "redux";

//action type
const ADD = "ADD";
const DELETE = "DELETE";

//actionCreators
const addToDo = (text) => {
  return {
    type: ADD,
    text,
  };
};

const deleteTodo = (id) => {
  return {
    type: DELETE,
    id: parseInt(id),
  };
};

//reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE:
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      return state;
  }
};

//store
const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteTodo,
};

export default store;
