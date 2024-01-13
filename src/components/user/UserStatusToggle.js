import React, { useContext } from 'react';
import { UserContext } from './UserContext';

// UserStatusToggle Component
const UserStatusToggle = () => {

  // Users
  const { users, toggleUserStatus } = useContext(UserContext);

  // View
  return (
    <div>
      {users.map((user) => (
        <button key={user.id} onClick={() => toggleUserStatus(user.id)}>
          Toggle {user.name}
        </button>
      ))}
    </div>
  );

};

// Export UserStatusToggle component
export default UserStatusToggle;
