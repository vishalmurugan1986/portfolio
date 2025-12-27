import React from 'react';
import { FaCode, FaLightbulb, FaUsers, FaRocket, FaServer, FaBrain, FaReact, FaNodeJs } from 'react-icons/fa';
import profileImg from '../assets/profile.png';

const About = () => {


    const skills = [
        { name: 'Frontend Development', level: '85%', color: 'bg-cyan-500', icon: <FaReact className="text-cyan-500" /> },
        { name: 'Backend Development', level: '80%', color: 'bg-cyan-500', icon: <FaNodeJs className="text-green-500" /> },
        { name: 'Artificial Intelligence', level: '90%', color: 'bg-cyan-500', icon: <FaBrain className="text-white-500" /> },
        { name: 'Problem Solving', level: '85%', color: 'bg-cyan-500', icon: <FaLightbulb className="text-yellow-500" /> },
    ];

    return (
        <div
            name="about"
            className="w-full min-h-screen bg-transparent text-gray-800 dark:text-white py-20"
        >
            <div className="max-w-screen-xl mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8 text-center">
                    <p className="text-4xl font-bold inline border-b-4 border-purple-500">
                        About Me
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-10 mt-10">
                    {/* Left Side - Description & Skills */}
                    <div className="bg-white/10 dark:bg-secondary/30 backdrop-blur-md rounded-xl p-8 border border-gray-200 dark:border-white/5 shadow-lg">
                        <h3 className="text-2xl font-bold mb-4">Software Developer</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                            Software Developer passionate about building scalable, user-focused applications and intelligent automation solutions. Currently working with AI-powered workflows, backend services, and platform integrations. Enjoys solving real-world problems through clean code and system design. Open to challenging roles that drive innovation and continuous growth.
                        </p>

                        <div className="space-y-6">
                            {skills.map((skill, index) => (
                                <div key={index}>
                                    <div className="flex justify-between mb-1 items-center">
                                        <span className="text-base font-medium flex items-center gap-2">
                                            <span>{skill.icon}</span>
                                            {skill.name}
                                        </span>
                                        <span className="text-sm font-medium text-cyan-500">{skill.level}</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                        <div
                                            className={`h-2.5 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)] ${skill.color}`}
                                            style={{ width: skill.level }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Profile Photo */}
                    <div className="flex justify-center items-center">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative">
                                <img
                                    src={profileImg}
                                    alt="Vishal Murugan"
                                    className="rounded-lg shadow-2xl w-full max-w-md object-cover transform transition duration-500 hover:scale-[1.02]"
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
                                    <p className="text-white text-center font-medium">Vishal Murugan</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
