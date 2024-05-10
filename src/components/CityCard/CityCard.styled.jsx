import React, { Component } from 'react';
import { FiClock, FiRefreshCw, FiTrash, FiHeart, FiLink } from 'react-icons/fi';
import styled from 'styled-components';

const Card = styled.div`
  width: 320px;
  height: 430px;
  background-color: #FFFFFF;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CityInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const CityName = styled.h2`
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  line-height: 17.07px;
  text-align: left;
`;

const Time = styled.p`
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 500;
  line-height: 29.26px;
  text-align: left;
  margin-top: 20px;
`;

const ForecastLinks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const ForecastButton = styled.button`
  width: 140px;
  height: 36px;
  padding: 8px;
  border-radius: 10px;
  background-color: #FFB36C;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  text-align: center;
  cursor: pointer;
  border: none;
`;

const Date = styled.p`
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  line-height: 17.07px;
  text-align: left;
  margin-top: 10px;
`;

const WeatherIcon = styled.img`
  width: 120px;
  height: 120px;
`;

const Temperature = styled.p`
  font-family: Montserrat;
  font-size: 32px;
  font-weight: 500;
  line-height: 39.01px;
  text-align: center;
  margin-top: 20px;
`;

const Buttons = styled.div`
  margin-top: auto;
  display: flex;
`;

const Button = styled.button`
  background-color: ${props => props.favorite ? '#FFB36C' : '#FFFFFF'};
  border: 1px solid #E8E8E8;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin: 0 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

class CityCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: null,
      currentDate: this.getCurrentDate(),
      isFavorite: false
    };
  }

  componentDidMount() {
    this.fetchWeather();
  }

  fetchWeather = async () => {
    const { city } = this.props;
    const apiKey = '783a6a050fff7733e5599d36f7895cb6';
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      const data = await response.json();
      this.setState({ weather: data });
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  getCurrentDate = () => {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return today.toLocaleDateString(undefined, options);
  };

  handleRefresh = () => {
    this.fetchWeather();
  };

  handleDelete = () => {
    const { onDelete, city } = this.props;
    if (onDelete) {
      onDelete(city);
    }
  };

  handleFavorite = () => {
    this.setState(prevState => ({
      isFavorite: !prevState.isFavorite
    }));
  };

  render() {
    const { weather, currentDate, isFavorite } = this.state;
    return (
      <Card>
        {weather && weather.main && (
          <>
            <CityInfo>
              <CityName>{weather.name}, {weather.sys.country}</CityName>
              <Buttons>
                <Button onClick={this.handleDelete}><FiTrash /></Button>
                <Button favorite={isFavorite} onClick={this.handleFavorite}><FiHeart /></Button>
                <Button onClick={this.handleRefresh}><FiRefreshCw /></Button>
              </Buttons>
            </CityInfo>
            <Time><FiClock /> {new Date().toLocaleTimeString()}</Time>
            <ForecastLinks>
              <ForecastButton><FiLink /> Hourly forecast</ForecastButton>
              <ForecastButton><FiLink /> Weekly forecast</ForecastButton>
            </ForecastLinks>
            <Date>{currentDate}</Date>
            <WeatherIcon src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="Weather Icon" />
            <Temperature>{weather.main.temp}°C</Temperature>
          </>
        )}
      </Card>
    );
  }
}

export default CityCard;
