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

    return(
        <div className="card">
           
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