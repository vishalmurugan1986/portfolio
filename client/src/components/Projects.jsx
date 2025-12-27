import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaEye, FaCode } from 'react-icons/fa';
import JSLib from '../assets/JSLib.jpeg';
import APXV1 from '../assets/APXV1.jpeg';
import ClipstreamAI from '../assets/ClipstreamAI.jpeg';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [activeFilter, setActiveFilter] = useState('ALL');
    const [loading, setLoading] = useState(true);

    const filters = ['ALL', 'FRONTEND', 'BACKEND', 'FULLSTACK', 'ARTIFICIAL INTELLIGENCE'];

    useEffect(() => {
        // Mock data for now to match the reference style
        const mockProjects = [
            {
                _id: '1',
                title: 'Prime Promise',
                category: 'FRONTEND',
                image: JSLib,
                description: 'A lightweight promise utility library for JavaScript with modern async/await features.',
                tags: ['JavaScript', 'Promise', 'Async/Await'],
                codeUrl: 'https://github.com/vishalmurugan1986/prime-promise.git'
            },
            {
                _id: '2',
                title: 'APXV1 | Private Intelligence',
                category: ['FULLSTACK', 'ARTIFICIAL INTELLIGENCE'],
                image: APXV1,
                description: 'APX V1 uses RAG technology. Answers are generated based on the provided context only.',
                tags: ['Python', 'Llama 3.3 (70B)', 'Pinecone', 'FastEmbeb(ONNX)', 'Groq'],
                demoUrl: 'https://apx-v1.vercel.app/',
                codeUrl: 'https://github.com/vishalmurugan1986/APX-V1.git'
            },
            {
                _id: '3',
                title: 'Clipstream AI',
                category: ['FULLSTACK', 'ARTIFICIAL INTELLIGENCE'],
                image: ClipstreamAI,
                description: 'Event-driven video intelligence pipeline.',
                tags: ['Python', 'RabbitMQ', 'Groq(Llama 3 + Whisper)'],
                demoUrl: 'https://project-clipstreamai.web.app/',
                codeUrl: 'https://github.com/vishalmurugan1986/project-clipstreamAI.git'
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
            setFilteredProjects(projects.filter(project =>
                Array.isArray(project.category)
                    ? project.category.includes(category)
                    : project.category === category
            ));
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
