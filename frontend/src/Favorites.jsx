
import "./Favorites.css";
import Navbar from "./Navbar";
import profile from "./images/img10.jpg";
import { Link } from "react-router-dom";

function Favorites({ favorites, setFavorites }) {

    const removeFavorite = (id) => {
        setFavorites(prev =>
            prev.filter(item => item.id !== id)
        );
    };

    return (
        <>
            <div className="Favorites-section">

                <Navbar />

                <div className="Favorites-heading-container">

                    <div className="Favorites-title-icon">
                        <i className="fa-solid fa-star Favorites-title-star"></i>

                        <span className="Favorites-title">
                            My Favorite Collection
                        </span>

                        <i className="fa-solid fa-star Favorites-title-star"></i>
                    </div>

                    {favorites.length === 0 ? (

                        <div className="empty-favorite">
                            <h2>No Favorite Images</h2>
                            <p>Add Images to Favorites</p>
                        </div>
                    ) : (
                        <div className="Favorites-cards-container">
                            {favorites.map((item) => (
                                
                                
                                <div
                                    className="Favorites-cards"
                                    key={item.id}
                                >

                                    <Link
                                to={`/image/${item.id}`}
                                className="favorite-card-link"
                                key={item.id}
                                >

                                    {/* Image */}
                                    <img
                                        className="Favorites-img"
                                        src={
                                            item.image instanceof File
                                                ? URL.createObjectURL(item.image)
                                                : item.image
                                        }
                                        alt={item.title}
                                    />
                                    
                                    </Link>
                                    {/* Rating */}

                                    <div>

                                        {[1, 2, 3, 4, 5].map((star) => (

                                            <i
                                                key={star}
                                                className={
                                                    star <= (item.rating || 0)
                                                        ? "material-symbols-outlined Favorite-star-icon-with-title"
                                                        : "fa-solid fa-star Favorite-star-icon-with-title"
                                                }
                                            ></i>

                                        ))}

                                        <span className="final-rating">
                                            ({item.rating || 0})
                                        </span>

                                    </div>



                                    {/* Title */}
                                    <div>

                                        <span className="Favorites-img-title">
                                            {item.title}
                                        </span>

                                    </div>



                                    {/* Uploader */}

                                    <div className="uploaded-by-added-date">

                                        <span>

                                            <img
                                                src={profile}
                                                className="favorite-image-uploader-profile"
                                                alt="profile"
                                            />
                                            <span className="uploader">
                                                @akhilesh27
                                            </span>
                                        </span>

                                        <span className="added-date">
                                            26 July 2026
                                        </span>
                                    </div>
                                    <hr />


                                    {/* Likes */}

                                    <div className="like-counts">

                                        <i className="fa-solid fa-heart Favorites-card-like-count-icon"></i>

                                        <span>
                                            {item.likes || 0} Likes
                                        </span>

                                    </div>



                                    {/* Buttons */}

                                    <div className="Favorites-cards-btns">
                                        <div className="like-btn">
                                            <span>Like</span>
                                            <i className="fa-solid fa-heart Favorites-card-like-icon"></i>
                                        </div>

                                        <div className="share-btn">
                                            Share
                                        </div>

                                        <div
                                            className="remove-btn"
                                            onClick={() => removeFavorite(item.id)}
                                        >

                                            <span>Remove</span>
                                            <span className="material-symbols-outlined">
                                                close_small
                                            </span>

                                        </div>

                                    </div>
                                    

                                </div>


                                 
                                
                            ))}
                            
                            

                        </div>
                        

                    )}

                </div>

            </div>
        </>
    );
}

export default Favorites;