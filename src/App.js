import React, { useState } from 'react';
import './App.css'; // Import the CSS file for styling

const App = () => {
  // State to manage tasks and input field
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  // Function to handle task input change
  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  // Function to add a new task
  const addTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, taskInput]);
      setTaskInput(''); // Clear the input field after adding a task
    }
  };

  // Function to delete a task
  const deleteTask = (index) => {
    const newTasks = tasks.filter((task, i) => i !== index); // Remove task by index
    setTasks(newTasks); // Update the task list
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>

      <div className="input-container">
        <input
          type="text"
          value={taskInput}
          onChange={handleInputChange}
          placeholder="Enter a task"
          className="task-input"
        />
        <button onClick={addTask} className="add-task-button">
          Add Task
        </button>
      </div>

      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            {task}
            <button onClick={() => deleteTask(index)} className="delete-button">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
