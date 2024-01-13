import React, { createContext, useState } from 'react';

// Create User Context
export const UserContext = createContext();

// Define User Provider
export const UserProvider = ({ children }) => {

  // Users initial state
  const [users, setUsers] = useState([
    { id: 1, name: 'Thor', age: 10733, isActive: true },
    { id: 2, name: 'Hulk', age: 43, isActive: false },
    { id: 3, name: 'Iron Man', age: 41, isActive: true },
    { id: 4, name: 'Hawk Eye', age: 39, isActive: false },
    { id: 5, name: 'Spiderman', age: 19, isActive: true },
    { id: 6, name: 'Black Widow', age: 28, isActive: false },
    { id: 7, name: 'Captain America', age: 174, isActive: true },
    { id: 8, name: 'Doctor Strange', age: 53, isActive: false },
  ]);

  // Toggle User Status
  const toggleUserStatus = (userId) => {
    const updatedUsers = users.map((user) => {
      return user.id === userId ? { ...user, isActive: !user.isActive } : user;
    });
    setUsers(updatedUsers);
  };

  // View
  return (
    <UserContext.Provider value={{ users, toggleUserStatus }}>
      {children}
    </UserContext.Provider>
  );

};
