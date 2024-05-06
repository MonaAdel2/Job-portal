import React from 'react'
import { Link } from 'react-router-dom'
import './NavGraph.css'
function NavGraph() {
    const handleLogout = async () => {
        localStorage.removeItem('token');
    }

  return (
    <nav className="nav-bar">
        <span className="site-title">
            <Link to={'/postJob'}>JobConnect</Link>
        </span>
    <ul>
        <li>
          <Link to = "/postJob">Post a job</Link>
        </li>
        <li>
          <Link to="/jobsList" >Review Proposels</Link>
        </li>
        <li>
          <Link to="/chats" >Chats</Link>
        </li>
        <li>
          <Link to="/login" onClick={handleLogout} >Logout</Link>
        </li>
    </ul>
    </nav>
  )
}

export default NavGraph