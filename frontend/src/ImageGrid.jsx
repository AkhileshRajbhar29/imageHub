import ImageCard from "./ImageCard";
import "./ImageGrid.css";
import Masonry from "react-masonry-css";

 

const breakpointColumnsObj = {
    default: 6,
    1200:5,
    1100:4,
    850:3,
    768:2,
    500:1
}

function ImageGrid({images, favorites, setFavorites}) {
 
    return (
        
        <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
        >
             

        {
            images.map((item)=>(
                <ImageCard
                key={item._id}
                item={item}
                favorites={favorites}
                setFavorites={setFavorites}
                
                />
            ))
        }
        </Masonry>
        
    )
}

export default ImageGrid;