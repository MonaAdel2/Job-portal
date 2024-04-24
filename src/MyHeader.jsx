import './NavBar.css'
function MyHeader(){
    
    return(
        <nav className="nav-bar">
            {/* <a href="/" className="site-title">Job Portal</a> */}
            <span className="site-title">Job Portal</span>
             <ul>
                
                <li>
                    <a href="/saved_job">Saved Jobs</a>
                </li>

                <li>
                    <a href="/chats">Chats</a>
                </li>
                
                <li>Logout</li>
            </ul>
        </nav>
       
    );

}

export default MyHeader