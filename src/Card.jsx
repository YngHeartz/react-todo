import React, { useState, useRef } from 'react';
import './Card.css';

export default function Card({ value, onChange, onAddTask, onSelectDate, onSelectImportance }) {
  const dateInputRef = useRef(null);

  const handleChange = (e) => {
    const selectedDate = e.target.value;
    onSelectDate(selectedDate); // Update the date in the App state
  };

  const importanceSelector = (e) => {
    const selectedImportance = e.target.value;
    onSelectImportance(selectedImportance);  // Call the function here
  }

  return (
    <div className="card">
      <h1 className='taskName'>Task Name</h1>
      <input className='inputTask' placeholder='Insert Task here...' type="text" value={value} onChange={onChange} />
      <button className='addTaskButton' onClick={onAddTask}>Add Task</button> 
      <input type="date" className='dateSelector' onChange={handleChange} ref={dateInputRef} /><br></br>
      <h1 className='importance'>Importance</h1>
      <div className='importanceButtons'>
        <button className='asapButton' value="ASAP" onClick={importanceSelector}>ASAP</button>
        <button className='soonButton' value="SOON" onClick={importanceSelector}>SOON</button>
        <button className='laterButton' value="LATER" onClick={importanceSelector}>LATER</button>
      </div>
      </div>
  );
};
