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
import AuthGuard from './Guards/AuthGguard.jsx';

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
        element: (
          <AuthGuard>
            <Home />
          </AuthGuard>
        ),
        
      },
      {
        path: '/job-seeker/home',
        element: (
          <AuthGuard>
            <Home />
          </AuthGuard>
        ),
         
      },
      {
        path: '/job-seeker/savedJobs',
        element: (
          <AuthGuard>
             <SavedJobs />
          </AuthGuard>
        ),

      },
      {
        path: '/job-seeker/chats',
        element: (
          <AuthGuard>
            <ChatsList />
          </AuthGuard>
        ),
        
      },
      {
        path: '/job-seeker/chats/chat/:chatId',
        element: (
          <AuthGuard>
             <Chat />
          </AuthGuard>
        ),
       
      },
      {
        path: '/job-seeker/jobDetails/:jobId',
        element: (
          <AuthGuard>
              <JobDetails />
          </AuthGuard>
        ),
        
      },
      {
        path: '/job-seeker/searchResults',
        element: (
          <AuthGuard>
            <SearchResults />
          </AuthGuard>
        ),
         
      },
      {
        path: '/job-seeker/applyJob/:jobId',
        element: (
          <AuthGuard>
            <JobProposal />
          </AuthGuard>
        ),
        
      },
      {
        path: '/job-seeker/applyJob/:jobId/submitted',
        element: (
          <AuthGuard>
            <SubmittedProposal />
          </AuthGuard>
        ),
        
      },


// ----------------------- Employer Routes -------------------------------------------------------
      {
        path: '/employer',
        element: (
          <AuthGuard>
            <PostJob/>
          </AuthGuard>
        ),
      },
      {
        path: '/postJob',
        element: (
          <AuthGuard>
            <PostJob />
          </AuthGuard>
        )
      },
      {
        path: '/jobsList',
        element: (
          <AuthGuard>
            <JobsList/>
          </AuthGuard>
        ),
      },
      {
        path: '/reviewProposels/:jobId',
        element: (
          <AuthGuard>
             <ReviewProposels />
          </AuthGuard>
        ),
       
      },
      {
        path: '/viewProposel/:proposalId',
        element: (
          <AuthGuard>
            <ViewProposel />
          </AuthGuard>
        ),
        
      },
      {
        path: '/chats',
        element: (
          <AuthGuard>
            <EmployerChatsList />
          </AuthGuard>
        ),
        
      },
      {
        path: '/chats/chat/:chatId',
        element: (
          <AuthGuard>
            <EmployerChat />
          </AuthGuard>
        ),
        
      },

// ------------------------- Admin Routes ----------------------------------------------------------

      {
        path: '/admin',
        element: (
          <AuthGuard>
              <DashboardAdmin />
          </AuthGuard>
        ),
        
      },
      {
        path: '/admin/dashboard',
        element: (
          <AuthGuard>
             <DashboardAdmin />
          </AuthGuard>
        ),
       
      },
      {
        path: '/admin/jobDetails/:jobId',
        element: (
          <AuthGuard>
             <JobDetailsAdmin />
          </AuthGuard>
        ),
       
      },
      {
        path: '/admin/pendingJobs',
        element: (
          <AuthGuard>
              <PendingJobs />
          </AuthGuard>
        ),
        
      },
      {
        path: '/admin/pendingJobDetails/:jobId',
        element: (
          <AuthGuard>
              <PendingJobDetails />
          </AuthGuard>
        ),
        
      },
      {
        path: '/admin/employerDetails/:employerId',
        element: (
          <AuthGuard>
            <ReadEmployerDetails />
          </AuthGuard>
        ),
        
      },
      {
        path: '/admin/employers',
        element: (
          <AuthGuard>
             <EmployersList />
          </AuthGuard>
        ),
       
      },

      {
        path: '*',
        element: <Error404 />,
      },
    ],
  },
  
]);
