import "./Profile.css";
import img1 from "/src/images/img1.jpg";
import img2 from "/src/images/img2.jpg";
import img3 from "/src/images/img3.jpg";
import img4 from "/src/images/img4.jpg";
import img5 from "/src/images/img5.jpg";
import img6 from "/src/images/img6.jpg";
import img7 from "/src/images/img7.jpg";
import img8 from "/src/images/img8.jpg";
import img9 from "/src/images/img9.jpg";
import img10 from "/src/images/img10.jpg";
import img11 from "/src/images/img11.jpg";
import img12 from "/src/images/img12.jpg";
import { Link } from "react-router-dom";
import { useState } from "react"; 

function Profile(){

    const [showMenu, setShowMenu] = useState(false);

    return(
        <>
            <div className="Profile-container">
                <div className="header-icons-section">
                    <div className="header-icons">
                        <span class="material-symbols-outlined">notifications</span>
                        <span class="material-symbols-outlined">3p</span>
                        <Link to="/upload" className="">
                            <span className="material-symbols-outlined add-icon">add_2</span>
                        </Link>
                        
                        <span className={`material-symbols-outlined menu-icon ${showMenu ? "active":""}`}
                        onClick={()=>setShowMenu (!showMenu)}
                        >
                            menu
                        </span>
                        {
                            showMenu && (
                                <div className="profile-menu">

                            
                                            <Link to="/account-detail"  className="about-account-link menu-items">
                                            <span class="material-symbols-outlined about-account-icon">account_circle</span>
                                            <span  className="account-detail">Account Detail</span>
                                            </Link>
                                     
                                    
                                        <Link to="/favorites" className="favorite-link menu-items">
                                            <span class="material-symbols-outlined favorite-icon">favorite</span>
                                            <span  className="menu-favorite">Favorite</span>
                                        </Link>
                                    
                                    <Link className="archive-link menu-items">
                                        <span class="material-symbols-outlined Archive-icon">disabled_visible</span>
                                        <span>Archive</span>
                                    </Link>
                                    <Link className="help-link menu-items">
                                        <span class="material-symbols-outlined help-icon">help_center</span>
                                        <span>Help</span>
                                    </Link>
                                    <button className="logOut-btn">LogOut</button>
                                    <button className="delete-account-btn">Delete Account</button>
                                </div>
                            )
                        }
                    </div>
                    <hr/>
                    
                </div>
                <div className="top-section">
                    <img src="src/images/img30.jpg" className="Profile-image"/>
                    <div className="top-right-section">
                        <div className="user-name">akhilesh_a51</div>
                        <div className="post-following-followers-container">
                            <div>
                                <span className="user-post">Post</span>
                                <span className="post-count">80</span>
                            </div>
                            <div>
                                <span className="user-followers">followers</span>
                                <span className="following-count">10k</span>
                            </div>
                            <div>
                                <span className="user-following">Following</span>
                                <span className="followers-count">321</span>
                            </div>
                        </div>

                        
                    </div>
                </div>

                <div className="bio">Jai shree Ram🙏🙏🙏<br/>I love Trip<br/>Engineer🖥️🧑‍💻</div> 

                <div className="edit-message-btn">
                            <button className="edit-btn">Edit</button>
                            <button className="message-btn">message</button>
                </div>
                <div className="post-favorites">
                    <span className="my-posts">Posts</span>
                    <span className="my-favorites">Favorites</span>
                </div>

                <hr className="profile-hr"/>

                <div className="my-post-grid">
                    {/* <div className="posted_images"> */}
                        <img src={img1} alt="post_1"></img>
                        <img src={img2} alt="post_2"></img>
                        <img src={img3} alt="post_3"></img>
                        <img src={img4} alt="post_4"></img>
                        <img src={img5} alt="post_5"></img>
                        <img src={img6} alt="post_6"></img>
                        <img src={img7} alt="post_7"></img>
                        <img src={img8} alt="post_8"></img>
                        <img src={img9} alt="post_9"></img>
                        <img src={img10} alt="post_10"></img>
                        <img src={img11} alt="post_11"></img>
                        <img src={img12} alt="post_12"></img>
                    {/* </div> */}


                </div>
                
            </div>     
        </>
    )
}

export default Profile;