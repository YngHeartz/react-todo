import React from 'react';
import './taskCard.css';

function TaskCard({ task, onDeleteTask}) {
  const handleDeleteTask = () => {
    onDeleteTask(task);
  };

  return (

    <div className='outputTaskCard'>
    <div className="TaskCard">
       
      <h1>{task}</h1>
      
      <button className="deleteTaskButton" type="button" onClick={handleDeleteTask}>Delete task</button>
    </div>
    </div>
  );
}

export default TaskCard;
