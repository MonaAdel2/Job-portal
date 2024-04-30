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
            const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjI5YzVhN2RmLWE5M2MtNGVmNi1iMzUwLTEzYTliYzY3M2U3MyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkpvYlNlZWtlciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2dpdmVubmFtZSI6IkpvYlNlZWtlcjEiLCJleHAiOjE3MTQ1MDQwNjksImlzcyI6ImpvYkNvbm5lY3QifQ.L-mU_o-CdQ76FT03uwda02u1uobdHaY0Pi3faxUJu5U";
            try {
                const url = `http://localhost:5109/jobs/${jobId}`; // Replace with your API endpoint
                const response = await fetch (url, {
                    method: 'GET', 
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization':`Bearer ${token}` // Adjust if your API requires headers
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
                            <li><b>Employer : </b> {details.employer.userName}</li>
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
