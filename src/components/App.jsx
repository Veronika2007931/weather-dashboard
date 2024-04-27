
import { Component } from "react";
import { Footer } from "./Footer/Footer"

export class App extends Component{
    render(){
        return(
            <Footer/>
        )
    }
}


import { WeatherFW } from "components/WeatherForWeek/WeatherFW";
import { Header } from "./Header/Header"



export const App = () => {
  return (
    <div>
      <Header/>
      <WeatherFW/>

    </div>
  );
};

