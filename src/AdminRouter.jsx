import { createBrowserRouter,} from "react-router-dom";
import App from './App.jsx'
import Error404 from './Error404.jsx'
import JobDetailsAdmin from './admin/JobDetails/JobDetailsAdmin.jsx'; 
import DashboardAdmin from "./admin/Dashboard/DashboardAdmin.jsx";
import JobCard from "./job_seeker/JobCard/JobCard.jsx";
import ReadEmployerDetails from "./admin/CRUDComponents/EmployerDetails/ReadEmployerDetails.jsx";
import ReadEmployerCard from "./admin/CRUDComponents/EmployerCard/EmployerCard.jsx";
import EmployersList from './admin/CRUDComponents/EmployersList.jsx'

export const adminRouter = createBrowserRouter([
    {
        path: "",
        element: <App/>,
        children: [
         
          {    
             path:"",
             element: <DashboardAdmin/>,
          },

        {
            path: "/admin/jobDetails/:jobId", 
            element: <JobDetailsAdmin />
        },
         
        {
            path: "/admin/employerDetails/:employerId",
            element: <ReadEmployerDetails/>,
        },

        // {
        //     path: "/admin/employerCard",
        //     element: <ReadEmployerCard/>,
        // },

        {
            path: "/Admin/JobCard",
            element: <JobCard/>,
        },


        {
            path: "/admin/employers",
            element: <EmployersList/>,
        },
        
        {
            path: "*",
            element: <Error404/>,
        },
    ],

    }
]);