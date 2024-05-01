import React, { useState } from 'react';
import './Chat.css'

function Chat() {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');

    const handleInputChange = (event) => {
        setInputMessage(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputMessage.trim() === '') return; // Prevent sending empty messages
        const newMessage = {
            id: new Date().getTime(),
            text: inputMessage,
            timestamp: new Date().toLocaleTimeString(),
        };
        setMessages([...messages, newMessage]);
        setInputMessage('');
    };

    return (
        <div>
            <h2>Chat</h2>
            <div style={{ height: '300px', overflowY: 'auto', border: '1px solid #ccc', marginBottom: '10px' }}>
                {messages.map(message => (
                    <div key={message.id} style={{ padding: '5px' }}>
                        <strong>{message.timestamp}:</strong> {message.text}
                    </div>
                ))}
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputMessage}
                    onChange={handleInputChange}
                    placeholder="Type your message..."
                    style={{ marginRight: '10px' }}
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default Chat;
