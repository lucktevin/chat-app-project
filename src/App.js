import React, { useState } from 'react';
import './App.css'; 
import Chat from './Chat';

function App() {
  const [messages, setMessages] = useState([]);

  const sendMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="App">
      <h1>React Chat App</h1>
      <Chat messages={messages} sendMessage={sendMessage} />
    </div>
  );
}

export default App;
