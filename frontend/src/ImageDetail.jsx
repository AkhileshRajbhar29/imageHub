import "./ImageDetail.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import img7 from "./images/img7.jpg";
import img10 from "./images/img10.jpg"
import img12 from "./images/img12.jpg"


function ImageDetail() {

    const { id } = useParams();

    const [currentImage, setCurrentImage] = useState(null);
    const [loading, setLoading] = useState(true);

    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);

    useEffect(() => {

        const fetchImage = async () => {

            try {

                const token = localStorage.getItem("token");

                const response = await fetch(
                    `http://localhost:5000/api/images/${id}`,
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

                setCurrentImage(data.image);

            } catch (error) {

                console.error("Fetch image error:", error);

            } finally {

                setLoading(false);

            }
        };

        fetchImage();

    }, [id]);



    useEffect(() => {

    if (!currentImage) {
        return;
    }

    const fetchLikeInfo = async () => {

        try {

            const token = localStorage.getItem("token");

            if (!token) {
                return;
            }

            const response = await fetch(
                `http://localhost:5000/api/likes/${currentImage._id}`,
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

}, [currentImage]);




const toggleLike = async () => {

    try {

        const token = localStorage.getItem("token");

        if (!token) {
            alert("Please login first");
            return;
        }

        if (liked) {

            const response = await fetch(
                `http://localhost:5000/api/likes/${currentImage._id}`,
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
                `http://localhost:5000/api/likes/${currentImage._id}`,
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

    

    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (!currentImage){
        return <h2>Image Not Found</h2>
    }

    const imageSrc =  currentImage.imageUrl;

    const rating =0;

    

    return(
        <>
        
        <div className="image-detail-container">
             
          
                     
                        <div className="image-detail-mainImg">
                        <img src={imageSrc} alt={currentImage.title} className="image"></img>
                     
                    </div>
             
                <div className="detail">
                    <div className="uploader-div">
                        <div></div>
                        <div className="uploader">
                            <img src={img7}></img>
                            <span>{currentImage.owner?.email}</span>
                        </div>
                    </div>
                    <div className="description-uploader">
                        <h3 className="title-heading"> {currentImage.title} </h3>
                        
                    </div>
                     <p className="description-content"> {currentImage.description} </p>

                <div className="middle-content">

                    <div className="like-comment">
                        <span
                            className={`material-symbols-outlined like-count ${
                                liked ? "liked" : ""
                            }`}
                            onClick={toggleLike}
                        >
                            {liked ? "favorite" : "favorite_border"}
                        </span>
                        
                        <span className="like-number">
                            {likeCount}
                        </span>
                        
                        <span className="material-symbols-outlined comment-count">
                            comment
                        </span>
                    </div>
                        
                        <div className="ratingCount">
                            <span className="rating">
            {[1,2,3,4,5].map((star) => (
                <span
                    key={star}
                    className="material-symbols-outlined">
                        {star <= rating ? "star" : "star_outline"}
                </span>
            ))}
        </span>
         
        
                        </div>
                     </div>

                   
                    <div className="price-buy">

                            
                            <div className="price-box">
                                
                                <div className="price-offer">
                                    <span className="original-price-form"><s>₹{currentImage.originalPrice}</s></span>
                                    <span className="offer">({currentImage.offer}% off)</span>    
                                </div> 
                                <span className="final-price">₹{currentImage.finalPrice}</span> <br/>
                                
                            </div>
                        
                        <button className="buy-btn">Buy</button>

                   
                    </div>
                    

                     
                </div>
                     <hr/>

                     <div className="comment-container">
                        <div className="comments">
                        <img src={img10} className="comment-profile-img"></img>
                       <div className="comment-content">
                        <span className="comment-profile comment-userName">@satyam007</span>
                         <span className="comment-line">This series is too good👌</span>
                       </div>
                        </div>

                     <div className="comments">
                        <img src={img12} className="comment-profile-img"></img>
                        <div className="comment-content">
                            <span className="comment-profile comment-userName">@amar489</span>
                            <span className="comment-line">Amazing series😊👌(❁´◡`❁)</span>
                        </div>
                     </div>
                     </div>

                     
                         
                    <div className="comment-box">
                        <input placeholder="Add Comment" className="comment" />
                        <span className="material-symbols-outlined comment-submit-btn">send</span>
                    </div>
                      

                    
                                     


                </div>
            
        {/* </div> */}
        </>
    )
}

export default ImageDetail;