import React, { useState, useEffect } from 'react';
import './Chat.css';
import { useParams } from 'react-router-dom';
import MyHeader from '../../NavBar/MyHeader';

function Chat() {
    const [messages, setMessages] = useState([]);
    const [chat, setChat] = useState();
    const [inputMessage, setInputMessage] = useState('');
    const { chatId } = useParams();
    const token = localStorage.getItem("token")

    const messagesList = [
        {sender: 'sender', text: 'message message message message', timestamp: '03:10 pm'},
        {sender: 'receiver', text: 'message message message message', timestamp: '03:15 pm'},
        {sender: 'sender', text: 'message message message message', timestamp: '03:30 pm'},
        {sender: 'receiver', text: 'message message message message', timestamp: '04:10 pm'},
        {sender: 'sender', text: 'message message message message', timestamp: '03:10 pm'},
    ]

    useEffect(() => {
        fetchPreviousMessages();
    }, [chatId]); 

    const fetchPreviousMessages = async () => {
        try {
            const url =`http://localhost:5109/job-seeker/chat/${chatId}`

            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json', 
                    'Authorization': `Bearer ${token}`
                }
            });
            if (!response.ok) {
                throw new Error('Failed to fetch previous messages');
            }
            const chat = await response.json();
            setMessages(chat.messages); 
            setChat(chat)
        } catch (error) {
            console.error('Error fetching previous messages:', error);
        }
    };

    const handleInputChange = (event) => {
        setInputMessage(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (inputMessage.trim() === '') return; 

        const newMessage = {
            content : inputMessage,
            sentDate: new Date(),
            senderName: chat.jobSeeker.userName,
            recipientName: chat.employer.userName,
            chatId: chat.id
        };

        try {
            const newurl =`http://localhost:5109/job-seeker/chat/send`

            const response = await fetch(newurl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(newMessage),
            });
            if (!response.ok) {
                throw new Error('Failed to send message');
            }
            setMessages([...messages, newMessage]); 
            setInputMessage('');
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        
        <div>
            <MyHeader/>
            <h2 style={{ marginLeft: '20px' }}>Chat</h2>
            <div
                style={{
                    height: '500px',
                    overflowY: 'auto',
                    border: '1px solid #ccc',
                    marginBottom: '10px',
                    marginInline: '30px',
                }}>
                {messages.map((message, index) => (
                    <div key={index} style={{ padding: '5px' }}>
                        <b>{message.senderName} : </b> <span>{message.content}</span>{' '}
                        <span style={{ fontSize: 'small' }}>({new Date(message.sentDate).toLocaleTimeString()})</span>
                    </div>
                ))}
            </div>
            <form onSubmit={handleSubmit} className="chat-form">
                <div className="send-message-contanier">
                    <input
                        type="text"
                        value={inputMessage}
                        onChange={handleInputChange}
                        placeholder="Type your message..."
                    />
                    <div>
                        <button type="submit" className="button" style={{ marginRight: '25px', marginTop: '13px' }}>
                            Send
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Chat;
