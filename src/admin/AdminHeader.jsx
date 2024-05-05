
import "../../src/job_seeker/NavBar/NavBar.css"
import { Link } from "react-router-dom";

function AdminHeader(){

    const token = localStorage.getItem('token');
    
    const handleLogout = async () => {

        try {
            const url= "http://localhost:5109/login" // url for logout (admin)
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
                <Link to={'/admin/dashboard'}>JobConnect</Link>
                </span>
             <ul>
                <li>
                    <Link to={'/admin/dashboard'}>Dashboard</Link>
                </li>
                
                <li>
                    <Link to={'/admin/employers'}>Employers</Link>
                </li>

                
                
                <li>
                    <Link to={"/login"} onClick={handleLogout}>Logout</Link>
                </li>
            </ul>
        </nav>
       
    );

}

export default AdminHeader