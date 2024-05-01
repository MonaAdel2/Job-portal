import Button from "../../Shared/Button";
import React, {useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import './JobDetails.css'


 
function JobDetailsAdmin(){
    const detailssss = { jobId: 1, 
        title: 'Item 1',
        employerName: 'Mona',
    salray: '5000' ,
    jobType: "Full time"}

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
        <>

{/* <div style={{}}>
            {details && (
                <>
                    <div className="job-title-details">
                        <h1>{details.jobTitle}</h1>
                    </div>
                    
                    <div>
                        <ul className="job-details">
                            <li><b>Employer : </b> {details.employerName}</li>
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
                        <Button title="Accept" />
                       
                    </div>
                    
                      <div className="btn-container2"> <Button title="Reject" /></div>
                    
                </>
            )}
        </div> */}
        
        <>
                    <div className="job-title-details">
                        <h1>{detailssss.title}</h1>
                    </div>
                    
                    <div>
                        <ul className="job-details">
                            <li><b>Employer : </b> {detailssss.employerName}</li>
                            <li><b>Job Type : </b> {detailssss.jobType}</li>
                            <li><b>Salary : </b> {`${detailssss.salray}`}</li>
                            {/* <li><b>Date : </b> {new Date(detailsss.postDate).toLocaleDateString()}</li> */}
                            <li className="job-description">
                                <b>Job description </b>
                                <p>{detailssss.jobDescription}</p>
                            </li>
                        </ul>
                    </div>
                    <div className="btn-container">
                            <button className="button">Accept</button>
                        </div>
                         
                         <div className="btn-contanier2">
                             <button className="button" >
                                   Reject
                            </button>
                        </div>
                    
        </>
        </>
        
    );
}


export default JobDetailsAdmin
