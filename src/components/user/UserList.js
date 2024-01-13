import React, { useContext } from 'react';
import { UserContext } from './UserContext';

// UserList Component
const UserList = () => {

  // Users
  const { users } = useContext(UserContext);

  // View
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          {user.name} - {user.isActive ? 'Active' : 'Inactive'}
        </div>
      ))}
    </div>
  );

};

// Export UserList Component
export default UserList;
