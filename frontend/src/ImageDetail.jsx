import "./ImageDetail.css";
import { useParams } from "react-router-dom";

function ImageDetail({rating}){

    const {id} = useParams();
    console.log(id);

    return(
        <>
        {/* Image Id : {id} */}
        <div className="image-detail-container">
             
                <img src="src\images\img3.jpg" alt="image" className="image"></img>
                <div className="detail">
                    <div className="description-uploader">
                        <h3 className="title-heading"> Title</h3>
                      ` <div className="uploader">
                            <img src="src/images/img5.jpg"></img>
                            <p>@akhilesh27</p>
                        </div>
                    </div>
                     <p className="description-content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque non id necessitatibus tempore voluptate. Unde sint sed accusantium natus nemo, explicabo dolores illo, autem quia neque blanditiis officia, temporibus repellendus!</p>

                <div className="middle-content">

                    <div className="like-comment-count">
                        <div className="like_comment">
                            <span className="material-symbols-outlined like-count">favorite</span> 
                            <span class="material-symbols-outlined comment-count">comment</span>
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
                                <span className="price-heading">Price</span><br/>
                                <span><s>$20</s></span>
                                <span className="offer">(25% off)</span>{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}
                                <span className="final-price">$15</span>
                            </div>
                        
                        <button className="buy-btn">Buy</button>

                   
                    </div>
                    

                     
                </div>
                     <hr/>

                     <div className="comment-container">
                        <div className="comments">
                        <img src="src/images/img8.jpg" className="comment-profile-img"></img>
                       <div className="comment-content">
                        <span className="comment-profile comment-userName">@satyam007</span>
                         <span className="comment-line">This series is too good👌</span>
                       </div>
                        </div>

                     <div className="comments">
                        <img src="src/images/img18.jpg" className="comment-profile-img"></img>
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
            
        </div>
        </>
    )
}

export default ImageDetail;