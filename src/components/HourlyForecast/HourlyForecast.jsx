import { HourlySchedule } from './HourlySchedule';
import { Container, HourlyForecastSection, SubTitle } from './HourlyForecast.styled';



export const HourlyForecast = ({forecastData}) => {
    return (
        <>
            {forecastData ?
            <HourlyForecastSection >
                <Container >
                    <SubTitle>Hourly forecast</SubTitle>
                    <HourlySchedule forecastData={forecastData} />
                </Container>
            </HourlyForecastSection> : null}
        </>
    )
}