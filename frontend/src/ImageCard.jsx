import "./ImageCard.css";
import { Link } from "react-router-dom";

function ImageCard({item}){

    const imageSrc =
    item.image instanceof File
    ? URL.createObjectURL(item.image)
    : item.image;

    return(
        <Link to={`/image/${item.id}`} className="image-link">
        <div className="Image-Card">
             
                <img src={imageSrc}
                alt={item.title}/>
             
            <div className="card-icons like-share">
                <span className="material-symbols-outlined like-icon">favorite</span>
                <span className="material-symbols-outlined share-icon">share</span>
                 
                
            </div>
            <div className="card-icons favorite-download">
                <span className="material-symbols-outlined favorite-icon">heart_plus</span>
                <span className="material-symbols-outlined download-icon">download</span>
            </div>

        </div>
        </Link>
    )
}

export default ImageCard;