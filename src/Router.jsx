import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import Error404 from './Error404.jsx';

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

export const Router = createBrowserRouter([

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
        element: <Home />,
      },
      {
        path: '/job-seeker/home',
        element: <Home />,
      },
      {
        path: '/job-seeker/savedJobs',
        element: <SavedJobs />,
      },
      {
        path: '/job-seeker/chats',
        element: <ChatsList />,
      },
      {
        path: '/job-seeker/chats/chat/:chatId',
        element: <Chat />,
      },
      {
        path: '/job-seeker/jobDetails/:jobId',
        element: <JobDetails />,
      },
      {
        path: '/job-seeker/searchResults',
        element: <SearchResults />,
      },
      {
        path: '/job-seeker/applyJob/:jobId',
        element: <JobProposal />,
      },
      {
        path: '/job-seeker/applyJob/:jobId/submitted',
        element: <SubmittedProposal />,
      },


// ----------------------- Employer Routes -------------------------------------------------------
      {
        path: '/employer',
        element: <PostJob />,
      },
      {
        path: '/postJob',
        element: <PostJob />,
      },
      {
        path: '/jobsList',
        element: <JobsList />,
      },
      {
        path: '/reviewProposels/:jobId',
        element: <ReviewProposels />,
      },
      {
        path: '/viewProposel/:proposalId',
        element: <ViewProposel />,
      },
      {
        path: '/chats',
        element: <EmployerChatsList />,
      },
      {
        path: '/chats/chat/:chatId',
        element: <EmployerChat />,
      },

// ------------------------- Admin Routes ----------------------------------------------------------

      {
        path: '/admin',
        element: <DashboardAdmin />,
      },
      {
        path: '/admin/dashboard',
        element: <DashboardAdmin />,
      },
      {
        path: '/admin/jobDetails/:jobId',
        element: <JobDetailsAdmin />,
      },
      {
        path: '/admin/pendingJobs',
        element: <PendingJobs />,
      },
      {
        path: '/admin/pendingJobDetails/:jobId',
        element: <PendingJobDetails />,
      },
      {
        path: '/admin/employerDetails/:employerId',
        element: <ReadEmployerDetails />,
      },
      {
        path: '/admin/employers',
        element: <EmployersList />,
      },

      {
        path: '*',
        element: <Error404 />,
      },
    ],
  },
  
]);
