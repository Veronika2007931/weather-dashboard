import React from 'react';
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

  handleWeeklyWeather = () => {
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
          <CityName>{weather.name}, {weather.sys.country}</CityName>
          <Time>{new Date().toLocaleTimeString()}</Time>
          <ForecastLinks>
            <ForecastButton>Hourly forecast</ForecastButton>
            <ForecastButton>Weekly forecast</ForecastButton>
          </ForecastLinks>
          <Date>{new Date().toLocaleDateString()}</Date>
          <WeatherIcon src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="Weather Icon" />
          <Temperature>{weather.main.temp}°C</Temperature>
          <Buttons>
            <RefreshButton onClick={handleRefreshClick}>Refresh</RefreshButton>
            <FavoriteButton onClick={handleFavoriteClick}>Add to Favorites</FavoriteButton>
            <SeeMoreButton onClick={handleSeeMoreClick}>See More</SeeMoreButton>
            <Button onClick={handleDeleteClick}>Delete</Button>
          </Buttons>
        </>
      )}
    </CityCardContainer>
    {weather && <WeatherFW coord={weather}/>}
    </>
  );
}

export default CityCard;
