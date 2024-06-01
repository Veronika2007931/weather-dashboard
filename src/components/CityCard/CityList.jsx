import React, { useEffect, useState } from 'react';
import { CityListContainer } from './CityList.styled';
import CityCard from './CityCard';

const CityList = ({ cities, onDelete, onWeeklyWeather,onHourlyWeather }) => {


  return (
    <CityListContainer>
      {cities.map(city => (
        <CityCard
          key={city.name}
          city={city}
          onDelete={onDelete}
          onWeeklyWeather={onWeeklyWeather}
          onHourlyWeather={onHourlyWeather}
        />
      ))}
    </CityListContainer>
  );
}

export default CityList;