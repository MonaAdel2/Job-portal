import React from 'react'
import { Link } from 'react-router-dom'
import './NavGraph.css'
function NavGraph() {

  const token = localStorage.getItem('token');
    
  const handleLogout = async () => {

      try {
          const url= "http://localhost:5109/login" // url for logout (employer)
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