import JobDetails from './job_seeker/JobDetails/JobDetails.jsx'
import MyHeader from './job_seeker/NavBar/MyHeader.jsx'
import { Outlet } from "react-router-dom";
import AdminHeader from './admin/AdminHeader.jsx'

// import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {

  return (
    <>
    {/* <MyHeader/> */}
    <AdminHeader/>
    <Outlet/>

      
    </>
  )
}

export default App
