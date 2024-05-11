import React, { useState, useEffect } from 'react';
import { CityListContainer } from './CityList.styled';
import CityCard from './CityCard';

const CityList = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const citiesFromStorage = JSON.parse(localStorage.getItem('cities')) || [];
    setCities(citiesFromStorage);
  }, []);

  const handleDelete = (cityName) => {
    setCities(prevCities => prevCities.filter(city => city !== cityName));
  };

  return (
    <CityListContainer>
      {cities.map(city => (
        <CityCard
          key={city}
          city={city}
          onDelete={handleDelete}
        />
      ))}
    </CityListContainer>
  );
}

export default CityList;
