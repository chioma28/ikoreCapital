import React, {useState} from 'react';
import { FaBars } from 'react-icons/fa';
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcons, 
    NavMenu,
    NavItem,
    NavLinks,
    NavButton,
    NavButtonLink,
    ArrowForward,
    ArrowRight
} from './NavbarElements';

const Navbar = ({ toggle }) => {
    const {hover, setHover} = useState(false);

    const onHover = () =>{ 
        setHover(!hover);
    };

    return (
        <>
             <Nav>
                <NavbarContainer>
                    <NavLogo to="/">IKORECAPITAL </NavLogo>
                    <MobileIcons onClick={toggle}>
                        <FaBars />
                    </MobileIcons>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="home">Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about">About us</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="projects">Projects</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact">Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavButton>
                        <NavButtonLink to="/drop-your-pitch"  >
                            Drop your pitch  <ArrowForward /> 
                        </NavButtonLink>
                    </NavButton>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;
