import { WeatherFW } from 'components/WeatherForWeek/WeatherFW';
import { useState } from 'react';
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

const CityCard = ({ city, onDelete, onWeeklyWeather, onHourlyWeather }) => {

  const handleDelete = () => {
    onDelete(city.name);
  };

  return (
    <>   
    <CityCardContainer>
      <CityInfo>
        <CityName>{city.name}, {city.sys.country}</CityName>
      </CityInfo>
      <Time>{new Date().toLocaleTimeString()}</Time>
      <ForecastLinks>
        <ForecastButton onClick={() => onHourlyWeather(city.coord)}>Hourly forecast</ForecastButton>
        <ForecastButton onClick={() => onWeeklyWeather(city.coord)}>Weekly forecast</ForecastButton>
      </ForecastLinks>
      <DateText>{new Date().toLocaleDateString()}</DateText>
      <WeatherIcon src={`http://openweathermap.org/img/wn/${city.weather[0].icon}.png`} alt="Weather Icon" />
      <Temperature>{Math.round(city.main.temp - 273.15)}°C</Temperature>
      <Buttons>
        <Button onClick={handleDelete}><FiTrash /></Button>
        <Button className="favorite"><FiHeart /></Button>
        <Button><FiRefreshCw /></Button>
      </Buttons>
    </CityCardContainer>
    </>
  );
}

export default CityCard;
