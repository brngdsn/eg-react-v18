import React, { useState, useContext, useEffect } from 'react';
import { WebSocketContext } from '../context/WebSocketContext';

// CryptoTracker Component
const CryptoTracker = () => {

  // State
  const [cryptoData, setCryptoData] = useState({});
  const [selectedCrypto, setSelectedCrypto] = useState("BTC-USD");
  const webSocket = useContext(WebSocketContext);

  // Handle subscriptions
  const onChangeSelectedCrypto = (event) => {
    if (webSocket.isConnected) {
      const { target: { value: newSelectedCrypto } } = event
      const unsubscribeMessage = {
        type: "unsubscribe",
        product_ids: [selectedCrypto],
        channels: ["ticker"],
      };
      webSocket.sendMessage(JSON.stringify(unsubscribeMessage));
      const subscribeMessage = {
        type: "subscribe",
        product_ids: [newSelectedCrypto],
        channels: ["ticker"],
      };
      webSocket.sendMessage(JSON.stringify(subscribeMessage));
      setSelectedCrypto(newSelectedCrypto);
    }
  };

  // Handle WebSocket messages
  useEffect(() => {
    if (webSocket.messages.length > 0) {
      setCryptoData(webSocket.messages[webSocket.messages.length - 1]);
    }
  }, [webSocket.messages]);

  // Handle connection side-effects
  useEffect(() => {
    if (webSocket.isConnected) {
      const message = {
        type: "subscribe",
        product_ids: [selectedCrypto],
        channels: ["ticker"],
      };
      webSocket.sendMessage(JSON.stringify(message));
    }
  }, [webSocket.isConnected]);

  // View
  return (
    <div>
      <h1>Crypto Tracker</h1>
      {webSocket.error && <p>Error: {JSON.stringify(webSocket.error, null, 2)}</p>}
      <p>Socket State: ({webSocket.isConnected ? 'connected' : 'connecting..'})</p>
      <select value={selectedCrypto} onChange={onChangeSelectedCrypto}>
        <option value="BTC-USD">BTC-USD</option>
        <option value="ETH-USD">ETH-USD</option>
      </select>
      <p key="ticker">Price: {cryptoData && cryptoData.price} ({selectedCrypto})</p>
    </div>
  );

};

// Export CryptoTracker Component
export default CryptoTracker;
