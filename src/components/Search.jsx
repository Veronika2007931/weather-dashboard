import { useRef,useCallback,useState, useEffect } from "react";
const Search=()=>{
    const r=useRef(null)
    const [array,changeArray]=useState(localStorage.getItem('array')===null?([]):(JSON.parse(localStorage.getItem('array'))))
    console.log(array);
    useEffect(()=>{
        console.log(77);
    },[])
    const click=useCallback(async()=>
        await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${r.current.value}&appid=3ca8038fbb40321d1e03df9a10bbb2c2`)
        .then(resp=>resp.json())
        .then(res=>{changeArray([...array,res])})
        .finally(()=>{localStorage.setItem('array',JSON.stringify(array))})
    ,[array])
    return(
        <div>
            <input ref={r} placeholder='Search location...' type="text"/>
            <button onClick={click}>j</button>
            <ul>{array.map((el)=><li>{el.name}</li>)}</ul>
        </div>
    );
}
export default Search