import React from 'react';
import NavLogo from '../components/Navbar';
import FooterSection from '../components/FooterSection';
import { footerPage } from '../components/FooterSection/data';

const DropYourPitchPage = () => {
    return (
        <div style={{backgroundColor: 'rgba(29, 56, 77, 1)'}}>
            <NavLogo />
            <div style={{height: '250px'}}></div>
            <FooterSection  {...footerPage}  />
        </div>
    )  
}

export default DropYourPitchPage;
