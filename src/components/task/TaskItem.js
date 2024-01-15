import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../../redux/tasksActions';

// TaskItem Component
const TaskItem = ({ task }) => {

  // Use Dispatch
  const dispatch = useDispatch();

  // Handle deleteing tasks
  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  // View
  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );

};

// Export memoized Taskitem Component
export default React.memo(TaskItem);
