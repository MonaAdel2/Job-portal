import React, { useEffect, useState } from 'react'
import './JobsList.css'
import { JobsListData} from './JobsListData'
import { Link } from 'react-router-dom'
import NavGraph from '../NavGraph/NavGraph';

function JobList(props) {
  const [allJobs, setAllJobs] = useState(null);
  const token = localStorage.getItem('token');

   useEffect(() => {
       fetchData();
   }, []);
 
   const fetchData = async () => {
     console.log('Fetching data...');
       try {
           const response = await fetch('http://localhost:5109/employer/jobs', {
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
           setAllJobs(jsonData);
       } catch (error) {
           console.error('Error fetching data:', error);
       }
   };  
  return (
    <div>
      <NavGraph/>
      <div className='create-job-header'>Jobs list</div>
     <div className='job-list-container' >
        
        </div>
        <div className='job-cards-container'>
        {allJobs && allJobs.map((val,key)=>{
        return(
         <div className='job-card' key={key} >
           <p className='job-title'>{val.jobTitle}</p>
           <p className='job-date'>{val.postDate}</p>
           <p className='job-description'>{val.jobDescription}</p>
           <Link to={`/reviewProposels/${val.jobId}`}>
                <button className='explore-button'>Explore</button>
            </Link>
      </div>
        )
      })} 
    </div>
    </div>
    
  )
}

export default JobList