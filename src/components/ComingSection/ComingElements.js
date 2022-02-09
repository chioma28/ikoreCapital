import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const ComingContainer = styled.div`
    background: #f5f6fa;
    margin-left: -10px;
    margin-right: -10px;
`
export const ComingWrapper = styled.div`
    z-index: 1;
    height: 336px;
    width: 100%;
    max-width: 1440px;
    margin-right: auto;
    margin-left: auto;
    margin-top: 10px;
    padding: 0 24px;
    justify-content: center;
    font-family: 'Inter'

    @media screen and (max-width: 768px){
        
    }
`
export const TextWrapper = styled.div`
   max-width: 1200px;
   padding-top: 50px;
   padding-bottom: 50px;
   font-family: 'Padauk' ;



`

export const Heading = styled.h1`
    font-weight: 3000;
    font-style: bolder;
    text-transform: uppercase;
    text-align: center;
    font-size: 50px;
    padding: 0 10px;
    color: #b90606;
    word-spacing: -15px;
    
   
    

    @media screen and (max-width: 768px){
        font-size: 35px;
        word-spacing: -12px;
        margin-right: 35px;
        margin-left: auto;
    }
`

export const Description = styled.p`
    color: #333;
    max-width: 1200px;
    font-style: normal;
    font-weight: 50;
    text-align: center;
    font-size: 25px;
    padding: 0 15px;
    padding-bottom: 10px;
    margin-top: -35px;
    word-spacing: -3.5px;


    @media screen and (max-width: 768px){
        font-size: 18px;
        margin-right: 50px;
        padding: 0px 10px;
        margin-top: -20px;
        word-spacing: -3.5px;
        
    }
`

export const FormContainer = styled.form`
    display: flex;
    margin-top: -60px;
    align-items: center;
    justify-content: center;
    margin-right: 80px;

    @media screen and (max-width: 768px){
        margin-top: -30px;
        margin-right: 30px;
    }
`



export const InputBox = styled.input`
    width: 380px;
    height: 25px;
    color: #AAB0B7;
    font-size: 11px;
    background: #fff;
    text-align: left;
    padding: 10px 15px;
    margin-right: 20px;
    border-radius: 6px;
    border: none;

    &:focus{
        outline: none;
        border: 1px #23A6F0 solid;
        color: #000;
        font-size: 12px;
        box-shadow: 0px 0px 2px #23A6F0;
    }

    @media screen and (max-width: 768px){
        width: 250px;
        height: 20px;
    }

`

export const SubmitButton = styled(LinkR)`
background:  #23A6F0;
color: #fff;
white-space: nowrap;
text-align: center;
border-radius: 3.84px;
padding: 14px 19px;
font-size: 14px;
font-family: 'Inter';
width: 130px;
height: 16px;
outline: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover{
    transition: all 0.2s ease-in-out;
    background: #00BFFF;
    font-weight: 530;
    color: #fff;
    
}

@media screen and (max-width: 768px){
    height: 12px;
    width: 70px;
}
`;