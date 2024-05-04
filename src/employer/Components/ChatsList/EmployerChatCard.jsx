import { Link } from "react-router-dom";

function EmployerChatCard(props){
    return(
        <div className="card">
            <div className="card-description">
                <h3 className="card-title">{props.chatTitle}</h3>
                <div className="card-text">
                    <span>{props.lastMessage}</span>
                </div>
            </div>
            
            
            <button className="button"
            style={{marginRight: '30px'}}>
                <Link to={`/chats/chat/${props.chatId}`}>View</Link>
            </button>


        </div>
    );
}
export default EmployerChatCard