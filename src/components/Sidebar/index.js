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
                    <SidebarLink to="home" onClick={toggle} >
                        Home
                    </SidebarLink>
                    <SidebarLink to="about" onClick={toggle} >
                        About us
                    </SidebarLink>
                    <SidebarLink to="projects" onClick={toggle} >
                        Projects
                    </SidebarLink>
                    <SidebarLink to="contact" onClick={toggle} >
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
