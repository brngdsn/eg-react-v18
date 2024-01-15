import React from 'react';
import { Link } from 'react-router-dom';

// NotFound Component
const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
      <Link to="/">Go to Homepage</Link>
    </div>
  );
};

// Export NotFound Component
export default NotFound;
