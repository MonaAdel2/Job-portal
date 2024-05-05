import './NavBar.css'
import { Link } from "react-router-dom";

function MyHeader(){

    const token = localStorage.getItem('token');
    
    const handleLogout = async () => {

        try {
            const url= "http://localhost:5109/login" // url for logout (job seeker)
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json', // Adjust if your API requires headers
                    'Authorization':`Bearer ${token}`
                },
                body: JSON.stringify(userData)
            });
            const data = await response.json();
            if (data.successful === true) {
                console.log("Logged out");
                localStorage.removeItem('token');
            } else {
                
            }
        } catch (error) {
            
        }
    }
    
    return(
        <nav className="nav-bar">
            {/* <a href="/" className="site-title">Job Portal</a> */}
            <span className="site-title">
                <Link to={'/job-seeker/home'}>JobConnect</Link>
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
                
                <li>
                    <Link to={"/login"} onClick={handleLogout}>Logout</Link>
                </li>
            </ul>
        </nav>
       
    );

}

export default MyHeader