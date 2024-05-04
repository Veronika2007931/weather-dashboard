import { useState } from "react";
import { Header } from "./Header/Header"
import { CityList } from "./CityCard/CityList";
import { WeatherFW } from "components/WeatherForWeek/WeatherFW";
import { Gallery } from "./TeamGalery/Gallery";
import { Footer } from "./Footer/Footer"
import {Container} from "../Container.styled"
import { HourlyForecast } from "./HourlyForecast/HourlyForecast";



export const App = () => {
  const [forecastData, setForecastData] = useState(null)

  return (
    <Container>
      <Header/>
      <CityList setForecastData={setForecastData}/>
      <HourlyForecast forecastData={forecastData}/>
      <WeatherFW/>
      <Gallery/>
      <Footer/>
    </Container>
  );
};

