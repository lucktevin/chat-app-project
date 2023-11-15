// Chat.js
import React, { useState, useEffect } from 'react';
import './App.css';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const fetchMessages = async () => {
    try {
      const response = await fetch('http://localhost:5000/messages');
      if (!response.ok) {
        throw new Error('Failed to fetch messages');
      }
      const messagesData = await response.json();
      setMessages(messagesData);
    } catch (error) {
      console.error(error.message);
    }
  };

  const sendMessage = async (text) => {
    try {
      const response = await fetch('http://localhost:5000/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: 'user123', text }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      const newMessage = await response.json();
      setMessages([...messages, newMessage]);
      setInput('');
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      sendMessage(input);
    }
  };

  return (
    <div className="Chat">
      <div className="ChatMessages">
        {messages.map((message, index) => (
          <div key={index} className="Message">
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Chat;
