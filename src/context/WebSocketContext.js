import React, { createContext } from 'react';
import useWebSocket from '../hooks/useWebSocket';

// Export WebSocketContext
export const WebSocketContext = createContext();

// Export memoized WebSocketProvider
export const WebSocketProvider = React.memo(({ children, url }) => {

  // Hook the WebSocket
  const webSocket = useWebSocket(url);

  // View
  return (
    <WebSocketContext.Provider value={webSocket}>
      {children}
    </WebSocketContext.Provider>
  );

});
