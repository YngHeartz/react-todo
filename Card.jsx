import React from 'react';
import './Card.css';

function Card({value, onChange, onAddTask}) {
  return (
        <div className="card">
            <h1 className='taskName'>Task Name</h1>
            <input className='inputTask' placeholder='Insert Task here...' type="text" value={value} onChange={onChange} />
            <button className='addTaskButton' onClick={onAddTask}>Add Task</button> 
            <input type="date" className='dateSelector' />
        </div>
  );
}

export default Card;
