// import Favorites from "./Favorites.jsx";
import { useState, useRef } from "react";
import "./ImageCard.css";
import { Link, useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ImageCard({item, favorites, setFavorites}){


    const navigate = useNavigate();
    const clickTimer = useRef(null);
    const [liked, setLiked] = useState(false);
 

    const imageSrc =
    item.image instanceof File
    ? URL.createObjectURL(item.image)
    : item.image;


    const isFavorite = 
    favorites.some(fav => fav.id === item.id);

    const toggleFavorite = (e) => {
        e.stopPropagation();

        if(isFavorite){
            setFavorites (prev => prev.filter(f=> f.id!==item.id));
        }
        else{
            setFavorites(prev=>[...prev,item]);
        }
    }


    const downloadImage = async (e) => {
        e.preventDefault();
        e.stopPropagation();

        const imageUrl = 
        item.image instanceof File
        ? URL.createObjectURL(item.image)
        : item.image;

        const link = document.createElement("a");
        link.href = imageUrl;

        link.download = item.title
        ? `${item.title}.jpg`
        : "ImageHub_Image.jpg";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        if (item.image instanceof File) {
         setTimeout(() => URL.revokeObjectURL(imageUrl), 100);
    }

    };
    



    return(
        
        <div className="Image-Card" 
             onClick={()=>{
                clearTimeout(clickTimer.current);
        clickTimer.current = setTimeout(()=>{
            navigate(`/image/${item.id}`);
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