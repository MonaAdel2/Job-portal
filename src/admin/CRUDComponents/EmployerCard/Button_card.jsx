import { Link } from 'react-router-dom';


function Button_card(props) {


    

    return (

        <button className="custom-button">
            <Link to={"/ReadEmployerDetails/" + props.employerId} className="custom-button">Read</Link>
        </button>

        
    );
}

export default Button_card;