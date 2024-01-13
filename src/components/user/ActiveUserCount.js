import React, { useContext } from 'react';
import { UserContext } from './UserContext';

// ActiveUserCount Component
const ActiveUserCount = () => {

  // Users data
  const { users } = useContext(UserContext);

  // Active Count
  const activeCount = users.filter((user) => user.isActive).length;

  // View
  return (
    <div>
      Active Users: {activeCount}
    </div>
  );

};

// Export ActiveUserCount Component
export default ActiveUserCount;