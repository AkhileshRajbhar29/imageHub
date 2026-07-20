import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar.jsx";
import "./App.css";
import ImageGrid from "./ImageGrid.jsx";
import ImageDetail from "./ImageDetail.jsx";
import UploadImageForm from "./UploadImageForm.jsx";
import PreviewPage from "./PreviewPage.jsx";
import { useState } from "react";

function App(){

  const[images, setImages] = useState([]);


  return(
    <>
    <BrowserRouter>
    <Routes>
      

      <Route 
      path="/" 
      element={<Home images={images}/>}
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
      element={<ImageDetail/>}
      />

      

      
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App;