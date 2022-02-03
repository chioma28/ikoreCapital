import styled from 'styled-components';
import { Link as LinkS} from 'react-scroll';


export const TeamContainer = styled.div`
    color: #18191F;
    background: #fff;



    @media screen and (max-width: 768px){
        margin: auto;
    }
`
export const TeamWrapper = styled.div`
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1440px;
    margin-right: auto;
    margin-left: auto;
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

export const TextHeading = styled.h1`
    font-weight: 3000;
    font-style: bolder;
    text-transform: uppercase;
    text-align: center;
    font-size: 30px;
    padding: 0 10px;
    color: #18191F;
    word-spacing: -7px;
    
   
    

    @media screen and (max-width: 768px){
        font-size: 25px;
        word-spacing: -6px;
        margin-right: 40px;
        margin-left: auto;
    }
`

export const TextDescription = styled.p`
    color: #858A8F;
    max-width: 1200px;
    font-style: normal;
    font-weight: normal;
    text-align: center;
    font-size: 16px;
    padding: 0 15px;
    padding-bottom: 10px;


    @media screen and (max-width: 768px){
        font-size: 13px;
        margin-right: 50px;
        padding: 0px 10px;
        
    }
`

export const TeamGroup = styled.div`
    display: grid;  
    grid-template-columns: 1fr 1fr 1fr ;
    margin-left: 400px;
    gap: 30px;
    align-item: center;
    justify-content: center;
    max-width: 400px;
    max-height: 230px;
    margin-top: -50px;
    
    

    @media screen and (max-width: 768px){
    max-width: 400px;
    margin-top: -40px;
    margin-left: 25px;
    grid-template-columns: 1fr 1fr  ;
`

export const Teams = styled.div`
    width: 250px;
    height: 180px;
    text-align: center;
    align-items: center;
    padding: 14px 10px;

    @media screen and (max-width: 768px){
        width: 200px;
        height: 170px;
    }
`

export const TeamImg = styled.img`
    width: 110px;
    border-radius: 50%;
    height: 95px;
`

export const Name = styled.h3`
    font-family: 'Padauk' ;
    font-weight: 600;
    font-style: bold;
    font-size: 15px;
    text-align: center;
    color: #333;
`
export const Role = styled.h5`
    font-family: 'Padauk' ;
    font-weight: 300;
    font-style: normal;
    font-size: 11.5px;
    text-align: center;
    color: #858A8F;
    margin-top: -15px;
    
`
export const TeamIcons = styled.div`
    display: flex;
    flex-direction: row nowrap;
    margin-left: 105px;
    margin-top: -22px;

    @media screen and (max-width: 768px){
        margin-left: 83px;
    }
`

export const Icon = styled(LinkS)`
    margin-right: 8px;
    transform: translate(-100%, 60%);
    font-size: 16.5px;
    cursor: pointer;
    color: #333;
`


