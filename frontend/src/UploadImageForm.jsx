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


    const handleUpload = () => {

        if(!selectedImage){
            alert("Please select an image");
            return;
        }
        if(!formData.title.trim()){
            alert("Please Enter Title");
            return;
        }

        const newImage = {
            id: Date.now(),
            image: selectedImage,
            ...formData,
            finalPrice
        };

        setImages((prev) => [...prev, newImage]);
        navigate("/");
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
                    name="originalPrice" 
                    id="original-price" 
                    placeholder="Original Price"
                    value={formData.originalPrice}

                    onChange={(e)=> setFormData(
                        {
                            ...formData, 
                            originalPrice:e.target.value

                        }
                    )}/> 

                    <input 
                    type="number" 
                    name="offer" 
                    id="offer" 
                    placeholder="offer in %" 
                    value={formData.offer}
    
                    onChange={(e)=>
                        setFormData({
                            ...formData,
                            offer:e.target.value
                        })
                    }
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