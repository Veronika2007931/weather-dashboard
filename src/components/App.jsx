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

export const App = () => {
  const [forecastData, setForecastData] = useState(null);

  return (
    <Container>
      <Header />
      <Search />
      <CityList setForecastData={setForecastData} />
      <HourlyForecast forecastData={forecastData} />
      <Gallery />
      <Footer />
      <GlobalStyle />
    </Container>
  );
};

export default App;





