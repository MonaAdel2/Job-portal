import React, { useState } from 'react'
import './PostJob.css'
import { Link } from 'react-router-dom';
import NavGraph from '../NavGraph/NavGraph';
 function PostJob() {
  const [jobTitle,setJobTitle] = useState('');
  const [jobType,setJobType] = useState("");
  const [jobSalery,setjobSalery] = useState("");
  const [jobDate,setjobDate] = useState("");
  const [jobindustry,setjobIndustry] = useState("");
  const [jobLocation,setjobLocation] = useState("");
  const [jobDescription,setjobDescription] = useState("");
  const [error, setError] = useState('');
  const [jobData, setJobData] = useState(null);
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString()
  const token = localStorage.getItem('token');
  const handleSubmit= async ()=> {
          const jobData = {
           jobTitle: jobTitle,
           jobType: jobType,
            salray: jobSalery,
            postDate:currentDate,
            jobDescription:jobDescription,
            isActive:true
          }
      const url= "http://localhost:5109/employer/jobs/add"

      const result = await fetch(url,
        {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(jobData)
        })
        const resultInbJson =  await result.json
        console.log(resultInbJson)
        setJobData(jobData)

  }
  return (
    <div className='postJobContaioner' >
      <NavGraph/>
     <div className='create-job-header'>Create a job</div>
     <div className="job-details-container">
        <div className='job-details-container-card'>
            <div className='job-title-type-container'>
            <div className='job-title-div'>
                <label className='job-title-label'>Job Title</label>
                <input required className='job-title-input' value={jobTitle} type='text' onChange={(e)=> setJobTitle(e.target.value)}></input>
            </div>
          <div className='job-type-div'>
                <label className='job-type-label'>Job Type</label>
                <select className="select" id="job-type-input" value={jobType} onChange={(e)=> setJobType(e.target.value)}>
                <option value="">Select</option>
                <option value="contract">Contract</option>
                <option value="fulltime">Full-time</option>
                <option value="parttime">Part-time</option>
            </select>
            </div>
            </div>
            <div className='job-salery-date-container'>
            <div className='job-salary-div'>
                <label className='job-salery-label'>Salery</label>
                <input className='job-salery-input' value={jobSalery} type='text' onChange={(e)=> setjobSalery(e.target.value)} ></input>
            </div>
            </div>

            <div className='job-industry-date-container'>
            <div className='job-industry-div'>
                <label className='job-industry-label'>Industry</label>
                <input className='job-industry-input' value={jobindustry} type='text' onChange={(e)=> setjobIndustry(e.target.value)} ></input>
            </div>

            </div>
            <div className='job-location-date-container'>
            <div className='job-location-div'>
                <label className='job-location-label'>Location</label>
                <input className='job-location-input' value={jobLocation} type='text' onChange={(e)=> setjobLocation(e.target.value)} ></input>
            </div>
            </div>
            <div className='job-description-div'>
            <label className='job-description-label'>Job description</label>
            <textarea className='job-description-input' value={jobDescription} type='text' onChange={(e)=> setjobDescription(e.target.value)}></textarea>
            </div>
            <div className='post-button-contanier'>
               <button className='post-job-button' onClick={handleSubmit}>Post a job</button> 
            </div>
            
        </div>
     </div>
    </div>
    
  )
}
export default PostJob