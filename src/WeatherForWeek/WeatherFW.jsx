import { useEffect, useState } from "react";

export function WeatherFW () {

const [weather, setWeather] = useState("")

useEffect(() => {
  
    fetch(`api.openweathermap.org/data/2.5/forecast/daily?lat=44.34&lon=10.99&cnt=7&appid=40207e285e43c5b8e49ba7f2599cdd4b`)
    .then(res => res.json())
    .then(weather => {console.log(weather)})
}, [])

    return(
        <div>
            <p>8-day forecast</p>
            <ul>
           {/* {li.map(() => (
            <li>
                <p>{date}</p>
                <p>{grade}</p>
                <p>{weather}</p> */}
            {/* </li> */}
         {/* ))} */}
    </ul>
</div> 
)
}