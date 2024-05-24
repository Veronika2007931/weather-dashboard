import React, { useEffect, useState } from 'react';
import { CityListContainer } from './CityList.styled';
import CityCard from './CityCard';

const CityList = ({ cities, onDelete, onWeeklyWeather }) => {
  const [localCities, setLocalCities] = useState([]);

  useEffect(() => {
    const citiesFromStorage = JSON.parse(localStorage.getItem('array')) || [];
    setLocalCities(citiesFromStorage);
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      const citiesFromStorage = JSON.parse(localStorage.getItem('array')) || [];
      setLocalCities(citiesFromStorage);
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <CityListContainer>
      {localCities.map(city => (
        <CityCard
          key={city.name}
          city={city}
          onDelete={onDelete}
          onWeeklyWeather={onWeeklyWeather}
          onHourlyWeather={showHourlyWeather}
        />
      ))}
    </CityListContainer>
  );
}

export default CityList;