import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (count = 0) => {
  console.log(count);
  return count;
};
//reducer is a function that modifies your data!

const countStore = createStore(countModifier);

console.log(countStore.getState());
