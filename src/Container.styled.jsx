import styled from "styled-components" 
 
export const Container = styled.div` 
    width: 320px;
    margin: 0 auto;
    @media screen and (min-width: ${(p)=>p.theme.breakpoints.mobile}){
        width: ${(p)=>p.theme.breakpoints.mobile}; 
    } 
    @media screen and (min-width: ${(p)=>p.theme.breakpoints.tablet}){
        width: ${(p)=>p.theme.breakpoints.tablet}; 
    } 
    @media screen and (min-width: ${(p)=>p.theme.breakpoints.desktop}){
        width: ${(p)=>p.theme.breakpoints.desktop};
    }
    `