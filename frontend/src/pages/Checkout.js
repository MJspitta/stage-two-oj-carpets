import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import background from "../images/cart-bg.png";
import logo from "../images/logo.png";
import "../styles/Checkout.css";

const Checkout = () => {
    return (
        <div className="checkout-page">
            <div className="checkout-header" style={{ backgroundImage: `url(${background})` }}>
                <Navbar />
                <div className="checkout-head">
                    <img src={logo} alt="logo" className="logo" />
                    <h2>Checkout</h2>
                    <p>Home &gt; Cart &gt; Checkout</p>
                </div>
                
            </div>
            <div className="checkout-body">
                <div className="contact-details">
                    <h3>Contact details</h3>
                    <div className="names">
                        <div className="inputs">
                            <label for="first-name">First Name</label>
                            <input type="text" id="first-name" />
                        </div>
                        <div className="inputs">
                            <label for="last-name">Last Name</label>
                            <input type="text" id="last-name" />
                        </div>
                    </div>
                    <div className="inputs">
                        <label for="address">Address</label>
                        <input type="text" id="address" />
                    </div>
                    <div className="inputs">
                        <label for="phone-number">Phone Number</label>
                        <input type="tel" id="phone-number" />
                    </div>
                    <div className="inputs">
                        <label for="email">E-mail</label>
                        <input type="email" id="email" />
                    </div>
                </div>
                <div className="cb-right">
                    <div className="checkout-list">
                        <div className="product">
                            <h3>Product</h3>
                            <p>D-Green Carpet</p>
                            <p>Lightwood Carpet</p>
                            <p>Installer</p>
                            <h4>Total</h4>
                        </div>
                        <div className="quantity">
                            <h3>Quantity</h3>
                            <p>12 square meter</p>
                            <p>22 square meter</p>
                            <p>2 persons</p>
                            <h4>54</h4>
                        </div>
                        <div className="amount">
                            <h3>Amount($)</h3>
                            <p>96,000</p>
                            <p>275,000</p>
                            <p>100,000</p>
                            <h4>471,000</h4>
                        </div>
                    </div>
                    <div className="payment-method">
                        <h3>Payment Method</h3>
                        <div>
                            <div className="radios">
                                <input type="radio" id="cash" name="payment" checked />
                                <label for="cash">Cash On Delivery</label>
                            </div>
                            <div className="radios">
                                <input type="radio" id="card" name="payment" />
                                <label for="card">Card Payment</label>
                            </div>
                            <div className="radios">
                                <input type="radio" id="bank" name="payment" />
                                <label for="bank">Direct Bank Transfer</label>
                            </div>
                        </div>

                    </div>
                    <button type="button" className="order-btn">Place Order</button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Checkout;