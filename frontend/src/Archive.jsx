import "./Archive.css";


import img1 from "/src/images/img1.jpg";
import img2 from "/src/images/img2.jpg";
import img3 from "/src/images/img3.jpg";
import img4 from "/src/images/img4.jpg";
import img5 from "/src/images/img5.jpg";
import img6 from "/src/images/img6.jpg"; 
import img7 from "/src/images/img7.jpg";
import img8 from "/src/images/img8.jpg";
import img9 from "/src/images/img9.jpg";
import img10 from "/src/images/img10.jpg";
import img11 from "/src/images/img11.jpg";
import img12 from "/src/images/img12.jpg";
import img13 from "/src/images/img13.jpg";
import img14 from "/src/images/img14.jpg";
import img15 from "/src/images/img15.jpg";
import img16 from "/src/images/img16.jpg";
import img17 from "/src/images/img17.jpg";
import img18 from "/src/images/img18.jpg";

function Archive(){

    return(
        <>
            <div className="Archive-container">
                <div className="Archive-main-title">
                    <i className="fa-solid fa-folder archived-icon"></i>
                    <span>Archived</span>
                </div>
                
                <div className="archive-count-add-icon">
                    <div className="archived-count-paragraph">
                        <div className="archived-images-count">
                            <span className="material-symbols-outlined">visibility_lock</span>
                            <span>Hidden Images ({24})</span>
                        </div>
                        <p>Archived images are only visible to you.</p>
                    </div>
                    <div className="add-archive-icon-container">  
                            <span class="material-symbols-outlined add-archive-icon">add</span>
                            <span>Add Archive</span>
                    </div>
                </div>
                <hr/>
                
                <div className="archived-posts-container">
                    <div className="Archived-post">
                        <img src={img1} alt="post1"/>
                        <div className="restore-delete-icon">
                            <span className="material-symbols-outlined restore-icon">restart_alt</span>
                            <span className="material-symbols-outlined delete-icon">delete_forever</span>
                        </div>
                    </div>

                    <div className="Archived-post">
                        <img src={img2} alt="post2"/>
                        <div className="restore-delete-icon">
                            <span className="material-symbols-outlined restore-icon">restart_alt</span>
                            <span className="material-symbols-outlined delete-icon">delete_forever</span>
                        </div>
                    </div>

                    <div className="Archived-post">
                        <img src={img3} alt="post3"/>
                        <div className="restore-delete-icon">
                            <span className="material-symbols-outlined restore-icon">restart_alt</span>
                            <span className="material-symbols-outlined delete-icon">delete_forever</span>
                        </div>
                    </div>

                    <div className="Archived-post">
                        <img src={img4} alt="post4"/>
                        <div className="restore-delete-icon">
                            <span className="material-symbols-outlined restore-icon">restart_alt</span>
                            <span className="material-symbols-outlined delete-icon">delete_forever</span>
                        </div>
                    </div>

                    <div className="Archived-post">
                        <img src={img5} alt="post5"/>
                        <div className="restore-delete-icon">
                            <span className="material-symbols-outlined restore-icon">restart_alt</span>
                            <span className="material-symbols-outlined delete-icon">delete_forever</span>
                        </div>
                    </div>

                    <div className="Archived-post">
                        <img src={img6} alt="post6"/>
                        <div className="restore-delete-icon">
                            <span className="material-symbols-outlined restore-icon">restart_alt</span>
                            <span className="material-symbols-outlined delete-icon">delete_forever</span>
                        </div>
                    </div>

                    <div className="Archived-post">
                        <img src={img7} alt="post7"/>
                        <div className="restore-delete-icon">
                            <span className="material-symbols-outlined restore-icon">restart_alt</span>
                            <span className="material-symbols-outlined delete-icon">delete_forever</span>
                        </div>
                    </div>

                    <div className="Archived-post">
                        <img src={img8} alt="post8"/>
                        <div className="restore-delete-icon">
                            <span className="material-symbols-outlined restore-icon">restart_alt</span>
                            <span className="material-symbols-outlined delete-icon">delete_forever</span>
                        </div>
                    </div>

                    <div className="Archived-post">
                        <img src={img9} alt="post9"/>
                        <div className="restore-delete-icon">
                            <span className="material-symbols-outlined restore-icon">restart_alt</span>
                            <span className="material-symbols-outlined delete-icon">delete_forever</span>
                        </div>
                    </div>

                    <div className="Archived-post">
                        <img src={img10} alt="post10"/>
                        <div className="restore-delete-icon">
                            <span className="material-symbols-outlined restore-icon">restart_alt</span>
                            <span className="material-symbols-outlined delete-icon">delete_forever</span>
                        </div>
                    </div>

                    <div className="Archived-post">
                        <img src={img11} alt="post11"/>
                        <div className="restore-delete-icon">
                            <span className="material-symbols-outlined restore-icon">restart_alt</span>
                            <span className="material-symbols-outlined delete-icon">delete_forever</span>
                        </div>
                    </div>

                    <div className="Archived-post">
                        <img src={img12} alt="post12"/>
                        <div className="restore-delete-icon">
                            <span className="material-symbols-outlined restore-icon">restart_alt</span>
                            <span className="material-symbols-outlined delete-icon">delete_forever</span>
                        </div>
                    </div>

                    <div className="Archived-post">
                        <img src={img13} alt="post13"/>
                        <div className="restore-delete-icon">
                            <span className="material-symbols-outlined restore-icon">restart_alt</span>
                            <span className="material-symbols-outlined delete-icon">delete_forever</span>
                        </div>
                    </div>

                    <div className="Archived-post">
                        <img src={img14} alt="post14"/>
                        <div className="restore-delete-icon">
                            <span className="material-symbols-outlined restore-icon">restart_alt</span>
                            <span className="material-symbols-outlined delete-icon">delete_forever</span>
                        </div>
                    </div>

                    <div className="Archived-post">
                        <img src={img15} alt="post15"/>
                        <div className="restore-delete-icon">
                            <span className="material-symbols-outlined restore-icon">restart_alt</span>
                            <span className="material-symbols-outlined delete-icon">delete_forever</span>
                        </div>
                    </div>
                    <div className="Archived-post">
                        <img src={img16} alt="post16"/>
                        <div className="restore-delete-icon">
                            <span className="material-symbols-outlined restore-icon">restart_alt</span>
                            <span className="material-symbols-outlined delete-icon">delete_forever</span>
                        </div>
                    </div>

                    <div className="Archived-post">
                        <img src={img17} alt="post17"/>
                        <div className="restore-delete-icon">
                            <span className="material-symbols-outlined restore-icon">restart_alt</span>
                            <span className="material-symbols-outlined delete-icon">delete_forever</span>
                        </div>
                    </div>

                    <div className="Archived-post">
                        <img src={img18} alt="post18"/>
                        <div className="restore-delete-icon">
                            <span className="material-symbols-outlined restore-icon">restart_alt</span>
                            <span className="material-symbols-outlined delete-icon">delete_forever</span>
                        </div>
                    </div>

                    
                     

                </div>
            </div>
        </>
    )
}

export default Archive;