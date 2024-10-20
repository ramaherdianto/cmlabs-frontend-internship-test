import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavLink = [
    { to: '/', label: 'Home' },
    { to: '/', label: 'Foods' },
    { to: '/', label: 'Ingredients' },
    { to: '/', label: 'Local Cullinary' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // handle humburger menu
    const toggleMenu = () => {
        setIsOpen((isOpen) => !isOpen);
    };

    return (
        <header>
            <nav className='shadow-md'>
                <div className='container mx-auto px-4'>
                    <div className='flex justify-between items-center py-4'>
                        <div className='flex items-center'>
                            <Link
                                to='/'
                                className='text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-800'
                            >
                                MealsHub
                            </Link>
                        </div>
                        <div className='hidden lg:flex items-center space-x-6'>
                            {NavLink.map((link, index) => {
                                return (
                                    <Link
                                        key={index}
                                        to={link.to}
                                        className='text-gray-800 font-medium text-md md:text-lg hover:text-slate-400 transition-all duration-300 ease'
                                    >
                                        {link.label}
                                    </Link>
                                );
                            })}
                        </div>
                        <div className='flex items-center gap-3 lg:hidden xl:hidden'>
                            <button
                                onClick={toggleMenu}
                                type='button'
                                className='cursor-pointer rounded-[50%]'
                                aria-controls='mobile-menu'
                                aria-expanded='false'
                            >
                                <svg
                                    className='block h-6 w-6 cursor-pointer text-light'
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                    aria-hidden='true'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='3'
                                        d='M4 6h16M4 12h16M4 18h16'
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {isOpen && (
                    <div
                        className={`absolute bg-[#f8f8f8] ${
                            isOpen ? 'w-2/3 sm:w-1/2' : 'w-0'
                        } top-0 right-0 bottom-0 z-20 flex flex-col justify-center items-center transition-all duration-300 ease-in-out lg:hidden xl:hidden 2xl:hidden shadow-[-8px_0px_18px_-4px_rgba(0,0,0,0.45);]`}
                    >
                        <button
                            onClick={toggleMenu}
                            type='button'
                            className='absolute cursor-pointer right-4 top-4'
                            aria-controls='mobile-menu'
                            aria-expanded='false'
                        >
                            <span className='sr-only'>Open main menu</span>

                            <svg
                                className='block h-6 w-6 text-light'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                                aria-hidden='true'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='3'
                                    d='M6 18L18 6M6 6l12 12'
                                />
                            </svg>
                        </button>
                        <div className='flex flex-col mt-10 px-2 py-6 space-y-8 sm:px-3'>
                            {NavLink.map((link, index) => {
                                return (
                                    <Link
                                        key={index}
                                        to={link.to}
                                        className='text-gray-800 text-center font-medium text-md md:text-lg hover:text-slate-400 transition-all duration-300 ease'
                                    >
                                        {link.label}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navbar;
