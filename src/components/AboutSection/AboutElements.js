import styled from 'styled-components';

export const AboutContainer = styled.div`
    color: #E5E5E5;;
    background: #fff;
    
   
    
    @media screen and (max-width: 768px){
        padding: 0 5px;
        margin: auto;
    }
`

export const AboutWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 650px;
    width: 100%;
    max-width: 1200px;
    margin-right: auto;
    margin-top: 90px;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;

    @media screen and (max-width: 768px){
        margin-top: 50px;
    }
`

export const AboutRow = styled.div`
    display: grid;
    
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'` )};

    
    @media screen and (max-width: 768px){
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
     } 
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    margin-top: 10px;
    padding: 0 15px;
    grid-area: col1;
    

`
export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
    
`
export const TextWrapper = styled.div`
   max-width: 500px;
   padding-top: 0;
   padding-bottom: 60px;
   font-family: 'Padauk' ;
   margin-left: 20px;


   @media screen and (max-width: 768px){
    max-width: 470px;
    margin-left: auto;
    margin-right: 40px;
}
`

export const TextHeading = styled.h1`
    font-weight: 700;
    font-style: bolder;
    text-transform: uppercase;
    max-width: 158px;
    font-size: 30px;
    line-height: 23px;
    color: #000;
    padding: 0px 15px;
    

    @media screen and (max-width: 768px){
        font-size: 25px;
        padding: 0px 10px;
    }
`

export const TextBody = styled.p`
    color: #615c5c;
    max-width: 501px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    padding: 0 15px;
    padding-bottom: 10px;
    letter-spacing: 0.153462px;

    @media screen and (max-width: 768px){
        font-size: 12px;
        padding: 0px 10px;
        padding-bottom: 10px;
    }
`

export const Rectangle = styled.div`
    width: 420px;
    height: 290px;
    margin-left: -10px;
    border: 4px solid #c4c4c4;
    margin-top: -130px;

    @media screen and (max-width: 768px){
        height: 250px;
        max-width: 320px;
        margin-left: 60px;
        margin-top: -80px;
       
        }
`
export const ImageWrapper = styled.div`
    max-width: 430px;
    max-height: 320px;
    margin-top: -265px;
    margin-left: -50px;
   
    @media screen and (max-width: 768px){
        margin-top: -198px;
        margin-right: 120px;
        margin-left: 35px;
        
        }
`

export const AboutImage = styled.img`
    width: 420px;
    max-height: 265px;
    margin-right: 2000px;

    @media screen and (max-width: 768px){
        width: 321px;
        margin-top: -19px;
        margin-right: 120px;
        
        }

`
export const AboutLine = styled.div`
    border-left: 32px solid #23A6F0;
    height: 236px;
    margin-left: 600px;
    margin-right: 50px;
    border-radius: 2px;
    margin-top: -765px;

    

    @media screen and (max-width: 768px){
    border-left: 22px solid #23A6F0;
    margin-left: 20px;
    margin-top: -298px;
    height: 180px;
    }
`