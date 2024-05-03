import ChatCard from "./ChatCard";

function ChatsList(){
    const chats = [
        {chatTitle: "chat111111111111111111111111", chatId: 1},
        {chatTitle: "chat222222222222222222222222", chatId: 2},
        {chatTitle: "chat333333333333333333333333", chatId: 3},
    ]
    return(
        <>
            <h1 style={{marginLeft: '20px'}}>Chats</h1>
            <ul className='jobs-list' style={{listStyle: 'none', padding: '0', margin: '0'}}>
                        {chats.map(chat => (
                            <li style={{textDecoration: 'none'}}>
                                <ChatCard 
                                        chatTitle={chat.chatTitle}
                                        chatId={chat.chatId}
                                        />
                            </li>
                        ))}
            </ul>
        </>
    );
}
export default ChatsList