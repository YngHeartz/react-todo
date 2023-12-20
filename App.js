import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './Card';
import TaskCard from './TaskCard';
import './taskCard.css';
import giphyGif from './giphy.gif';

export default function App() {
  const [newTask, setNewTask] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedImportance, setSelectedImportance] = useState('');


  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      const currentDate = selectedDate || new Date().toISOString().split('T')[0];
      setTasks([...tasks, { task: newTask, date: currentDate, importance: selectedImportance }]);
      setNewTask('');
      setSelectedImportance('');
    }
  };

  const handleDeleteTask = (taskToDelete) => {
    const updatedTasks = tasks.filter((task) => task.task !== taskToDelete.task);
    setTasks(updatedTasks);
  };
  const handleSelectImportance = (importanceValue) => {
    // Do something with the selected importance, if needed
    setSelectedImportance(importanceValue);
  };
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div>
      <Card
  value={newTask}
  onChange={(e) => setNewTask(e.target.value)}
  onAddTask={handleAddTask}
  onSelectDate={setSelectedDate}
  onSelectImportance={handleSelectImportance}  // Pass the function here
/>
      <h1 className='taskToCompleteheader'>Task's to complete</h1>
      <div className="tasks-container">
        {tasks.map((taskData, index) => (
          <TaskCard 
            key={index} 
            taskData={taskData} 
            onDeleteTask={handleDeleteTask}
            onSelectImportance={setSelectedImportance}
          />
        ))}
      </div>
    </div>
  );
};