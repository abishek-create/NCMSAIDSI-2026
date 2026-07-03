import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProceedingsCarousel from './components/ProceedingsCarousel';
import Countdown from './components/Countdown';
import Welcome from './components/Welcome';
import NewsSection from './components/NewsSection';
import ProceedingsSection from './components/ProceedingsSection';
import ConferenceDetailsView from './components/ConferenceDetailsView';
import LoginModal from './components/LoginModal';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeTab, setActiveTab] = useState('Home');
  const [showLogin, setShowLogin] = useState(false);

  // Scroll to top on tab change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  return (
    <div id="conference-app" className="font-sans antialiased bg-white text-slate-800 min-h-screen flex flex-col justify-between">
      
      {/* Shared Header Navigation */}
      <Navbar 
        onNavClick={(tab) => setActiveTab(tab)} 
        activeSection={activeTab} 
        onLoginClick={() => setShowLogin(true)}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {activeTab === 'Home' ? (
            <motion.div
              key="homepage-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-0"
            >
              {/* 1. Hero Section Banner */}
              <Hero onNavClick={(tab) => setActiveTab(tab)} />

              {/* 2. Previous Volume Book Slider / Carousel */}
              <ProceedingsCarousel />

              {/* 3. April 2026 Countdown Clock */}
              <Countdown />

              {/* 4. Core Welcome Message Card */}
              <Welcome />

              {/* 5. Dynamic News and Alert Updates */}
              <NewsSection />

              {/* 6. Comprehensive Historical Proceedings */}
              <ProceedingsSection />
            </motion.div>
          ) : (
            <motion.div
              key="detailspage-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              <ConferenceDetailsView 
                tab={activeTab} 
                onBackToHome={() => setActiveTab('Home')} 
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer copyright */}
      <footer id="conference-footer" className="bg-slate-50 border-t border-slate-100 py-10 text-center text-slate-400 select-none">
        <p className="text-xs tracking-wider">
          © 2026 - NCMSAIDSI.in
        </p>
      </footer>

      {/* Secure Author console Login Modal Overlay */}
      <AnimatePresence>
        {showLogin && (
          <LoginModal onClose={() => setShowLogin(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
