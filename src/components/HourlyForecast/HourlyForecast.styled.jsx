import styled from "styled-components";

export const HourlyForecastSection = styled.section`
margin-top: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
`

export const Container = styled.div`
    box-sizing: border-box;
    width: 95%;
    max-width: 1500px;
    padding: 3%;
    background-color: #E8E8E8;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`

export const SubTitle = styled.h4`
    font-size: 18px;
    font-weight: 700;
    line-height: 19.5px;
    text-align: left;
    color: black;
    margin-bottom: 10px;
    margin-top: 5px;
    @media screen and (max-width: 768px) {
        font-size: 15px;
        margin-left: 20px;
    } 
`