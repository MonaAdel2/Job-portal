import './JobProposal.css'
import {ToastContainer, toast} from 'react-toastify';
import React, {useState} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import MyHeader from '../NavBar/MyHeader';

function JobProposal() {
    const token = localStorage.getItem('token');

    const [selectedFile, setSelectedFile] = useState(null);
    const [coverLetter, setCoverLetter] = useState("")
    const {jobId} = useParams()
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [proposal, setProposal] = useState(
        {
            "cv": "",
            "coverLetter": ""
        }
    )

    const handleClick = () => {
        console.log("Thanks for your applying. Your proposal is received.");
    }

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
        // console.log("teh selected file: "+event.target.files[0].name);
    };

    const handleCoverLetterChange = (event) => {
        setCoverLetter(event.target.value);
    }

    const handleSubmit = async (event) => {
        if (!coverLetter || !selectedFile ) {
            setError("Please fill out all required fields");
            return;
        }
        console.log("the endpoint should be called");
        console.log("job id:", jobId)
        event.preventDefault();
        const formData = new FormData();
        const submissionDate = new Date().toISOString();
        formData.append('submissionDate', submissionDate)
        formData.append('CV', selectedFile);
        formData.append('coverLetter', coverLetter);
        formData.append('jobId', jobId);
        // formData.append('jobSeekerId', userId)

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
                navigate(`/job-seeker/applyJob/${jobId}/submitted`);
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
                    <button type="submit" className="button" style={{right: '5%'}} onClick={handleSubmit}>
                        {/* <Link to={'/job-seeker/applyJob/' + {jobId} + '/submitted'}>Submit</Link> */}
                        Submit
                    </button>
                </form>

            </div>
        </>
    );
}

export default JobProposal