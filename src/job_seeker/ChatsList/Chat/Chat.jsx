import React, { useState } from 'react';
import './Chat.css'
import { useParams } from 'react-router-dom';

function Chat() {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');

    const {chatId} = useParams()

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
            sender: 'Sender',

        };
        setMessages([...messages, newMessage]);
        setInputMessage('');
    };

    return (
        <div>
            <h2 style={{marginLeft: '20px'}}>Chat</h2>
            <div style={{ height: '500px', overflowY: 'auto', border: '1px solid #ccc', marginBottom: '10px', marginInline: '30px' }}>
                {messages.map(message => (
                    <div key={message.id} style={{ padding: '5px' }}>
                        <b >{message.sender}:</b> <span>{message.text}</span> <span style={{fontSize: 'small'}}>({message.timestamp})</span>
                    </div>
                ))}
            </div>
            <form 
                onSubmit={handleSubmit}
                className='chat-form'>
                <div className='send-message-contanier'>
                    <input
                        type="text"
                        value={inputMessage}
                        onChange={handleInputChange}
                        placeholder="Type your message..."
                    />
                    <div>
                        <button type="submit"
                                className='button'
                                style={{marginRight: '25px', marginTop: '13px'}}>
                                Send</button>
                    </div>
                    
                </div>
               
            </form>
        </div>
    );
}

export default Chat;
