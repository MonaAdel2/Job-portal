import { createBrowserRouter,} from "react-router-dom";
import App from './App.jsx'
import Error404 from './Error404.jsx'
import JobDetailsAdmin from './admin/Dashboard/JobDetails/JobDetailsAdmin.jsx'; 
import DashboardAdmin from "./admin/Dashboard/DashboardAdmin.jsx";
import PendingJobs from './admin/Dashboard/PendingJobs/PendingJobs.jsx'
import ReadEmployerDetails from "./admin/CRUDComponents/EmployerDetails/ReadEmployerDetails.jsx";
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
            path: "/admin/pendingJobs/",
            element: <PendingJobs />
        },
        {
            path: "/admin/employerDetails/:employerId",
            element: <ReadEmployerDetails/>,
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