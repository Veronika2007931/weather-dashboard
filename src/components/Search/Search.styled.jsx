import styled from "styled-components";
import bg from '../../img/bgForHero.png'
export const Hero=styled.section`
    display:flex;
    justify-content:center;
    align-items:center;
    height:595px;
    background-image:url(${bg});
    background-size:cover;
    background-position:center;  
    gap:0px;
    color: black;
    font-family:Montserrat;
`
export const InputHero=styled.input`
    @media(min-width:835px){
        width:625px;
    }
    @media(max-width:834px){
        width:402px;
    }
    @media(max-width:393px){
        width:174px;
    }
    padding:0;
    height:42px;
    gap:0px;
    color:rgba(135,135,135,1);
    background:rgba(217,217,217,1);
    border:2px solid rgba(0,0,0);
    border-bottom-left-radius:10px;
    border-top-left-radius:10px;
`
export const ButtHero=styled.button`
    width:45px;
    height:46px;
    gap:0px;
    border-radius:0px 10px 10px 0px;
    border:2px solid rgba(0,0,0);
    background:rgba(255,179,108,1);
`
export const FormHero=styled.form`
    display:flex;
    justify-content:center;
`
export const H1Hero=styled.h1`
    margin:0;
    padding-bottom:50px;
    display:flex;
    justify-content:center;
`
export const DivHero=styled.div`
    display:flex;
    justify-content:center;
    @media(max-width:393px){
        display:block;
    }
    padding-bottom:50px;
`
export const TextHero=styled.p`
    &:first-child{
        width:172px;
        color: black;
        padding-right:30px;
        margin:0;
        @media(max-width:393px){
            position:absolute;
            padding-right:0;
            padding-left:30px;
            height:36px;
            width:303.26px;
        }
    }
    &:last-child{
        padding-left:30px;
        color: black;
        margin:0;
        width:96px;
        @media(max-width:393px){
            position:absolute;
            width:210px;
            height:24px;
        }
    }
`
export const Line=styled.div`
    width:1px;
    height:110px;
    background-color:black;
    @media(max-width:393px){
        position:relative;
    }
`