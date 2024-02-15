import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Chatbot from './Chatbot';



const ProductDetail = () => {
  let { productId } = useParams();
  const [showChatbot, setShowChatbot] = useState(false);

  const startNegotiation = () => setShowChatbot(true);

  // Inline styles
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid black',
    padding: '20px',
    marginTop: '20px',
    borderRadius: '10px',
    width: '50%', // Adjust the width as needed
    margin: 'auto' // This centers the container horizontally
  };

  const buttonStyle = {
    padding: '10px 20px',
    cursor: 'pointer',
    marginBottom: '20px',
    fontSize: '16px'
  };

  return (
    <div style={containerStyle}>
      <h2>Product Detail - {productId}</h2>
      <button style={buttonStyle} onClick={startNegotiation}>Negotiate Price</button>
      {showChatbot && <Chatbot startMessage="Hello! Let's start negotiating the price. What's your offer?" />}
    </div>
  );
};


export default ProductDetail;
