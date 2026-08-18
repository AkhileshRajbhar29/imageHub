import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function PublicRoute ({ children }) {
    const { user, loading } = useContext(AuthContext);

    if(loading){
        return <p> Loading... </p>
    }

    if (user){
        return <Navigate to="/" replace />
    }

    return children;
}

export default PublicRoute;
