
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CityCard from './CityCard.styled';

const CityListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const CityList = () => {
  const [cities, setCities] = useState([]);
  const [newCityName, setNewCityName] = useState('');

  useEffect(() => {
    const citiesFromStorage = JSON.parse(localStorage.getItem('cities')) || [];
    setCities(citiesFromStorage);
  }, []);

  useEffect(() => {
    localStorage.setItem('cities', JSON.stringify(cities));
  }, [cities]);

  const handleChange = (event) => {
    setNewCityName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newCityName.trim() !== '') {
      setCities([...cities, newCityName]);
      setNewCityName('');
    }
  };

  const handleDelete = (cityName) => {
    setCities(cities.filter(city => city !== cityName));
  };

  return (
    <CityListContainer>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={newCityName}
          onChange={handleChange}
        />
        <button type="submit" disabled={!newCityName.trim()}>Add City</button>
      </form>
      {cities.map(city => (
        <CityCard
          key={city}
          city={city}
          onDelete={handleDelete}
        />
      ))}
    </CityListContainer>
  );
};

export default CityList;
