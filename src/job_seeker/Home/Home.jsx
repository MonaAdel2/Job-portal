import WelcomeMessage from './WelcomeMessage.jsx'
import JobCard from '../JobCard/JobCard.jsx';
import React, {useEffect, useState } from "react";
import './home.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home(){

    const [jobs, setJobs] = useState(null); // Stores fetched data
    useEffect (()  => {
        const fetchData = async () => {
        
            try {
                const url = "https://jobconnectapi-1.onrender.com/admin/jobs"; // Replace with your API endpoint
                const response = await fetch (url, {
                    method: 'GET', 
                    headers: {
                        'Content-Type': 'application/json', // Adjust if your API requires headers
                        'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImEzODc1MWMxLTQ5ZjctNDNmZC05ZDJmLTljYjA0Y2U4NzFhNyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZ2l2ZW5uYW1lIjoiQWRtaW4xMjMiLCJleHAiOjE3MTQ0MTg5MDEsImlzcyI6ImpvYkNvbm5lY3QifQ.-cEEwG8d1Cs6mmgSzIQ4yaiu65ODaRlTs1kTsGUzacE'
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
        { id: 1, jobTitle: 'Item 1' },
        { id: 2, jobTitle: 'Item 2' },
        { id: 3, jobTitle: 'Item 3' },
        { id: 3, jobTitle: 'Item 3' }
      ]

    return(
        <>

                {/* <>
                    <WelcomeMessage/>
                    <h2 style={{ marginLeft: '20px' }}>Available Jobs</h2>
                    <ul className='jobs-list' style={{listStyle: 'none', padding: '0', margin: '0'}}>
                        {jobsList.map(job => (
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
                </> */}

            {jobs && (
                <>
                    <WelcomeMessage/>
                    <h2 style={{ marginLeft: '20px' }}>Available Jobs</h2>
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
export default Home