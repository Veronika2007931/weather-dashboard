import {useState, useEffect} from 'react';
import { SectionTitle, NewsList, NewsItem, Img, Text, Button } from './News.styled';

export function NewsSection() {
    const [newsData, setNewsData] = useState();
    const apiKey = '362c5d90d156483293d8c2e9caa2c142';

    useEffect(() => {
        fetch(`https://newsapi.org/v2/everything?q=weather&apiKey=${apiKey}`)
        .then(response => response.json())
        .then(data => data.articles)
        .then(articles => {
                const updatedNewsData = articles.splice(0, 4);
                setNewsData(updatedNewsData)
            })
        .catch(error => console.error('Error fetching news:', error));
    }, []);

    
   
    return (
    <section className="news-section">
        <SectionTitle className="news-title">Interacting with our pets</SectionTitle>
            <NewsList>
               {newsData && newsData.map((newsItem, index) => {
          return  <NewsItem key={index} className="news-item">
                <Img src={newsItem.urlToImage} alt={``} />
                <Text>{newsItem.title}</Text>
            </NewsItem>
        })} 
        </NewsList>
        

        <Button className="see-more-btn">See more</Button>
    </section>
    );
}
