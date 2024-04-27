import styled from "styled-components"

export const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #0000003a;
    backdrop-filter: blur(4px);
    z-index: 10;
`
export const ModalBody = styled.form`
    text-align: center;
    border-radius: 25px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #FFFFFF;
    @media screen and (min-width: ${(p)=>p.theme.breakpoints.mobile}){
        font-size:12px;
        padding: 25px 25px;
    } 
    @media screen and (min-width: ${(p)=>p.theme.breakpoints.tablet}){
        font-size:12px;
        padding: 22px 45px;
    } 
    @media screen and (min-width: ${(p)=>p.theme.breakpoints.desktop}){
        font-size:14px;
        padding: 28px 80px;
    }
`
export const ModalInfo = styled.ul`
    list-style:none;
    width: 440px;
    text-align: left;
    padding: 0;
    margin: 0;
`
export const ModalTitle = styled.h2`
    margin: 0;  
    line-height: 58px;
    @media screen and (min-width: ${(p)=>p.theme.breakpoints.mobile}){
        font-size:20px;
        margin-bottom: 17px;
        height: 24px; 
    } 
    @media screen and (min-width: ${(p)=>p.theme.breakpoints.desktop}){
        height: 34px;
        font-size:28px;
        margin-bottom: 40px; 
    }
`
export const ModalBtn = styled.button`
    padding: 10px 30px;
    font-size: 14px;
    font-weight: 400;
    margin-top: 35px;
    height: min-content;
    background-color: #FFB36C;
    border: none;
    border-radius: 10px;
`
export const FieldsItem = styled.li`
    & input{
        border-radius: 10px;
        border: none;
        background: #F5F5F5;
        width: 100%;
        padding-left: 16px;
        margin-top: 15px;
    &:focus{
        outline: none;
    }
    @media screen and (min-width: ${(p)=>p.theme.breakpoints.mobile}){
        height: 40px;
    } 
    @media screen and (min-width: ${(p)=>p.theme.breakpoints.desktop}){
        height: 50px;
    }}
    @media screen and (min-width: ${(p)=>p.theme.breakpoints.mobile}){
        margin-top: 25px;
    } 
    @media screen and (min-width: ${(p)=>p.theme.breakpoints.desktop}){
        margin-top: 30px;
    }
`
/* 
.modal{
    @media screen and (min-width: 0) {
        width: 480px;
        border-radius: 10px;
    }
    @media screen and (min-width: $tablet) {
        width: 768px;
        border-radius: 20px;
        background-image: url(../images/modal-bread2.png);
    }
    @media screen and (min-width: $desktop) {
        width: 990px;
        border-radius: 50px;
        background-image: url(../images/modal-bread.png);
    }
}
.modal-information{
    @media screen and (min-width: 0) {
        padding-left: 19px;
        text-align: center;
    }
    @media screen and (min-width: $tablet) {
        padding-left: 83px;
        text-align: left;
    }
    @media screen and (min-width: $desktop) {
        padding-left: 83px;
        text-align: left;
    }
} */