import {useState, useEffect} from 'react';
import './news.css';

import img1 from './img/Rectangle 6.jpg';
import img2 from './img/Rectangle 7.jpg';
import img3 from './img/Rectangle 8.jpg';
import img4 from './img/Rectangle 9.jpg';


export function NewsSection() {
    const [newsData, setNewsData] = useState();
    const apiKey = '362c5d90d156483293d8c2e9caa2c142';

    useEffect(() => {
        fetch(`https://newsapi.org/news?key=${apiKey}`)
        .then(response => response.json())
        .then(data => setNewsData(data))
        .catch(error => console.error('Error fetching news:', error));
    }, []);

    return (
    <section className="news-section">
        <h2 className="news-title">Interacting with our pets</h2>
        <div className="news-container">
        <div className="news-item">
            <img src={img1} alt="News 1" />
            <p>Rescue pups pose as ghosts in festive photo shoot</p>
        </div>
        <div className="news-item">
            <img src={img2} alt="News 2" />
            <p>Cat interrupts morning coffee on sunny Washington morning</p>
        </div>
        <div className="news-item">
            <img src={img3} alt="News 3" />
            <p>New study finds dogs pay more attention to women</p>
        </div>
        <div className="news-item">
            <img src={img4} alt="News 4" />
            <p>Petting dogs gives health benefit, even if they are not yours</p>
        </div>
        </div>
        <button className="see-more-btn">See more</button>
    </section>
    );
}
