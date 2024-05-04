import { Container, HourlyForecastSection, SubTitle } from './HourlyForecast.styled';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
  
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
  



export const HourlyForecast = () => {
    const [hoursWeather, setHoursWeather] = useState()

    useEffect(() => {
        fetch('https://api.openweathermap.org/data/3.0/onecall?lat=44.34&lon=10.99&units=metric&appid=40207e285e43c5b8e49ba7f2599cdd4b')
        .then(res => res.json())
        .then(data => setHoursWeather(data.hourly))
    }, [])


    function getTime() {
        const timeData = []
        if (hoursWeather) {
            for (let hourData of hoursWeather) {
                const timeToHours = new Date(Number(hourData.dt * 1000)).getHours()
                let stringedHour = ''
                timeToHours <= 12 ? stringedHour = `${timeToHours} am` : stringedHour = `${timeToHours - 12} pm`
                timeData.push(`${stringedHour}`)
            }
            return timeData
        }
    }

    function getTemperature() {
        const tempData = []
        if (hoursWeather) {
            for (let hourData of hoursWeather) {
                tempData.push(hourData.temp)
            }
            return tempData
        }
    }


    const options = {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },

        },
        elements: {
            point: {
                radius: 0
            },
            arc: {
                borderWidth: 10
            }
        },
        scales: {
            x: {
                max: 20,
                offset: true,
                alignToPixels: true,
                position: 'top',
                
            },
            y: {
                max: 30,
                min: 10,
                offset: true,
                alignToPixels: true,
            },
        }
    };
      
    const labels = getTime();
      
    const data = {
        labels,
        datasets: [
          {
            data:     getTemperature(),
            borderColor: '#FFB36C',
            backgroundColor: '#FFB36C',

          },
        ],
    };

    return (
        <HourlyForecastSection>
            <Container >
                <SubTitle>Hourly forecast</SubTitle>
                <Line options={options} data={data} />
            </Container>
        </HourlyForecastSection>
    )
}