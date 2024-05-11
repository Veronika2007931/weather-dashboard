import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 100%;
  max-width: 300px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

export const CityName = styled.h2`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
`;

export const Temperature = styled.p`
  margin: 10px 0;
  font-size: 24px;
  font-weight: 500;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const DeleteButton = styled(Button)`
  background-color: #f44336;
  color: #fff;
`;

export const FavoriteButton = styled(Button)`
  background-color: #2196f3;
  color: #fff;
`;

export const RefreshButton = styled(Button)`
  background-color: #4caf50;
  color: #fff;
`;
