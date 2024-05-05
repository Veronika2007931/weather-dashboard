
import { useState } from "react";
import { Header } from "./Header/Header"
import { CityList } from "./CityCard/CityList.styled";
import { WeatherFW } from "components/WeatherForWeek/WeatherFW";
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
      <WeatherFW/>
      <Gallery/>
      <CityList setForecastData={setForecastData}/>
      <HourlyForecast forecastData={forecastData}/>
      <Search/>
      <WeatherFW/>
      <Gallery/>
      <Footer/>
    </Container>
  );
};

