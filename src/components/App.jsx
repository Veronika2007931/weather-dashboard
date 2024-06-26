import { useState } from "react";
import { Header } from "./Header/Header";
import CityList from "./CityCard/CityList";

import { NewsSection } from "./News/news";
import { Gallery } from "./TeamGalery/Gallery";
import { Footer } from "./Footer/Footer"
import {Container} from "../Container.styled"
import { HourlyForecast } from "./HourlyForecast/HourlyForecast";
import { Search } from './Search/Search'
import { GlobalStyle } from "Global.styled";
import { Carousel } from "./Slaider/Carousel"
import { WeatherFW } from "./WeatherForWeek/WeatherFW";



export const App = () => {
  const [forecastData, setForecastData] = useState(null)
  const slides = [
    'https://ichef.bbci.co.uk/ace/ws/640/amz/worldservice/live/assets/images/2015/09/12/150912132018_wikipedia_images_976x549_vitaliybashkatov.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLuyZ2Tb17sNBe5l7B4ROeHNhE-gaZHJAxUTXTdxqnUw&s',
    'https://www.fresher.ru/manager_content/images2/udivitelnye-fotografii-dikoj-prirody-alyaski/1.jpg',
    'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg1FivIp3Xbm4_NUtFz8AtHwo2FjDQeXMti8GkzpUzBPObDnYaTR1OiMReGMWmD3ibzM4jJqmwSXMdQL80wMcYxXltYWjJx1_2maUv7YEhgrxupUYDoJ3VCEyauSUqrERitmNzumGRMvNg/s1600/priroda03.jpg',
  ];

  const [array, changeArray] = useState(localStorage.getItem('array') === null ? [] : JSON.parse(localStorage.getItem('array')));
  const [weekly, setWeeklyShow] = useState(false); 
  const [hourly, setHourlyShow] = useState(false); 
  const [coord, setCoord] = useState(null);

  const showWeeklyForecast = (coord) => {
    setWeeklyShow(true);
    setCoord(coord)
  }

  const showHourlyWeather = (coord) => {
    setHourlyShow(true)
    setCoord(coord)
  }


  const addNewCity = (city) => {
    changeArray(prev => {
      const newA = [...prev, city];
      localStorage.setItem('array', JSON.stringify(newA));
      return newA;
    });
  }

  const handleDelete = (cityName) => {
    const updatedCities = array.filter(city => city.name !== cityName);
    changeArray(updatedCities);
    localStorage.setItem('array', JSON.stringify(updatedCities));
  };
  
  

  return (
    <>
      <Header />
      <Search onSearch={addNewCity} />
      <Container>
      {array && <CityList 
        setForecastData={setForecastData} 
        cities={array} 
        onDelete={handleDelete} 
        onWeeklyWeather={showWeeklyForecast}
        onHourlyWeather={showHourlyWeather}/>}
        {hourly && <HourlyForecast coord={coord} forecastData={forecastData} />}
        {weekly && <WeatherFW coord={coord}/>}

        <Gallery />
         <NewsSection/>
         <Carousel slides={slides}/>
      </Container>
      <Footer />
      <GlobalStyle />
    </>
  );
};

export default App;





