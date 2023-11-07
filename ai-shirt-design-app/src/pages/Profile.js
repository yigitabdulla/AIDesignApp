import Navbar from "../components/Navbar"
import "../styles/profile.css"

function Profile() {
    

    return (
        <div className="profile-container">
            <Navbar/>
            <div className="profile">
                <ul className="profile-navbar">
                    <a href="/profile/"><li id="about">About</li></a>
                    <a href="/profile/designs"><li id="designs">Designs</li></a>
                    <a href="/profile/orders"><li id="orders">Orders</li></a>
                </ul>
                <div className="about">
                    <span>Full Name:</span>
                    <span>Email:</span>
                    <span>Phone:</span> 
                    <span>Adress:</span>
                </div>
            </div>
        </div>
    )
}

export default Profile