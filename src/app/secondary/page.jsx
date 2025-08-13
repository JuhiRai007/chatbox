'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import NavigationBar from '../components/NavigationBar';
import ChatInterface from '../components/ChatInterface';

export default function SecondaryPage() {
  const [chatState, setChatState] = useState('minimized');
  const [activeNav, setActiveNav] = useState('chat');
  const [pageTitle, setPageTitle] = useState('');

  const handleNavigation = (nav) => {
    setActiveNav(nav);

    if (nav === 'home') {
      // Navigate to home page
      window.location.href = '/';
    }
  };

  const handleChatStateChange = (newState) => {
    setChatState(newState);

    if (newState === 'collapsed') {
      setPageTitle('2nd Page - Collapsed');
    } else if (newState === 'minimized') {
      setPageTitle('2nd Page');
    } else if (newState === 'expanded') {
      setPageTitle('2nd Page - Expanded');
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-blue-300 rounded-full blur-3xl"
          animate={{
            x: [0, 20, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-32 right-32 w-48 h-48 bg-purple-300 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Navigation */}
      <NavigationBar active={activeNav} onNavigate={handleNavigation} />

      {/* Main Content */}
      <div className="ml-[76px] relative min-h-screen flex flex-col">
        {/* Page Title */}
        <motion.div
          className="text-center py-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
        </motion.div>

        {/* Chat Interface */}
        <div className="flex-1 relative">
          <ChatInterface chatState={chatState} onChatStateChange={handleChatStateChange} />
        </div>
      </div>
    </motion.div>
  );
}
