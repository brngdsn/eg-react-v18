import logo from './logo.svg';
import './App.css';
import PostsComponent from './components/PostsComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Simple <code>API Integration</code> with <code>useEffect</code>.
        </p>
        <PostsComponent />
      </header>
    </div>
  );
}

export default App;
