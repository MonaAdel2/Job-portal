import React, { useState, useEffect } from 'react';
import './Chat.css';
import { useParams } from 'react-router-dom';

function Chat() {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const { chatId } = useParams();

    const messagesList = [
        {sender: 'sender', text: 'message message message message', timestamp: '03:10 pm'},
        {sender: 'receiver', text: 'message message message message', timestamp: '03:15 pm'},
        {sender: 'sender', text: 'message message message message', timestamp: '03:30 pm'},
        {sender: 'receiver', text: 'message message message message', timestamp: '04:10 pm'},
        {sender: 'sender', text: 'message message message message', timestamp: '03:10 pm'},
    ]

    useEffect(() => {
        // Fetch previous messages when component mounts
        fetchPreviousMessages();
    }, [chatId]); // Re-fetch previous messages when chatId changes

    const fetchPreviousMessages = async () => {
        try {
            const url =`http://localhost:5109/chat/${chatId}`

            const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjI5YzVhN2RmLWE5M2MtNGVmNi1iMzUwLTEzYTliYzY3M2U3MyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkpvYlNlZWtlciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2dpdmVubmFtZSI6IkpvYlNlZWtlcjEiLCJleHAiOjE3MTQ4NDk4NDcsImlzcyI6ImpvYkNvbm5lY3QifQ.lLCoEpvUk8Bo3TxNNJ007Mp0CqIjXjFpTZ9jD4Bi47Y";
            // Replace 'YOUR_API_ENDPOINT' with the actual endpoint to fetch chats for the job seeker
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json', // Adjust if your API requires headers
                    'Authorization': `Bearer ${token}`
                }
            });            if (!response.ok) {
                throw new Error('Failed to fetch previous messages');
            }
            const data = await response.json();
            setMessages(data.messages); // Assuming the API returns an array of messages
        } catch (error) {
            console.error('Error fetching previous messages:', error);
        }
    };

    const handleInputChange = (event) => {
        setInputMessage(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (inputMessage.trim() === '') return; // Prevent sending empty messages

        const newMessage = {
            text: inputMessage,
            timestamp: new Date().toLocaleTimeString(),
            sender: 'Sender', // You can adjust the sender as needed
        };

        try {
            const response = await fetch(`YOUR_API_ENDPOINT/${chatId}/messages`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newMessage),
            });
            if (!response.ok) {
                throw new Error('Failed to send message');
            }
            setMessages([...messages, newMessage]); // Update messages state with the new message
            setInputMessage('');
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <div>
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
                        <b>{message.sender}:</b> <span>{message.text}</span>{' '}
                        <span style={{ fontSize: 'small' }}> ({message.timestamp})</span>
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
