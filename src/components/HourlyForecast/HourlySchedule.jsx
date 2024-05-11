import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
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
  
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
  


export const HourlySchedule = ({forecastData}) => {
    const [hoursWeather, setHoursWeather] = useState()
    const [cityLon, setCityLon] = useState('')
    const [cityLat, setCityLat] = useState('')
    const [xAxisMax, setXAxisMax] = useState(20)
    const [aspectRatio, setAspectRatio] = useState(2)

    useEffect(() => {
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${forecastData}&limit=5&appid=40207e285e43c5b8e49ba7f2599cdd4b`)
        .then(res => res.json())
        .then((cityData) => {
            setCityLon(`${cityData[0].lon}`) 
            setCityLat(`${cityData[0].lat}`)
            getCity()
        })
    }, [forecastData, cityLon, cityLat])

    useEffect(() => {
        window.addEventListener('resize', () => {
            window.screen.width <= 1200 
            && window.screen.width >= 768 ? setXAxisMax(12) 
            : window.screen.width <= 768 
            && window.screen.width >= 320 ? setXAxisMax(6) : window.screen.width <= 320 
            ? setXAxisMax(6)  : setXAxisMax(20)
        })
    }, [])

    useEffect(() => {
        window.addEventListener('resize', () => {
            window.screen.width <= 1200 
            && window.screen.width >= 768 ? setXAxisMax(12) 
            : window.screen.width <= 768 
            && window.screen.width >= 320 ? setXAxisMax(6) : setXAxisMax(20)
        })
    }, [])

    useEffect(() => {
        window.addEventListener('resize', () => {
            window.screen.width <= 1200 
            && window.screen.width >= 768 ? setAspectRatio(1.5) 
            : window.screen.width <= 768 
            && window.screen.width >= 320 ? setAspectRatio(1) : window.screen.width <= 320 
            ? setAspectRatio(0.7)  : setAspectRatio(2)
        })
    }, [])


    async function getCity() {
        fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${cityLat}&lon=${cityLon}&units=metric&appid=40207e285e43c5b8e49ba7f2599cdd4b`)
        .then(res => res.json())
        .then(data => setHoursWeather(data.hourly))
    }

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
        aspectRatio: aspectRatio,
        datasets: {
            line: {

            }
        },
        plugins: {
            legend: {
                display: false,
            },
        },
        elements: {
            point: {
                radius: 0
            },
            line: {

            },
            arc: {
                borderWidth: 10
            }
        },
        scales: {
            x: {
                max: xAxisMax,
                offset: true,
                alignToPixels: true,
                position: 'top',
                ticks: {
                    color: 'black',
                    font: {
                        size: 14,
                        lineHeight: 2,
                    },
                },
            },
            y: {

                offset: true,
                alignToPixels: true,
                ticks: {
                    color: 'black',
                    padding: 20,
                    font: {
                        size: 14
                    }
                }
            },
        }
    };
      
    const labels = getTime();
      
    const data = {
        labels,
        datasets: [
          {
            data: getTemperature(),
            borderColor: '#FFB36C',
            backgroundColor: '#FFB36C',

          },
        ],
    };
    return (
        <Line options={options} data={data} />
    )
}