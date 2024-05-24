// import {team} from "../../team"
// import { Splide, SplideSlide } from '@splidejs/react-splide';
// import {Text, Image, Div, Info, Heading, Name} from './Gallery.styled'
// import '@splidejs/react-splide/css';




export function Gallery(){
    const options = {
        type         : 'loop',
        gap          : '2rem',
        autoplay     : false,
        pauseOnHover : true,
        resetProgress: false,
        // height: '500px',
        // width: '400px',
       
        
      };
      const style= {
        
          height:'800px',
          margin: '50px',
          display: 'flex',
          
         
      }
    return(
        <Div style={ { position: 'relative' } }>
          <Heading>Наша команда</Heading>
          <Splide aria-labelledby="My Favorite Images" options={ options } >
          
  <SplideSlide style={style}>
    <Image src={team[0].photo} alt="Image 1"/>
    <Info>
    <Name>{team[0].name}</Name>
    <Text>{team[0].task}</Text>
    </Info>
    
  </SplideSlide>
  

  <SplideSlide style={style}>
    <Image src={team[1].photo} alt="Image 2"/>
    <Info>
    <Name>{team[1].name}</Name>
    <Text>{team[1].task}</Text>
    </Info>
  </SplideSlide>
  

  <SplideSlide style={style}>
    <Image src={team[2].photo} alt="Image 3"/>
    <Info>
    <Name>{team[2].name}</Name>
    <Text>{team[2].task}</Text>
    </Info>
  </SplideSlide>
     
  

  <SplideSlide style={style}>
    <Image src={team[3].photo} alt="Image 4"/>
   <Info>
   <Name>{team[3].name}</Name>
    <Text>{team[3].task}</Text>
   </Info>
  </SplideSlide>
     
  

  <SplideSlide style={style}>
    <Image src={team[4].photo} alt="Image 5"/>
    <Info>
    <Name>{team[4].name}</Name>
    <Text>{team[4].task}</Text>
    </Info>
  </SplideSlide>
     
  <SplideSlide style={style}>
    <Image src={team[5].photo} alt="Image 6"/>
    <Info>
    <Name>{team[5].name}</Name>
    <Text>{team[5].task}</Text>
    </Info>
  </SplideSlide>
  

  <SplideSlide style={style}>
    <Image src={team[6].photo} alt="Image 7"/>
    <Info>
    <Name>{team[6].name}</Name>
    <Text>{team[6].task}</Text>
    </Info>
  </SplideSlide>
  

  <SplideSlide style={style}>
    <Image src={team[7].photo} alt="Image 8"/>
    <Info>
    <Name>{team[7].name}</Name>
    <Text>{team[7].task}</Text>
    </Info>
  </SplideSlide>
  
  </Splide>
  
        </Div>
    )
}