import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext"


function RequireAuth() {
    const { auth } = useAuthContext();

  return auth ? <Outlet/> : <Navigate to="/login" />
 
}

export default RequireAuth;