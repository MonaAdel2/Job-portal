import React, {useEffect, useState } from "react";
import './PendingJobs.css'
import JobCard from '../JobCard/JobCard.jsx';
import { Link } from "react-router-dom";
import AdminHeader from "../../AdminHeader.jsx";

function PendingJobs(){

    const [jobs, setJobs] = useState(null); // Stores fetched data
    const token = localStorage.getItem('token');

    useEffect (()  => {
        const fetchData = async () => {
        
            try {
                // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6Ijk5YjYxM2RjLWM4OGQtNDRmNC1hNjFhLTYzZGNhZDNhM2EyYyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZ2l2ZW5uYW1lIjoiQWRtaW4xIiwiZXhwIjoxNzE0OTYyNjYyLCJpc3MiOiJqb2JDb25uZWN0In0.CZV4pNmyRSR4d03TqGv450ay_UnE9AFa2FbE6rxI6pg"
                const url = "http://localhost:5109/admin/jobs/waiting"; // Replace with your API endpoint

                const response = await fetch (url, {
                    method: 'GET', 
                    headers: {
                        'Content-Type': 'application/json', // Adjust if your API requires headers
                        'Authorization':`Bearer ${token}`                    
                    }
                });
                const data = await response.json();
                console.log('data is ${data}')
                setJobs (data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
            
        };
        fetchData();
    }, []); // Runs only on component mount

    return(
        <>
            <AdminHeader/>
            <h2 style={{ marginLeft: '20px' }}>Pending Jobs</h2>
            {jobs && jobs.length > 0 ? (
            <ul className='jobs-list' style={{listStyle: 'none', padding: '0', margin: '0'}}>
                {jobs.map(job => (
                    <li key={job.jobId} style={{textDecoration: 'none'}}>
                        <JobCard 
                                flag="p"
                                jobDescription={job.jobDescription}
                                title={job.jobTitle}
                                // location={job.location}
                                salray={`${job.salray}`}
                                type={job.jobType}
                                jobId={job.jobId}/>
                    </li>
                ))}
            </ul>
             ) : (
            <p style={{ textAlign: 'center' }}>No pending jobs available.</p>
            )}

        </>
    );
}
export default PendingJobs