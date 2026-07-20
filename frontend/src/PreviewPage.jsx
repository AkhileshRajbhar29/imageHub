import "./PreviewPage.css";
import { useLocation, useNavigate } from "react-router-dom";
 

function PreviewPage({images, setImages}){

    const location = useLocation();
    // console.log(location.state);

    if(!location.state){
        return <h2>No Preview Data Found</h2>
    }
    // const {image, formData} = location.state;

        const {image, formData, finalPrice} = location.state;

    const handleUpload = () => {

        if(!image){
            alert("Please select an Image");
            return;
        }
        if(!formData.title.trim()){
            alert("Please Enter the Title");
            return;
        }
        
        const newImage = {
            id:Date.now(),
            image,
            ...formData,
            finalPrice
        };

        setImages(prev => [...prev, newImage]);
        navigate("/");
    };

    const navigate = useNavigate();

    const imageSrc = 
    image instanceof File
    ? URL.createObjectURL(image)
    :image;
     
    return(
        <>
        <div className="preview-container">

            <div className="preview-img-div">
                <img 
                src= {imageSrc} 
                alt="image"
                className="image"
                />
            </div>
            <div className="preview-detail-container">
                <div className="title-userName">
                    <h3>{formData.title }</h3>
                    <span className="userName">
                        <img src="src/images/img21.jpg"></img>
                        <span>@Aditya</span>
                    </span>
                </div>
                <div className="preview-detail">
                    <span>{formData.description}</span>
                    <span className="selectedCategory">{formData.category}</span>
                    <span>
                        [{formData.tags}]
                    </span>
                    <div className="originPrice-offer">
                        <span>₹{formData.originalPrice}</span>
                        <span>{formData.offer}%</span>
                    </div>
                    <span className="final-price-preview"> Final Price: ₹{finalPrice}
            
                        </span>
                    <button 
                    className="upload-btn-preview" 
                    onClick={handleUpload}
                    >
                        Upload
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}

export default PreviewPage;