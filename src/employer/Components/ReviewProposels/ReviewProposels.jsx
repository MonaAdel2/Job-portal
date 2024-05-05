import React from 'react'
import  { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { JobsListData } from '../JobsList/JobsListData';
import { proposelsData } from './proposelsData';
import './ReviewProposels.css'
import NavGraph from '../NavGraph/NavGraph';
function ReviewProposels() {
 const [Job, setJob] = useState(null);
 const [proposels, setProposels] = useState(null);
 const { jobId } = useParams();
 const token = localStorage.getItem('token');
    useEffect(() => {
 // const job = JobsListData.find(item => item.jobId === jobId);
  //    setJob(JobsListData.find(item => item.jobId === jobId))
    fetchData();
    getProposels()
    }, [jobId]);

    const fetchData = async () => {
      console.log('Fetching data...');
        const baseurl=`https://jobconnectapi-1.onrender.com/employer/jobs/${jobId}`
        try {
            const response = await fetch( baseurl, {
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
            setJob(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const getProposels =async ()=>{
        const baseurl=`https://jobconnectapi-1.onrender.com/jobs/${jobId}/proposals`
        try {
            const response = await fetch( `https://jobconnectapi-1.onrender.com/jobs/${jobId}/proposals` , {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjIzZjljNzJkLTIyYTQtNDQzNi04MDdmLWJkODJkMGFlMWY3NSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkVtcGxveWVyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZ2l2ZW5uYW1lIjoiRW1wbG95ZXIyIiwiZXhwIjoxNzE0OTcxOTkwLCJpc3MiOiJqb2JDb25uZWN0In0.5Jd6RxCvg9YSdtPrEQ47SJim7ga8U6ybGDA8QHBeVRY`,
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            setProposels(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
  return (
     <div>
        <NavGraph/>
    <div className='job-details-header'>Job details</div> 
    <div>
    <div className='view-proposels-content'>
    <div className='job-details-card' >
       {Job && (
                    <>
                        <p className='job-title'>{Job.jobTitle}</p>
                        <p className='job-date'>{Job.postDate}</p>
                        <div className='job-type-div'>
                        <p className='job-type-text'>Job Type:</p>
                        <p className='job-type'>{Job.jobType}</p>
                        </div>
                        <div className='job-type-div'>
                        <p className='job-salary-text'>Job salary:</p>
                        <p className='job-salary'>{Job.salray}</p>
                        </div>
                        <div className='job-description-div' >
                        <p className='job-description-text'>Job description:</p>
                        <p className='job-description-details'>{Job.jobDescription}</p>
                        </div>
            
                    </>
                )}     
      </div>
      <div className='user-cards-container'>
        
      {proposels && proposels.map((val,key)=>{
        return(
            <div className='user-card'  key={key} >
            <p className='user-name'>{val.jobSeeker.userName}</p>
            <p className='user-email'>{val.jobSeeker.email}</p>
            <div className='buttons-container'>
                <Link to={`/viewProposel/${val.proposalId}`}><button className='view-proposel-button'>View proposel</button></Link>
            </div>
            </div>
        )
      })} 
           </div>
    </div>
    <div>
    </div>
    </div>
     </div>
  )
}

export default ReviewProposels