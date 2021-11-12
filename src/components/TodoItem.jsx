import React from "react";

function TodoItem({taskName}) {
  return (
    <>
      <div>
      <p>{taskName}</p>
      </div>
    </>
  );
}

export default TodoItem;
