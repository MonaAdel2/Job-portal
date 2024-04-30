import React, {useState} from "react";
import './Login.css'
function Login(props) {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('')
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email);
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
            <button className="login-button" type="submit">Login</button>
        </form><button className="to-register-button"onClick={()=>props.onFormSwitch('register')}>Don't Have an accout? Register </button>
        </div>
        </div>
    );
}
export default Login