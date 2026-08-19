import { Link } from "react-router-dom";
import "./UploadImageForm.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { category } from "./category";

function UploadImageForm({images, setImages}){

    const[selectedImage, setSelectedImage] = useState(null);
    const[formData, setFormData] = useState({
        title:"",
        category:"",
        description:"",
        tags:"",
        originalPrice:"",
        offer:""        
    });

    
    
    const handleImageChange = (e) =>{
        const file = e.target.files[0];

        if(file){
            setSelectedImage(file);
        }
    }

    const navigate = useNavigate();

    const handlePreview = () =>{
        
        navigate ("/preview",{
            state:{
                image: selectedImage,
                formData,
                finalPrice
            }
        });
    }

    const originalPrice = Number(formData.originalPrice );
    const offer = Number(formData.offer);
    const finalPrice =originalPrice-((originalPrice * offer)/100);


    const handleUpload = async () => {
    if (!selectedImage) {
        alert("Please select an image");
        return;
    }

    if (!formData.title.trim()) {
        alert("Please Enter Title");
        return;
    }

    try {
        const token = localStorage.getItem("token");

        if (!token) {
            alert("Please login first");
            navigate("/login");
            return;
        }

        const data = new FormData();

        data.append("image", selectedImage);
        data.append("title", formData.title);
        data.append("description", formData.description);
        data.append("price", finalPrice);

        const response = await fetch("http://localhost:5000/api/images", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: data
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || "Image upload failed");
        }

        console.log("Uploaded Image:", result);

        alert("Image uploaded successfully!");

        navigate("/");

    } catch (error) {
        console.error("Upload error:", error);
        alert(error.message);
    }
};

 

     
    return(
        
        <>
        
       

        <div className="upload-form">
            <div className="uploadImageTitle">
                <h2>Upload Image</h2>
            </div>
 
            <div className="upload-from-container">
                <input 
                type="file" 
                placeholder="Choose Image" 
                className="select-image-input" 
                accept="image/*" 
                onChange={handleImageChange}
                 required
                /> 
 

                <input 
                type="text" 
                maxLength={24}
                placeholder="Title"
                onChange={(e)=>{
                    setFormData({
                        ...formData,
                        title:e.target.value
                    })
                }} 
                required
                />

                <select value={formData.category} 
                className="selectCategory"
                onChange={(e) =>
                    setFormData({
                        ...formData,
                        category:e.target.value
                    })
                }
                >

                    <option value="">Select Category</option>

                    {
                        category.map((item) =>(
                            <option
                            key={item.name}
                            value={item.name}
                            >
                                {item.name}

                            </option>
                        ))
                    }


                </select>
                <div className="description">
                    <label>Description</label>
                    <textarea 
                    name="image-description" 
                    maxLength={200}
                    id="description" 
                    className="description-textarea"
                    value={formData.description}
                    onChange={(e)=> setFormData(
                        {
                            ...formData, 
                            description:e.target.value

                        }
                    )}> 

                    </textarea>
                </div>
                
                <textarea 
                name="tag" 
                id="tag" 
                className="image-tag" 
                maxLength={75}
                placeholder="write Tag"
                value={formData.tags}

                    onChange={(e)=> setFormData(
                        {
                            ...formData, 
                            tags:e.target.value

                        }
                    )}>
                </textarea>
    
                <div className="price-input">
                    <input 
                    type="number"
                    min="0" 
                    max="9999999"
                    name="originalPrice" 
                    id="original-price" 
                    placeholder="Original Price"
                    value={formData.originalPrice}

                    onChange={(e) => {
                        const value = e.target.value;

                        if (value === "" || Number(value) <= 9999999){
                            setFormData({
                                ...formData,
                                originalPrice: value,
                            });
                        }
                    }}
                     /> 

                    <input 
                    type="number"
                    // min="0"
                    // max="100" 
                    name="offer" 
                    id="offer" 
                    placeholder="offer in %" 
                    value={formData.offer}
    
                    onChange={(e) => {
                    const value = e.target.value;

                   if (value === "" || Number(value) <= 100) {
                    setFormData({
                        ...formData,
                         offer: value,
                       });
                    }
                }}
                    />    
                </div> 
                <span className="final-price">Final Price: ₹{finalPrice}</span>  
                
                
                <div className="preview-upload-btn">

                    <button 
                    className="preview-btn" 
                    onClick={handlePreview}
                     >
                    Preview
                    </button>

                    <button className="upload-btn" onClick={handleUpload}>Upload</button>
                </div>
            </div>

        </div>
        </>
    )
}

export default UploadImageForm; 