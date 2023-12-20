export default function TaskCard({ taskData, onDeleteTask }) {
  const { task, date } = taskData;

  return (
    <div className='outputTaskCard'>
      <div className="TaskCard">
            <h1>{task}</h1>
            <p>Date to Complete: {date}</p>
            <p>Importance: {taskData.importance}</p>
            <button className="deleteTaskButton" type="button" onClick={() => onDeleteTask(taskData)}>Delete task</button>
      </div>
    </div>
  );
}
