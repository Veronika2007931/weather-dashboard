import { WeatherFW } from 'components/WeatherForWeek/WeatherFW';
import { useState, useEffect } from 'react';
import { FiTrash, FiHeart, FiRefreshCw } from 'react-icons/fi';
import {
  CityCardContainer,
  CityInfo,
  CityName,
  Time,
  ForecastLinks,
  ForecastButton,
  DateText,
  WeatherIcon,
  Temperature,
  Buttons,
  Button
} from './CityCard.styled';

const CityCard = ({ city, onDelete }) => {
  const [weather, setWeather] = useState(null);
  const [favorites, setFavorites] = useState([]); 
  const [weekly, setWeeklyShow] = useState(false); 

  useEffect(() => {
    const apiKey = 'a86fb84773d86d1940b7e1fc1d165391'; 
    const fetchWeather = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeather();
  }, [city]);

  const handleDeleteClick = () => {
    if (onDelete) {
      onDelete(city);
    }
  };

  const handleWeeklyWeather = () => {
      setWeeklyShow({ weekly: true })
  }

  const handleRefresh = () => {
    onRefresh(city.name);
  };

  return (
    <>
    <CityCardContainer>
      {weather && (
        <>
          <CityName>{city.name}, {city.sys.country}</CityName>
          <Time>{new Date().toLocaleTimeString()}</Time>
          <ForecastLinks>
            <ForecastButton>Hourly forecast</ForecastButton>
            <ForecastButton onClick={handleWeeklyWeather} coord={city.coord}>Weekly forecast</ForecastButton>
          </ForecastLinks>
          <Date>{new Date().toLocaleDateString()}</Date>
          <WeatherIcon src={`http://openweathermap.org/img/wn/${city.weather[0].icon}.png`} alt="Weather Icon" />
          <Temperature>{city.main.temp}°C</Temperature>
          <Buttons>
            {/* <RefreshButton onClick={handleRefreshClick}>Refresh</RefreshButton> */}
            {/* <FavoriteButton onClick={handleFavoriteClick}>Add to Favorites</FavoriteButton>
            <SeeMoreButton onClick={handleSeeMoreClick}>See More</SeeMoreButton> */}
            <Button onClick={handleDeleteClick}>Delete</Button>
          </Buttons>
        </>
      )}
    </CityCardContainer>
    {weekly && <WeatherFW city={city}/>}
    </>
  );
}

export default CityCard;
