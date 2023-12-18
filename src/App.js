import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './Card';
import TaskCard from './TaskCard';

function App() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });
  const [newTask, setNewTask] = useState('');
  localStorage.setItem('tasks', JSON.stringify(tasks));


  // Save tasks to local storage whenever tasks change
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (taskToDelete) => {
    const updatedTasks = tasks.filter((task) => task !== taskToDelete);
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
        {tasks.map((task, index) => (
          <TaskCard key={index} task={task} onDeleteTask={handleDeleteTask} />
        ))}
      </div>
    </div>
  );
}

export default App;
