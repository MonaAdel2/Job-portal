import React from 'react'; 
import { createBrowserRouter } from 'react-router-dom'; 
import App from './App.jsx'; 
import Error404 from './Error404.jsx'; 
import ProtectedRoute from './ProtectedRoute.jsx'; // Import ProtectedRoute 
 
// Import components from all three router files 
import Home from './job_seeker/Home/Home.jsx'; 
import JobDetails from './job_seeker/JobDetails/JobDetails.jsx'; 
import SavedJobs from './job_seeker/SavedJobs/SavedJobs.jsx'; 
import SearchResults from './job_seeker/SearchResults/SearchResults.jsx'; 
import JobProposal from './job_seeker/Proposal/JobProposal.jsx'; 
import SubmittedProposal from './job_seeker/Proposal/SubmittedProposal.jsx'; 
import Login from './auth/Login/Login.jsx'; 
import Signup from './auth/Signup/Signup.jsx'; 
import Chat from './job_seeker/ChatsList/Chat/Chat.jsx'; 
import ChatsList from './job_seeker/ChatsList/ChatsList.jsx'; 
 
import JobDetailsAdmin from './admin/Dashboard/JobDetails/JobDetailsAdmin.jsx'; 
import DashboardAdmin from './admin/Dashboard/DashboardAdmin.jsx'; 
import PendingJobs from './admin/Dashboard/PendingJobs/PendingJobs.jsx'; 
import PendingJobDetails from './admin/Dashboard/PendingJobs/PendingJobDetails.jsx'; 
import ReadEmployerDetails from './admin/CRUDComponents/EmployerDetails/ReadEmployerDetails.jsx'; 
import EmployersList from './admin/CRUDComponents/EmployersList.jsx'; 
 
import PostJob from './employer/Components/PostJob/PostJob.jsx'; 
import JobsList from './employer/Components/JobsList/JobsList.jsx'; 
import ReviewProposels from './employer/Components/ReviewProposels/ReviewProposels.jsx'; 
import ViewProposel from './employer/Components/ViewProposel/ViewProposel.jsx'; 
import EmployerChatsList from './employer/Components/ChatsList/EmployerChatsList.jsx'; 
import EmployerChat from './employer/Components/ChatsList/Chat/EmployerChat.jsx'; 
 
export const Router2 = createBrowserRouter([ 
  { 
    path: '', 
    element: <App />, 
    children: [ 
      { 
        path: '', 
        element: <Signup />, 
      }, 
      { 
        path: '/register', 
        element: <Signup />, 
      }, 
      { 
        path: '/login', 
        element: <Login />, 
      }, 
 
// ---------------------- Job Seeker Routes ------------------------------------------------------- 
 
      { 
        path: '/job-seeker', 
        element: <ProtectedRoute component={Home} />,
        // element: <Home />,
      }, 
      { 
        path: '/job-seeker/home', 
        element: <ProtectedRoute component={Home} />,
      }, 
      { 
        path: '/job-seeker/savedJobs', 
        element: <ProtectedRoute component={SavedJobs} />, 
      }, 
      { 
        path: '/job-seeker/chats', 
        element: <ProtectedRoute component={ChatsList} />, 
      }, 
      { 
        path: '/job-seeker/chats/chat/:chatId', 
        element: <ProtectedRoute component={Chat} />, 
      }, 
      { 
        path: '/job-seeker/jobDetails/:jobId', 
        element: <ProtectedRoute component={JobDetails} />, 
      }, 
      { 
        path: '/job-seeker/searchResults', 
        element: <ProtectedRoute component={SearchResults} />, 
      }, 
      { 
        path: '/job-seeker/applyJob/:jobId', 
        element: <ProtectedRoute component={JobProposal} />, 
      }, 
      { 
        path: '/job-seeker/applyJob/:jobId/submitted', 
        element: <ProtectedRoute component={SubmittedProposal} />, 
      }, 
 
 
// ----------------------- Employer Routes ------------------------------------------------------- 
      { 
        path: '/employer', 
        element: <ProtectedRoute component={PostJob} />, 
        
      }, 
      { 
        path: '/postJob', 
        element: <ProtectedRoute component={PostJob} />,       }, 
      { 
        path: '/jobsList', 
        element: <ProtectedRoute component={JobsList} />, 
      }, 
      { 
        path: '/reviewProposels/:jobId', 
        element: <ProtectedRoute component={ReviewProposels} />, 
      }, 
      { 
        path: '/viewProposel/:proposalId', 
        element: <ProtectedRoute component={ViewProposel} />, 
      }, 
      { 
        path: '/chats', 
        element: <ProtectedRoute component={EmployerChatsList} />, 
      }, 
      { 
        path: '/chats/chat/:chatId', 
        element: <ProtectedRoute component={EmployerChat} />, 
      }, 
 
//----------------------- Admin Routes ---------------------------------------------------------- 
      { 
        path: '/admin', 
        element: <ProtectedRoute component={DashboardAdmin} />, 
      }, 
      { 
        path: '/admin/dashboard', 
        element: <ProtectedRoute component={DashboardAdmin} />, 
      }, 
      { 
        path: '/admin/jobDetails/:jobId', 
        element: <ProtectedRoute component={JobDetailsAdmin} />, 
      }, 
      { 
        path: '/admin/pendingJobs', 
        element: <ProtectedRoute component={PendingJobs} />, 
      }, 
      { 
        path: '/admin/pendingJobDetails/:jobId', 
        element: <ProtectedRoute component={PendingJobDetails} />, 
      }, 
      { 
        path: '/admin/employerDetails/:employerId', 
        element: <ProtectedRoute component={ReadEmployerDetails} />, 
      }, 
      { 
        path: '/admin/employers', 
        element: <ProtectedRoute component={EmployersList} />, 
      }, 
 
      { 
        path: '*', 
        element: <Error404 />, 
      }, 
    ], 
  }, 
   
]);