import React, {useState}from "react";
import './Signup.css'
import { Link, useNavigate } from "react-router-dom";

function Signup (props){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('')
    const [userName,setUserName] = useState('')
    const [jobRole,setJobRole]= useState('')
    const [company, setCompany] = useState(null);
    const [industry, setIndustry] = useState(null);
    const [error, setError] = useState('');
    const [showEmployerFields, setShowEmployerFields] = useState(false);
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const navigate =useNavigate()
    const toggleEmployerFields = (e) => {
        setShowEmployerFields(e.target.value === "employer");
    };
    const submitUser = async (e) => {
        e.preventDefault();
        if (!email || !password || !userName || !jobRole) {
            setError("Please fill out all required fields");
            return;
        }
        if (!regex.test(password)) {
            setError('Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one digit, and one special character.');
            return
        }
    
        if (jobRole === "employer" && (!company || !industry)) {
            setError("Please fill out all employer fields");
            return;
        }
       
    const userData = {
        Email: email,
        Password: password,
        UserName: userName,
        Role: jobRole,
        Company: company,
        Industry: industry
    };

    try {
        const url= "http://localhost:5109/register"
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        if (response.ok) {
            navigate("/login")
            // const token = data.token;

            setError("User successfully registered!");

        } else {
             setError("Failed to register user");
        }
    } catch (error) {
        setError("Error occurred, please try again later");
    }
    setTimeout(() => {
        setError('');
    }, 2000);
};
    
    return(
        <div className="signup-container" >
         <div className="register-form-container">
            <div className="welcome-container">
                <h1 className="register-header">Register</h1>
                <br/>
                <span className="register-subheader">Let’s Sign up first for enter into JobConnect Website.</span>
            </div>
            {error && <div className="error-message">{error}</div>}
            <form className="register-form" onSubmit={submitUser}>
                <label className='userName-label'htmlFor="userName" style={{marginLeft: "5.5ch"}}>UserName</label>
                <input className="register-input" value={userName} type="text" placeholder="userName" id="userName" name="userName" onChange={(e) => setUserName(e.target.value)}></input>
                
                <label className='email-label'htmlFor="email">Email</label>
                <input className="register-input" value={email} type="email" placeholder="youremail@gmail.com" id="email" name="email"  onChange={(e) => setEmail(e.target.value)}></input>
                
                <label className="password-label"  htmlFor="password">Password</label>
                <input className="register-input" value={password} type="password" placeholder="************" id="password" name="password" onChange={(e) => setPassword(e.target.value)}></input>
            
            <div className="menu-div">
                <label className="select-role-label" >Select Role:</label>
                <select className="job-role-menu"  value={jobRole} onChange={(e)=> {setJobRole(e.target.value); toggleEmployerFields(e);}}>
                    <option value="">Select</option>
                    <option value="jobseeker">Jobseeker</option>
                    <option value="employer">Employer</option>
                </select>
            </div>

            {showEmployerFields && (
                <>
                    {/* <div className="company-div"> */}
                        <label className='company-label'htmlFor="company" style={{marginLeft: "5.5ch"}}>Company</label>
                        <input className="register-input" value={company} type="text" placeholder="company" id="company" name="company" onChange={(e) => setCompany(e.target.value)}></input>
                    {/* </div> */}
                    {/* <div className="industry-div">  */}
                        <label className='industry-label' htmlFor="name" style={{marginLeft: "5.5ch"}}>Industry</label>
                        <input className="register-input" value={industry} type="text" placeholder="industry" id="industry" name="industry" onChange={(e) => setIndustry(e.target.value)}></input>
                    {/* </div> */}
                </>
            )}
            <button className="register-button" type="submit">Sign up</button>
            </form>

            <span className="to-login-message">Have an account? <Link to="/login" className="to-login-link">Log in</Link></span>
        </div>
      </div>
      
    );
};
export default Signup