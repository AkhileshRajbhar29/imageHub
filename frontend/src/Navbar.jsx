import "./Navbar.css";
import { FaSearch } from "react-icons/fa";
import { category } from "./category";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext"; 
 




function Navbar(){
    const categoryRef = useRef(null);



const scrollLeft = () =>{
    categoryRef.current.scrollBy({
        left: -250,
        behavior:"smooth",
    });
};

const scrollRight = () =>{
    categoryRef.current.scrollBy({
        left:250, 
        behavior: "smooth",
    });
};



const { user, loading, logout } = useContext(AuthContext);

//console.log("Current User:", user);

const location = useLocation();
const navigate = useNavigate();
const [activeFlash, setActiveFlash] = useState(false);
const [homeFlash, setHomeFlash] = useState(false);
const [menuOpen, setMenuOpen] = useState(false);

const handleLogout = () =>{
    logout();
    navigate("/login", {replace : true});
};


const handleFavoriteClick = (e) => {
    if (location.pathname === "/favorites") {
        e.preventDefault(); 

        setActiveFlash(true);

        setTimeout(() => {
            setActiveFlash(false);
        }, 200);

    }
};





const handleHomeClick = (e) =>{
    e.preventDefault();
    setHomeFlash(true);

    if(location.pathname === "/"){
        setTimeout(()=>{
            setHomeFlash(false);
        }, 500);
    } else{
        setTimeout(()=>{
        setHomeFlash(false);
        navigate("/");
    }, 200);

    }
};

// For Hide and Show arrow

const [showLeft, setShowLeft] = useState(false);
const[showRight, setShowRight] = useState(true);

const checkButton = () =>{
    const el=categoryRef.current;
    setShowLeft(el.scrollLeft>0);

    setShowRight(
        el.scrollLeft+el.clientWidth < el.scrollWidth-5
    );
}

useEffect(()=>{
    const el = categoryRef.current;
    checkButton();
    el.addEventListener("scroll", checkButton);
    window.addEventListener("resize", checkButton);
    return() =>{
        el.removeEventListener("scroll", checkButton);
        window.removeEventListener("resize", checkButton);
    };
}, []);


const colors = [
  "#ff6b6b",
  "#4ecdc4",
  "#45b7d1",
  "#f7b731",
  "#5f27cd",
  "#20bf6b",
  "#eb3b5a",
  "#3867d6",
  "#fa8231",
  "#8854d0"
];
 
    return(
         
        <>

             
            <nav className="Navbar_container">

                {
                    loading ? (
                        <p>Loading...</p>
                    ) : user ? (
                        <p>Welcome, {user.username}</p>
                    ):(
                        <p>Not logged in</p>
                    )
                }

                 
                    <div className="logo">
                        <img src="src\images\logo.jpeg" className="logo_img"></img>
                    </div>

                    <div className="navbar_components_container">
                        <div className="search-box">
                            <FaSearch className="search-icon"/> 
                            <input className="navbar_components search_box" type="search"/>
                        </div>

                        <Link to="/" onClick={handleHomeClick}>
                        <button 
                        className={`navbar_components ${
                            homeFlash ? "home-flash" : ""
                        }`}>Home</button>
                        </Link>                



                        <Link to="/upload">
                        <button className="navbar_components">Upload</button>
                        </Link>
                        
                        <Link to="/favorites" onClick={handleFavoriteClick}>
                        <button className={`navbar_components ${
                            location.pathname ==="/favorites" ? "active" : ""
                        }`}
                        >
                            Favorites</button>
                        </Link>
                    </div>

                    <div className="search-profile-menu_icon">

                        <button className="search-btn only-search-btn">
                         <FaSearch />
                        </button>

                    <Link to="profile" className="profile-link">
                        <div className="profile_photo">
                            <span className="material-symbols-outlined profile">person</span>
                        </div>
                    </Link>

                    <div className="menu-icon"
                     onClick={()=>setMenuOpen(true)}
                    >
                        ☰
                    </div>

                    </div>
                    
                    

            </nav>
            <div className="category-section"> 
                    {showLeft && (
                        <button className="scroll-btn left"  onClick={scrollLeft}>
                            <span className="material-symbols-outlined left-scroll">arrow_back_ios_new</span>
                        </button>
                    )}
                    
                    <div className="category-container" ref={categoryRef}>
                          {
                            category.map((item, index)=>(
                                <div
                                className="category-component"
                                key={item.id}
                                >
                                    <span className="category-img">
                                        <img 
                                        src={item.image}
                                        alt={item.name}
                                        />
                                    </span>

                                    <span className="category-name"
                                    style={{backgroundColor: colors[index % colors.length]}}
                                    >
                                        {item.name}
                                    </span>
                                </div>
                            ))
                          }

                    </div>

                    {showRight && (
                        <button className="scroll-btn right" onClick={scrollRight}>
                            <span className="material-symbols-outlined right-scroll">arrow_forward_ios</span>
                        </button>
                    )}

                 


                 
            </div>

            {
                menuOpen && (
                    <div
                        className="sidebar-overlay"
                        onClick={()=> setMenuOpen(false)}
                    ></div>
                )
            }

            <div
                className={`sidebar ${menuOpen ? "open" : ""}`}
                onClick={(e)=> e.stopPropagation()}
            >
                <div className="sidebar-header">
                    <span>Menu</span>
                    <span
                        className="material-symbols-outlined close-btn"
                        onClick={() => setMenuOpen(false)}
                    >
                        Close
                    </span>

                </div>
                <div className="sidebar-items">
                    <Link to="/" className="sidebar-link">Home</Link>
                    <Link to="/upload" className="sidebar-link">Upload</Link>
                    <Link to="/favorites" className="sidebar-link">Favorites</Link>
                    <Link to="/Help" className="sidebar-link">Help</Link>
                    <Link className="sidebar-link">Setting</Link>
                    {/* <Link className="sidebar-link">LogOut</Link> */}
                    <span className="sidebar-link sidebar-logout-span" onClick={handleLogout}>Logout</span>
                </div>
            </div>
        </>
    )
}

export default Navbar;

 