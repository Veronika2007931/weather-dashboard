

import { useState } from "react";
import { Header } from "./Header/Header"
import { CityList } from "./CityCard/CityList.styled";
import { WeatherFW } from "components/WeatherForWeek/WeatherFW";
import { NewsSection } from "./News/News";
import { Gallery } from "./TeamGalery/Gallery";
import { Footer } from "./Footer/Footer"
import {Container} from "../Container.styled"
import { HourlyForecast } from "./HourlyForecast/HourlyForecast";
import { Search } from './Search/Search'



export const App = () => {
  const [forecastData, setForecastData] = useState(null)

  return (
    <Container>
      <Header/>
    <Search/>
      <WeatherFW/>
      <NewsSection/>
      <Gallery/>
      <CityList setForecastData={setForecastData}/>
      <HourlyForecast forecastData={forecastData}/>
      <Footer/>
    </Container>
  );
};

