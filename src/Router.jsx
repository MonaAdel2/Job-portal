import { createBrowserRouter,} from "react-router-dom";
import App from './App.jsx'
import Error404 from './Error404.jsx'
import Home from './job_seeker/Home/Home.jsx'
import JobDetails from "./job_seeker/JobDetails/JobDetails.jsx";

export const router = createBrowserRouter([
    {
        path: "",
        element: <App/>,
        children: [
            {
                path: "",
                element: <Home/>,
            },
            {
                path: "/savedJobs",
                element: <div>Saved Jobs</div>,
            },
            {
                path: "/chats",
                element: <div>Chats</div>,
            },
            {
                path: "/jobDetails",
                element: <JobDetails/>
            },
            {
                path: "*",
                element: <Error404/>,
            },
        ],
    },

    
    
  ]);