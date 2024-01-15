import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/tasksActions';

const AddTask = () => {

  // Initial State
  const [task, setTask] = useState({
    id: -1,
    title: '',
    description: '',
  });

  // Use Dispatching
  const dispatch = useDispatch();

  // Handle task change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setTask((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle task submission
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTask({ ...task, id: new Date().getTime() }));
    setTask({
      id: -1,
      title: '',
      description: '',
    });
  };

  // View
  return (
    <div className="add-task">
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={task.description}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );

};

// Export AddTask component
export default AddTask;
