import Navbar from "../components/Navbar"
import "../styles/orders.css"
import { styled } from '@mui/material/styles';


const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});


function Orders() {


    return (
        <div className="orders-container">
            <Navbar />
            <div className="profile">
                <ul className="profile-navbar">
                    <a href="/profile/"><li id="about">About</li></a>
                    <a href="/profile/designs"><li id="designs">Designs</li></a>
                    <a href="/profile/orders"><li id="orders">Orders</li></a>
                </ul>
                <div className="main">
                    <div className="orders">
                        <div className="order">
                            <div className="img-container"><img src="https://cdn.pixabay.com/photo/2016/12/06/09/31/blank-1886008_640.png" /></div>
                            <div className="order-info">
                                <div className="order-list">
                                    <div className="order-title">Order ID</div>
                                    <div>1019082</div>
                                </div>
                                <div className="order-list">
                                    <div className="order-title">Order Date</div>
                                    <div>22.10.2023</div>
                                </div>
                                <div className="order-list">
                                    <div className="order-title">Buyer</div>
                                    <div>Abdulla Yiğit</div>
                                </div>
                                <div className="order-list">
                                    <div className="order-title">Address</div>
                                    <div>Eri cahs</div>
                                </div>
                            </div>

                            <button className="order-btn">More Info</button>
                        </div>

                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Orders;