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
import Signup from "./Signup.jsx";
import Login from "./Login.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import PublicRoute from "./PublicRoute.jsx";
  

function App(){

  const[images, setImages] = useState([]);
  const[favorites, setFavorites] = useState([]);

  return(
    <>
    <BrowserRouter>
    <Routes>
      

      <Route 
        path="/" 
        element={
          <Home images={images}
            favorites={favorites}
            setFavorites={setFavorites}
          />
        }
      />

     



      <Route 
      path="/image/:id" 
      element={<ImageDetail images= {images}/>}
      />


      <Route path="/Help" element={<Help/>}/>

      <Route 
      path="/login" 
      element={
        <PublicRoute>
          <Login />
        </PublicRoute>
      } />

      <Route path="/signup" 
      element={
        <PublicRoute>
          <Signup />
        </PublicRoute>
      } />

      



      //Protected Routes

      <Route
      path="/favorites"
      element={
      <ProtectedRoute>
        <Favorites
          favorites={favorites}
          setFavorites={setFavorites}
        />
      </ProtectedRoute>
      }
      />

      <Route 
      path="/upload" 
      element={ 
      <ProtectedRoute>
        <UploadImageForm 
          images={images} 
          setImages={setImages}
        />
      </ProtectedRoute>
      }
      />

      <Route 
      path="/preview" 
      element={
      <ProtectedRoute>
        <PreviewPage
          images={images}
          setImages={setImages}
        />
      </ProtectedRoute>
      }
      />

      

      <Route path="/profile" element={
        <ProtectedRoute>
          <Profile/>
        </ProtectedRoute>
      }/>

      {/* <Route path="/profle/uploadImageForm" element={<UploadImageForm/>}/> */}
      <Route path="/account-detail" 
      element={
        <ProtectedRoute>
          <Account_detail/>
        </ProtectedRoute>
      }/>
      
      

      <Route path="/Archive" 
      element={
        <ProtectedRoute>
          <Archive/>
        </ProtectedRoute>
      }/>

    </Routes>
    </BrowserRouter>
    {/* <Signup/> */}
     
     

    </>
  )
}

export default App;