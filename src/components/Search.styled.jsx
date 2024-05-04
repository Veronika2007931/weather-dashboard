import styled from "styled-components";
// import bg from './Rectangle 2 (1).png'
export const Hero=styled.section`
    display:flex;
    justify-content:center;
    align-items:center;
    height: 595px;
    // background-image: url(${bg});
    background-size: cover;
    background-position: center;  
    gap: 0px;
    color: rgba(0, 0, 0, 0.48);
`
export const InputHero=styled.input`
@media(min-width:835px){
    width:625px;
}
@media (max-width: 834px){
    width:402px;
}
@media (max-width:393px){
    width:174px;
}
padding:0;
    height: 42px;
    gap: 0px;
    border: 1px 0px 0px 0px;
    opacity: 0px;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 500;
    line-height: 17.07px;
    text-align: left;
    color: rgba(135, 135, 135, 1);
    background: rgba(217, 217, 217, 1);
    border:2px solid rgba(0, 0, 0);
    border-radius:10px;
`
export const ButtHero=styled.button`
    position:absolute;
    padding:0;
    bottom: 0;
    right: 0;
    @media(min-width:835px){
        left: 640px;
    }
    @media(max-width: 834px){
        left: 517px;
    }
    @media (max-width:393px){
        left:130px;
    }
    width: 45px;
    height: 46px;
    gap: 0px;
    border-radius: 0px 10px 10px 0px;
    border: 2px solid rgba(0, 0, 0);
    background: rgba(255, 179, 108, 1);
`
export const FormHero=styled.form`
    position:relative;
    display:flex;
    justify-content:center;
`
export const H1Hero=styled.h1`
    margin:0;
    padding-bottom: 50px;
    display:flex;
    justify-content:center;
`
export const DivHero=styled.div`
    display: flex;
    flex-direction: row;
    padding-bottom: 50px;
`
export const TextHero=styled.p`
    flex:1;
    margin:0;
`
export const Line=styled.div`
    width: 1px;
    background-color: black;
`
export const DivHero2=styled.div`
    // @media(min-width:835px){
    //     width:625px;
    // }
    // @media (max-width: 834px and min-width:393px){
    //     width:402px;
    // }
    // @media (max-width:393px){
    //     width:174px;
    // }
`
export const TextHero1=styled.p`
    display:flex;
    justify-content: end;
    margin:0;
`