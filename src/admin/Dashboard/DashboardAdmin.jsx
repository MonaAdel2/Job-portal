import React, {useEffect, useState } from "react";
import './Dashboard.css'
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import JobCard from './JobCard/JobCard.jsx';


function DashboardAdmin(){

    const [jobs, setJobs] = useState(null); // Stores fetched data
    useEffect (()  => {
        const fetchData = async () => {
        
            try {
                const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjI5YzVhN2RmLWE5M2MtNGVmNi1iMzUwLTEzYTliYzY3M2U3MyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkpvYlNlZWtlciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2dpdmVubmFtZSI6IkpvYlNlZWtlcjEiLCJleHAiOjE3MTQ2ODYyMzUsImlzcyI6ImpvYkNvbm5lY3QifQ.JCuqCIzZTzbdHNO61aVqh4WbaekXdg04KtqewwY5oeA";

                const url = "https://jobconnectapi-1.onrender.com/jobs/active"; // Replace with your API endpoint
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

    const jobsList =[
        { jobId: 1, title: 'Item 1' },
        { jobId: 2, title: 'Item 2' },
        { jobId: 3, title: 'Item 3' },
        { jobId: 3, title: 'Item 3' }
      ]

    return(
        <>

                {/* <>
                    <h2 style={{ marginLeft: '20px' }}>Jobs</h2>
                    <ul className='jobs-list' style={{listStyle: 'none', padding: '0', margin: '0'}}>
                        {jobsList.map(job => (
                            <li style={{textDecoration: 'none'}}>
                                <JobCard 
                                        title={job.title}
                                        // location={job.location}
                                        salary={`${job.salray}`}
                                        type={job.jobType}
                                        jobId={`${job.jobId}`}/>
                               
                            </li>
                        ))}
                    </ul>
                    <ToastContainer />
                </> */}
            {jobs && (
                <>
                    <h2 style={{ marginLeft: '20px' }}>Jobs</h2>
                    <ul className='jobs-list' style={{listStyle: 'none', padding: '0', margin: '0'}}>
                        {jobs.map(job => (
                            <li style={{textDecoration: 'none'}}>
                                <JobCard 
                                        title={job.jobTitle}
                                        // location={job.location}
                                        salary={`${job.salray}`}
                                        type={job.jobType}
                                        jobId={job.jobId}/>
                               
                            </li>
                        ))}
                    </ul>
                    <ToastContainer />
                </>
            )}
        </>
    );
}
export default DashboardAdmin