import SavedJobCard from './SavedJobCard.jsx'
import React, {useEffect, useState } from "react";
import '../Home/home.css'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyHeader from '../NavBar/MyHeader.jsx';

function SavedJobs(){

    const token = localStorage.getItem('token');
    const [jobs, setJobs] = useState(null); // Stores fetched data
    useEffect (()  => {
        const fetchData = async () => {
            const userId = "eeb7afcf-0736-46b5-8368-d08c20387288"
            try {
                const url = `http://localhost:5109/jobs/${userId}/saved`; // Replace with your API endpoint
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
            <MyHeader/>

            <h2 style={{ marginLeft: '20px' }}>Saved Jobs</h2>
            {jobs && jobs.length > 0 ? (
                <>
                    <div>
                        
                        <div>
                            <ul className='jobs-list' style={{ listStyle: 'none', padding: '0', margin: '0' }}>
                                {jobs.map(job => (
                                    <li key={job.jobId} style={{ textDecoration: 'none' }}>
                                        <SavedJobCard
                                            title={job.jobTitle}
                                            id={job.jobId}
                                            // location={job.location}
                                            salary={job.salray}
                                            type={job.jobType}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <ToastContainer />
                    </div>
                </>
            ) : (
                <p style={{textAlign: "center" , fontSize: 'large'}}>No saved jobs available.</p>
            )}

        </>

       
        

       
    );
}

export default SavedJobs