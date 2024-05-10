import React, { useState } from "react";

function TodoList() {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (event) => {
    setTaskInput(event.target.value);
  };

  const addTask = () => {
    if (taskInput.trim() === "") {
      alert("Please enter a task");
      return;
    }
    setTasks([...tasks, taskInput]);
    setTaskInput("");
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };
  return (
    <div>
      <h2>To-Do List</h2>
      <input
        type="text"
        value={taskInput}
        onChange={handleInputChange}
        placeholder="Enter a task"
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input type="checkbox" onChange={() => deleteTask(index)} />
            <span>{task}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
