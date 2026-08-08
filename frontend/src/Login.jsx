import login1 from "C:/Projects/mini_project/imageHub/frontend/src/images/login-image7.jpg";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";

import "./Login.css";
function Login(){
    const [showPassword, setShowPassword] = useState(false);

    const[identifier, setIdentifier] = useState("");
    const[password, setPassword] = useState("");
    const[loading, setLoading] = useState(false);
    const[error, setError] = useState("");

    const handleLogin = async (e) =>{
        e.preventDefault();

        try{
            setLoading(true);
            setError("");

            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/api/auth/login`,
                {
                    method: "Post",
                    headers:{
                        "Content-Type":"application/json"
                    },

                    body: JSON.stringify({
                        identifier,
                        password
                    })
                }
            );

            const data = await response.json();

            if(!response.ok){
                setError(data.message);
                return;
            }

            console.log("Login Successful:", data);

            //Save JWT token

            localStorage.setItem("token", data.token);
        }
        catch(error){
            console.log(error);
            setError("Unable to connect server");
        }
        finally{
            setLoading(false);
        }
    };

    return(
        <>
            <div className="Login-container-frame">
                <div className="Login-container">
                    <div className="login-form-container">

                        <p className="project-login-logo-div-paragraph">ImageHub</p>
 
                        <div className="login-title-div">
                            <div>
                                <p className="title">Welcome Back</p>
                                <i className="fa-solid fa-handshake"></i>
                            </div>
                            <p className="paragraph">Sign in to continue exploring amazing images.</p>
                        </div>


                        <form onSubmit={handleLogin}>
                                                    <div className="login-input-div">
                            <div className="login-label-box">
                                <span className="material-symbols-outlined">account_circle</span>
                                <label htmlFor="username">Username or Email</label>
                            </div>
                            <div className="login-input-box">
                                <span className="material-symbols-outlined">account_circle</span>
                                <input 
                                    id="username" 
                                    type="text" 
                                    placeholder="Enter your Username or Email" 
                                    value={identifier} 
                                    onChange={(e) => setIdentifier(e.target.value)}>
                                </input>
                            </div>
                             
                        </div>

                        <div className="login-input-div">
                            <div className="login-label-box">
                                <span className="material-symbols-outlined">lock</span>
                                <label htmlFor="password">Password:</label>
                            </div>
                            <div className="login-input-box">
                                <span className="material-symbols-outlined">lock</span>
                                <input id="password" 
                                type={showPassword ? "text" : "password"} 
                                placeholder="Enter your Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                >
                                </input>
                                <span
                                    className="material-symbols-outlined eye-icon"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                {showPassword ? "visibility_off" : "visibility"}
                                </span>
                            </div>
                             
                        </div>
                        
                        <p className="login-para-forgot-password">Forgot Password?</p>
                        

                        {
                            error && (
                                <p className="login-error">
                                    {error}
                                </p>
                            )
                        }

                        <button 
                        className="login-btn"
                        type="submit"
                        disabled={loading}
                        >
                            <span className="material-symbols-outlined">login</span>
                            <p>Login</p>
                        </button>

                        </form>


                        <div className="login-or-continue-with-container">
                            <hr/>           
                                <span>or continur with</span>
                            <hr/>
                        </div>

                        <div className="login-with-social-btns">
                            <div>
                                <FcGoogle className="google-icon" />
                                <span className="google-text">Google</span>
                            </div>

                            <div>
                                <i className="fa-brands fa-github"></i>
                                <span className="gitHub-text">GitHub</span>
                            </div>

                            <div>
                                <i className="fa-brands fa-facebook"></i>
                                <span className="facebook-text">Faebook</span>
                            </div>
                        </div>

                    </div>
                    <div className="login-image-container">
                        <img src={login1} className="login-image"/>


                    </div>

                    
                </div>
            </div>
        </>
    )
};

export default Login;