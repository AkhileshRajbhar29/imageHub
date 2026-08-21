import { useState, useRef } from "react";
import "./ImageCard.css";
import { useNavigate } from "react-router-dom";

function ImageCard({item, favorites, setFavorites}){


    const navigate = useNavigate();
    const clickTimer = useRef(null);
    const [liked, setLiked] = useState(false);
 

    const imageSrc = item.imageUrl;


    const isFavorite = 
    favorites.some(fav => fav._id === item._id);

    // const toggleFavorite = (e) => {
    //     e.stopPropagation();

    //     if(isFavorite){
    //         setFavorites (prev => prev.filter(f=> f._id!==item._id));
    //     }
    //     else{
    //         setFavorites(prev=>[...prev,item]);
    //     }
    // }


    const toggleFavorite = async (e) => {
    e.stopPropagation();

    try {
        const token = localStorage.getItem("token");

        if (!token) {
            alert("Please login first");
            navigate("/login");
            return;
        }

        if (isFavorite) {

            const response = await fetch(
                `http://localhost:5000/api/favorites/${item._id}`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message);
            }

            setFavorites(prev =>
                prev.filter(fav => fav._id !== item._id)
            );

        } else {

            const response = await fetch(
                `http://localhost:5000/api/favorites/${item._id}`,
                {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message);
            }

            setFavorites(prev => [
                ...prev,
                item
            ]);
        }

    } catch (error) {
        console.error("Favorite error:", error);
        alert(error.message || "Something went wrong");
    }
};







    const downloadImage = async (e) => {
        e.preventDefault();
        e.stopPropagation();
 
        const imageUrl = item.imageUrl;



        const link = document.createElement("a");
        link.href = imageUrl;

        link.download = item.title
        ? `${item.title}.jpg`
        : "ImageHub_Image.jpg";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
 

    };
    



    return(
        
        <div className="Image-Card" 
             onClick={()=>{
                clearTimeout(clickTimer.current);
        clickTimer.current = setTimeout(()=>{
            navigate(`/image/${item._id}`);
        },250);
    }}

    onDoubleClick={()=>{
        clearTimeout(clickTimer.current);
        setLiked(prev => !prev);
    }}
        >
             
                <img 
                    src={imageSrc}
                    alt={item.title}
                />

                {/* </Link> */}
             
            <div className="card-icons like-share">
                <span className={`material-symbols-outlined like-icon ${liked ? "liked" : ""}`}
                onClick={(e)=>{
                    e.stopPropagation();
                    clearTimeout(clickTimer.current);

                    setLiked(prev => !prev);
                }}
                >
                    {liked ?  (
                        <i className="fa-solid fa-heart like-icon liked"></i>
                        ) : (
                        <i className="fa-regular fa-heart like-icon"></i>
                        )
                        }
                </span>
                <span className="material-symbols-outlined share-icon">share</span>
                 
                
            </div>
            <div className="card-icons favorite-download">
                <span 
                className="material-symbols-outlined favorite-icon"
                onClick={toggleFavorite}
                >{
                    isFavorite
                    ? "heart_check"
                    : "heart_plus"
                }
                </span>
                <span className="material-symbols-outlined download-icon"
                onClick={downloadImage}
                >download</span>
            </div>

        </div>
        
    )
}

export default ImageCard;