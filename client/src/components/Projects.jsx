import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaEye, FaCode } from 'react-icons/fa';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [activeFilter, setActiveFilter] = useState('ALL');
    const [loading, setLoading] = useState(true);

    const filters = ['ALL', 'FRONTEND', 'BACKEND', 'FULLSTACK', 'MOBILE'];

    useEffect(() => {
        // Mock data for now to match the reference style
        const mockProjects = [
            {
                _id: '1',
                title: 'Prime Promise',
                category: 'FULLSTACK',
                image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
                description: 'A lightweight promise utility library for JavaScript with modern async/await features.',
                tags: ['JavaScript', 'Promise', 'Async/Await'],
                demoUrl: 'https://example.com',
                codeUrl: 'https://github.com'
            },
            {
                _id: '2',
                title: 'Social Dashboard',
                category: 'FRONTEND',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80',
                description: 'A responsive dashboard for managing social media analytics and metrics.',
                tags: ['React', 'Tailwind', 'Chart.js'],
                demoUrl: 'https://example.com',
                codeUrl: 'https://github.com'
            },
            {
                _id: '3',
                title: 'Task API',
                category: 'BACKEND',
                image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
                description: 'RESTful API for task management with authentication and rate limiting.',
                tags: ['Node.js', 'Express', 'MongoDB'],
                demoUrl: 'https://example.com',
                codeUrl: 'https://github.com'
            }
        ];
        setProjects(mockProjects);
        setFilteredProjects(mockProjects);
        setLoading(false);
    }, []);

    const handleFilter = (category) => {
        setActiveFilter(category);
        if (category === 'ALL') {
            setFilteredProjects(projects);
        } else {
            setFilteredProjects(projects.filter(project => project.category === category));
        }
    };

    return (
        <div
            name="projects"
            className="w-full min-h-screen bg-transparent text-gray-800 dark:text-white py-20"
        >
            <div className="max-w-screen-xl mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8 text-center">
                    <p className="text-4xl font-bold inline border-b-4 border-purple-500">
                        Featured Projects
                    </p>
                </div>

                {/* Filter Bar */}
                <div className="flex justify-center gap-4 mb-12 flex-wrap">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => handleFilter(filter)}
                            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeFilter === filter
                                ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30'
                                : 'bg-white/10 dark:bg-secondary/30 text-gray-600 dark:text-gray-400 hover:bg-purple-500/20 hover:text-purple-500'
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map(({ _id, image, title, description, tags, demoUrl, codeUrl }) => (
                        <div key={_id} className="bg-white/10 dark:bg-secondary/30 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-200 dark:border-white/5 shadow-lg hover:-translate-y-2 duration-300 group">
                            <div className="relative overflow-hidden h-48">
                                <img
                                    src={image}
                                    alt={title}
                                    className="w-full h-full object-cover duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 duration-300 flex items-center justify-center gap-4">
                                    <a
                                        href={demoUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="px-4 py-2 bg-white text-gray-900 rounded-lg font-bold flex items-center gap-2 hover:bg-purple-500 hover:text-white transition-colors"
                                    >
                                        <FaEye /> Demo
                                    </a>
                                    <a
                                        href={codeUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="px-4 py-2 bg-gray-900 text-white rounded-lg font-bold flex items-center gap-2 hover:bg-purple-500 transition-colors border border-gray-700"
                                    >
                                        <FaCode /> Code
                                    </a>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 duration-300">{title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">{description}</p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {tags.map((tag, idx) => (
                                        <span key={idx} className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
