import Button from "../../Shared/Button";
import React, {useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import './JobDetails.css'


 
function JobDetails(){
    // const details = props.jobDetails
    const { jobId } = useParams();

    const [details, setJobDetails] = useState(null); // Stores fetched data
    useEffect (()  => {
        const fetchData = async () => {
        
            try {
                const url = "https://jobconnectapi-1.onrender.com/jobs/" + {jobId}; // Replace with your API endpoint
                const response = await fetch (url, {
                    method: 'GET', 
                    headers: {
                        'Content-Type': 'application/json' // Adjust if your API requires headers
                    }
                });
                const data = await response.json();
                console.log('data is $'+{data})
                setJobDetails (data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
            
        };
        fetchData();
    }, []); // Runs only on component mount

    

    return (
        <div style={{}}>
            {details && (
                <>
                    <div className="job-title-details">
                        <h1>{details.jobTitle}</h1>
                    </div>
                    
                    <div>
                        <ul className="job-details">
                            <li><b>Employer : </b> {details.employer_name}</li>
                            <li><b>Job Type : </b> {details.jobType}</li>
                            <li><b>Salary : </b> {`${details.salray}`}</li>
                            <li><b>Date : </b> {new Date(details.postDate).toLocaleDateString()}</li>
                            <li className="job-description">
                                <b>Job description </b>
                                <p>{details.jobDescription}</p>
                            </li>
                        </ul>
                    </div>
                    <div className="btn-container">
                        {/* <Button title="Apply This Job" /> */}
                        <button className="button">
                            <Link to={'/job-seeker/applyJob/'+ jobId}>Apply This Job</Link>
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}


export default JobDetails
