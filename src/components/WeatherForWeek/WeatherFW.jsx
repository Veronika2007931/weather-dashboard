import { useEffect, useState } from "react";
import { Container, Item, List, MainText, SecondaryTextDate, SecondaryTextWeather, SecondaryTextW2 } from "./WeatherFW.styled";

export function WeatherFW ({coord}) {

const [weather, setWeather] = useState([])

useEffect(() => {
    if(coord){
      const lon = coord.coord.lon
      const lat = coord.coord.lat

      getWeaklyWeather(lat, lon)
      .then(weather => weather.daily)
      .then(daily => setWeather(daily))
    }
}, [coord])

function getWeaklyWeather(lat, lon){
   return fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=40207e285e43c5b8e49ba7f2599cdd4b`)
   .then(res => res.json())
}

function getDate(millisecs){
    return new Date(millisecs * 1000)
}

function getCelsius(grade){
    return Math.floor(grade - 271,16)
}

    return(
        <Container>
            <MainText>8-day forecast</MainText>
            <List>              
           {weather.length > 0 && weather.map((date) => (
            <Item key={date.dt}>
                <SecondaryTextDate>{new Date(getDate(date.dt)).toDateString()}</SecondaryTextDate>
                <SecondaryTextWeather>{getCelsius(date.temp.min)}/{getCelsius(date.temp.max)}℃</SecondaryTextWeather>
                <SecondaryTextW2>{date.summary}</SecondaryTextW2> 
            </Item>
          ))}
    </List>
</Container> 
)
}