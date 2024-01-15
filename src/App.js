import { Suspense, lazy } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from './redux/store';

// Lazy load components
const NavBar = lazy(() => import('./components/NavBar'));
const TaskBoard = lazy(() => import('./components/task/TaskBoard'));
const AddTask = lazy(() => import('./components/task/AddTask'));
const NotFound = lazy(() => import('./components/NotFound'));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Simple <code>App Architecture and State Management</code> with <code>React Router and Redux</code>.
        </p>
        <Provider store={store}>
          <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
              <NavBar />
              <Routes>
                <Route path="/" element={<TaskBoard />} />
                <Route path="/add-task" element={<AddTask />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </Provider>
      </header>
    </div>
  );
}

export default App;
