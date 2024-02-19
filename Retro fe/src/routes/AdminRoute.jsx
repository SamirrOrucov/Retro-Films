import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { UserTokenContext } from "../context/UserTokenContext";

const AdminRoute = ({children }) => {
  const { decodedToken } = useContext(UserTokenContext);
  const isAdmin = decodedToken && decodedToken.role === "admin";

  return isAdmin?<Outlet></Outlet>:<Navigate to={"/"}/>
};

export default AdminRoute;