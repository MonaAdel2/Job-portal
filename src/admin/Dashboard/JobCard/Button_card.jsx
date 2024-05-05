import { Link } from 'react-router-dom';


function Button_card(props) {

    let path = ""
    console.log(props.flag);

    if(props.flag === "j"){
        path = "/admin/jobDetails/" + props.jobId
        console.log("jobs button clicked");

    }else if(props.flag === "p"){
        path = "/admin/pendingJobDetails" + props.jobId
        console.log("pending jobs button clicked");

    }else{
        console.log(" button clicked");
    }

    return (

        <button className="custom-button">
            <Link to={path} className="custom-button">View Details</Link>
        </button>

        
    );
}

export default Button_card;