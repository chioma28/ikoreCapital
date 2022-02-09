import React, {useState, useEffect} from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import {animateScroll as scroll} from 'react-scroll';
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
    ArrowForward
} from './NavbarElements';

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav]  = useState(false)

    const changeNav = () =>{ 
        if(window.scrollY >= 6){
            setScrollNav(true)
        } else{
           setScrollNav(false) 
        }
    }

    useEffect(() => {
         window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () =>{
         scroll.scrollToTop(); 
    }

    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
             <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome} >IKORECAPITAL </NavLogo>
                    <MobileIcons onClick={toggle}>
                        <FaBars />
                    </MobileIcons>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="hero"
                            smooth={true} 
                            duration={700} 
                            spy={true} 
                            exact='true' 
                            offset={-80}
                            >
                             Home
                             </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about"
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-110}
                            
                            >About us
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                        <NavLinks to="project"
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-50}
                            
                            >Projects
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                        <NavLinks to="contact"
                            smooth={true} 
                            duration={700} 
                            spy={true} 
                            exact='true' 
                            offset={-145}
                            
                            >Contact
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavButton>
                        <NavButtonLink to="/drop-your-pitch"  >
                            Drop your pitch  <ArrowForward /> 
                        </NavButtonLink>
                    </NavButton>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar;
