import React from 'react';
import { FaJava, FaPython, FaHtml5, FaCss3Alt, FaDatabase, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaCloud } from 'react-icons/fa';
import { SiJavascript, SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb, SiFirebase, SiVercel, SiMongoose, SiAxios, SiReactrouter, SiPostman, SiRender, SiJsonwebtokens } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { TbApi } from 'react-icons/tb';

const Skills = () => {
    const categories = [
        {
            title: 'Programming',
            skills: [
                { name: 'JavaScript', level: '80%', icon: <SiJavascript className="text-yellow-400" /> },
                { name: 'Java', level: '90%', icon: <FaJava className="text-orange-500" /> },
                { name: 'Python', level: '80%', icon: <FaPython className="text-blue-500" /> },
                { name: 'HTML', level: '90%', icon: <FaHtml5 className="text-orange-600" /> },
                { name: 'CSS', level: '85%', icon: <FaCss3Alt className="text-blue-600" /> }
            ]
        },
        {
            title: 'Full-Stack Development (MERN)',
            skills: [
                { name: 'MongoDB', level: '85%', icon: <SiMongodb className="text-green-600" /> },
                { name: 'Express.js', level: '80%', icon: <SiExpress className="text-gray-500 dark:text-white" /> },
                { name: 'React', level: '85%', icon: <FaReact className="text-cyan-400" /> },
                { name: 'Node.js', level: '80%', icon: <FaNodeJs className="text-green-500" /> },
                { name: 'JWT Authentication', level: '75%', icon: <SiJsonwebtokens className="text-pink-500" /> },
                { name: 'RESTFul APIs', level: '85%', icon: <TbApi className="text-purple-500" /> }
            ]
        },
        {
            title: 'FrameWorks & Libraries',
            skills: [
                { name: 'Mongoose', level: '80%', icon: <SiMongoose className="text-red-600" /> },
                { name: 'Axios', level: '85%', icon: <SiAxios className="text-purple-600" /> },
                { name: 'React Router', level: '80%', icon: <SiReactrouter className="text-red-500" /> }
            ]
        },
        {
            title: 'Databases & Cloud',
            skills: [
                { name: 'MongoDB Atlas', level: '80%', icon: <SiMongodb className="text-green-500" /> },
                { name: 'Cloud Deployment (Vercel, Render)', level: '75%', icon: <FaCloud className="text-blue-400" /> }
            ]
        },
        {
            title: 'Tools & Devops',
            skills: [
                { name: 'Git', level: '85%', icon: <FaGitAlt className="text-red-500" /> },
                { name: 'GitHub', level: '85%', icon: <FaGithub className="text-black dark:text-white" /> },
                { name: 'Postman (API Testing)', level: '80%', icon: <SiPostman className="text-orange-500" /> },
                { name: 'VS Code', level: '90%', icon: <VscCode className="text-blue-500" /> }
            ]
        }
    ];

    return (
        <div
            name="skills"
            className="w-full min-h-screen bg-transparent text-gray-800 dark:text-white py-20"
        >
            <div className="max-w-screen-xl mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8 text-center">
                    <p className="text-4xl font-bold inline border-b-4 border-purple-500">
                        Skills & Technologies
                    </p>
                    <p className="py-6 text-gray-500 dark:text-gray-400">
                        A comprehensive overview of my technical skills and proficiency levels across various technologies and tools.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((category, index) => (
                        <div key={index} className="bg-white/10 dark:bg-secondary/30 backdrop-blur-md rounded-xl p-6 border border-gray-200 dark:border-white/5 shadow-lg">
                            <h3 className="text-xl font-bold text-center mb-6">{category.title}</h3>
                            <div className="space-y-6">
                                {category.skills.map((skill, idx) => (
                                    <div key={idx}>
                                        <div className="flex justify-between mb-1">
                                            <span className="text-base font-medium flex items-center gap-2">
                                                {/* Icons could be added here dynamically based on name if needed */}
                                                <span className="text-xl">{skill.icon}</span>
                                                {skill.name}
                                            </span>
                                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{skill.level}</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                            <div
                                                className="bg-cyan-400 h-2.5 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                                                style={{ width: skill.level }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
