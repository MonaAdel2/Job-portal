import React, { useState, useEffect } from 'react';
import './Chat.css';
import { useParams } from 'react-router-dom';
import MyHeader from '../../NavBar/MyHeader';

function Chat() {
    const [messages, setMessages] = useState([]);
    const [chat, setChat] = useState();
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
            const url =`http://localhost:5109/chat/job-seeker/${chatId}`

            const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjI5YzVhN2RmLWE5M2MtNGVmNi1iMzUwLTEzYTliYzY3M2U3MyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkpvYlNlZWtlciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2dpdmVubmFtZSI6IkpvYlNlZWtlcjEiLCJleHAiOjE3MTQ5NjQ2ODgsImlzcyI6ImpvYkNvbm5lY3QifQ.Cy_Ne55XTpigFD4-vdXTx27Y07b-EfSfRc-xvoLsyx4"
            // Replace 'YOUR_API_ENDPOINT' with the actual endpoint to fetch chats for the job seeker
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json', // Adjust if your API requires headers
                    'Authorization': `Bearer ${token}`
                }
            });
            if (!response.ok) {
                throw new Error('Failed to fetch previous messages');
            }
            const chat = await response.json();
            setMessages(chat.messages); // Assuming the API returns an array of messages
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
        if (inputMessage.trim() === '') return; // Prevent sending empty messages

        const newMessage = {
            content : inputMessage,
            sentDate: new Date(),
            senderName: chat.jobSeeker.userName,
            recipientName: chat.employer.userName,
            chatId: chat.id// You can adjust the sender as needed
        };

        try {
            // const url =`http://localhost:5109/chat/send?content=${newMessage.content}&receiverId=${newMessage.receiverId}&chatId=${newMessage.chatId}`
            const newurl =`http://localhost:5109/chat/send`
            const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjI5YzVhN2RmLWE5M2MtNGVmNi1iMzUwLTEzYTliYzY3M2U3MyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkpvYlNlZWtlciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2dpdmVubmFtZSI6IkpvYlNlZWtlcjEiLCJleHAiOjE3MTQ5NjQ2ODgsImlzcyI6ImpvYkNvbm5lY3QifQ.Cy_Ne55XTpigFD4-vdXTx27Y07b-EfSfRc-xvoLsyx4"

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
            setMessages([...messages, newMessage]); // Update messages state with the new message
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
