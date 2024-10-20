import React from 'react';
import heroImage from '../../assets/heroImage.webp';
import { Link } from 'react-router-dom';

const HeroSection = ({ heading, breadcrumb, breadcrumbTitle }) => {
    return (
        <section className='relative h-[500px] sm:h-[600px] lg:h-[750px] w-full flex flex-col justify-center items-center text-center'>
            <div
                className='absolute inset-0 bg-cover bg-center bg-no-repeat'
                style={{ backgroundImage: `url(${heroImage})` }}
            ></div>
            <div className='absolute inset-0 bg-black/50'></div>
            <div className='relative px-4 sm:px-0 z-10'>
                <h1 className='text-4xl text-white md:text-5xl capitalize font-bold mb-4'>
                    {heading || 'Discover Delicious Recipes'}
                </h1>

                {breadcrumb ? (
                    <nav className='flex justify-center' aria-label='Breadcrumb'>
                        <ol className='inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse'>
                            <li className='inline-flex items-center'>
                                <Link
                                    to='/'
                                    className='inline-flex items-center text-sm font-medium text-white hover:text-slate-300'
                                >
                                    <svg
                                        className='w-3 h-3 me-2.5'
                                        aria-hidden='true'
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='currentColor'
                                        viewBox='0 0 20 20'
                                    >
                                        <path d='m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z' />
                                    </svg>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <div className='flex items-center'>
                                    <svg
                                        className='rtl:rotate-180 w-3 h-3 text-gray-300 mx-1'
                                        aria-hidden='true'
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 6 10'
                                    >
                                        <path
                                            stroke='currentColor'
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth='2'
                                            d='m1 9 4-4-4-4'
                                        />
                                    </svg>
                                    <p
                                        href='#'
                                        className='ms-1 text-sm font-medium text-white md:ms-2'
                                    >
                                        {breadcrumbTitle}
                                    </p>
                                </div>
                            </li>
                            <li aria-current='page'>
                                <div className='flex items-center'>
                                    <svg
                                        className='rtl:rotate-180 w-3 h-3 text-gray-300 mx-1'
                                        aria-hidden='true'
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 6 10'
                                    >
                                        <path
                                            stroke='currentColor'
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth='2'
                                            d='m1 9 4-4-4-4'
                                        />
                                    </svg>
                                    <span className='ms-1 text-sm font-medium text-gray-300 md:ms-2'>
                                        {heading}
                                    </span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                ) : (
                    <p className='text-xl text-white md:text-2xl max-w-2xl'>
                        Explore our wide range of recipes and find your next favorite meal
                    </p>
                )}
            </div>
        </section>
    );
};

export default HeroSection;
