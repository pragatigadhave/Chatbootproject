import React, { useState, useEffect, useRef } from 'react';
import { Picker } from 'emoji-mart';

const Chatbot = ({ startMessage }) => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const messagesContainerRef = useRef(null);

  useEffect(() => {
    if (startMessage) {
      setMessages((prevMessages) => [...prevMessages, { text: startMessage, sender: 'bot' }]);
    }
  }, [startMessage]);

  const getBotResponse = (userMessage) => {
    const responses = {
      "hi": "Hello! How can I help you today?",
      "price1": "Rs100",
      "price2": "Rs200",
      "What is price of Product3": "$300",
      "What is price of Product4": "$400",
      "which colour available": "red, black, white",
      "discount": "50%.",
      "Thanks": "Welcome!! It's my pleasure.....Thank for visiting, have a nice day"
    };
    return responses[userMessage.toLowerCase()] || "Sorry, I don't understand that.";
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (!userInput) return;
    setMessages((prevMessages) => [...prevMessages, { text: userInput, sender: 'user' }]);
    const botResponse = getBotResponse(userInput);
    setMessages((prevMessages) => [...prevMessages, { text: botResponse, sender: 'bot' }]);
    setUserInput('');
    setShowEmojiPicker(false);
  };

  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const handleEmojiSelect = (emoji) => {
    setUserInput((prevInput) => prevInput + emoji.native);
  };

  const startVoiceRecognition = () => {
    const recognition = new window.SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.onresult = (event) => {
      const last = event.results.length - 1;
      const userVoiceInput = event.results[last][0].transcript;
      setUserInput(userVoiceInput);
    };
    recognition.start();
  };

  const messagesStyle = {
    flexGrow: 1,
    padding: '10px',
    overflowY: 'scroll'
  };

  const formStyle = {
    borderTop: '1px solid #ccc',
    padding: '10px',
    display: 'flex',
    alignItems: 'center'
  };

  const buttonStyle = {
    padding: '10px 15px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  };

  const chatbotStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    width: '300px',
    height: '400px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    // ...customStyle // Remove this line if customStyle is not defined
  };

  return (
    <div style={chatbotStyle}>
      <div ref={messagesContainerRef} style={messagesStyle}>
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} style={formStyle}>
        <input
          type="text"
          placeholder="Type your message..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          style={{ width: 'calc(100% - 80px)', marginRight: '10px' }}
        />
        <button style={buttonStyle} type="submit">Send</button>
        <button onClick={toggleEmojiPicker}>😊</button>
        <button onClick={startVoiceRecognition}>🎤</button>
      </form>
      {showEmojiPicker && (
        <Picker set='apple' onSelect={handleEmojiSelect} style={{ position: 'absolute', bottom: '80px', right: '10px' }} />
      )}
    </div>
  );
};

export default Chatbot;
