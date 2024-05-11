import styled from 'styled-components';

export const CityCardContainer = styled.div`
  width: 320px;
  height: 430px;
  border-radius: 20px;
  background-color: #ffffff;
  padding: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

`;

export const CityName = styled.h2`
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  text-align: left;
  margin-bottom: 10px;
`;

export const Time = styled.p`
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 500;
  line-height: 29.26px;
  text-align: center;
  margin-bottom: 10px;
`;

export const ForecastLinks = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

export const ForecastButton = styled.button`
  width: 120px;
  height: 28px;
  padding: 8px 18px;
  border-radius: 10px;
  background-color: #FFB36C;
  border: none;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  line-height: 17.07px;
  text-align: center;
  color: #FFFFFF;
`;

export const Date = styled.p`
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  line-height: 19.54px;
  text-align: center;
  margin-bottom: 10px;
`;

export const WeatherIcon = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 10px;
`;

export const Temperature = styled.p`
  font-family: Montserrat;
  font-size: 32px;
  font-weight: 500;
  line-height: 39.01px;
  text-align: center;
  margin-bottom: 20px;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #FFB36C;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const RefreshButton = styled.button`
  width: 32px;
  height: 32px;
  background-color: #FFB36C;
  color: #ffffff;
  border: none;
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;
`;

export const FavoriteButton = styled.button`
  width: 32px;
  height: 32px;
  background-color: #FFB36C;
  color: #ffffff;
  border: none;
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;
`;

export const SeeMoreButton = styled.button`
  padding: 8px 16px;
  background-color: #FFB36C;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
  cursor: pointer;
`;