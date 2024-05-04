
import "../../src/job_seeker/NavBar/NavBar.css"
import { Link } from "react-router-dom";

function AdminHeader(){
    
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
                    <Link to={"/login"}>Logout</Link>
                </li>
            </ul>
        </nav>
       
    );

}

export default AdminHeader