import React from 'react'; 
import { Route,  Navigate, Routes } from 'react-router-dom'; 
import { isAuthenticated } from './CheckAuthenticated.jsx';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
        <Routes>
            <Route
                {...rest}
                render={(props) =>
                isAuthenticated() ? <Component {...props} /> : <Navigate to={"/login"} />
                }
            />
        </Routes>
      
    );
  };
  
  export default ProtectedRoute;