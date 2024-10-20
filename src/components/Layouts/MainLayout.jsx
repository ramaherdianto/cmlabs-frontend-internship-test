import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Footer from './Footer';

const MainLayout = ({ children, heading, breadcrumb, breadcrumbTitle }) => {
    return (
        <>
            <Navbar />
            <HeroSection
                heading={heading}
                breadcrumb={breadcrumb}
                breadcrumbTitle={breadcrumbTitle}
            />
            <main className='min-h-screen'>{children}</main>
            <Footer />
        </>
    );
};

export default MainLayout;
