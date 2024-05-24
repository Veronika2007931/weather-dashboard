import styled from 'styled-components';

export const CarouselContainer = styled.div`
  position: relative;
  width: 600px;
  height: 300px;
  overflow: hidden;
  margin: auto;
`;

export const CarouselInner = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: ${props => `translateX(-${props.index * 100}%)`};
`;

export const CarouselItem = styled.div`
  min-width: 100%;
  height: 100%;
  box-sizing: border-box;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;

  &.prev {
    left: 10px;
  }

  &.next {
    right: 10px;
  }
`;