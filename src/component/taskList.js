import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TaskList = (props) => {

  return (
    <div>
    <h2 className="app-heading">Task List</h2>
    <hr/>
      {console.log(props.tasks)}

      

      <ul>
        {props.tasks.map((task, index) => (
          <li className='list-item' key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
