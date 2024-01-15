import logo from './logo.svg';
import './App.css';
import { WebSocketProvider } from './context/WebSocketContext';
import CryptoTracker from './components/CryptoTracker';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Simple <code>Web Technology Integration</code> with <code>WebSockets</code>.
        </p>
        <WebSocketProvider url="wss://ws-feed.exchange.coinbase.com">
          <CryptoTracker />
        </WebSocketProvider>
      </header>
    </div>
  );
}

export default App;
