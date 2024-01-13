import logo from './logo.svg';
import './App.css';
import { UserProvider } from './components/user/UserContext';
import UserList from './components/user/UserList';
import UserStatusToggle from './components/user/UserStatusToggle';
import ActiveUserCount from './components/user/ActiveUserCount';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Simple <code>State Management</code> with <code>Context API</code>.
        </p>
        <UserProvider>
          <UserList />
          <UserStatusToggle />
          <ActiveUserCount />
        </UserProvider>
      </header>
    </div>
  );
}

export default App;
