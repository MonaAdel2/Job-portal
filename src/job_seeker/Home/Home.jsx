import WelcomeMessage from './WelcomeMessage.jsx'
import JobCard from '../JobCard/JobCard.jsx';
import React, {useEffect, useState } from "react";
import './home.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyHeader from '../NavBar/MyHeader.jsx';

function Home(){
    const token = localStorage.getItem('token');

    const [jobs, setJobs] = useState(null); // Stores fetched data
    useEffect (()  => {
        const fetchData = async () => {
            try {
                const url = "http://localhost:5109/jobs/active"; // Replace with your API endpoint
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
        { id: 1, jobTitle: 'Item 1' , salary: 5000},
        { id: 2, jobTitle: 'Item 2', salary: 5000 },
        { id: 3, jobTitle: 'Item 3' , salary: 5000},
        { id: 3, jobTitle: 'Item 3', salary: 5000 }
      ]

    return(
        <>

        <MyHeader/>
        <WelcomeMessage />
        <h2 style={{ marginLeft: '20px' }}>Available Jobs</h2>

                {/* <>
                    <WelcomeMessage/>
                    <h2 style={{ marginLeft: '20px' }}>Available Jobs</h2>
                    <ul className='jobs-list' style={{listStyle: 'none', padding: '0', margin: '0'}}>
                        {jobsList.map(job => (
                            <li style={{textDecoration: 'none'}}>
                                <JobCard 
                                        title={job.jobTitle}
                                        // location={job.location}
                                        salary={job.salary.toString()}
                                        type={job.jobType}
                                        jobId={job.jobId}/>
                               
                            </li>
                        ))}
                    </ul>
                    <ToastContainer />
                </> */}

            {jobs && jobs.length > 0 ? (
                <>
                    
                    <ul className='jobs-list' style={{listStyle: 'none', padding: '0', margin: '0'}}>
                        {jobs.map(job => (
                            <li key={job.jobId} style={{textDecoration: 'none'}}>
                                <JobCard 
                                    title={job.jobTitle}
                                    location={job.location}
                                    salray={`${job.salray}`}
                                    type={job.jobType}
                                    jobId={job.jobId}
                                />
                            </li>
                        ))}
                    </ul>
                    <ToastContainer />
                </>
            ) : (
                <p style={{textAlign: "center", fontSize: 'large'}}>No jobs available at the moment.</p>
            )}
        </>
    );
}
export default Home