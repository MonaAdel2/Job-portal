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
    const token = localStorage.getItem('token');

    const handleClick2 = ()=>{
        toast.success("The job is Saved");
        console.log("the job should be saved...")
    }


    const handleSave = async (jobId) => {
        try {

            const url = `http://localhost:5109/jobs/${jobId}/save`; // Replace with your API endpoint

            const response = await fetch(url, {
            method: 'POST', // or PUT depending on your API endpoint
            headers: {
              'Content-Type': 'application/json',
                'Authorization':`Bearer ${token}`
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
                    <ElementWithIcon label={props.salray} icon={salaryIcon} />
                </div>
            </div>
            <Button_card jobId={props.jobId}/>


        </div>
    );
}
export default JobCard