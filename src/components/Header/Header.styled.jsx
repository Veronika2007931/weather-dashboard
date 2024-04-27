import styled from "styled-components";
import logo from "../../img/logo.png"
import user from "../../img/user.png"


export const HeadSection = styled.div`
    font-weight: 500;
    padding: 15px 0;
    width: 1200px;
    height: 70px;
    display: flex;
    margin: auto;
    @media screen and (min-width: ${(p)=>p.theme.breakpoints.mobile}){
        font-size:10px;
    } 
    @media screen and (min-width: ${(p)=>p.theme.breakpoints.desktop}){
        font-size:12px;
    }
`
export const Logo = styled.a`
    background-image: url(${logo});
    margin: auto 0;
    background-size: cover;
    @media screen and (min-width: ${(p)=>p.theme.breakpoints.mobile}){
        width: 34px;
        height: 22px;
    } 
    @media screen and (min-width: ${(p)=>p.theme.breakpoints.tablet}){
        width: 54px;
        height: 36px;
    }
    @media screen and (min-width: ${(p)=>p.theme.breakpoints.desktop}){
        width: 82px;
        height: 56px;
    }
`

export const HeadMenu = styled.ul`
    padding: 0;
    margin: auto 111px;
    list-style:none;
    display: flex;
    & li:not(:first-child){
        margin-left: 45px;
    }
    & li a{
        color: black;
        text-decoration: none;
    }
`
export const SingInMenu = styled.div`
    display: flex;
    margin-left:auto;
    & span{
        margin: auto 0;
        font-size: 24px;
    }
    & div{
        margin: auto;
        margin-left: 25px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-repeat:no-repeat;
        background-size:cover;
        background-image: url(${user});
        
    }
    & button{
        margin: auto 0;
        height: min-content;
        background-color: #FFB36C;
        border: none;
        border-radius: 10px;
        padding: 10px 20px;
        transition: all ease-in-out 150ms;
        &:focus{
            outline: none;
        }
        &:hover{
            transform: scale(1.05);
        }
    }
`