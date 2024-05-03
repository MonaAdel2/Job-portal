import React, { useState, useEffect } from 'react';
import ChatCard from './ChatCard';
import './ChatsList.css'

function ChatsList() {
    const [chats, setChats] = useState([]);

    useEffect(() => {
        // Fetch chats for the current job seeker ID when component mounts
        fetchChats();
    }, []); // Empty dependency array ensures the effect runs only once when the component mounts

    const fetchChats = async () => {
        try {
            // Replace 'YOUR_API_ENDPOINT' with the actual endpoint to fetch chats for the job seeker
            const response = await fetch('YOUR_API_ENDPOINT/jobseeker/chats');
            if (!response.ok) {
                throw new Error('Failed to fetch chats');
            }
            const data = await response.json();
            setChats(data.chats); // Assuming the API returns an array of chats
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
                        <li key={chat.chatId} style={{ textDecoration: 'none' }}>
                            <ChatCard chatTitle={chat.chatTitle} chatId={chat.chatId} lastMessage={chat.lastMessage} />
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
