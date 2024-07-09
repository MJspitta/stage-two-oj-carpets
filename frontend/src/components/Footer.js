import '../styles/Footer.css';
import logo from '../images/logo.png'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer1">
                <img src={logo} alt='logo' className='logo' />
                <p className='foot-header'>Warehouse 22 Wuye Ultra Modern Market, Wuye, Abuja.</p>
                <p>2024 OJ Carpet. All rights reserved</p>
            </div>
            <div className="footer2">
                <p className='foot-header'>Links</p>
                <p>Home</p>
                <p>Shop</p>
                <p>About</p>
                <p>Contact</p>
            </div>
            <div className="footer3">
                <p className='foot-header'>Help</p>
                <p>Payment Options</p>
                <p>Returns</p>
                <p>Privacy Policies</p>
                <p>Service Providing</p>
            </div>
            <div className="footer4">
                <p className='foot-header'>Newsletter</p>
                <div className='foot-email'>
                    <input type='email' placeholder='E-mail Address' />
                    <button type='button'>&gt;</button>
                </div>
            </div>
        </div>
    );
};

export default Footer;