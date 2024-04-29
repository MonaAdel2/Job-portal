import checkMarkImage from '../../assets/check_mark_icon2.png'
import './JobProposal.css'
import { Link } from 'react-router-dom';

function SubmittedProposal(){
    return(
        <>
            <div className='submitted-proposal-container'>
                <img className="img" src={checkMarkImage}></img>
                <h1>The propsal is submitted successfully.</h1>
                <button className='button' style={{right: '44%'}}>
                    <Link to={'/'}>Go back to home</Link>
                </button>
            </div>
        </>
    );
}
export default SubmittedProposal