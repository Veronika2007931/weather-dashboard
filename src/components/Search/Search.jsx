import { useRef,useCallback,useState } from "react";
import { Hero,InputHero,ButtHero,DivHero,H1Hero,TextHero, Line,DivHero2,TextHero1, FormHero } from "./Search.styled";
// import imageSearch from './search_FILL0_wght400_GRAD0_opsz24.svg#icon-Group-3'
export const Search=()=>{
    const r=useRef(null)
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
            <DivHero2>
                <H1Hero>Weather dashboard</H1Hero>
                <DivHero>
                    <TextHero>Create your personal list of favorite cities and always be aware of the weather.</TextHero>
                    <Line/>
                    <TextHero1>October 2023 | Friday, 13th</TextHero1>
                </DivHero>
                <FormHero onSubmit={submit}>
                    <InputHero ref={r} placeholder='Search location...' type="text" name="search"/>
                    <ButtHero onClick={click} type="button"></ButtHero>
                </FormHero>
                {/* <svg><use href={imageSearch}/></svg> */}
                <ul>{array!==null?(array.map((el,index)=><li key={index}>{el.name}</li>)):(console.log('noth'))}</ul>
            </DivHero2>
        </Hero>
    );
}
export default Search