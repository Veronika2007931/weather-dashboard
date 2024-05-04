import './Footer.css';
import Logo from '../../img/logo 2.png';
import instagram from '../../img/image6.png';
import facebook from '../../img/image 7.png';
import whatsapp from '../../img/whatsapp (2) 1.png';

export function Footer(){

    return <footer className="footer">
                <div className="container">
                    <div className="logo">
                        <img src={Logo} alt="" />
                    </div>
                    <div className='content'>
                        <div className="list">
                            <ul>
                                <h4>Address</h4>
                                <li>Svobody str.35</li>
                                <li>Kyiv</li>
                                <li>Ukraine</li>
                            </ul>
                        </div>
                        <div className='contact'>
                            <div className='subtitle'>
                                <h4>Contact us</h4>
                            </div>
                            <div className='messenger'>
                                <button><img src={instagram} alt="" /></button>
                                <button><img src={facebook}alt="" /></button>
                                <button><img src={whatsapp} alt="" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
}