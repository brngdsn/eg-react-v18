import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import tasksReducer from './tasksReducer';

// Combine Reducers
const rootReducer = combineReducers({
  tasks: tasksReducer,
});

// Create the store
const store = createStore(rootReducer, applyMiddleware(thunk));

// Export the store
export default store;
