import { useEffect, useState } from "react";
import { Container, Item, List } from "./WeatherFW.styled";

export function WeatherFW () {

const [weather, setWeather] = useState([])

useEffect(() => {
    fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=44.34&lon=10.99&appid=40207e285e43c5b8e49ba7f2599cdd4b`)
    .then(res => res.json())
    .then(weather => weather.daily)
    .then(daily => setWeather(daily))
}, [])

function getDate(millisecs){
   return Math.floor(millisecs / (1000 * 60 * 60 * 24))
}

function getCelsius(grade){
    return Math.floor(grade - 273,16)
}

    return(
        <Container>
            <p>8-day forecast</p>
            <List>              
           {weather.length > 0 && weather.map((date) => (
            <Item key={date.dt}>
                <p>{new Date(date.dt).toDateString()}</p>
                <p>{getCelsius(date.temp.min)} / {getCelsius(date.temp.max)}</p>
                <p>{date.summary}</p> 
            </Item>
          ))}
    </List>
</Container> 
)
}