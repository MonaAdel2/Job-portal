import { Navigate, Outlet } from "react-router-dom";
// // import { getAuthToken } from "../services/auth";

// function AuthGuard(roles) {
//     // const { token, user } = getAuthToken();
//     // const token = localStorage.getItem("token");
//     // const userRole = localStorage.getItem("role")
//     const userRole = "jobseeker"
//     const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjI5YzVhN2RmLWE5M2MtNGVmNi1iMzUwLTEzYTliYzY3M2U3MyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkpvYlNlZWtlciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2dpdmVubmFtZSI6IkpvYlNlZWtlcjEiLCJleHAiOjE3MTUwOTMwNjEsImlzcyI6ImpvYkNvbm5lY3QifQ.TqbNjA_Kf2o5D78-rbTD3b1m0rDz3XrCXWjMhqimcEs"
//     if (!token && !userRole) {
//         return roles === "" ? <Outlet /> : <Navigate to="/login" />;
//     } else {
//         if (userRole === "employer" && roles === userRole) {
//             return <Navigate to="/postjob" />;
//         } else if (userRole === "jobseeker" && roles === userRole) {
//             return <Navigate to="/job-seeker/home" />;
//         } else if (userRole === "admin" && roles === userRole) {
//             return <Navigate to="/admin/dashboard" />;
//         } else {
//             return <Navigate to="/register" />;
//         }
//     }
// }
// export default AuthGuard

import { isAuthenticated } from "../CheckAuthenticated";
const AuthGuard = ({ children }) => { 
    if (!isAuthenticated()) { 
      // If user is not authenticated, redirect to login page 
      return <Navigate to="/login" />; 
    } 
     
    // If user is authenticated, allow access to children (routes) 
    return children; 
  }; 
   
  export default AuthGuard;