'use client'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import NavigationBar from '../app/components/NavigationBar';
import ChatInterface from '../app/components/ChatInterface';

export default function HomePage() {
  const [chatState, setChatState] = useState('expanded'); // 'expanded', 'minimized', 'collapsed'
  const [activeNav, setActiveNav] = useState('home');

  const handleNavigation = (nav) => {
    setActiveNav(nav);
   
    if (nav === 'chat' && chatState === 'expanded') {
      setChatState('minimized');
    } else if (nav === 'home') {
      setChatState('expanded');
    }
  };

  const handleChatStateChange = (newState) => {
    setChatState(newState);
   
    if (newState === 'expanded') {
      setActiveNav('home');
    } else if (newState === 'minimized') {
      setActiveNav('chat');
    }
  };

  // Page background variants
  const pageVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      className="min-h-screen relative overflow-hidden"
      variants={pageVariants}
      initial="initial"
      animate="animate"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32  rounded-full blur-3xl"
          animate={{
            x: [0, 20, 0],
            y: [0, -10, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-32 right-32 w-48 h-48 bg-purple-300 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 15, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-24 h-24 bg-pink-300 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Navigation */}
      <NavigationBar
        active={activeNav}
        onNavigate={handleNavigation}
      />

      {/* Main Content */}
      <div className="ml-[76px] relative min-h-screen mt-20">
        {/* Chat Interface */}
        <ChatInterface
          chatState={chatState}
          onChatStateChange={handleChatStateChange}
        />
      </div>
    </motion.div>
  );
}