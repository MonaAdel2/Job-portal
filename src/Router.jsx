import { createBrowserRouter,} from "react-router-dom";
import App from './App.jsx'
import Error404 from './Error404.jsx'
import Home from './Home.jsx'

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
                path: "/jobDetails",
                element: <div>Saved Jobs</div>,
            },
            {
                path: "/chats",
                element: <div>Chats</div>,
            },
            {
                path: "*",
                element: <Error404/>,
            },
        ],
    },

    
    
  ]);