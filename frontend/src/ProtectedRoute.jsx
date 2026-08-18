import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function ProtectedRoute ({ children }){

    const { user, loading} = useContext (AuthContext);


    // console.log("ProtectedRoute:", {
    //     user, loading
    // });


    if(loading) {
        return <p>Loading...</p>
    }

    if(!user) {
        return <Navigate to="/login" replace/>
    }

    return children;
}

export default ProtectedRoute;