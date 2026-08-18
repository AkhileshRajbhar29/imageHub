import {createContext, useEffect, useState} from "react";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState (true);


    const logout = () =>{
        localStorage.removeItem("token");
        setUser(null);
    };

    useEffect(()=>{

        console.log("AuthContext useEffect executed");
        const token = localStorage.getItem("token");

        console.log("Token:", token)

        if(!token) {
            setLoading (false);
            return;
        }

        const getCurrentUser = async () =>{

            console.log("getCurrentUser started");

            try {
                const response = await fetch(
                    `${import.meta.env.VITE_API_URL}/api/auth/me`,
                    {
                        method:"GET",
                        headers:{
                            Authorization: `Bearer ${token}`
                        }
                    }
                );

                console.log("ME API response:", response);


                const data = await response.json();

                console.log("ME API data:", data);

                if(response.ok){
                    setUser (data.user);
                }
                else{
                    localStorage.removeItem("token");
                }
            }
            catch(error){
                console.log("Get current user error", error);
            }
            finally{
                setLoading(false);
            }

        };

        getCurrentUser();
    }, []);

    return(
        <AuthContext.Provider value={{user, setUser, loading, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;