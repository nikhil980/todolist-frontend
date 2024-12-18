import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = (props) => {
  const [task, setTask] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try { await axios.post('http://localhost:5001/tasks', { task });
    setTask('');
     props.fetchTasks();
} catch (error) { console.error('Error adding task:', error); }
  };

  return (
    
    <div className='input-container' >
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className='input-box-todo' 
      placeholder='Please Enter Todo'
      />
      <button  className="add-btn" onClick={handleSubmit} type="submit">+</button>
    </div>
  );
};

export default TaskForm;
