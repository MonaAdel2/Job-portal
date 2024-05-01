import React, {useState}from "react";
import './Signup.css'
import { Link } from "react-router-dom";

function Signup(props) {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('')
    const [firstname,setFirstName] = useState('')
    const [secondname,setSecondName] = useState('')

    const [role, setRole] = useState('');

    const submitUser = async() =>
    {
      const userData = {
       email: email,
       password: password,
        firstname: firstname,
        secondname:secondname,
        role: role
       }

       console.log(userData)

       try{

        const result = await fetch("url", 
        {
            method: "POST",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(userData)
        })

        const resultInbJson= await  result.json
        console.log(resultInbJson)

        // localStorage.setItem("myToken", resultInbJson.token)


        if(role === "Job Seeker"){
            // route to job seeker home page
           
        }else if(role === "Employer"){
            // route to employer home page
        }

       }catch{
            console.error("error: can't register you")
       }
       
    }

    const handleRoleChange = (event) => {
        setRole(event.target.value);
    };
    
    return(
        <div className="signup-container" >
            <div className="register-form-container">
                <div className="welcome-container">
                    <h1 className="register-header">Register</h1>
                    <br/>
                    <span className="register-subheader">Let’s Sign up first for enter into JobConnect Website.</span>
                </div>

                <form className="register-form" /*onSubmit={handleSubmit}*/>


                    <div className="select-container">
                        <label className='label'htmlFor="name"><b>Role</b></label>
                        <select className='select_' value={role} onChange={handleRoleChange}>
                            <option value="">Select a role</option>
                            <option value="Employer">Employer</option>
                            <option value="Job Seeker">Job Seeker</option>
                
                        </select>
                    </div>

                   
                    <div className="input-container">
                        <label className='label'htmlFor="name"><b>First Name</b></label>
                        <input value={firstname} type="text" placeholder="firstName" id="firstName" name="Firstname" onChange={(e) => setFirstName(e.target.value)}></input>
                    </div>
                
                    <div className="input-container">
                        <label className='second-name-label'htmlFor="Secondname"><b>Second Name</b></label>
                        <input value={secondname} type="text" placeholder="secondName" id="secondName" name="secondName" onChange={(e) => setSecondName(e.target.value)}></input>
                    </div>

                    <div className="input-container">
                        <label className='email-label' htmlFor="email"><b>Email</b></label>
                        <input  value={email} type="email" placeholder="youremail@gmail.com" id="email" name="email"  onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                        
                    <div className="input-container">
                        <label className="password-label"  htmlFor="password"><b>Password</b></label>
                        <input value={password} type="password" placeholder="************" id="password" name="password" onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    
                
                    <div className="button-container">
                    <button className="button" type="submit" onClick={submitUser}>Sign up</button>
                    </div>
                    
                </form>

                <div className="button-container">
                <button className="to-login-button"onClick={()=>props.onFormSwitch('login')}>Have an accout? Log in </button>
                </div>
            </div>
        </div>
    );
}
export default Signup