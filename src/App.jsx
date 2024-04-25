import JobDetails from './job_seeker/JobDetails/JobDetails.jsx'
import MyHeader from './job_seeker/NavBar/MyHeader.jsx'
import { Outlet } from "react-router-dom";

// import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {

  const jobDetails = {    employer_name: "Mona Adel", 
                          Job_type:"Part-Time",
                          budget:"2000",
                          date:"12/12/2024",
                          proposals:"15",
                          description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
}

  return (
    <>
    <MyHeader/>
    <Outlet/>
    
    {/* A list of this card should display using the list of jobs availiable */}
    {/* <JobCard title = "Android Developer" type="Full time" salary="8500 L.E" location="Cairo"/> */}
    
    {/* <JobDetails/> */}
      
    </>
  )
}

export default App
