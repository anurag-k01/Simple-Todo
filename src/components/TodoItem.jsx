import React from "react";
import "./TodoItem.css";
function TodoItem({ taskName }) {
  return (
    <>
      <div>
        <p>{taskName}</p>
      </div>
    </>
  );
}

export default TodoItem;
