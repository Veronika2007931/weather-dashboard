import styled from "styled-components";
import logo from "../../img/logo.png"
import user from "../../img/user.png"


export const HeadSection = styled.div`
    font-family: Montserrat;
    font-weight: 500;
    height: 70px;
    display: flex;
    margin: auto;
    @media screen and (min-width: ${(p)=>p.theme.breakpoints.mobile}){
        height: 50px;
        font-size:10px;
    } 
    @media screen and (min-width: ${(p)=>p.theme.breakpoints.tablet}){
        height: 70px;
    }
    @media screen and (min-width: ${(p)=>p.theme.breakpoints.desktop}){
        height: 80px;
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
    list-style:none;
    & li a{
        color: black;
        text-decoration: none;
    }
    @media screen and (max-width: ${(p)=>p.theme.breakpoints.tablet}){
        display: none;
    }
    @media screen and (min-width: ${(p)=>p.theme.breakpoints.tablet}){
        margin: auto 57px;
        display: flex;
        & li:not(:first-child){
            margin:0;
            margin-left: 45px;
        }
        & li a{
            font-size:12px;
            margin: auto;
        }
    }
    @media screen and (min-width: ${(p)=>p.theme.breakpoints.desktop}){
        margin: auto 111px;
    }
`
export const SingInMenu = styled.div`
    margin-left:auto;
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
        width: 50px;
        height: 50px;
        margin-left: 25px;
    }
    & button{
        margin: auto 0;
        height: min-content;
        background-color: #FFB36C;
        border: none;
        border-radius: 10px;
        transition: all ease-in-out 150ms;
        &:focus{
            outline: none;
        }
        &:hover{
            transform: scale(1.05);
        }
        @media screen and (min-width: ${(p)=>p.theme.breakpoints.tablet}){
            padding: 8px 16px;
            font-size: 10px;
        } 
        @media screen and (min-width: ${(p)=>p.theme.breakpoints.desktop}){
            padding: 10px 20px;
            font-size: 12px;
        }
    }
     @media screen and (max-width: ${(p)=>p.theme.breakpoints.tablet}){
        display: none;
    } 
    @media screen and (min-width: ${(p)=>p.theme.breakpoints.tablet}){
        display: flex;
        width: max-content;
    }
`
export const MiniMenuBtn = styled.button`
    display: flex;
    margin: auto 0 auto auto;
    border: none;
    background: none;
    & div{
        margin-left: 4px;
        margin-top: 2px;
        border-bottom: 1PX solid black;
        border-right: 1PX solid black;
        width: 9px;
        height: 9px;
        rotate: -45deg;
        transition: 150ms all ease-in-out;
        &.off{
            rotate: 45deg;
        }
    }
    @media screen and (min-width: ${(p)=>p.theme.breakpoints.tablet}){
        display: none;
    }
`