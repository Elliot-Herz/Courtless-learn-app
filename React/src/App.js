// App.js
import React, { useState } from 'react';
import Chatbox from './components/Chatbox';
import Messages from './components/Messages';

function App() {
  const [chatMessages, setChatMessages] = useState([]);

  const handleSendMessage = (message) => {
    // Send the message to the backend and get a response
    // For now, just echo the user's message
    setChatMessages([message, ...chatMessages]);
  };

  return (
    <div>
      <Messages messages={chatMessages} />
      <Chatbox onSendMessage={handleSendMessage} />
    </div>
  );
}

export default App;
