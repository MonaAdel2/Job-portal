import { Link } from 'react-router-dom';

function Button_card() {

    const clickHandler = () =>{

    }
    return (

        <button className="custom-button" onClick={() => clickHandler()}>
            <Link to="/jobDetails" className="custom-button">View Details</Link>
        </button>

        
    );
}

export default Button_card;