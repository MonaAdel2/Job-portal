import { createBrowserRouter,} from "react-router-dom";
import App from './App.jsx'
import Error404 from './Error404.jsx'
import Home from './job_seeker/Home/Home.jsx'
import JobDetails from "./job_seeker/JobDetails/JobDetails.jsx";
import SavedJobs from "./job_seeker/SavedJobs/SavedJobs.jsx";
import SearchResults from "./job_seeker/SearchResults/SearchResults.jsx";

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
                path: "/job-seeker/savedJobs",
                element: <SavedJobs/>,
            },
            {
                path: "/job-seeker/chats",
                element: <div>Chats</div>,
            },
            {
                path: "/job-seeker/jobDetails/:jobId",
                element: <JobDetails />
            },
            {
                path: "/job-seeker/searchResults",
                element: <SearchResults />
            },
            {
                path: "*",
                element: <Error404/>,
            },
        ],
    },

    
    
  ]);