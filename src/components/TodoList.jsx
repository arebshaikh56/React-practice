import React, { useState } from 'react';

function TodoList() {
  const [Task, setTask] = useState([]);
  const [newTask, setnewTask] = useState('');

  const handleChange = (event) => {
    setnewTask(event.target.value); // Update newTask, not Task
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Corrected preventDefault spelling
    setTask([...Task, newTask]);
    setnewTask(''); // Reset newTask, not Task
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} value={newTask} />
        <button type='submit'>Add task</button>
      </form>
      <ul>
        {Task.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
