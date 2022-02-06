import React, { useState } from "react";

export default function Home() {
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
    </>
  );
}
