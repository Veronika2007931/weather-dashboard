import {team} from "../../team"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';



export function Gallery(){
    const options = {
        type         : 'loop',
        gap          : '1rem',
        autoplay     : true,
        pauseOnHover : false,
        resetProgress: false,
        height: '550px',
        width: '450px',
        
      };
    return(
        <div style={ { position: 'relative' } }>
          <Splide aria-labelledby="My Favorite Images" options={ options }>
          
  <SplideSlide>
    <img src={team[0].photo} alt="Image 1"/>
  </SplideSlide>
  

  <SplideSlide>
    <img src={team[1].photo} alt="Image 2"/>
  </SplideSlide>
  

  <SplideSlide>
    <img src={team[2].photo} alt="Image 3"/>
  </SplideSlide>
     
  

  <SplideSlide>
    <img src={team[3].photo} alt="Image 4"/>
  </SplideSlide>
     
  

  <SplideSlide>
    <img src={team[4].photo} alt="Image 5"/>
  </SplideSlide>
     
  

 
  <SplideSlide>
    <img src={team[5].photo} alt="Image 6"/>
  </SplideSlide>
  

  <SplideSlide>
    <img src={team[6].photo} alt="Image 7"/>
  </SplideSlide>
  

  <SplideSlide>
    <img src={team[7].photo} alt="Image 8"/>
  </SplideSlide>
  
  </Splide>
  
        </div>
    )
}