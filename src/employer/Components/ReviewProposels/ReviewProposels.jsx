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
        const baseurl=`http://localhost:5109/employer/jobs/${jobId}`
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
        const baseurl=`http://localhost:5109/jobs/${jobId}/proposals`
        try {
            const response = await fetch( `http://localhost:5109/jobs/${jobId}/proposals` , {
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