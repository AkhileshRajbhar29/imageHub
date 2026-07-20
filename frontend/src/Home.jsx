import "./Home.css"
import ImageGrid from "./ImageGrid"
import Navbar from "./Navbar"

function Home({images}){
    return(
        <>
        <Navbar/>
        <ImageGrid images={images}/>
        </>
    )
}

export default Home;    