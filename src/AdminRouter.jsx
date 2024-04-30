import { createBrowserRouter,} from "react-router-dom";
import App from './App.jsx'
import Error404 from './Error404.jsx'
import Home from './job_seeker/Home/Home.jsx'
import JobDetails from "./job_seeker/JobDetails/JobDetails.jsx";
import SavedJobs from "./job_seeker/SavedJobs/SavedJobs.jsx";
import SearchResults from "./job_seeker/SearchResults/SearchResults.jsx";
import JobProposal from "./job_seeker/Proposal/JobProposal.jsx";
import SubmittedProposal from "./job_seeker/Proposal/SubmittedProposal.jsx";
import Login from "./auth/Login/Login.jsx";
import Signup from "./auth/Signup/Signup.jsx";

export const adminRouter = createBrowserRouter([
    {
        path: "",
        element: <App/>,
        children: [
            {
                path: "",
                element: <Signup/>,
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
                path: "/job-seeker/applyJob/:jobId",
                element: <JobProposal />
            },
            {
                path: "/job-seeker/applyJob/:jobId/submitted",
                element: <SubmittedProposal/>
            },
            {
                path: "*",
                element: <Error404/>,
            },
        ],
    },

    
    
  ]);