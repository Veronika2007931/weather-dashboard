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
   const [array, changeArray] = useState(localStorage.getItem('array') === null ? [] : JSON.parse(localStorage.getItem('array')));
   const [forecastData, setForecastData] = useState(null);

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
      <Container>
         <Header />
         <Search onSearch={addNewCity} />
         {array && <CityList setForecastData={setForecastData} cities={array} onDelete={handleDelete} />}
         <HourlyForecast forecastData={forecastData} />
         <WeatherFW />
         <Gallery />
         <Footer />
         <GlobalStyle />
      </Container>
   );
};
