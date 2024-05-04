import React, {useState} from "react";
import './Login.css'
import { Link } from 'react-router-dom';
function  Login(props) {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('')
    const [jobRole,setJobRole]= useState('')
  
        const handleSubmit= async ()=> {
            const baseurl=`http://localhost:5109/jobs/${jobRole}/login`
             const result = await fetch( baseurl, 
          {
              method: "POST",
              headers: {
                  'Content-Type':'application/json'
              },
          })        
    }
    return(
       <div className="login-container" >
        <div className="login-form-container">
        <div className="welcome-container">
            <h1 className="welcome-header">Welcome Back</h1>
            <br/>
            <span className="enter-email-and-password">Please enter your email and pssword</span>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
            <label className='email-label'htmlFor="email">Email</label>
            <input class="email-input"value={email} type="email" placeholder="youremail@gmail.com" id="email" name="email" onChange={(e) => setEmail(e.target.value)}></input>
            <label className="password-label" htmlFor="password">Password</label>
            <input class="password-input" value={password} type="password"  id="password" name="password" onChange={(e) => setPassword(e.target.value)}></input>

            <label className='role-label'>Select Role:</label>
            <select className="job-role-menu2" value={jobRole} onChange={(e)=> setJobRole(e.target.value)}>
                <option value="">Select</option>
                <option value="admin">Admin</option>
                <option value="jobseeker">Jobseeker</option>
                <option value="employeer">Employeer</option>
            </select>
            <button className="login-button" type="submit">Login</button>
            
        </form>

        <span className="to-register-messagae" style={{marginTop: "3ch", textAlign:'center'}}>Don't Have an accout? <Link to="/register" className="to-register-link">Register</Link></span>
        
        {/* <Link to="/register"><button className="to-register-button" >Don't Have an accout? Register </button></Link>  */}
        </div>
        </div>
    );
};
export default Login