import React, { useState, useRef } from 'react';
import './Card.css';

export default function Card({value, onChange, onAddTask}) {
  const [date, setDate] = useState('');
  const dateInputRef = useRef(null);

  const handleChange = (e) => {
    setDate(e.target.value);
  };

  return (
    <div className="card">
      <h1 className='taskName'>Task Name</h1>
      <input className='inputTask' placeholder='Insert Task here...' type="text" value={value} onChange={onChange} />
      <button className='addTaskButton' onClick={onAddTask}>Add Task</button> 
      <input type="date" className='dateSelector' onChange={handleChange} ref={dateInputRef} />
    </div>
  );
};
