import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Cart = () => {
    return (
        <div className="cart-page">
            <div className="cart-header">
                <Navbar />
                <img src="" alt="" />
                <h2>Cart</h2>
                <p>Home - Cart</p>
            </div>
            <div className="cart-body">
                <div className="cart-product">
                    <div className="cp-image">
                        <img src="" alt="" />
                    </div>
                    <div className="cp-body">
                        <div>
                            <h2>D-Green Carpet</h2>
                            <span>-50%</span>
                        </div>
                        <p>25mm high</p>
                        <p>$8,000<span>Per square meter</span></p>
                        <p>***** | <span>5 Customer's Favorite</span></p>
                        <p></p>
                        <div>
                            <div><span>Square Meter</span></div>
                            <div>
                                <label for="req-ins-box">Request Installer</label>
                                <input type="checkbox" id="req-ins-box" checked />
                            </div>
                        </div>
                        <button></button>
                    </div>
                </div>
                <button type="button">Checkout</button>
            </div>
            <Footer />

        </div>
    );
};

export default Cart;