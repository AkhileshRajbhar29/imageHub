import "./Account-detail.css";
import { FaFileExport } from "react-icons/fa"
import img8 from "/src/images/img8.jpg";

function Account_detail(){

    return(
        <>
            <div className="Account-detail-container">
                <div className="profile-image-div">
                    <img src={img8} className="Account-detail-profile-img"></img>
                    <span>akhilesh_a51</span>
                </div>

                <div className="detail-tables">

                    
                    <table className="account-detail-table">
                        <p className="basic-details">Besic Details</p>
                        <tr>
                            <td className="label">Username:</td>
                            <td className="table-data">akhilesh_a51</td>
                        </tr>
                        <tr>
                            <td className="label">Full Name:</td>
                            <td className="table-data">Akhilesh Rajbhar</td>
                        </tr>
                        
                        <tr>
                            <td className="label">Email:</td>
                            <td className="table-data">akhileshrajbhar@gmail.com</td>
                        </tr>
                        <tr>
                            <td className="label">Location:</td>
                            <td className="table-data">Azamgarh, 276207</td>
                        </tr>
                        <tr>
                            <td className="label">Bio:</td>
                            <td className="table-data">Jai Shree Ram 🙏🙏🙏<br/> I love traveling<br/> Engineer🧑‍💻🖥️.</td>
                        </tr>
                    </table>

                   
                    <table className="account-detail-table">
                        <p className="Statistics-table">Statistics</p>
                        <tr>
                            <td className="label">Joined Date:</td>
                            <td className="table-data">12 july 2020</td>
                        </tr>
                        <tr>
                            <td className="label">Posts:</td>
                            <td className="table-data">80</td>
                        </tr>
                        <tr>
                            <td className="label">Fallowers</td>
                            <td className="table-data">52435</td>
                        </tr>
                        <tr>
                            <td className="label">Fallowings</td>
                            <td className="table-data">352</td>
                        </tr>
                        <tr>
                            <td className="label">Likes: </td>
                            <td className="table-data">2446</td>
                        </tr>
                        <tr>
                            <td className="label">Favorites:</td>
                            <td className="table-data">52</td>
                        </tr>
                        <tr>
                            <td className="label">Downloads: </td>
                            <td className="table-data">2446</td>
                        </tr>
                    </table>

                    <table className="account-detail-table">
                        <p className="creator-table">Creator</p>
                        <tr>
                            <td className="label">Image Sold:</td>
                            <td className="table-data">3032</td>
                        </tr>
                        <tr>
                            <td className="label">Wallet</td>
                            <td className="table-data">$324</td>
                        </tr>
                    </table>

                    <p className="account-detail-logout-btn">LogOut</p>
                    <p className="account-detail-delete-account-btn">Delete Account</p>
                </div>

            </div>
        </>
    )


}

export default Account_detail;