import img1 from "/src/images/signup-right-image.jpg";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";

import "./Signup.css";

function Signup(){

const [showPassword, setShowPassword] = useState(false);
const [showConfirmPassword, setShowConfirmPassword] = useState(false);


    return(
        <>
        <div className="Signup-container-frame">
        
        <div  className="Signup-container" >
            <div className="signup-form">
                <div className="join-imageHub-div">
                    <span className="material-symbols-outlined camera-icon">photo_camera</span>
                    <span>Join</span>
                    <span className="top-imageHub">ImageHub</span>
                </div>
                
                <h4 className="heading-title">Create your account</h4>
                <p className="paragraph">Sign up to explore, upload and share amazing images.</p>

                
                <div className="form-components">
                    <div>
                    <label className="Label" htmlFor="username">
                        <span className="material-symbols-outlined">person</span>
                        <span>Username </span>
                    </label>
                    <div className="input-box">
                        <span className="material-symbols-outlined icon">person</span>
                        <input placeholder="Enter your Username" id="username"/>
                    </div>
                </div>

                <div>
                    <label className="Label" htmlFor="email">
                        <span className="material-symbols-outlined">mail</span>
                        <span>Email</span>
                    </label>
                    <div className="input-box">
                        <span className="material-symbols-outlined icon">mail</span>
                        <input placeholder="Enter your Emain" id="email" />
                    </div>

                </div>

                <div>
                    <label className="Label" htmlFor="password">
                        <span className="material-symbols-outlined">lock</span>
                        <span>Password</span>
                    </label>
                    <div className="input-box">
                        <span className="material-symbols-outlined icon">lock</span>
                        <input placeholder="Enter your Password" id="password" type={showPassword ? "text" : "password"}/>
                        <span
                        className="material-symbols-outlined eye-icon"
                        onClick={() => setShowPassword(!showPassword)}
                        >
                        {showPassword ? "visibility_off" : "visibility"}
                        </span>
                    </div>
                </div>

                <div>
                    <label className="Label" htmlFor="confirm-password">
                        <span className="material-symbols-outlined">lock</span>
                        <span>Confirm Password</span>
                    </label>
                    <div className="input-box">
                        <span className="material-symbols-outlined icon">lock</span>
                        <input placeholder="Confirm your Password" id="confirm-password" type={showConfirmPassword ? "text" : "password"}/>
                        <span
                        className="material-symbols-outlined eye-icon"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                        {showConfirmPassword ? "visibility_off" : "visibility"}
                        </span>
                    </div>

                </div>

                 <div className="signup-checkbox">
                    <input type="checkbox"/>
                    <span>I agree to the <a>Terms of Service</a> and <a>Privacy Policy</a></span>
                 </div>
 

                <div className="create-account-btn">
                    <span className="material-symbols-outlined">person_add</span>
                    <span className="create-account">Create Account</span>
                </div>

                <div className="hr-line">
                    <span> or sign up with </span>
                </div>

                <div className="google-github-facebook-icon-container">
                    <div className="google-login-btn">
                        <button className="google-btn">
                            <FcGoogle size={22} /> 
                        </button>
                        <span>Google</span>
                    </div>

                    <div>
                        <i className="fa-brands fa-github"></i>
                        <span>GitHub</span>
                    </div>

                    <div>
                        <i className="fa-brands fa-facebook"></i>
                        <span>Facebook</span>
                    </div>

                </div>

                <div className="already-account">
                    <span>Already have an Account? </span>
                    <span className="login-link">Login</span>
                </div>

                </div>


            </div>
            
            <div className="right-image">
                <img src={img1} className="signup-img"></img>
                <div className="right-side">
                    <div>
                        <h1 className="image">Image</h1>
                        <h1 className="hub">Hub</h1>                       
                    </div>
                    <span className="discover-upload-inspire">Discover. Upload. Inspire</span>
                    <hr className="top-hr"></hr>

                    <div className="storage-connect-privacy-div">
                        <div className="parent-div">
                            <span className="material-symbols-outlined cloud-icon">cloud</span> 
                            <div>
                                <span className="bold-span">Upload Your best shots</span>
                                <p>Store ad showcase your images in high quality.</p>
                                <hr className="storage-connect-privacy-div-hr"/>
                            </div>
                            
                        </div>
                        
                        <div className="parent-div">
                            <span className="material-symbols-outlined like-icon">favorite</span>
                            <div>
                                <span className="bold-span">Connect with people</span>
                                <p>Like, comment and follow photographers.</p>
                                <hr className="storage-connect-privacy-div-hr"></hr>
                            </div>
                        </div>
                        <div className="parent-div">
                            <span className="material-symbols-outlined lock-icon">lock</span>
                            <div>
                                <span className="bold-span">Your privacy matters</span>
                                <p>We keep your data safe and sequre.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    

        </div>

        </div>
        </>
    )
};

export default Signup;

