import './JobProposal.css'
import {ToastContainer, toast} from 'react-toastify';
import React, {useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import MyHeader from '../NavBar/MyHeader';

function JobProposal() {

    const [selectedFile, setSelectedFile] = useState(null);
    const [coverLetter, setCoverLetter] = useState("")
    const {jobId} = useParams()

    const handleClick = () => {
        toast.success("Thanks for your applying. Your proposal is received.");
    }

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
        // console.log("teh selected file: "+event.target.files[0].name);
    };

    const handleCoverLetterChange = (event) => {
        setCoverLetter(event.target.value);
    }

    const handleSubmit = async (event) => {
        console.log("the endpoint should be called");

        event.preventDefault();
        const formData = new FormData();
        const submissionDate = new Date().toISOString();
        formData.append('submissionDate', submissionDate)
        formData.append('CV', selectedFile);
        formData.append('coverLetter', coverLetter);
        formData.append('jobId', jobId);
        // formData.append('jobSeekerId', userId)

        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjI5YzVhN2RmLWE5M2MtNGVmNi1iMzUwLTEzYTliYzY3M2U3MyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkpvYlNlZWtlciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2dpdmVubmFtZSI6IkpvYlNlZWtlcjEiLCJleHAiOjE3MTQ5NjQ2ODgsImlzcyI6ImpvYkNvbm5lY3QifQ.Cy_Ne55XTpigFD4-vdXTx27Y07b-EfSfRc-xvoLsyx4"
        try {
            const url = "http://localhost:5109/jobs/apply"
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}` // Adjust if your API requires headers
                },
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

    return (
        <>
            <MyHeader/>
            <div className="job-title-details">
                <h2>Apply for the job</h2>
            </div>
            <ToastContainer/>
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
                    <div className="proposal-element-container">
                        <label><b>CV : </b></label>
                        <input type="file"
                               required
                               onChange={handleFileChange}></input>
                    </div>
                    <button className="button" style={{right: '5%'}}>
                        <Link to={'/job-seeker/applyJob/' + {jobId} + '/submitted'}>Submit</Link>
                    </button>
                </form>

            </div>
        </>
    );
}

export default JobProposal