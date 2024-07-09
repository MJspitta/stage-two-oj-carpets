import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Home.css';
import background from '../images/home-bg.png';
import headerimg from '../images/header-img.png';
import industrialcarpet from '../images/industrial-carpet.png';
import rugcarpet from '../images/rug-carpet.png';
import grasscarpet from '../images/grass-carpet.png';

const Home = () => {
    return (
        <div className="home-page">
            <header style={{ backgroundImage: `url(${background})` }}>
                <Navbar />
                <div className='header-body'>
                    <div className='hb-left'>
                        <h1>Enhance Your Landscape with OJ Premium Carpets</h1>
                        <h3>Dealer in all kinds of Carpet Flooring</h3>
                        <p>Licensed and Approved</p>
                    </div>
                    <div className='hb-right'>
                        <img src={headerimg} alt='carpet images' />
                    </div>
                </div>
            </header>
            <main>
                <div className='product-section'>
                    <h3>Our Product</h3>
                    <p>We deal in different kinds of carpet flooring</p>
                    <div className='product-containers'>
                        <div className='ps-container' style={{ backgroundImage: `url(${industrialcarpet})` }}><span>Industrial Carpet</span></div>
                        <div className='ps-container' style={{ backgroundImage: `url(${rugcarpet})` }}><span>Rug Carpet</span></div>
                        <div className='ps-container' style={{ backgroundImage: `url(${grasscarpet})` }}><span>Grass Carpet</span></div>
                    </div>
                </div>
                <div className='client-section'>
                    <h2>JOIN CLIENTS COMMUNITY TO GET MONTHLY PROMO</h2>
                    <p>Type your email down below and enjoy our benefits</p>
                    <div className='send-email'>
                        <input type='email' placeholder='Type e-mail here' />
                        <button type='button'>Send</button>
                    </div>
                </div>
                <div className='carpet-section'>
                    <div className='industrial-sec'>
                        <h3>Industrial Carpet</h3>
                        <div className='products'>
                            <div className='product'>
                                <div className='product-img' style={{ backgroundImage: `url(${industrialcarpet})` }}>
                                    <span className='product-discount'>New</span>
                                </div>
                                <div className='product-info'>
                                    <h4>Vinyl Carpet</h4>
                                    <p>10mm thick</p>
                                    <h5><span className='product-price'>$9000</span> <span className='product-size'>per square meter</span></h5>
                                </div>
                            </div>
                            <div className='product'>
                                <div className='product-img' style={{ backgroundImage: `url(${industrialcarpet})` }}>
                                    <span className='product-discount'>New</span>
                                </div>
                                <div className='product-info'>
                                    <h4>Vinyl Carpet</h4>
                                    <p>10mm thick</p>
                                    <h5><span className='product-price'>$9000</span> <span className='product-size'>per square meter</span></h5>
                                </div>
                            </div>
                            <div className='product'>
                                <div className='product-img' style={{ backgroundImage: `url(${industrialcarpet})` }}>
                                    <span className='product-discount'>New</span>
                                </div>
                                <div className='product-info'>
                                    <h4>Vinyl Carpet</h4>
                                    <p>10mm thick</p>
                                    <h5><span className='product-price'>$9000</span> <span className='product-size'>per square meter</span></h5>
                                </div>
                            </div>
                            <div className='product'>
                                <div className='product-img' style={{ backgroundImage: `url(${industrialcarpet})` }}>
                                    <span className='product-discount'>New</span>
                                </div>
                                <div className='product-info'>
                                    <h4>Vinyl Carpet</h4>
                                    <p>10mm thick</p>
                                    <h5><span className='product-price'>$9000</span> <span className='product-size'>per square meter</span></h5>
                                </div>
                            </div>
                        </div>
                        <button type='button'>Show More</button>
                    </div>
                    <div className='rug-sec'>
                        <h3>Rug Carpet</h3>
                        <div className='products'>
                            <div className='product'>
                                <div className='product-img' style={{ backgroundImage: `url(${industrialcarpet})` }}>
                                    <span className='product-discount'>New</span>
                                </div>
                                <div className='product-info'>
                                    <h4>Vinyl Carpet</h4>
                                    <p>10mm thick</p>
                                    <h5><span className='product-price'>$9000</span> <span className='product-size'>per square meter</span></h5>
                                </div>
                            </div>
                            <div className='product'>
                                <div className='product-img' style={{ backgroundImage: `url(${industrialcarpet})` }}>
                                    <span className='product-discount'>New</span>
                                </div>
                                <div className='product-info'>
                                    <h4>Vinyl Carpet</h4>
                                    <p>10mm thick</p>
                                    <h5><span className='product-price'>$9000</span> <span className='product-size'>per square meter</span></h5>
                                </div>
                            </div>
                            <div className='product'>
                                <div className='product-img' style={{ backgroundImage: `url(${industrialcarpet})` }}>
                                    <span className='product-discount'>New</span>
                                </div>
                                <div className='product-info'>
                                    <h4>Vinyl Carpet</h4>
                                    <p>10mm thick</p>
                                    <h5><span className='product-price'>$9000</span> <span className='product-size'>per square meter</span></h5>
                                </div>
                            </div>
                            <div className='product'>
                                <div className='product-img' style={{ backgroundImage: `url(${industrialcarpet})` }}>
                                    <span className='product-discount'>New</span>
                                </div>
                                <div className='product-info'>
                                    <h4>Vinyl Carpet</h4>
                                    <p>10mm thick</p>
                                    <h5><span className='product-price'>$9000</span> <span className='product-size'>per square meter</span></h5>
                                </div>
                            </div>
                        </div>
                        <button type='button'>Show More</button>
                    </div>
                    <div className='grass-sec'>
                        <h3>Grass Carpet</h3>
                        <div className='products'>
                        <div className='product'>
                                <div className='product-img' style={{ backgroundImage: `url(${industrialcarpet})` }}>
                                    <span className='product-discount'>New</span>
                                </div>
                                <div className='product-info'>
                                    <h4>Vinyl Carpet</h4>
                                    <p>10mm thick</p>
                                    <h5><span className='product-price'>$9000</span> <span className='product-size'>per square meter</span></h5>
                                </div>
                            </div>
                            <div className='product'>
                                <div className='product-img' style={{ backgroundImage: `url(${industrialcarpet})` }}>
                                    <span className='product-discount'>New</span>
                                </div>
                                <div className='product-info'>
                                    <h4>Vinyl Carpet</h4>
                                    <p>10mm thick</p>
                                    <h5><span className='product-price'>$9000</span> <span className='product-size'>per square meter</span></h5>
                                </div>
                            </div>
                            <div className='product'>
                                <div className='product-img' style={{ backgroundImage: `url(${industrialcarpet})` }}>
                                    <span className='product-discount'>New</span>
                                </div>
                                <div className='product-info'>
                                    <h4>Vinyl Carpet</h4>
                                    <p>10mm thick</p>
                                    <h5><span className='product-price'>$9000</span> <span className='product-size'>per square meter</span></h5>
                                </div>
                            </div>
                            <div className='product'>
                                <div className='product-img' style={{ backgroundImage: `url(${industrialcarpet})` }}>
                                    <span className='product-discount'>New</span>
                                </div>
                                <div className='product-info'>
                                    <h4>Vinyl Carpet</h4>
                                    <p>10mm thick</p>
                                    <h5><span className='product-price'>$9000</span> <span className='product-size'>per square meter</span></h5>
                                </div>
                            </div>
                        </div>
                        <button type='button'>Show More</button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;