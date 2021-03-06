import React, {useState} from 'react';
import AboutSection from '../components/AboutSection';
import HeroSection from '../components/HeroSection';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { aboutPage } from '../components/AboutSection/Data';
import ProjectsSection from '../components/ProjectsSection';
import { projectPage } from '../components/ProjectsSection/data';
import TeamSection from '../components/TeamSection';
import { teamPage } from '../components/TeamSection/data';
import ComingSection from '../components/ComingSection';
import { comingPage } from '../components/ComingSection/data';
import FooterSection from '../components/FooterSection';
import { footerPage } from '../components/FooterSection/data';
import { heroPage } from '../components/HeroSection/data';



const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen)
    }



    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <HeroSection {...heroPage} />
        <AboutSection {...aboutPage} />
        <ProjectsSection {...projectPage} />
        <TeamSection {...teamPage} />
        <ComingSection {...comingPage} />
         <FooterSection {...footerPage} />
        </>
    )
};

export default Home;
