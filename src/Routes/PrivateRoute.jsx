import { useContext } from "react";
import { AuthContext } from "../FirebaseAuth/AuthProvider";
import { Navigate, useLocation} from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {loading,user}=useContext(AuthContext)
    const location =useLocation()
    //console.log(location)
    console.log("Private Route COmponent", loading);
    if(loading){
        return <div className="flex min-h-screen items-center justify-center"><span className="loading loading-spinner loading-lg"></span></div>
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
    
};

export default PrivateRoute;