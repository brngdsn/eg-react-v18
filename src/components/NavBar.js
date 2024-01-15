import React from 'react';
import { Link } from 'react-router-dom';

// NavBar Component
const NavBar = () => {
  // View
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Task Board</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link> | 
        <Link to="/add-task">Add Task</Link>
      </div>
    </nav>
  );
};

// Export NavBar Component
export default NavBar;
