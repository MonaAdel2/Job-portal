import { Link } from 'react-router-dom';


function Button_card(props) {

    const path = ""
    if(props.flag === "j"){
        path = "/admin/jobDetails/" + props.jobId
    }else if(props.flag === "p"){
        path = "/admin/pendingJobDetails/" + props.jobId
    }

    return (

        <button className="custom-button">
            <Link to={path} className="custom-button">View Details</Link>
        </button>

        
    );
}

export default Button_card;