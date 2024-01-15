import { useEffect, useState, useCallback } from 'react';

// Custom useWebSocket hook
const useWebSocket = (url) => {

  // State
  const [webSocket, setWebSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [isConnected, setIsConnected] = useState(false);
  const [reconnectAttempts, setReconnectAttempts] = useState(0);
  const [error, setError] = useState(null);
  const maxReconnectAttempts = 3;
  const reconnectTime = 5000;

  // sendMessage to socket
  const sendMessage = useCallback((message) => {
    if (webSocket && isConnected) {
      webSocket.send(message);
    }
  }, [webSocket, isConnected]);

  // Socket connection handling
  const connect = useCallback(() => {
    if (reconnectAttempts < maxReconnectAttempts) {
      const ws = new WebSocket(url);
      ws.onopen = () => {
        setIsConnected(true);
        setReconnectAttempts(0);
      };
      ws.onmessage = (event) => setMessages((prevMessages) => [...prevMessages, JSON.parse(event.data)]);
      ws.onerror = (event) => setError(event.message);
      ws.onclose = () => {
        setIsConnected(false);
        setReconnectAttempts((prevReconnectAttempts) => prevReconnectAttempts + 1);
        setTimeout(() => connect(), reconnectTime)
      };
      setWebSocket(ws);
    }
  }, [url, reconnectAttempts]);

  // Handle websocket side-effects
  useEffect(() => {
    connect();
    return () => {
      if (webSocket) {
        webSocket.close();
      }
    };
  }, [connect]);

  // Return state
  return {
    webSocket,
    isConnected,
    error,
    messages,
    sendMessage,
  };

};

export default useWebSocket;
