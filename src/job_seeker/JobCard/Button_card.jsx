import { Link } from 'react-router-dom';


function Button_card(props) {


    

    return (

        <button className="custom-button">
            <Link to={"/jobDetails/" + props.jobId} className="custom-button">View Details</Link>
        </button>

        
    );
}

export default Button_card;