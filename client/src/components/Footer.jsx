import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className="w-full bg-white dark:bg-primary text-gray-800 dark:text-gray-300 py-8 px-4 border-t border-gray-300 dark:border-gray-800">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center">
                <div className="flex space-x-6 mb-4">
                    <a href="https://github.com/vishalmurugan1986/" target="_blank" rel="noreferrer" className="hover:text-accent duration-200">
                        <FaGithub size={30} />
                    </a>
                    <a href="https://linkedin.com/in/vishalmurugan1986/" target="_blank" rel="noreferrer" className="hover:text-accent duration-200">
                        <FaLinkedin size={30} />
                    </a>
                    <a href="https://x.com/isvishalmurugan?s=11" target="_blank" rel="noreferrer" className="hover:text-accent duration-200">
                        <FaXTwitter size={30} />
                    </a>
                </div>
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;

