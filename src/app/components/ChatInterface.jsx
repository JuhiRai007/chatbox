'use client'
import { useState } from 'react';
import { Send, X, MessageCircle, Mic, User, Briefcase, MapPin, Calendar, FileUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ChatInterface({ chatState, onChatStateChange }) {
    const [input, setInput] = useState('');

    const messages = [
        {
            type: 'bot',
            content: (
                <>
                    Here are your matches for the day!
                    <br /><br />
                    As you can see, all of these were posted just over a few days ago and they fit your strengths perfectly! <strong>SpaceX</strong> has been hiring pretty frequently so do be on the look out for their new opportunities.
                    <br /><br />
                    Let me know if you'd like me to do anything else for you, or would you like to direct you to your <strong>assigned career counselor</strong> if you need any further help!
                </>
            )
        },
        {
            type: 'user',
            content: "Hey Felix, thank you so much for getting me these matches. I have a few questions about them. From my resume, can you please tell me which of these matches really fit the skills that I have, particularly when it comes to developing software for CNC controllers? I'd also really appreciate it if you could break down those descriptions for me and summarize them!"
        },
        {
            type: 'bot',
            content: (
                <>
                    Definitely!
                    <br /><br />
                    Your resume mentions you using Python and Matlab to design control systems for CNC and attitude controls for launch vehicles. You have also mentioned doing projects where you've used Monte-Carlo simulation methods to generate random wind data and conducting course correction.
                    <br /><br />
                    From these particular skills, jobs posted by SpaceX fit the most. They have also been hiring quite actively for multiple ongoing projects.
                    <br /><br />
                    There are also roles from Protingent that fit your skills very well. Let me break these down for you:
                </>
            )
        }
    ];

    // Animation variants
    const expandedVariants = {
        hidden: {
            opacity: 0,
            scale: 0.9,
            y: 20
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
                staggerChildren: 0.1
            }
        },
        exit: {
            opacity: 0,
            scale: 0.95,
            transition: {
                duration: 0.3,
                ease: "easeIn"
            }
        }
    };

    const minimizedVariants = {
        hidden: {
            opacity: 0,
            x: 400,
            scale: 0.8
        },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        },
        exit: {
            opacity: 0,
            x: 400,
            scale: 0.8,
            transition: {
                duration: 0.3,
                ease: "easeIn"
            }
        }
    };

    const collapsedVariants = {
        hidden: {
            opacity: 0,
            scale: 0.5
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        },
        exit: {
            opacity: 0,
            scale: 0.5,
            transition: {
                duration: 0.3,
                ease: "easeIn"
            }
        }
    };

    const messageVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3 }
        }
    };

    return (
        <div className="relative">
            <AnimatePresence mode="wait">
                {/* Expanded State - Full Chat Interface */}
                {chatState === 'expanded' && (
                    <motion.div
                        key="expanded"
                        variants={expandedVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="w-full max-w-8xl mx-auto px-2 sm:px-4"
                    >
                        {/* Sky Image at the very top */}
                        <motion.div
                            className="w-full h-20 sm:h-20 overflow-hidden"
                            variants={messageVariants}
                        >
                            <img
                                src="/sky.png"
                                alt="Sky"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>


                        {/* Messages */}
                        <motion.div
                            className="p-3 sm:p-6 space-y-3 sm:space-y-4 max-h-[50vh] sm:max-h-screen overflow-y-auto custom-scrollbar"
                            variants={expandedVariants}
                        >
                            {messages.map((message, index) => (
                                <motion.div
                                    key={index}
                                    variants={messageVariants}
                                    className={`${message.type === 'user' ? 'ml-auto max-w-[90%] sm:max-w-[80%]' : 'mr-auto max-w-[95%] sm:max-w-[90%]'}`}
                                >
                                    <div className={
                                        message.type === 'user'
                                            ? 'bg-white text-gray-500 p-3 rounded-2xl rounded-br-md text-sm sm:text-base shadow-lg'
                                            : 'bg-[#d9e9f2] text-gray-800 p-3 rounded-2xl rounded-bl-md text-sm sm:text-base shadow-lg border border-blue-100'
                                    }>
                                        {message.content}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Updated Input Area to match the image */}
                        <motion.div
                            className="p-2 sm:p-4 bg-[#E8F4FD] border-t border-gray-100 rounded-xl"
                            variants={messageVariants}
                        >
                            {/* Input field on top */}
                            <div>
                                <div className="mb-8 sm:mb-16">
                                    <input
                                        className="w-full bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none rounded-lg text-sm sm:text-base px-2"
                                        placeholder="Please type your message"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* Bottom row with select options and icons */}
                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-0">
                                {/* Left side - Select options container */}
                                <div className="flex flex-wrap sm:flex-nowrap items-center gap-1 sm:gap-2 bg-[#00517E1A] px-2 sm:px-4 py-2 rounded-3xl overflow-x-auto">
                                    <div className="flex items-center gap-1 min-w-fit">
                                        <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <User size={12} className="text-black sm:w-4 sm:h-4" />
                                        </div>
                                        <select className="bg-white border border-gray-200 rounded-2xl px-2 sm:px-3 py-1 text-xs sm:text-sm text-gray-600 focus:outline-none focus:border-blue-300 transition-colors min-w-[80px] sm:min-w-[140px]">
                                            <option>Option 1</option>
                                        </select>
                                    </div>

                                    <div className="flex items-center gap-1 min-w-fit">
                                        <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Briefcase size={12} className="text-black sm:w-4 sm:h-4" />
                                        </div>
                                        <select className="bg-white border border-gray-200 rounded-2xl px-2 sm:px-3 py-1 text-xs sm:text-sm text-gray-600 focus:outline-none focus:border-blue-300 transition-colors min-w-[80px] sm:min-w-[140px]">
                                            <option>Option 2</option>
                                        </select>
                                    </div>

                                    <div className="flex items-center gap-1 min-w-fit">
                                        <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <MapPin size={12} className="text-black sm:w-4 sm:h-4" />
                                        </div>
                                        <select className="bg-white border border-gray-200 rounded-2xl px-2 sm:px-3 py-1 text-xs sm:text-sm text-gray-600 focus:outline-none focus:border-blue-300 transition-colors min-w-[80px] sm:min-w-[140px]">
                                            <option>Option 3</option>
                                        </select>
                                    </div>

                                    <div className="flex items-center gap-1 min-w-fit">
                                        <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Calendar size={12} className="text-black sm:w-4 sm:h-4" />
                                        </div>
                                        <select className="bg-white border border-gray-200 rounded-2xl px-2 sm:px-3 py-1 text-xs sm:text-sm text-gray-600 focus:outline-none focus:border-blue-300 transition-colors min-w-[80px] sm:min-w-[140px]">
                                            <option>Option 4</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Right side - Action icons */}
                                <div className="flex items-center gap-1 sm:gap-2 bg-[#00517E1A] py-1 px-2 sm:px-4 rounded-3xl justify-center">
                                    <motion.button
                                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-all duration-200"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FileUp size={14} className="sm:w-[18px] sm:h-[18px]" />
                                    </motion.button>

                                    <motion.button
                                        className="w-8 h-8 sm:w-10 sm:h-10 flex rounded-lg items-center justify-center text-gray-600 hover:bg-gray-50 transition-all duration-200"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Mic size={14} className="sm:w-[18px] sm:h-[18px]" />
                                    </motion.button>

                                    <motion.button
                                        className="w-16 h-7 sm:w-20 sm:h-8 bg-[#FFE4B9] rounded-lg flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-200"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Send size={14} className='text-gray-600 sm:w-[18px] sm:h-[18px]' />
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                        {/* </div> */}
                    </motion.div>
                )}

                {/* Minimized State - Side Chat Window */}
                {chatState === 'minimized' && (
                    <motion.div
                        key="minimized"
                        variants={minimizedVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="fixed top-1/2 right-1 sm:right-2 md:right-6 -translate-y-1/2 w-[98vw] xs:w-[95vw] sm:w-auto max-w-xs sm:max-w-md md:max-w-4xl z-40"
                    >
                        <div className="bg-[#e4f5ff] shadow-2xl rounded-2xl sm:rounded-3xl border border-white/20 overflow-hidden">
                            {/* Minimized Header */}
                            <div className="relative p-2 sm:p-3 md:p-4 bg-[#e4f5ff]">
                                <motion.button
                                    onClick={() => onChatStateChange('collapsed')}
                                    className="absolute right-1 sm:right-2 md:right-4 top-1 sm:top-2 md:bottom-2 w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-white/50 rounded-full transition-all duration-200"
                                    whileHover={{ scale: 1.1, rotate: 90 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <X size={12} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />
                                </motion.button>
                            </div>

                            {/* Minimized Messages */}
                            <div className="p-2 sm:p-3 md:p-4 bg-[#E4F5FF] space-y-2 sm:space-y-3 max-h-48 xs:max-h-52 sm:max-h-60 md:max-h-80 overflow-y-auto custom-scrollbar">
                                <motion.div
                                    className="text-gray-800 p-2 sm:p-3 rounded-lg text-xs sm:text-sm leading-relaxed"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    Here are your matches for the day!<br />
                                    As you can see, all of these were posted just over a few days ago and they fit your strengths perfectly! <strong>SpaceX</strong> has been hiring pretty frequently so do be on the look out for their new opportunities.
                                </motion.div>
                                <motion.div
                                    className="bg-white p-2 sm:p-3 rounded-lg ml-2 sm:ml-4 md:ml-8 text-xs sm:text-sm leading-relaxed"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    Hey Felix, thank you so much for getting me these matches. I have a few questions about them from my resume
                                    can you please tell me which of these match really fit the skills that i have particularly when its come to developing software for GNC controller.
                                </motion.div>
                                <motion.div
                                    className="text-gray-800 p-2 sm:p-3 rounded-lg text-xs sm:text-sm leading-relaxed"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    Definitely!<br />
                                    Your resume mentions you using Python and Matlab to design control systems
                                    for launch vehicles. You have also mentioned doing projects where you've used
                                    Monte-Carlo simulation methods to generate random wind data and conducting course correction.
                                    From these particular skills, jobs posted by SpaceX fit the most. They have also been hiring quite
                                    actively for multiple ongoing projects.
                                    There are also roles from Protingent that fit your skills very well. Let me break these down for you.
                                </motion.div>
                            </div>

                            {/* Minimized Input */}
                            <div className='bg-[#e4f5ff] rounded-lg p-1 sm:p-2'>
                                <motion.div
                                    className="p-1 sm:p-2 bg-white rounded-lg"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    {/* Mobile: Stacked layout, Desktop: Original horizontal layout */}
                                    <div className="flex flex-col gap-2 sm:gap-3 md:flex-row md:items-center md:gap-2 md:h-20">
                                        {/* Select options container */}
                                        <div className="grid grid-cols-2 gap-1 sm:gap-2 md:flex md:items-center bg-[#00517E1A] p-1 sm:px-2 md:px-4 sm:py-1 rounded-2xl sm:rounded-3xl md:overflow-x-auto">
                                            <div className="flex items-center gap-1 min-w-0 md:min-w-fit">
                                                <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 rounded-lg flex items-center justify-center flex-shrink-0">
                                                    <User size={10} className="text-black sm:w-3 sm:h-3 md:w-4 md:h-4" />
                                                </div>
                                                <select className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl px-1 sm:px-2 py-0.5 sm:py-1 text-xs sm:text-sm text-gray-600 focus:outline-none focus:border-blue-300 transition-colors min-w-0 flex-1 md:min-w-[60px] lg:min-w-[140px]">
                                                    <option>Option 1</option>
                                                </select>
                                            </div>

                                            <div className="flex items-center gap-1 min-w-0 md:min-w-fit">
                                                <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 rounded-lg flex items-center justify-center flex-shrink-0">
                                                    <Briefcase size={10} className="text-black sm:w-3 sm:h-3 md:w-4 md:h-4" />
                                                </div>
                                                <select className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl px-1 sm:px-2 py-0.5 sm:py-1 text-xs sm:text-sm text-gray-600 focus:outline-none focus:border-blue-300 transition-colors min-w-0 flex-1 md:min-w-[60px] lg:min-w-[140px]">
                                                    <option>Option 2</option>
                                                </select>
                                            </div>

                                            <div className="flex items-center gap-1 min-w-0 md:min-w-fit">
                                                <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 rounded-lg flex items-center justify-center flex-shrink-0">
                                                    <MapPin size={10} className="text-black sm:w-3 sm:h-3 md:w-4 md:h-4" />
                                                </div>
                                                <select className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl px-1 sm:px-2 py-0.5 sm:py-1 text-xs sm:text-sm text-gray-600 focus:outline-none focus:border-blue-300 transition-colors min-w-0 flex-1 md:min-w-[60px] lg:min-w-[140px]">
                                                    <option>Option 3</option>
                                                </select>
                                            </div>

                                            <div className="flex items-center gap-1 min-w-0 md:min-w-fit">
                                                <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 rounded-lg flex items-center justify-center flex-shrink-0">
                                                    <Calendar size={10} className="text-black sm:w-3 sm:h-3 md:w-4 md:h-4" />
                                                </div>
                                                <select className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl px-1 sm:px-2 py-0.5 sm:py-1 text-xs sm:text-sm text-gray-600 focus:outline-none focus:border-blue-300 transition-colors min-w-0 flex-1 md:min-w-[60px] lg:min-w-[140px]">
                                                    <option>Option 4</option>
                                                </select>
                                            </div>
                                        </div>

                                        {/* Action icons */}
                                        <div className="flex items-center justify-center gap-1 sm:gap-2 bg-[#00517E1A] px-2 sm:px-4 py-1 rounded-2xl sm:rounded-3xl self-center md:justify-center">
                                            <motion.button
                                                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-9 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-all duration-200"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <FileUp size={10} className="sm:w-3 sm:h-3 md:w-[14px] md:h-[14px]" />
                                            </motion.button>

                                            <motion.button
                                                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-9 flex rounded-lg items-center justify-center text-gray-600 hover:bg-gray-50 transition-all duration-200"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <Mic size={10} className="sm:w-3 sm:h-3 md:w-[14px] md:h-[14px]" />
                                            </motion.button>

                                            <motion.button
                                                className="w-8 h-6 sm:w-9 sm:h-7 md:w-10 md:h-8 bg-[#FFE4B9] rounded-lg flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-200"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <Send size={10} className='text-gray-600 sm:w-3 sm:h-3 md:w-[14px] md:h-[14px]' />
                                            </motion.button>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                )}


                {/* Collapsed State - Floating Chat Icon */}
                {chatState === 'collapsed' && (
                    <motion.div
                        key="collapsed"
                        variants={collapsedVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="fixed bottom-6 right-6 sm:bottom-10 sm:right-10 z-40"
                        onClick={() => onChatStateChange('minimized')}
                    >
                        <motion.div
                            className="w-12 h-12 sm:w-20 sm:h-20 rounded-full shadow-2xl flex items-center justify-center cursor-pointer relative overflow-hidden"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <img
                                src="/wheel-T-Centered 5.png"
                                alt="Chat"
                                className="w-6 h-6 sm:w-16 sm:h-16 object-contain"
                                onError={(e) => {
                                    // Fallback to MessageCircle icon if image fails to load
                                    e.target.style.display = 'none';
                                    e.target.nextElementSibling.style.display = 'block';
                                }}
                            />
                            <MessageCircle size={20} className="text-white hidden sm:w-7 sm:h-7" />

                            {/* Pulse rings */}
                            <motion.div
                                className="absolute inset-0 bg-blue-400 rounded-full"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.3, 0.1, 0.3]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                            <motion.div
                                className="absolute inset-0 bg-blue-300 rounded-full"
                                animate={{
                                    scale: [1, 1.4, 1],
                                    opacity: [0.2, 0, 0.2]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.5
                                }}
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
