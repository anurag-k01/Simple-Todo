import React from "react";
import "./TodoItem.css";
function TodoItem({ taskName }) {
  return (
    <>
      <div className="listItem">
        <p>{taskName}</p>
      </div>
    </>
  );
}

export default TodoItem;
