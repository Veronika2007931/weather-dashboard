import styled from "styled-components";

export const Carousel = styled.div`
    .app__main-container {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    .app__main-container > *:not(:last-child) {
      margin-bottom: 50px;
    }

    .item-1 {
      background-color: cornflowerblue;
    }
    .item-2 {
      background-color: coral;
    }
    .item-3 {
      background-color: darkseagreen;
    }

    .item {
      display: flex;
      align-items: center;
      justify-content: center;
      user-select: none;
      height: 100%;
      width: 100%;
    }
`