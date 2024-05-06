import React, { useState, useEffect } from 'react';
import EmployerChatCard from './EmployerChatCard.jsx';
import './ChatsList.css'
import NavGraph from '../NavGraph/NavGraph.jsx'

function EmployerChatsList() {
    const [chats, setChats] = useState([]);
    let lastMessage ;
    const token = localStorage.getItem("token")
    useEffect(() => {
        fetchChats();
    }, []); 

    const fetchChats = async () => {
        try {
            const url = 'http://localhost:5109/chat/job-seeker'

            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            if (!response.ok) {
                throw new Error('Failed to fetch chats');
            }
            const data = await response.json();
            setChats(data);
            lastMessage = data.messages.length > 0 ? chats[0].messages.slice(-1)[0] : "Start Chat Now!";
            console.log("The last message is ", lastMessage)
        } catch (error) {
            console.error('Error fetching chats:', error);
        }
    };

    return (
        <>
            <NavGraph/>
            <h2 style={{ marginLeft: '20px' }}>Chats</h2>
            {chats.length > 0 ? (
                <ul className="jobs-list" style={{ listStyle: 'none', padding: '0', margin: '0' }}>
                    {chats.map((chat) => (
                        <li key={chat.id} style={{ textDecoration: 'none' }}>
                            <EmployerChatCard chatTitle={chat.employer.userName}
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

export default EmployerChatsList;
