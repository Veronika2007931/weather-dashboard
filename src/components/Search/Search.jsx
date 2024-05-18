import { useRef,useCallback,useState } from "react";
import { Hero,InputHero,ButtHero,DivHero,H1Hero,TextHero, Line, FormHero } from "./Search.styled";
import imageSearch from '../../img/image 2 (1).png'
export const Search=()=>{
    const r=useRef(null)
    const now=new Date()
    const months=["January","February","March","April","May","June","July","August","September","October","November","December"]    
    const days=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'] 
    const [data,changeData]=useState(`${months[now.getMonth()]} ${now.getFullYear()} | ${days[now.getDay()]}, ${now.getDate()}`)
    const [array,changeArray]=useState(localStorage.getItem('array')===null?([]):(JSON.parse(localStorage.getItem('array'))))
    const submit=async(e)=>{
        e.preventDefault();
        await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${r.current.value}&appid=3ca8038fbb40321d1e03df9a10bbb2c2`)
        .then(resp=>resp.json())
        .then(res=>{changeArray(prev=>{const newA=[...prev,res];localStorage.setItem('array',JSON.stringify(newA));return newA})})
    }
    const click=useCallback(async()=>
        await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${r.current.value}&appid=3ca8038fbb40321d1e03df9a10bbb2c2`)
        .then(resp=>resp.json())
        .then(res=>{changeArray(prev=>{const newA=[...prev,res];localStorage.setItem('array',JSON.stringify(newA));return newA})})
    ,[array])
    return(
        <Hero>
            <div>
                <H1Hero>Weather dashboard</H1Hero>
                <DivHero>
                    <TextHero>Create your personal list of favorite cities and always be aware of the weather.</TextHero>
                    <Line/>
                    <TextHero>{data}</TextHero>
                </DivHero>
                <FormHero onSubmit={submit}>
                    <InputHero ref={r} placeholder='Search location...' type="text" name="search"/>
                    <ButtHero onClick={click} type="button"><img src={imageSearch} alt="" /></ButtHero>
                </FormHero>
            </div>
        </Hero>
    );
}
export default Search