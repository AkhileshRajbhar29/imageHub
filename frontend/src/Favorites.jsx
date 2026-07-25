import "./Favorites.css";
import Navbar from "./Navbar";
function Favorites(){

    return(
        <>
        
        <div className="Favorites-section">
            <Navbar/>
            <div className="Favorites-heading-container">
            <div className="Favorites-title-icon">
                <i className="fa-solid fa-star Favorites-title-star"></i>
                <span className="Favorites-title"> My Favorite Collection</span>
                <i className="fa-solid fa-star Favorites-title-star"></i>
            </div>

            




            <div  className="Favorites-cards-container">
                <div className="Favorites-cards">
                <div>
                    <img src="src/images/img30.jpg" alt="Favorites-img" className="Favorites-img"/> </div>
                    
                    <div>
                        <i className="fa-solid fa-star Favorite-star-icon-with-title"></i>
                        <i className="fa-solid fa-star Favorite-star-icon-with-title"></i>
                        <i className="fa-solid fa-star Favorite-star-icon-with-title"></i>
                        <i className="fa-solid fa-star Favorite-star-icon-with-title"></i>
                        <i className="fa-solid fa-star Favorite-star-icon-with-title"></i>
                    </div>
                    
                    <div>
                        <span className="Favorites-img-title">asedsaersadersdasedcsaxd</span>
                    </div>
                    <div className="uploaded-by-added-date">
                        <span>
                            <img src="src/images/img10.jpg" className="favorite-image-uploader-profile"/>
                            <span className="uploader">Aman Kumar Modanwal</span>
                        </span>
                        <span className="added-date">25 july 2026</span>
                    </div>
                    <hr/>
                    <div className="like-counts">
                        <i class="fa-solid fa-heart Favorites-card-like-count-icon"></i>
                        <span>350 Likes</span>
                    </div>

                    <div className="Favorites-cards-btns">
                        <div className="like-btn">
                            <span>Like</span>
                            <i class="fa-solid fa-heart Favorites-card-like-icon"></i>
                        </div>
                        <span className="share-btn">Share</span>
                        
                        <div className="remove-btn">
                            <span>Remove</span>
                            <span class="material-symbols-outlined">close_small</span>
                              
                        </div>
                    </div>
                </div>

            </div>


             

            
        </div>
        </div>
        </>
    )
}

export default Favorites;