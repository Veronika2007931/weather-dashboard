import React, { useState } from "react";
import { Header } from "./Header/Header";
import CityList from "./CityCard/CityList";
import { WeatherFW } from "components/WeatherForWeek/WeatherFW";
import { Gallery } from "./TeamGalery/Gallery";
import { Footer } from "./Footer/Footer";
import { Container } from "../Container.styled";
import { HourlyForecast } from "./HourlyForecast/HourlyForecast";
import { Search } from "./Search/Search";
import { GlobalStyle } from "Global.styled";
import {NewsSection} from "./News/news"

export const App = () => {
  const [forecastData, setForecastData] = useState(null);

  return (
    <>
    <Header />
    <Search />
    <Container>
      <CityList setForecastData={setForecastData} />
      <HourlyForecast forecastData={forecastData} />
      <WeatherFW/>
      <Gallery />
      <NewsSection/>
    </Container>
    <Footer />
    <GlobalStyle />
    </>
  );
    
};

export default App;





