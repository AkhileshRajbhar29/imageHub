import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar.jsx";
import "./App.css";
import ImageGrid from "./ImageGrid.jsx";
import ImageDetail from "./ImageDetail.jsx";
import UploadImageForm from "./UploadImageForm.jsx";
import PreviewPage from "./PreviewPage.jsx";
import { useState } from "react";
import Favorites from "./Favorites.jsx";
import Profile from "./Profile.jsx";
import Account_detail from "./Account-detail.jsx";
import Help from "./Help.jsx";
import Archive from "./Archive.jsx";

function App(){

  const[images, setImages] = useState([]);
  const[favorites, setFavorites] = useState([]);

  return(
    <>
    <BrowserRouter>
    <Routes>
      

      <Route 
      path="/" 
      element={<Home images={images}
      favorites={favorites}
      setFavorites={setFavorites}
      />
      }
      />

      <Route
      path="/favorites"
      element={
      <Favorites
        favorites={favorites}
        setFavorites={setFavorites}
      />
      }
      />

      <Route 
      path="/upload" 
      element={ 
      <UploadImageForm 
      images={images} 
      setImages={setImages}
      />
      }
      />

      <Route 
      path="/preview" 
      element={<PreviewPage
      images={images}
      setImages={setImages}
      />
      }
      />

      <Route 
      path="/image/:id" 
      element={<ImageDetail images= {images}/>}
      />

      <Route path="/profile" element={<Profile/>}/>

      {/* <Route path="/profle/uploadImageForm" element={<UploadImageForm/>}/> */}
      <Route path="/account-detail" element={<Account_detail/>}/>
      
      <Route path="/Help" element={<Help/>}/>

      <Route path="/Archive" element={<Archive/>}/>

    </Routes>
    </BrowserRouter>
    {/* <Archive/> */}
     

    </>
  )
}

export default App;