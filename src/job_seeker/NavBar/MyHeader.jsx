import './NavBar.css'
import { Link } from "react-router-dom";

function MyHeader(){
    
    return(
        <nav className="nav-bar">
            {/* <a href="/" className="site-title">Job Portal</a> */}
            <span className="site-title">
                <Link to={'/job-seeker/home'}>Job Portal</Link>
            </span>
             <ul>
                <li>
                    <Link to={'/job-seeker/home'}>Home</Link>
                </li>
                
                <li>
                    <Link to={'/job-seeker/savedJobs'}>Saved Jobs</Link>
                </li>

                <li>
                    <Link to={'/job-seeker/chats'}>Chats</Link>
                </li>
                
                <li>Logout</li>
            </ul>
        </nav>
       
    );

}

export default MyHeader