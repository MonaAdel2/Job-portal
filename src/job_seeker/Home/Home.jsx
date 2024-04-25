import WelcomeMessage from './WelcomeMessage.jsx'
import JobCard from '../JobCard/JobCard.jsx';
import './home.css'

function Home(){
    return(
        <>
            <WelcomeMessage/>
            <h2 style={{ marginLeft: '20px' }}>Available Jobs</h2>
            <JobCard title='Job Title'/>
            <JobCard title='Job Title'/>
            <JobCard title='Job Title'/>
            <JobCard title='Job Title'/>
        </>
    );
}
export default Home