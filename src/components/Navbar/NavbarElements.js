import styled from 'styled-components';
import { Link as LinkR} from 'react-router-dom';
import { Link as LinkS} from 'react-scroll';
import { MdArrowForward} from 'react-icons/md';

export const Nav = styled.nav`
    background: #335e80;
    height: 70px;
    font-family: inter;
    margin-top: -10px; 
    margin-left: -9px;
    margin-right: -9px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.2rem;
    font-family: 'Montserrat', sans-serif;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`;

export const MobileIcons = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.75rem;
        cursor: pointer;
        color: #fff;S
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex; 
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    font-size: 14px;
    font-family: 'Inter';
    height: 100%;
    cursor: pointer;

        &.active{
            border-bottom: 3px solid #23A6F0;
        }

`;
export const NavButton = styled.nav`
    display: flex;
    align-items: center;
    max-width: 200px;


    @media screen and (max-width: 768px){
        display: none;
    }
` ;  

export const NavButtonLink = styled(LinkR)`
background:  #23A6F0;
display: flex;
color: #fff;
white-space: nowrap;
text-align: center;
border-radius: 3.84px;
padding: 14px 19px;
font-size: 14px;
font-family: 'Inter';
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover{
    transition: all 0.2s ease-in-out;
    background: #04ACF4;
    colour: #fff;
}
`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 12px;
    text-align: center;
    font-size: 18px;
   
    
`
// export const ArrowRight = styled(MdKeyboardArrowRight)`
//     margin-left: 4px;
//     text-align: center;
//     font-size: 18px;
//     position: relative;
//`