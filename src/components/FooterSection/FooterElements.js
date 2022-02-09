import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const FooterContainer = styled.div`
    background: #000;
    margin-left: -10px;
    margin-right: -10px;
    margin-bottom: -10px;
    

`
export const FooterWrapper = styled.div`
    z-index: 1;
    height: 210px;
    width: 100%;
    max-width: 1440px;
    margin-right: auto;
    margin-left: auto;
    
    padding: 0 24px;
    justify-content: center;

    
`
export const TextWrapper = styled.div`
   max-width: 1200px;
   display: flex;
   padding-bottom: 40px;
   font-family: 'Padauk' ;
   justify-content: center;

`


export const TextHeading = styled(LinkR)`
color: #fff;
text-align: center;
cursor: pointer;
font-size: 15px;
font-family: 'Montserrat', sans-serif;
display: flex;
font-weight: 800;
padding-top: 70px;
text-decoration: none;

   
    

    @media screen and (max-width: 768px){
        font-size: 13px;
        word-spacing: -10px;
        padding-top: 70px;
        margin-right: 45px;
        
    }
`

export const Divider = styled.div`

    width: 1000px;
    padding: 0 15px;
    margin-left: 100px;
    border-top: 0.1px solid #E5E5E5;
    opacity: 0.3;

   

    @media screen and (max-width: 768px){
        width: 400px;
        margin-left: 10px;
        margin-top: 10px;
    }

`
export const FooterContent = styled.div`
    display: flex;
    font-family: 'Inter'
    padding: 15px 25px;
    opacity: 0.8;

`

export const TextContent = styled.h6`
    align-self: center;
    font-weight: 100;
    font-size: 13px;
    margin-left: 95px;
    color: #fff;

    @media screen and (max-width: 768px){
        font-size: 9px;
        margin-left: 10px;
    }
`

export const IconGroup = styled.div`
    display: flex;
    margin-left: 723px;
    margin-top: 8px;

    @media screen and (max-width: 768px){
        margin-left: 200px;
    }
`

export const Icon = styled(LinkR)`
    align-self: center;
    margin-right: 10px;
    font-size: 20px;
    cursor: pointer;
    color: #fff;
    pointer: cursor;

    @media screen and (max-width: 768px){
        font-size: 15px;
    }
`


