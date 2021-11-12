import React, { useState } from "react";
import "./Todo.css";
import TodoList from "./TodoList";
function Todo() {
  const [task, addTask] = useState("");

  const [taskList, appendTask] = useState([]);
  const seeText = (e) => {
    addTask(e.target.value);
  };
  const newTask = () => {
    appendTask([...taskList, task]);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Add Task"
        value={task}
        className="todo-input"
        onChange={seeText}
      />
      <button className="todoButton" onClick={newTask}>
        <i className="fas fa-plus add"></i>
      </button>
      <TodoList addTask={newTask} newTask={taskList}></TodoList>
    </div>
  );
}

export default Todo;
