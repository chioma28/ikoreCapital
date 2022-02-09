import styled from 'styled-components';

export const ProjectsContainer = styled.div`
    color: #18191F;
    background: #f5f6fa;;
    margin-right: -10px;
    margin-left: -10px;
`
export const ProjectsWrapper = styled.div`
    z-index: 1;
    height: 380px;
    width: 100%;
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
    color: #18191F;
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

export const CompanyWrapper = styled.div`
    display: grid;  
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-left: 400px;
    gap: 20px;
    align-item: center;
    justify-content: center;
    max-width: 400px;
    max-height: 230px;
    margin-top: -50px;
    
    


    @media screen and (max-width: 768px){
    max-width: 400px;
    margin-top: -40px;
    margin-left: 35px;
    grid-template-columns: 1fr 1fr 1fr ;
`

export const CompanyItem = styled.div`
    background: #fff;
    width: 80px;
    height: 30px;
    text-align: center;
    align-items: center;
    border-radius: 16px;
    padding: 14px 10px;
    box-shadow: 0px 30px 40px rgba(212, 217, 232, 0.2);
`
export const CompanyItem1 = styled.div`
    background: #fff;
    width: 80px;
    height: 30px;
    text-align: center;
    align-items: center;
    border-radius: 16px;
    padding: 14px 10px;
    grid-column-start: 2;
    grid-column-end:2;
    box-shadow: 0px 30px 40px rgba(212, 217, 232, 0.2);
    cursor: pointer;
`

export const CompanyT = styled.h1`
    font-family: 'Padauk' ;
    font-weight: 700;
    font-style: bolder;
    font-size: 20px;
    text-align: center;
    text-decoration: none;
    width: 80px;
    cursor: pointer;
`
export const CompanyI = styled.img`
    width: 80px;
    max-height: 45px;
    cursor: pointer;
`
