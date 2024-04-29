import SavedJobCard from './SavedJobCard.jsx'
import React, {useEffect, useState } from "react";
import '../Home/home.css'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SavedJobs(){

    const [jobs, setJobs] = useState(null); // Stores fetched data
    useEffect (()  => {
        const fetchData = async () => {
            const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjI5YzVhN2RmLWE5M2MtNGVmNi1iMzUwLTEzYTliYzY3M2U3MyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkpvYlNlZWtlciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2dpdmVubmFtZSI6IkpvYlNlZWtlcjEiLCJleHAiOjE3MTQ1MDQwNjksImlzcyI6ImpvYkNvbm5lY3QifQ.L-mU_o-CdQ76FT03uwda02u1uobdHaY0Pi3faxUJu5U";
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
            {jobs && (
                <>
                    <div>
                        <h2 style={{marginLeft: '20px'}}>Saved Jobs</h2>
                        <div>
                            <ul className='jobs-list' style={{listStyle: 'none', padding: '0', margin: '0'}}>
                                        {jobs.map(job => (
                                            <li style={{textDecoration: 'none'}}>
                                                <SavedJobCard 
                                                        title={job.jobTitle}
                                                        // location={job.location}
                                                        salary={`${job.salray}`}
                                                        type={job.jobType}/>
                                            
                                            </li>
                                        ))}
                            </ul>
                        </div>
                        <ToastContainer />
                    </div>
                </>
            )}
        </>

       
        

       
    );
}

export default SavedJobs