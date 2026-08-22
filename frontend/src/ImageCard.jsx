import { useState, useRef, useEffect } from "react";
import "./ImageCard.css";
import { useNavigate } from "react-router-dom";

function ImageCard({item, favorites, setFavorites}){


    const navigate = useNavigate();
    const clickTimer = useRef(null);

    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);


useEffect(() => {
    const fetchLikeInfo = async () => {
        try {
            const token = localStorage.getItem("token");

            if (!token) {
                return;
            }

            const response = await fetch(
                `http://localhost:5000/api/likes/${item._id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message);
            }

            setLiked(data.liked);
            setLikeCount(data.likeCount);

        } catch (error) {
            console.error("Fetch like info error:", error);
        }
    };

    fetchLikeInfo();

}, [item._id]);
  

    const imageSrc = item.imageUrl;


    const isFavorite = 
    favorites.some(fav => fav._id === item._id);


    const toggleLike = async (e) => {
    e.stopPropagation();

    try {
        const token = localStorage.getItem("token");

        if (!token) {
            alert("Please login first");
            navigate("/login");
            return;
        }

        if (liked) {

            const response = await fetch(
                `http://localhost:5000/api/likes/${item._id}`,
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

            setLiked(false);
            setLikeCount(prev => Math.max(0, prev - 1));

        } else {

            const response = await fetch(
                `http://localhost:5000/api/likes/${item._id}`,
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

            setLiked(true);
            setLikeCount(prev => prev + 1);
        }

    } catch (error) {
        console.error("Like error:", error);
        alert(error.message || "Something went wrong");
    }
};

  

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
                    clearTimeout(clickTimer.current);
                    toggleLike(e);
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