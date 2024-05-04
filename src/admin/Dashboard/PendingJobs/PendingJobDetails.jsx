import React, {useEffect, useState} from "react";
import {useParams, useNavigate} from 'react-router-dom';
import './PendingJobDetails.css'
import AdminHeader from "../../AdminHeader";


function PendingJobDetails() {
    
    const detail = {
        jobId: 1,
        title: 'Item 1',
        employerName: 'Mona',
        salray: '5000',
        jobType: "Full time"
    }

    const {jobId} = useParams();

    const [details, setJobDetails] = useState(null); // Stores fetched data
    useEffect(() => {
        const fetchData = async () => {

            const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6Ijk5YjYxM2RjLWM4OGQtNDRmNC1hNjFhLTYzZGNhZDNhM2EyYyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZ2l2ZW5uYW1lIjoiQWRtaW4xIiwiZXhwIjoxNzE0ODcxODk2LCJpc3MiOiJqb2JDb25uZWN0In0.-m0jVBVvn1mQQVT3vqI9NiT3u7cop2NZiUxCPxvaOiw"

            try {
                const url = `http://localhost:5109/admin/jobs/${jobId}`; // Replace with your API endpoint
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json', // Adjust if your API requires headers
                        'Authorization': `Bearer ${token}`
                    }
                });
                const data = await response.json();
                console.log('data is $' + {data})
                setJobDetails(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }

        };
        fetchData();
    }, []); // Runs only on component mount

    const handleAccept = async () => {
        try {
            const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjI5YzVhN2RmLWE5M2MtNGVmNi1iMzUwLTEzYTliYzY3M2U3MyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkpvYlNlZWtlciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2dpdmVubmFtZSI6IkpvYlNlZWtlcjEiLCJleHAiOjE3MTQ1MDQwNjksImlzcyI6ImpvYkNvbm5lY3QifQ.L-mU_o-CdQ76FT03uwda02u1uobdHaY0Pi3faxUJu5U";
            const url = `http://localhost:5109/jobs/${jobId}/accept`;
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            // Handle response accordingly
            console.log("Job accepted successfully!");
        } catch (error) {
            console.error("Error accepting job:", error);
        }
    };

    const handleReject = async () => {
        try {
            const navigate = useNavigate();
            const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjI5YzVhN2RmLWE5M2MtNGVmNi1iMzUwLTEzYTliYzY3M2U3MyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkpvYlNlZWtlciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2dpdmVubmFtZSI6IkpvYlNlZWtlcjEiLCJleHAiOjE3MTQ1MDQwNjksImlzcyI6ImpvYkNvbm5lY3QifQ.L-mU_o-CdQ76FT03uwda02u1uobdHaY0Pi3faxUJu5U";

            const url = `http://localhost:5109/jobs/${jobId}/reject`;
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            // Handle response accordingly
            console.log("Job rejected successfully!");
            navigate("/admin/pendingJobs")
        } catch (error) {
            console.error("Error rejecting job:", error);
        }
    };


    return (
        <>

            <AdminHeader/>
            <div style={{}}>
                 {details ? (
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
                                <li><b>Job description</b></li>
                            </ul>
                            <p style={{marginLeft: '25px'}}>{detail.jobDescription}</p>
                        </div>
                        <div className="btn-container">
                            <button className="button"
                                    style={{marginRight: '60px'}}
                                    onClick={handleAccept}>

                                Accept
                            </button>
                        </div>

                        <div className="btn-contanier2">
                            <button className="button"
                                    style={{marginRight: '40px'}}
                                    onClick={handleReject}>
                                Reject
                            </button>
                        </div>

                    </>
            ) : (
                <p style={{ textAlign: 'center' }}>No job details available.</p>
            )}
             </div>
             {/* <div className="job-title-details">
                            <h1>{detail.jobTitle}</h1>
                        </div>

                        <div>
                            <ul className="job-details">
                                <li><b>Employer : </b> {detail.employerName}</li>
                                <li><b>Job Type : </b> {detail.jobType}</li>
                                <li><b>Salary : </b> {`${detail.salray}`}</li>
                                <li><b>Date : </b> {new Date(detail.postDate).toLocaleDateString()}</li>
                                <li><b>Job description</b></li>
                            </ul>
                            <p style={{marginLeft: '25px'}}>{detail.jobDescription}</p>
                        </div>
                        <div className="btn-container">
                            <button className="button"
                                    style={{marginRight: '60px'}}
                                    onClick={handleAccept}>

                                Accept
                            </button>
                        </div>

                        <div className="btn-contanier2">
                            <button className="button"
                                    style={{marginRight: '40px'}}
                                    onClick={handleReject}>
                                Reject
                            </button>
                        </div> */}
        </>

    );
}


export default PendingJobDetails
