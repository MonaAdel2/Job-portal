// import { Link } from 'react-router-dom';

function Button_card() {

    const clickHandler = () =>{

    }
    return (
        <button className="custom-button" onClick={() => clickHandler()}>View Details</button>
        // <Link to="/JobDetails" className="custom-button">View Details</Link>
    );
}

export default Button_card;