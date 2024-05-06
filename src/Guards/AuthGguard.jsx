// import { Navigate, Outlet } from "react-router-dom";
// // import { getAuthToken } from "../services/auth";

// function AuthGuard(roles) {
//     // const { token, user } = getAuthToken();
//     const token = localStorage.getItem("token");
//     const userRole = localStorage.getItem("role")
//   if (!token && !userRole) {
//     return <> {roles.length == 0 ? <Outlet /> : <Navigate to={"/login"} />} </>;
//   } else {
//     return <> {roles.find((role) => user.role.includes(role)) ? <Outlet /> : <Navigate to={`${user.role.toLowerCase()}-home`} />} </>;
//   }
// }
// export default AuthGuard