import { Header } from "./Header/Header"
import { WeatherFW } from "components/WeatherForWeek/WeatherFW";
import { NewsSection } from "./News/News";
import { Gallery } from "./TeamGalery/Gallery";
import { Footer } from "./Footer/Footer"
import {Container} from "../Container.styled"



export const App = () => {
  return (
    <Container>
      <Header/>
      <WeatherFW/>
      <NewsSection/>
      <Gallery/>
      <Footer/>
    </Container>
  );
};

