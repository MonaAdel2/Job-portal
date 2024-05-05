import React from 'react'
import './ViewProposel.css'
import  { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import NavGraph from '../NavGraph/NavGraph';
function ViewProposel() {
    const { proposalId } = useParams();
    const [proposal, setProposal] = useState(null);
    const [attachmentPath, setAttachmentPath] = useState(null);
    useEffect(() => {
          fetchData();
        }, [proposalId]);
        
    //   const downloadFile = () => {
    //     fetch(attachmentPath)
    //         .then((response) => response.blob())
    //         .then((blob) => {
    //             const url = window.URL.createObjectURL(new Blob([blob]));
    //             const link = document.createElement('a');
    //             link.href = url;
    //             link.setAttribute('download', 'filename'); // Set desired file name here
    //             document.body.appendChild(link);
    //             link.click();
    //             link.parentNode.removeChild(link);
    //         })
    //         .catch((error) => console.error('Error downloading file:', error));
    // };
    const handleDoownloadClick=()=>{
        setAttachmentPath(proposal.JobSeeker.attachmentPath)
        downloadFile
    };
     const fetchData = async () => {
          console.log('Fetching data...');
        
            try {
                const baseurl='https://jobconnectapi-1.onrender.com/jobs/proposals/${proposalId}'
                const response = await fetch( baseurl, {
                    method: 'GET',
                    headers: {
                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjI5YzVhN2RmLWE5M2MtNGVmNi1iMzUwLTEzYTliYzY3M2U3MyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkpvYlNlZWtlciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2dpdmVubmFtZSI6IkpvYlNlZWtlcjEiLCJleHAiOjE3MTQ2NDY4OTIsImlzcyI6ImpvYkNvbm5lY3QifQ.OG_EHO82A23dcZvXRNofllgpdlLSVHCHX5dY_dA5JY8'
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
        const handleAccept = async()=>{
            try {
                const baseurl='https://jobconnectapi-1.onrender.com/jobs/proposals/${proposalId}/accept'
                const response = await fetch( baseurl, {
                    method: 'GET',
                    headers: {
                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjI5YzVhN2RmLWE5M2MtNGVmNi1iMzUwLTEzYTliYzY3M2U3MyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkpvYlNlZWtlciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2dpdmVubmFtZSI6IkpvYlNlZWtlcjEiLCJleHAiOjE3MTQ2NDY4OTIsImlzcyI6ImpvYkNvbm5lY3QifQ.OG_EHO82A23dcZvXRNofllgpdlLSVHCHX5dY_dA5JY8'
                    }
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        const handleReject = async()=>{
            try {
                const baseurl='https://jobconnectapi-1.onrender.com/jobs/proposals/${proposalId}/reject'
                const response = await fetch( baseurl, {
                    method: 'GET',
                    headers: {
                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjI5YzVhN2RmLWE5M2MtNGVmNi1iMzUwLTEzYTliYzY3M2U3MyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkpvYlNlZWtlciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2dpdmVubmFtZSI6IkpvYlNlZWtlcjEiLCJleHAiOjE3MTQ2NDY4OTIsImlzcyI6ImpvYkNvbm5lY3QifQ.OG_EHO82A23dcZvXRNofllgpdlLSVHCHX5dY_dA5JY8'
                    }
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
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
      <div className='job-details-header'>Proposel</div> 
    </div>
      <div className='proposel-container'>
        <p className='proposal-username'>proposal.Jobseeker.userName</p>
        <div className='contact-div'>
            <p className='contact-text'>Contact:</p>
            <p className='proposal-contact'>proposal.Jobseeker.email</p>
        </div>
        <div className='submitted-date-div'> 
        <p className='proposal-submitted-date-text' >Submitted Date:</p>
        <p className='proposal-submitted-date'>proposal.SubmissionDate</p>
        </div>
        <div className='cover-letter-div'>
            <p className='proposal-cover-letter-text'>Cover letter:</p>
            <p className='proposal-cover-letter'>proposal.CoverLetter</p>
         <button className='download-resume-button' onClick={handleDoownloadClick}>Download resume</button>  
        </div>
  
        <button className='accept-proposal-button' onClick={handleAccept}>Accept</button>
        <button className='reject-proposal-button' onClick={handleReject}>reject</button>
      </div>
    </div>

  )
}
export default ViewProposel