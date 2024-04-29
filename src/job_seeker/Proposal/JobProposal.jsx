import './JobProposal.css'
import { ToastContainer, toast} from 'react-toastify';
import React, {useState} from 'react';
import { Link, useParams } from 'react-router-dom';

function JobProposal(){

    const [selectedFile, setSelectedFile] = useState(null);
    const [coverLetter, setCoverLetter] = useState("")
    const {jobId} = useParams()

    const handleClick= ()=>{
        toast.success("Thanks for your applying. Your proposal is recevied.");
    }

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
        // console.log("teh selected file: "+event.target.files[0].name);
    };

    const handleCoverLetterChange = (event) =>{
        setCoverLetter(event.target.value);
    }
    
      const handleSubmit = async (event) => {
        console.log("the endpoint should be called");
        
        event.preventDefault();
        const formData = new FormData();
        const submissionDate = new Date().toISOString();
        formData.append('submissionDate', submissionDate)
        formData.append('file', selectedFile);
        formData.append('coverLetter', coverLetter);
        formData.append('jobId', jobId);
        // formData.append('jobSeekerId', userId)
    
        
        try {
          const url = "---- endpoint to upload file----"  
          const response = await fetch(url, {
            method: 'POST',
            body: formData,
          });
          if (response.ok) {
            console.log('File uploaded successfully');
          } else {
            console.error('Failed to upload file');
          }
        } catch (error) {
          console.error('Error uploading file:', error);
        }
      };

    return(
        <>
            <div className="job-title-details">
                <h2>Apply for the job</h2>
            </div>
            <ToastContainer />
            <div>
                <form className="proposal-form"
                        onSubmit={handleSubmit}>
                    <div className="proposal-element-container">
                        <label><b>Cover Letter : </b></label>
                        <textarea className="proposal-txt-area" 
                                placeholder="Type your answer here......"
                                required
                                maxLength={3000}
                                onChange={handleCoverLetterChange}
                                rows="10" cols="80">
                        </textarea>
                    </div>
                    <div className="proposal-element-container" >
                        <label><b>CV : </b></label>
                        <input type="file" 
                               required
                               onChange={handleFileChange}></input>
                    </div>
                    <button className="button" style={{right: '5%'}} >
                        <Link to={'/job-seeker/applyJob/' + {jobId} + '/submitted'}>Submit</Link>
                    </button>
                </form>
                
            </div>
        </>
    );
}
export default JobProposal