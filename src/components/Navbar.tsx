import React, { useState, useEffect } from 'react';
import { Menu, X, LogIn, Award, Calendar, Phone, BookOpen, Users, FileText, ClipboardList, Info, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onNavClick: (tab: string) => void;
  activeSection?: string;
  onLoginClick: () => void;
}

export default function Navbar({ onNavClick, activeSection, onLoginClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Committee', icon: Users },
    { label: 'Speakers', icon: HelpCircle },
    { label: 'Call for Papers', icon: FileText },
    { label: 'Registration', icon: ClipboardList },
    { label: 'Paper Submission', icon: BookOpen },
    { label: 'Important Dates', icon: Calendar },
    { label: 'Awards', icon: Award },
    { label: 'Downloads', icon: BookOpen },
    { label: 'Contact Us', icon: Phone },
  ];

  return (
    <nav 
      id="main-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0f172a]/95 backdrop-blur-md shadow-md py-3 border-b border-slate-800' 
          : 'bg-[#0052cc] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo / Branding */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => onNavClick('Home')}>
            <span className="text-white font-display font-bold text-xl tracking-wider select-none hover:opacity-90 transition-opacity">
              NCMSAIDSI.IN
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                id={`nav-item-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => onNavClick(item.label)}
                className={`px-2.5 py-1.5 rounded-md text-[13px] font-medium transition-all duration-200 cursor-pointer text-white/90 hover:text-white hover:bg-white/10`}
              >
                {item.label}
              </button>
            ))}

            {/* Login Button */}
            <button
              id="login-btn-desktop"
              onClick={onLoginClick}
              className="ml-3 px-4 py-2 rounded bg-[#00e676] hover:bg-[#00c853] text-[#0f172a] font-bold text-[13px] uppercase tracking-wider transition-colors duration-200 flex items-center gap-1.5 shadow-sm shadow-[#00e676]/20 cursor-pointer"
            >
              <LogIn className="w-4 h-4" />
              Log In
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-white/15 focus:outline-none transition-colors duration-200 cursor-pointer"
            >
              {isOpen ? <X className="h-6 h-6" /> : <Menu className="h-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-[#0f172a] border-b border-slate-800"
          >
            <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 shadow-inner">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.label}
                    id={`mobile-nav-item-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => {
                      onNavClick(item.label);
                      setIsOpen(false);
                    }}
                    className="flex items-center w-full px-3 py-2.5 rounded-md text-sm font-medium text-slate-200 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                  >
                    <Icon className="w-4 h-4 mr-3 text-[#00e676]" />
                    {item.label}
                  </button>
                );
              })}
              
              <div className="pt-2 border-t border-slate-800 mt-2">
                <button
                  id="login-btn-mobile"
                  onClick={() => {
                    onLoginClick();
                    setIsOpen(false);
                  }}
                  className="flex items-center justify-center w-full px-4 py-2.5 rounded-md bg-[#00e676] hover:bg-[#00c853] text-[#0f172a] font-bold text-sm uppercase tracking-wider transition-colors duration-200 shadow-md cursor-pointer"
                >
                  <LogIn className="w-4 h-4 mr-2" />
                  Log In
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
