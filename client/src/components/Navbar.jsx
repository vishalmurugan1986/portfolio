import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const links = [
        { id: 1, link: 'home' },
        { id: 2, link: 'about' },
        { id: 3, link: 'skills' },
        { id: 4, link: 'projects' },
        { id: 5, link: 'contact' },
    ];

    return (
        <nav className="fixed w-full h-20 z-50 glass-nav flex justify-between items-center px-4 text-gray-800 dark:text-white bg-white/80 dark:bg-primary/80">
            <div className="text-3xl font-bold ml-2 cursor-pointer text-accent">
                Portfolio
            </div>

            <ul className="hidden md:flex items-center">
                {links.map(({ id, link }) => (
                    <li
                        key={id}
                        className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:text-accent duration-200 dark:text-gray-300"
                    >
                        <Link to={link} smooth duration={500}>
                            {link}
                        </Link>
                    </li>
                ))}

            </ul>

            <div className="md:hidden flex items-center">

                <div
                    onClick={() => setNav(!nav)}
                    className="cursor-pointer pr-4 z-10 text-gray-500 dark:text-gray-300"
                >
                    {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
                </div>
            </div>

            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-white to-gray-200 dark:from-primary dark:to-secondary text-gray-800 dark:text-gray-300">
                    {links.map(({ id, link }) => (
                        <li
                            key={id}
                            className="px-4 cursor-pointer capitalize py-6 text-4xl"
                        >
                            <Link
                                onClick={() => setNav(!nav)}
                                to={link}
                                smooth
                                duration={500}
                            >
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
