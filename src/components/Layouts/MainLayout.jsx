import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';

const MainLayout = ({ children, heading, breadcrumb }) => {
    return (
        <>
            <Navbar />
            <HeroSection heading={heading} breadcrumb={breadcrumb} />
            {children}
        </>
    );
};

export default MainLayout;
