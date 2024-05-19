
import { useState } from "react";
import { Header } from "./Header/Header"
// import { CityList } from "./CityCard/CityList.styled";
// import CityList from "./CityCard/CityList.styled"
import { WeatherFW } from "components/WeatherForWeek/WeatherFW";
// import { NewsSection } from "./News/News";
// import { Gallery } from "./TeamGalery/Gallery";
import { Footer } from "./Footer/Footer"
import {Container} from "../Container.styled"
// import { HourlyForecast } from "./HourlyForecast/HourlyForecast";
import { Search } from './Search/Search'
import { GlobalStyle } from "Global.styled";
import { Carousel } from "./Slaider/Carousel"



export const App = () => {
  const [forecastData, setForecastData] = useState(null)
  const slides = [
    'https://via.placeholder.com/800x400?text=Slide+1',
    'https://via.placeholder.com/800x400?text=Slide+2',
    'https://via.placeholder.com/800x400?text=Slide+3',
  ];

  return (
    <>
    <Container>
    <Header/>
    <Search/>
      <CityList setForecastData={setForecastData}/>
      <HourlyForecast forecastData={forecastData}/>
    <WeatherFW/>
    <Gallery/>
      <NewsSection/>
    <GlobalStyle/>
    <Carousel slides={slides}/>
    <Footer/>
    </Container>
    
    </>
  );
};

