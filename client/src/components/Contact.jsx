import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaCalendarAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <div
            name="contact"
            className="w-full min-h-screen bg-transparent p-4 text-gray-800 dark:text-white py-20"
        >
            <div className="flex flex-col p-4 justify-center max-w-screen-xl mx-auto h-full">
                <div className="pb-8 text-center">
                    <p className="text-4xl font-bold inline border-b-4 border-purple-500">
                        Contact Me
                    </p>
                    <p className="py-6 text-gray-500 dark:text-gray-400">
                        Ready to start a conversation? Let's discuss your project or just say hello!
                    </p>
                </div>

                <div className="flex justify-center">
                    {/* Contact Info */}
                    <div className="flex flex-col gap-6 w-full max-w-lg">
                        <div className="bg-white/10 dark:bg-secondary/30 backdrop-blur-md rounded-xl p-6 border border-gray-200 dark:border-white/5 shadow-lg flex items-center gap-4 hover:-translate-y-1 duration-300">
                            <div className="p-4 bg-purple-500/20 rounded-full text-purple-400">
                                <FaMapMarkerAlt size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">Location</h4>
                                <p className="text-gray-500 dark:text-gray-400">Chennai, Tamil Nadu, India</p>
                            </div>
                        </div>

                        <div className="bg-white/10 dark:bg-secondary/30 backdrop-blur-md rounded-xl p-6 border border-gray-200 dark:border-white/5 shadow-lg flex items-center gap-4 hover:-translate-y-1 duration-300">
                            <div className="p-4 bg-blue-500/20 rounded-full text-blue-400">
                                <FaPhoneAlt size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">Phone</h4>
                                <p className="text-gray-500 dark:text-gray-400">+91 8888 8888 88</p>
                            </div>
                        </div>

                        <div className="bg-white/10 dark:bg-secondary/30 backdrop-blur-md rounded-xl p-6 border border-gray-200 dark:border-white/5 shadow-lg flex items-center gap-4 hover:-translate-y-1 duration-300">
                            <div className="p-4 bg-pink-500/20 rounded-full text-pink-400">
                                <FaEnvelope size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">Email</h4>
                                <p className="text-gray-500 dark:text-gray-400">vishalxivimcmlxxxvi@gmail.com</p>
                            </div>
                        </div>

                        <div className="bg-white/10 dark:bg-secondary/30 backdrop-blur-md rounded-xl p-6 border border-gray-200 dark:border-white/5 shadow-lg flex items-center gap-4 hover:-translate-y-1 duration-300">
                            <div className="p-4 bg-cyan-500/20 rounded-full text-cyan-400">
                                <FaCalendarAlt size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">Availability</h4>
                                <p className="text-gray-500 dark:text-gray-400">Open for opportunities</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
