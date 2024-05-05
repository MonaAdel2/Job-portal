import './EmployerCard.css'
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react';
 import 'react-responsive-modal/styles.css';
import { Link } from "react-router-dom";

function EmployerCard(props){

  const token = localStorage.getItem('token');
    
      return (
        
        <div className="container">
          
          <hr />
          <div className="card">
           
            {/* <img className="card-img" src= "https://via.placeholder.com/70" alt="Company Logo"></img> */}
            <div className="card-description">
                <h2 className="card-title">{props.name}</h2>
                <span>{props.employerId}</span>
            </div>
            <div>
                  <button className="button">
                    <Link to={'/admin/employerDetails/'+ props.employerId}>Read</Link>
                  </button>
            </div>
          
          </div>
    
        </div>
      );

        
}
export default EmployerCard