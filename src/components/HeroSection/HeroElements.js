import styled from 'styled-components';

export const HeroContainer = styled.div`
    background: rgba(29, 56, 77, 0.7);
    display: flex;
    justify-content: center;
    margin-left: -9px;
    margin-right: -10px;
    align-items: center;
    padding: 0 30px;
    height: 600px;
    position: relative;
    z-index: 1;
   
    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 2;
    }

`
export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #1D384D;

`
export const ImageBg = styled.img`
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    opacity: 0.25;
`
export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    margin-top: 120px;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`   

export const HeroH = styled.div`
    margin-top: 25px;
    margin-right: 110px;
    padding-left: 10px;
    border-left: 7px solid #23A6F0;
    border-bottom: 7px solid #23A6F0;
    bottom: 100%;
    width: 80%;
    
    
    
    @media screen and (max-width: 768px){
        font-size: 22px;
        margin-top: auto;
        margin-left: 10px;
        width: auto;
    }

    @media screen and (max-width: 480px){
        font-size: 22px;
        margin-top: auto;
        margin-right: auto;
        margin-left: auto;
        width: auto;
    }
`

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 30px;
    line-height: 40px;
    font-style: bolder;

    @media screen and (max-width: 768px){
        font-size: 22px;
    }

    @media screen and (max-width: 480px){
        font-size: 20px;
    }
`
export const HeroH5 = styled.h5`
    color: #fff;
    font-size: 14px;
    font-weight: lighter;
    left: 141px;
    line-height: 21px;
    font-family: 'Inter', sans-serif;

    @media screen and (max-width: 768px){
        font-size: 12px;
    }

    @media screen and (max-width: 480px){
        font-size: 10px;
    }
`
export const HeroBox = styled.div`
    max-width: 333px;
    height: 40px;
    padding: 5px 35px;
    margin-top: -7px;
    font-size: 25px;
    color: #fff;
    background: #23A6F0;
    margin-left: 955px;
    text-align: center;
    

    @media screen and (max-width: 768px){
        font-size: 13px;
        margin: auto;
        margin-top: -7px;
        margin-left: 385px;
        margin-bottom: 15px;
        padding: 5px 20px;
    }

    @media screen and (max-width: 480px){
        font-size: 11px;
        margin: auto;
        margin-bottom: 9px;
        margin-top: -7px;
        margin-left: 360px;
        padding: 5px 20px;
    }
`

export const HeroLine = styled.div`
    border-right: 5px solid #23A6F0;
    height: 60px;
    margin-left: 1164px;
   
@media screen and (max-width: 768px){
    margin-left: 490px;
    margin-top: -15px;
    height: 30px;
}
    
`

export const HeroP = styled.p`
    max-width: 1047px;
    height: 150px;
    margin-top: -3px;
    margin-left: 46px;
    left: 196px;
    line-height: 25px;
    text-align: center;
    color: #fff;
    font-size: 14px;
    text-align: left;
    padding: 25px 38px;
    background: #23A6F0;
    font-weight: 400px;
    letter-spacing: 0.153462px;


    @media screen and (max-width: 768px){
        font-size: 11px;
        margin: auto;
        padding-bottom: 85px;
       
    }

    @media screen and (max-width: 480px){
        font-size: 10px;
        margin: auto;
        padding-bottom: 55px;
    }
    
`

