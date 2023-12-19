import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './Card';
import TaskCard from './TaskCard';
import './taskCard.css';

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });
  const [newTask, setNewTask] = useState('');
  localStorage.setItem('tasks', JSON.stringify(tasks));


  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      const currentDate = new Date().toISOString().split('T')[0];
      setTasks([...tasks, { task: newTask, date: currentDate }]);
      setNewTask('');
    }
  };

const handleDeleteTask = (taskToDelete) => {
  const updatedTasks = tasks.filter((task) => task.task !== taskToDelete.task);
  setTasks(updatedTasks);
};

  return (
    <div>
      <Card
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onAddTask={handleAddTask}
      />
      <h1 className='taskToCompleteheader'>Task's to complete</h1>
      <div className="tasks-container">
        {tasks.map((taskData, index) => (
          <TaskCard 
            key={index} 
            taskData={taskData} 
            onDeleteTask={handleDeleteTask} 
          />
        ))}
      </div>
    </div>
  );
};