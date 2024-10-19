import React from 'react';
import heroImage from '../../assets/heroImage.webp';

const HeroSection = () => {
    return (
        <section className='relative h-[500px] sm:h-[600px] lg:h-[700px] w-full flex flex-col justify-center items-center text-center'>
            <div
                className='absolute inset-0 bg-cover bg-center bg-no-repeat'
                style={{ backgroundImage: `url(${heroImage})` }}
            ></div>
            <div className='absolute inset-0 bg-black/50'></div>
            <div className='relative px-4 sm:px-0 z-10'>
                <h1 className='text-4xl text-white md:text-5xl font-bold mb-4'>
                    Discover Delicious Recipes
                </h1>
                <p className='text-xl text-white md:text-2xl max-w-2xl'>
                    Explore our wide range of recipes and find your next favorite meal
                </p>
            </div>
        </section>
    );
};

export default HeroSection;
