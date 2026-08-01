import { useState } from "react";
import "./Help.css";

function Help(){

    const [openIndex, setOpenIndex] = useState (null);

    const toggleFAQ = (index) =>{
        setOpenIndex (openIndex === index ? null : index);
    }

    const faqs = [
    {
        question: "How do I upload an image?",
        answer: "Go to the Upload page, select your image, fill in the required details and click the Upload button."
    },
    {
        question: "How do I download an image?",
        answer: "Click the Download icon available on the image card to download the image to your device."
    },
    {
        question: "How do I save an image to Favorites?",
        answer: "Click the Heart Plus icon on any image card to add it to your Favorites collection."
    },
    {
        question: "How do I view image details?",
        answer: "Click on any image to open its detailed view, where you can see the title, description and other information."
    },
    {
        question: "Can I edit or delete my uploaded images?",
        answer: "Yes. Go to your Profile page, open your uploaded posts and choose the Edit or Delete option."
    },
    {
        question: "How can I contact support?",
        answer: "You can contact us through the Help page or email us at support@imagehub.com."
    }
];
    return(
        <>
             
            <div className="help-container">

                <div className="help-main-title-container">
                    <div className="title-icon">
                        <span className="material-symbols-outlined">help</span>
                        <span>Help Center</span>
                    </div>
                    <p>Need assistance? Find answers below.</p>
                </div>

                <div className="About-imageHub-container">
                    <div>
                        
                        <p>ImageHub is a platform where you can upload, discover, save and download beautiful images. You can create your own collection, manage favorites and explore content shared by creators.</p>

                    </div>
                    <h4>Welcome to ImageHub!</h4>
                    <p>Help Center
Need assistance? Find answers below.</p>
                    
                </div>

                <div className="how-to-use-container">
                    <h4>How to use ImageHub?</h4>
                    <ul>
                        <li>Create your account</li>
                        <li>Upload your first image</li>
                        <li>Browse image</li>
                        <li>Like image</li>
                        <li>Save image to Favorites</li>
                        <li>Download image</li>
                        <li>View Creator Profiles</li>
                    </ul>
                </div>

                <div className="FAQ-conatiner">
                    <h4>Frequently Asked Questions (FAQ)</h4>

                    {faqs.map((faq, index) => (
        <div className="faq-item" key={index}>
            <div
                className="FAQ-question"
                onClick={() => toggleFAQ(index)}
            >
                {faq.question}
                <span>
                    {openIndex === index ? "−" : "+"}
                </span>
            </div>

            {openIndex === index && (
                <div className="FAQ-answer">
                    {faq.answer}
                </div>
            )}
        </div>
    ))}

                </div>

                <div className="community-Guidelines">
                    <h4>Community Guidelines</h4>
                    <ul className="help-list">
                        <li>
                            <span className="material-symbols-outlined">check_circle</span>
                            No offensive content.
                        </li>
                        <li>
                            <span className="material-symbols-outlined">check_circle</span>
                            No spam.
                        </li>
                        <li>
                            <span className="material-symbols-outlined">check_circle</span>    
                            Keep ypur Profile respectful.
                        </li>
                    </ul>

                </div>


                <div className="need-more-help-container">
                    <h4>Contact Support</h4>
                    <h6>Need more help?</h6>
                    <p>
                        <span className="more-help-label">Email:</span>
                        <span>support@imagehub.com</span>
                    </p>

                    <p>
                        <span className="more-help-label">Response Time:</span>
                        <span>Withis 24 Hours</span>
                    </p>

                    <p>
                        <span className="more-help-label">Version:</span>
                        <span> ImageHub v1.0</span>
                    </p>
                </div>


                <footer className="help-page-footer">
                    <p>Still need help?</p>
                    <p>support@imagehub.com</p>
                    <p>© 2026 ImageHub</p>

                </footer>

            </div>
        </>
    )
}

export default Help;