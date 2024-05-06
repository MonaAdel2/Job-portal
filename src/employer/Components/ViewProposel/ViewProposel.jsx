import React, {useEffect, useState} from 'react'
import './ViewProposel.css'
import {useParams, useNavigate} from 'react-router-dom';
import NavGraph from '../NavGraph/NavGraph';
import axios from "axios";
import saveAs from 'file-saver';


const token = localStorage.getItem("token");

function ViewProposel() {
    const {proposalId} = useParams();
    const [proposal, setProposal] = useState(null);
    const [attachmentPath, setAttachmentPath] = useState(null);
    const navigate =useNavigate()
    // const token = localStorage.getItem('token');
    
    const handleLogout = async (e) => {

        try {
            const url= "http://localhost:5109/login" // url for logout (admin)
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json', // Adjust if your API requires headers
                    'Authorization':`Bearer ${token}`
                },
                body: JSON.stringify(userData)
            });
            const data = await response.json();
            if (data.successful === true) {
                console.log("Logged out");
                localStorage.removeItem('token');
            } else {
                
            }
        } catch (error) {
            
        }
    }
    let url ;
    useEffect(() => {
        fetchData();
    }, [proposalId]);


    const downloadFile = async () => {
        try {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            const response = await axios.get(`http://localhost:5109/jobs/proposals/${proposalId}/CV`, {
                responseType: 'blob'
            });
            const blob = response.data;
            console.log(response)
            const filename = proposal.jobSeeker.userName.concat("_Resume.pdf"); // Set a custom filename
            saveAs(blob, filename);
        } catch (error) {
            console.error('Download error:', error);
        }
    };

    const fetchData = async () => {
        console.log('Fetching data...');

        try {
            const baseurl = `http://localhost:5109/jobs/proposals/${proposalId}`
            const response = await fetch(baseurl, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            setProposal(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const handleAccept = async () => {
        try {
            const baseurl = `http://localhost:5109/jobs/proposals/${proposalId}/accept`
            const response = await fetch(baseurl, {
                method: 'Post',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            navigate("/jobsList")
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    const handleReject = async () => {
        try {
            const baseurl = `http://localhost:5109/jobs/proposals/${proposalId}/reject`
            const response = await fetch(baseurl, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            navigate("/jobsList")
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }


  return (
    <div>
        <NavGraph/>
    {/* <div className='job-list-container'>
      <div className='job-details-header'>Proposel</div> 
    </div>
      <div className='proposel-container'>
        <p className='proposal-username'>{proposal.Jobseeker.userName}</p>
        <div className='contact-div'>
            <p className='contact-text'>Contact:</p>
            <p className='proposal-contact'>{proposal.Jobseeker.email}</p>
        </div>
        <div className='submitted-date-div'> 
        <p className='proposal-submitted-date-text' >Submitted Date:</p>
        <p className='proposal-submitted-date'>{proposal.SubmissionDate}</p>
        </div>
        <div className='cover-letter-div'>
            <p className='proposal-cover-letter-text'>Cover letter:</p>
            <p className='proposal-cover-letter'>{proposal.CoverLetter}</p>
         <button className='download-resume-button' onClick={handleDoownloadClick}>Download resume</button>  
        </div>
  
        <button className='accept-proposal-button' onClick={handleAccept}>Accept</button>
        <button className='reject' onClick={handleReject}>reject</button>
      </div> */}
      <div className='job-list-container'>
      <div className='job-details-header'>Proposal</div>
    </div>
        {proposal && <div className='proposel-container'>
        <p className='proposal-username'>{proposal.jobSeeker.userName}</p>
        <div className='contact-div'>
            <p className='contact-text'>Contact:</p>
            <p className='proposal-contact'>{proposal.jobSeeker.email}</p>
        </div>
        <div className='submitted-date-div'> 
        <p className='proposal-submitted-date-text' >Submitted Date:</p>
        <p className='proposal-submitt  ed-date'> new Date(proposal.submissionDate).toLocaleDateString()</p>
        </div>
        <div className='cover-letter-div'>
            <p className='proposal-cover-letter-text'>Cover letter:</p>
            <p className='proposal-cover-letter'>{proposal.coverLetter}</p>
         <button className='download-resume-button' onClick={downloadFile}>Download resume</button>  
        </div>
{/*   
        <button className='accept-proposal-button' onClick={handleAccept}>Accept</button>
        <button className='reject-proposal-button' onClick={handleReject}>reject</button> */}
        { proposal.Status === 0 && 
        <>   <button className='accept-proposal-button' onClick={handleAccept}>Accept</button> 
        <button className='reject-proposal-button' onClick={handleReject}>Reject</button>  
        </>}
      </div>}
    </div>

  )
}
export default ViewProposel