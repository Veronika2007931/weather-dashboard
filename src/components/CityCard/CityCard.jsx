// CityCard.jsx
import React, { Component } from 'react';
import { FiClock, FiRefreshCw, FiTrash, FiHeart, FiLink } from 'react-icons/fi';
import styles from './CityCard.module.css';

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
    const { onDelete, city, setForecastData } = this.props;
    if (onDelete) {
      setForecastData(null)
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
    const { city } = this.props;
    return (
      <div className={styles.cityCard}>
        {weather && weather.main && (
          <>
            <div className={styles.cityInfo}>
              <h2 className={styles.cityName}>{weather.name}, {weather.sys.country}</h2>
            </div>
            <p className={styles.time}><FiClock /> {new Date().toLocaleTimeString()}</p>
            <div className={styles.forecastLinks}>
              <button className={styles.forecastButton} onClick={() => this.props.setForecastData(city)}><FiLink /> Hourly forecast</button>
              <button className={styles.forecastButton}><FiLink /> Weekly forecast</button>
            </div>
            <p className={styles.date}>{currentDate}</p>
            <img className={styles.weatherIcon} src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="Weather Icon" />
            <p className={styles.temperature}>{weather.main.temp}°C</p>
            <div className={styles.buttons}>
              {city ? (
                <>
                  <button className={styles.button} onClick={this.handleDelete}><FiTrash /></button>
                  <button className={`${styles.button} ${isFavorite ? styles.favoriteActive : ''}`} onClick={this.handleFavorite}><FiHeart /></button>
                  <button className={styles.button} onClick={this.handleRefresh}><FiRefreshCw /></button>
                </>
              ) : (
                <button className={styles.button} onClick={this.handleDelete}><FiTrash /></button>
              )}
            </div>
          </>
        )}
      </div>
    );
  }
}

export default CityCard;
