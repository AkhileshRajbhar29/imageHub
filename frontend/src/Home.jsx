import "./Home.css"
import ImageGrid from "./ImageGrid"
import Navbar from "./Navbar"

function Home({images, favorites, setFavorites}){
    return(
        <>
        <Navbar/>
        <ImageGrid 
        images={images}
        favorites={favorites}
        setFavorites={setFavorites  }
        
        />
        </>
    )
}

export default Home;    