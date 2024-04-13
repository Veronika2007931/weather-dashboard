
// CityList.jsx
import React, { Component } from 'react';
import CityCard from './CityCard';
import styles from './CityList.module.css';

class CityList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: JSON.parse(localStorage.getItem('cities')) || [],
      newCityName: ''
    };
  }

  componentDidUpdate() {
    localStorage.setItem('cities', JSON.stringify(this.state.cities));
  }

  handleChange = (event) => {
    this.setState({ newCityName: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { newCityName, cities } = this.state;
    if (newCityName.trim() !== '') {
      this.setState({ cities: [...cities, newCityName], newCityName: '' });
    }
  };

  handleDelete = (cityName) => {
    this.setState(prevState => ({
      cities: prevState.cities.filter(city => city !== cityName)
    }));
  };

  render() {
    const { cities, newCityName } = this.state;
    return (
      <div className={styles.cityList}>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter city name"
            value={newCityName}
            onChange={this.handleChange}
          />
          <button type="submit" disabled={!newCityName.trim()}>Add City</button>
        </form>
        {cities.map(city => (
          <CityCard
            key={city}
            city={city}
            onDelete={this.handleDelete}
          />
        ))}
      </div>
    );
  }
}

export default CityList;
