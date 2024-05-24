import React, { useState, useEffect } from 'react';
import { CityListContainer } from './CityList.styled';
import CityCard from './CityCard';

const CityList = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const citiesFromStorage = JSON.parse(localStorage.getItem('array')) || [];
    setCities(citiesFromStorage);
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      const citiesFromStorage = JSON.parse(localStorage.getItem('array')) || [];
      setCities(citiesFromStorage);
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleDelete = (cityName) => {
    const updatedCities = cities.filter(city => city.name !== cityName);
    setCities(updatedCities);
    localStorage.setItem('array', JSON.stringify(updatedCities));
  };

  const handleRefresh = async (cityName) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=3ca8038fbb40321d1e03df9a10bbb2c2`);
      const updatedCity = await response.json();

      const updatedCities = cities.map(city => 
        city.name === cityName ? updatedCity : city
      );
      setCities(updatedCities);
      localStorage.setItem('array', JSON.stringify(updatedCities));
    } catch (error) {
      console.error("Failed to refresh city data", error);
    }
  };

  return (
    <CityListContainer>
      {cities.map(city => (
        <CityCard
          key={city.name}
          city={city}
          onDelete={handleDelete}
          onRefresh={handleRefresh}
        />
      ))}
    </CityListContainer>
  );
}

export default CityList;
