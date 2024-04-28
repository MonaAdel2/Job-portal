import Button_card from "../JobCard/Button_card.jsx";
import ElementWithIcon from "../JobCard/ElementWithIcon.jsx";
import locationIcon from "../../assets/location_icon.png";
import jobIcon from "../../assets/bag_icon.png";
import salaryIcon from "../../assets//salary_icon.png";
import deleteIcon from "../../assets//delete_icon_.png";
import '../JobCard/JobCard.css'
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function SavedJobCard(props){
    const [jobs, setJobs] = useState(null);

    const handleDelete = async (jobId) => {
        try {
          await fetch(`https://jobconnectapi-1.onrender.com/admin/jobs/${jobId}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImEzODc1MWMxLTQ5ZjctNDNmZC05ZDJmLTljYjA0Y2U4NzFhNyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZ2l2ZW5uYW1lIjoiQWRtaW4xMjMiLCJleHAiOjE3MTQ0MTg5MDEsImlzcyI6ImpvYkNvbm5lY3QifQ.-cEEwG8d1Cs6mmgSzIQ4yaiu65ODaRlTs1kTsGUzacE'
            }
          });
          // Remove the deleted item from the local state
          setJobs(jobs.filter(job => job.id !== jobId));
          
        } catch (error) {
          console.error('Error deleting job:', error);
        }
      };

    const handleDelete2 = ()=>{
        toast.success("The saved job is deleted");
    }

    return(
        
        <div className="card">
            <img className="saved_card-icon" 
                        src={deleteIcon} 
                        alt={"delete icon"} 
                        style={{ width: '1%', height: '1%', marginLeft: '5px', marginRight: '15px', cursor:'pointer'}} 
                        onClick={() => handleDelete2()}
                        // onClick={() => handleDelete(props.jobId)}
         >
                     
                </img>
            <img className="card-img" src= "https://via.placeholder.com/70" alt="Company Logo"></img>
            <div className="card-description">
                <h2 className="card-title">{props.title}</h2>
                <div className="card-text">
                    <ElementWithIcon label={props.location} icon={locationIcon} />
                    <ElementWithIcon label={props.type} icon={jobIcon} />
                    <ElementWithIcon label={props.salary} icon={salaryIcon} />
                </div>
            </div>
                <Button_card jobId={props.jobId}/>
        
        </div>
    );
}
export default SavedJobCard