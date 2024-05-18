import styled from 'styled-components';

export const CityCardContainer = styled.div`
  width: 320px;
  height: 430px;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CityInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 16px;
`;

export const CityName = styled.h2`
  font-size: 24px;
  margin: 0;
`;

export const Time = styled.p`
  margin: 0;
  color: #555;
`;

export const ForecastLinks = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 16px;
`;

export const ForecastButton = styled.button`
  background: none;
  border: none;
  color: #1e90ff;
  cursor: pointer;
`;

export const DateText = styled.p`
  margin: 0;
  color: #777;
`;

export const WeatherIcon = styled.img`
  width: 120px;
  height: 120px;
`;

export const Temperature = styled.p`
  font-size: 48px;
  margin: 0;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 16px;
`;

export const Button = styled.button`
  background: none;
  border: none;
  color: #555;
  cursor: pointer;

  &.favorite {
    color: red;
  }
`;
