import { Header } from "./Header/Header"
import { WeatherFW } from "components/WeatherForWeek/WeatherFW";
import { Gallery } from "./TeamGalery/Gallery";
import { Footer } from "./Footer/Footer"
import {Container} from "../Container.styled"
import { Search } from './Search/Search'


export const App = () => {
  return (
    <Container>
      <Header/>
      <Search/>
      <WeatherFW/>
      <Gallery/>
      <Footer/>
    </Container>
  );
};

