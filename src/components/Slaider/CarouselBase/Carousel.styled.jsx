import styled from "styled-components"

export const MainContainer = styled.div`
    width: 450px;
    height: 150px;
  
    display: flex;
    align-items: center;
`

export const FaChevronLeft = styled.div`
    cursor: pointer;
`

export const Window = styled.div`
    height: 100%;
    width: 100%;
    overflow: hidden;
`

export const AllPagesContainer = styled.div`
    height: 100%;
    display: flex;
    transition: translate;
    transition-property: transform;
    transition-duration: 300ms;
    transition-timing-function: ease-in-out;
`