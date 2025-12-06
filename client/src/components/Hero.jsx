import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaArrowRight, FaDownload, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Hero = () => {
    return (
        <div
            name="home"
            className="h-screen w-full bg-transparent"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col justify-center h-full px-4">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-pink-500 font-bold text-xl mb-2"
                >
                    Hello, I'm
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl sm:text-8xl font-bold text-gray-800 dark:text-white mb-4"
                >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                        Vishal
                    </span>
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-2xl sm:text-4xl font-bold text-gray-600 dark:text-gray-300 mb-6"
                >
                    Software developer | <span className="text-white-400">Full Stack</span> | <span className="text-white-400"> AI Enthusiast </span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-gray-500 dark:text-gray-400 py-4 max-w-xl text-lg"
                >
                    I specialize in building intelligent solutions with AI to optimize workflows, drive automation, and create impactful user experiences.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 mb-10"
                >
                    <a
                        href="/resume.pdf"
                        download={true}
                        className="group text-white w-fit px-8 py-4 flex items-center rounded-full bg-gradient-to-r from-purple-600 to-blue-600 cursor-pointer hover:scale-105 duration-300 shadow-lg shadow-purple-500/30"
                    >
                        <FaDownload size={20} className="mr-2" />
                        Download Resume
                    </a>
                    <Link
                        to="projects"
                        smooth
                        duration={500}
                        className="group text-gray-800 dark:text-white w-fit px-8 py-4 flex items-center rounded-full border border-gray-400 dark:border-gray-600 hover:border-purple-500 hover:text-purple-500 cursor-pointer duration-300"
                    >
                        Explore My Work
                        <span className="group-hover:translate-x-1 duration-300">
                            <FaArrowRight size={20} className="ml-2" />
                        </span>
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex gap-6"
                >
                    <a href="https://github.com/vishalmurugan1986/" className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:text-purple-500 hover:-translate-y-1 duration-300 text-gray-700 dark:text-gray-300">
                        <FaGithub size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/vishalmurugan1986/" className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:text-blue-500 hover:-translate-y-1 duration-300 text-gray-700 dark:text-gray-300">
                        <FaLinkedin size={24} />
                    </a>
                    <a href="https://leetcode.com/u/vishalmurugan1986/" className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:text-yellow-500 hover:-translate-y-1 duration-300 text-gray-700 dark:text-gray-300">
                        <SiLeetcode size={24} />
                    </a>
                    <a href="mailto:vishalxivimcmlxxxvi@gmail.com" className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:text-pink-500 hover:-translate-y-1 duration-300 text-gray-700 dark:text-gray-300">
                        <FaEnvelope size={24} />
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
