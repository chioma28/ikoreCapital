import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideButtonWrap,
    SidebarRoute
} from './SidebarElements'

const Sidebar = ( { isOpen, toggle } ) => {
    return (
        <SidebarContainer isOpen={isOpen} >
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="hero" 
                    smooth={true} 
                    duration={500} 
                    exact='true' 
                    offset={-80}
                    onClick={toggle} >
                        Home
                    </SidebarLink>
                    <SidebarLink to="about" 
                    smooth={true} 
                    duration={500} 
                    exact='true' 
                    offset={-60}
                    onClick={toggle} >
                        About us
                    </SidebarLink>
                    <SidebarLink to="project" 
                    smooth={true} 
                    duration={500} 
                    exact='true' 
                    offset={-70}
                    onClick={toggle} >
                        Projects
                    </SidebarLink>
                    <SidebarLink to="contact" 
                    smooth={true} 
                    duration={500} 
                    exact='true' 
                    offset={-75}
                    onClick={toggle} >
                        Contact
                    </SidebarLink>
                </SidebarMenu>
                <SideButtonWrap>
                    <SidebarRoute to="/drop-your-pitch" onClick={toggle} >Drop your pitch</SidebarRoute>
                </SideButtonWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
