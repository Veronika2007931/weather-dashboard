import styled from "styled-components";
import user from "../../../img/user.png"



export const MobileMenu = styled.div`
    left: 0;
    width: 87%;
    position: absolute;
    background-color:#E6E6E6;
    padding: 30px 50px;
    display: flex;
    font-family: Montserrat;
    box-shadow: inset 0px 20px 20px rgba(0,0,0,0.1);
`

export const HeadMenu = styled.ul`
    margin:0;    
    padding: 0;
    list-style:none;
    & li:not(:first-child){
        margin-top: 25px;
    }
    & li a{
        font-size:10px;
        color: black;
        text-decoration: none;
    }
`
export const SingInMenu = styled.div`
    margin-left:auto;
    width: fit-content;
    & span{
        margin: auto 0;
        font-size: 24px;
    }
    & div{
        margin: auto;
        border-radius: 50%;
        background-repeat:no-repeat;
        background-size:cover;
        background-image: url(${user}); 
        margin-bottom: 15px;
        width:40px;
        height: 40px;
    }
    & button{
        margin: auto 0;
        height: min-content;
        background-color: #FFB36C;
        border: none;
        border-radius: 10px;
        transition: all ease-in-out 150ms;
        padding: 8px 16px;
        font-size: 10px;
        &:focus{
            outline: none;
        }
        &:hover{
            transform: scale(1.05);
        }
        }`
