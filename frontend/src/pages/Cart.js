import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Cart.css";
import background from "../images/cart-bg.png";
import logo from "../images/logo.png";
import cart1 from "../images/cart1.png";
import cart2 from "../images/cart2.png";
import { Link } from "react-router-dom";

const Cart = () => {
    return (
        <div className="cart-page">
            <div className="cart-header" style={{ backgroundImage: `url(${background})` }}>
                <Navbar />
                <div className="cart-head">
                    <img src={logo} alt="logo" className="logo" />
                    <h2>Cart</h2>
                    <p>Home &gt; Cart</p>
                </div>
            </div>
            <div className="cart-body">
                <div className="cart-product">
                    <div className="cp-image">
                        <img src={cart1} alt="product image" />
                    </div>
                    <div className="cp-body">
                        <div className="cpb-head">
                            <h2>D-Green Carpet</h2>
                            <span className="per-discount">-50%</span>
                        </div>
                        <p className="measure">25mm high</p>
                        <p className="price">$8,000<span className="price-per">Per square meter</span></p>
                        <p className="fav">5 Customer's Favorite</p>
                        <p className="prod-text">D-Green (Deep Green) is made from synthetic feel of natural grass. It is commonly used in areas where growing and maintaining natural grass is challenging, such as sports fields, playgrounds, and residential lawns. It’s durable, low maintenance requirements, and the ability to remain green and lush year-round without the need for watering, mowing or fertilizing.</p>
                        
                        <div className="req-ins-check">
                            <label for="req-ins-box" className="req-ins-box">Request Installer</label>
                            <input type="checkbox" id="req-ins-box" />
                        </div>
                    </div>
                </div>
                <div className="cart-product">
                    <div className="cp-image">
                        <img src={cart2} alt="product image" />
                    </div>
                    <div className="cp-body">
                        <div className="cpb-head">
                            <h2>Lightwood Carpet</h2>
                            <span className="per-discount">-50%</span>
                        </div>
                        <p className="measure">23mm thick</p>
                        <p className="price">$8,000<span className="price-per">Per square meter</span></p>
                        <p className="fav">5 Customer's Favorite</p>
                        <p className="prod-text">Lightwood carpet is a durable and high-performance flooring option designed for commercial and high-traffic environment such as offices, hotels, retail spaces, and public buildings. Lightwood is engineered by latest technology to withstand heavy use and are made from nylon, polypropylene, olefin which offer excellent resistance to wear, stains and moisture. It’s less harmful for kids to play on because of the smooth thickness which makes it difficult for sharp objects to penetrate.</p>
                        
                        <div className="req-ins-check">
                            <label for="req-ins-box" className="req-ins-box">Request Installer</label>
                            <input type="checkbox" id="req-ins-box" />
                        </div>
                    </div>
                </div>
                <Link to="/checkout" className="checkout-btn"><button type="button" className="c-btn">Checkout</button></Link>
            </div>
            <Footer />

        </div>
    );
};

export default Cart;