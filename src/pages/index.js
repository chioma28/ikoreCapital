import React, {useState} from 'react';
import AboutSection from '../components/AboutSection';
import HeroSection from '../components/HeroSection';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { aboutPage } from '../components/AboutSection/Data';



const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen)
    }



    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <HeroSection />
        <AboutSection {...aboutPage} />
         
        </>
    )
};

export default Home;
