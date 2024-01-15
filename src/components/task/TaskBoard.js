import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';

const TaskBoard = () => {

  // Get tasks from store
  const tasks = useSelector((state) => state.tasks.tasks);

  // View
  return (
    <div className="task-board">
      <h2>Task Board</h2>
      <div className="task-list">
        {tasks.length > 0 ? (
          tasks.map((task) => (<TaskItem key={task.id} task={task} />))
        ) : (
          <p>No tasks available.</p>
        )}
      </div>
    </div>
  );

};

// Export TaskBoard component
export default TaskBoard;
