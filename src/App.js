import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './Card';
import TaskCard from './TaskCard';
import './taskCard.css';
import giphyGif from './giphy.gif';

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });
  const [newTask, setNewTask] = useState('');
  // const [showGif, setShowGif] = useState(false);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      const currentDate = new Date().toISOString().split('T')[0];
      setTasks([...tasks, { task: newTask, date: currentDate }]);
      setNewTask('');
      // setShowGif(true);
    }
  };

  const handleDeleteTask = (taskToDelete) => {
    const updatedTasks = tasks.filter((task) => task.task !== taskToDelete.task);
    setTasks(updatedTasks);
  };

  // useEffect(() => {
  //   if (showGif) {
  //     const timer = setTimeout(() => {
  //       setShowGif(false); // Hide the GIF after some time
  //     }, 3000); // Assuming the GIF duration is 3 seconds

  //     return () => clearTimeout(timer); // Cleanup
  //   }
  // }, [showGif]);

  return (
    <div>
      {/* {showGif && <div><img src={giphyGif} alt="Giphy" className='gif' /></div>} */}
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
