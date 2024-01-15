import { ADD_TASK, UPDATE_TASK, DELETE_TASK } from './tasksActionTypes';

// Initial State for Tasks
const initialState = {
  tasks: [],
};

// Tasks Reducer
function tasksReducer (state = initialState, action) {
  switch (action.type) {
    case ADD_TASK: return {
      ...state,
      tasks: [...state.tasks, action.payload],
    };
    case UPDATE_TASK: return {
      ...state,
      tasks: state.tasks.map((task) => task.id === action.payload.id ? action.payload : task)
    };
    case DELETE_TASK: return {
      ...state,
      tasks: state.tasks.filter((task) => task.id !== action.payload),
    };
    default: return state;
  }
}

// Export Tasks Reducer
export default tasksReducer;
