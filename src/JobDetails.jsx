import Button from "./Button";

function JobDetails(props){
    const details = props.jobDetails
    return(
        <div>
            <div className="job-title-details">
                <h1>Job Title Job Title</h1>
            </div>
            
            <div>
                <ul className="job-details">
                    <li><b>Employer :</b> {details.employer_name}</li>
                    <li><b>Job Type :</b> {details.Job_type}</li>
                    <li><b>Budget :</b> {details.budget}</li>
                    <li><b>Proposals submitted :</b> {details.proposals}</li>
                    <li><b>Creation Date :</b> {details.date}</li>

                    <li className="job-description"><b>Job description </b>
                        <p>{details.description}</p>
                    </li>
                </ul>
            </div>
            <div>
                <Button title="Apply This Job"/>
            </div>
            {/* <div>
                <Button title="Save"/>
            </div> */}

        </div>
    );
}

export default JobDetails
