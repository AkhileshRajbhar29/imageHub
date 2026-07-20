import "./Navbar.css";
import { FaSearch } from "react-icons/fa";
import { category } from "./category";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

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
                 
                    <div className="logo">
                        <img src="src\images\logo.jpeg" className="logo_img"></img>
                    </div>

                    <div className="navbar_components_container">
                        <div className="search-box">
                            <FaSearch className="search-icon"/> 
                            <input className="navbar_components search_box" type="search"/>
                        </div>

                        <button className="navbar_components">Home</button>
                        <Link to="./upload">
                        <button className="navbar_components">Upload</button>
                        </Link>
                        <button className="navbar_components">Favorites</button>
                    </div>

                    <div className="search-profile-menu_icon">

                        <button className="search-btn only-search-btn">
                         <FaSearch />
                        </button>

                    <div className="profile_photo">
                        <span className="material-symbols-outlined profile">
                        person
                        </span>
                    </div>

                    <div className="menu-icon">
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
        </>
    )
}

export default Navbar;

 