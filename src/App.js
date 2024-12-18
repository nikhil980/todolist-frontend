import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskForm from './component/taskForm';
import TaskList from './component/taskList';
import "./App.css"
const App = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const response = await axios.get('http://localhost:5001/tasks');
    setTasks(response.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className='main-container'>
      <div className='center-container'>
      <h1 className="app-heading">TODO</h1>
     
      <TaskForm fetchTasks={fetchTasks} />   
      <TaskList tasks={tasks} />
    </div>
    </div>
  );
};

export default App;

