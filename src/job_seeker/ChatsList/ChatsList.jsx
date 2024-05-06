import React, { useState, useEffect } from 'react';
import ChatCard from './ChatCard';
import './ChatsList.css'
import MyHeader from '../NavBar/MyHeader';

function ChatsList() {
    const [chats, setChats] = useState([]);
    let lastMessage ;
    const token = localStorage.getItem("token")
    useEffect(() => {
        // Fetch chats for the current job seeker ID when component mounts
        fetchChats();
    }, []); // Empty dependency array ensures the effect runs only once when the component mounts

    const fetchChats = async () => {
        try {
            const url = 'http://localhost:5109/chat/job-seeker'
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
            lastMessage = data.messages.length > 0 ? chats[0].messages.slice(-1)[0] : "Start Chat Now!";
            console.log("The last message is ", lastMessage)
        } catch (error) {
            console.error('Error fetching chats:', error);
        }
    };

    return (
        <>
            <MyHeader/>
            <h2 style={{ marginLeft: '20px' }}>Chats</h2>
            {chats.length > 0 ? (
                <ul className="jobs-list" style={{ listStyle: 'none', padding: '0', margin: '0' }}>
                    {chats.map((chat) => (
                        <li key={chat.id} style={{ textDecoration: 'none' }}>
                            <ChatCard chatTitle={chat.employer.userName}
                                      chatId={chat.id}
                                      lastMessage={chat.messages.length > 0 ? chats[0].messages.slice(-1)[0].content : "Start Chat Now!"} />
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
