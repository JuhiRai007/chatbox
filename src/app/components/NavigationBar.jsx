'use client'
import { Home, FolderSearch, Settings, HelpCircle, Mail, LogOut } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NavigationBar({ active, onNavigate }) {
  const buttonVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.95 }
  };

  const iconVariants = {
    active: { 
      scale: 1.1,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    inactive: { 
      scale: 1,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };

  const NavButton = ({ icon: Icon, isActive, onClick, ariaLabel }) => (
    <motion.button
      className={`nav-btn ${isActive ? 'nav-btn-active' : 'nav-btn-inactive'}`}
      aria-label={ariaLabel}
      onClick={onClick}
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
    >
      <motion.div
        variants={iconVariants}
        animate={isActive ? "active" : "inactive"}
      >
        <Icon size={20} />
      </motion.div>
    </motion.button>
  );

  return (
    <motion.nav 
      className="flex flex-col items-center bg-gradient-to-b from-[#e4f5ff] via-white to-white h-screen w-[76px] shadow-[2px_0_32px_#cfe5fc48] fixed top-0 left-0 z-30 py-6"
      initial={{ x: -76 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
     
      
      {/* Main Navigation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <NavButton
          icon={Home}
          isActive={active === 'home'}
          onClick={() => onNavigate('home')}
          ariaLabel="Home"
        />
        <NavButton
          icon={FolderSearch}
          isActive={active === 'chat'}
          onClick={() => onNavigate('chat')}
          ariaLabel="Chat"
        />
      </motion.div>
      
      <div className="flex-1"></div>
      
      {/* Bottom Navigation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <NavButton icon={Settings} isActive={false} ariaLabel="Settings" />
        <NavButton icon={HelpCircle} isActive={false} ariaLabel="Help" />
        <NavButton icon={Mail} isActive={false} ariaLabel="Mail" />
      </motion.div>
       {/* LAST Logout Icon */}
      <div className="mt-10 border-t-2 border-gray-500">
        <NavButton icon={LogOut} isActive={false} ariaLabel="Logout" />
      </div>
    </motion.nav>
  );
}
