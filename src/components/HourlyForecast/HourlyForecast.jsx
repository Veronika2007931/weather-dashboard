import { HourlySchedule } from './HourlySchedule';
import { Container, HourlyForecastSection, SubTitle } from './HourlyForecast.styled';



export const HourlyForecast = ({ forecastData, coord}) => {
    console.log(forecastData)
    return (
        <>
            
            <HourlyForecastSection >
                <Container >
                    <SubTitle>Hourly forecast</SubTitle>
                    <HourlySchedule coord={coord} forecastData={forecastData} />
                </Container>
            </HourlyForecastSection>
        </>
    )
}