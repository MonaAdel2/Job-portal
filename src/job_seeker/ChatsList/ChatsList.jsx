import React, { useState, useEffect } from 'react';
import ChatCard from './ChatCard';
import './ChatsList.css'

function ChatsList() {
    const [chats, setChats] = useState([]);
    let lastMessage ;
    useEffect(() => {
        // Fetch chats for the current job seeker ID when component mounts
        fetchChats();
    }, []); // Empty dependency array ensures the effect runs only once when the component mounts

    const fetchChats = async () => {
        try {
            const url = 'http://localhost:5109/chat/job-seeker'
            const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjI5YzVhN2RmLWE5M2MtNGVmNi1iMzUwLTEzYTliYzY3M2U3MyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkpvYlNlZWtlciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2dpdmVubmFtZSI6IkpvYlNlZWtlcjEiLCJleHAiOjE3MTQ4NDk4NDcsImlzcyI6ImpvYkNvbm5lY3QifQ.lLCoEpvUk8Bo3TxNNJ007Mp0CqIjXjFpTZ9jD4Bi47Y";
            // Replace 'YOUR_API_ENDPOINT' with the actual endpoint to fetch chats for the job seeker
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json', // Adjust if your API requires headers
                    'Authorization': `Bearer ${token}`
                }
            });
            if (!response.ok) {
                throw new Error('Failed to fetch chats');
            }
            const data = await response.json();
            setChats(data); // Assuming the API returns an array of chats
            // lastMessage = chat.messages.length > 0 ? chats[0].messages.slice(-1)[0] : "Start Chat Now!";
            console.log("The last message is ", lastMessage)
        } catch (error) {
            console.error('Error fetching chats:', error);
        }
    };

    return (
        <>
            <h1 style={{ marginLeft: '20px' }}>Chats</h1>
            {chats.length > 0 ? (
                <ul className="jobs-list" style={{ listStyle: 'none', padding: '0', margin: '0' }}>
                    {chats.map((chat) => (
                        <li key={chat.id} style={{ textDecoration: 'none' }}>
                            <ChatCard chatTitle={chat.employer.userName}
                                      chatId={chat.chatId}
                                      lastMessage={chat.messages.length > 0 ? chats[0].messages.slice(-1)[0] : "Start Chat Now!"} />
                        </li>
                    ))}
                </ul>
            ) : (
                <div className='paragraph-container' >
                    <span className='alert-text'>No chats available</span>
                </div>
                
            )}
        </>
    );
}

export default ChatsList;
