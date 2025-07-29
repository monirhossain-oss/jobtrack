import { useContext } from "react";
import { AuthContext } from "../ContextProviders/ContextProviders";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoutes = ({children}) => {
    const location = useLocation().pathname;
    // console.log(location);
    const {loading, user} = useContext(AuthContext);
    if(loading){
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-spinner loading-xl"></span>
            </div>
        )
    }
    if(user){
        return children;
    }
    return <Navigate to={"/login"} state={{from: location}} replace></Navigate>
};

export default PrivateRoutes;