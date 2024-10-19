import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';

const MainLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            <HeroSection />
            {children}
        </>
    );
};

export default MainLayout;
