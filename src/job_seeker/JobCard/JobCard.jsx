import Button_card from "./Button_card.jsx";
import ElementWithIcon from "./ElementWithIcon.jsx";
import locationIcon from "../../assets/location_icon.png";
import jobIcon from "../../assets/bag_icon.png";
import salaryIcon from "../../assets//salary_icon.png";
import saveIcon from "../../assets//save_icon.png";
import './JobCard.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function JobCard(props){

    const handleClick2 = ()=>{
        toast.success("The job is Saved");
        console.log("the job should be saved...")
    }


    const handleSave = async (jobId) => {
        try {
          const response = await fetch(`https://jobconnectapi-1.onrender.com/savedJobs`, {
            method: 'POST', // or PUT depending on your API endpoint
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImEzODc1MWMxLTQ5ZjctNDNmZC05ZDJmLTljYjA0Y2U4NzFhNyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZ2l2ZW5uYW1lIjoiQWRtaW4xMjMiLCJleHAiOjE3MTQzMDk4MjEsImlzcyI6ImpvYkNvbm5lY3QifQ.qemoWRGuI_cx2qKO835gnj1FgfxaQCaPEWKiijn8w1Q'
            },
            body: JSON.stringify({ jobId: jobId }) // Send jobId or job data to save
          });
          if (response.ok) {
            toast.success("Job saved successfully!");
          } else {
            toast.error("Failed to save job.");
          }
        } catch (error) {
          console.error('Error saving job:', error);
          toast.error("Failed to save job.");
        }
      };


    return(
        <div className="card">
            <img className="saved_card-icon" 
                        src={saveIcon} 
                        alt={"save icon"} 
                        style={{    width: '1%', 
                                    height: '1%',
                                    marginLeft: '5px', 
                                    marginRight: '15px',
                                    cursor: 'pointer'
                                }} 
                        onClick={() => handleSave(props.jobId)}
                    >
                     
                </img>
            <img className="card-img" src= "https://via.placeholder.com/70" alt="Company Logo"></img>
            <div className="card-description">
                <h2 className="card-title">{props.title}</h2>
                <div className="card-text">
                    <ElementWithIcon label={props.location} icon={locationIcon} />
                    <ElementWithIcon label={props.type} icon={jobIcon} />
                    <ElementWithIcon label={props.salary} icon={salaryIcon} />
                </div>
            </div>
            <Button_card jobId={props.jobId}/>


        </div>
    );
}
export default JobCard