import React, { useState } from "react";
import TodoItem from "./TodoItem";

function TodoList({ newTask }) {
  return (
    <div>
      {newTask.map((e) => (
        <TodoItem taskName={e} />
      ))}
    </div>
  );
}

export default TodoList;
