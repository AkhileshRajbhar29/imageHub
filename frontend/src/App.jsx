import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar.jsx";
import "./App.css";
import ImageGrid from "./ImageGrid.jsx";
import ImageDetail from "./ImageDetail.jsx";
import UploadImageForm from "./UploadImageForm.jsx";
import PreviewPage from "./PreviewPage.jsx";
import { useState, useEffect } from "react";
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

  useEffect(() => {
    const fetchImages = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/images");

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Failed to fetch images");
            }

            setImages(data.images);

        } catch (error) {
            console.error("Fetch images error:", error);
        }
    };

    fetchImages();
}, []);




useEffect(() => {
    const fetchFavorites = async () => {
        try {
            const token = localStorage.getItem("token");

            if (!token) {
                return;
            }

            const response = await fetch(
                "http://localhost:5000/api/favorites",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message);
            }

            const favoriteImages = data.favorites.map(
                favorite => favorite.image
            );

            setFavorites(favoriteImages);

        } catch (error) {
            console.error(
                "Fetch favorites error:",
                error
            );
        }
    };

    fetchFavorites();
}, []);




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
      element={<ImageDetail/>}
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