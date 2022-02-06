import React, { useState } from "react";
import { connect } from "react-redux";

function Home({ toDos }) {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    console.log(text);
    setText("");
  };
  return (
    <>
      <h1>To Do</h1>
      <form>
        <input type="text" value={text} onChange={onChange} />
        <button onClick={onSubmit} type="button">
          Add
        </button>
      </form>
      <ul>{JSON.stringify(toDos)}</ul>
    </>
  );
}

function mapStateToProps(state) {
  return { toDos: state };
}

export default connect(mapStateToProps)(Home);
//get the state from the store :: use connect
