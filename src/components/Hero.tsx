import React from 'react';
import { Mail, Calendar, MapPin, Users, GraduationCap, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { CONFERENCE_INFO } from '../data/conferenceData';

interface HeroProps {
  onNavClick: (tab: string) => void;
}

export default function Hero({ onNavClick }: HeroProps) {
  return (
    <div 
      id="hero-banner"
      className="relative min-h-screen bg-gradient-to-br from-[#091e3a] via-[#0044cc] to-[#1e88e5] pt-24 pb-16 px-4 sm:px-6 lg:px-8 text-white overflow-hidden flex flex-col justify-center"
    >
      {/* Background Subtle Accent Gradients */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-[#00e676]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-[#800055]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Side: Headline and Main Badges */}
        <div className="lg:col-span-6 space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">
          
          {/* Logo badging */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            {/* NCMSAIDSI–2026 Logo Badge */}
            <div className="bg-white px-4 py-2 rounded shadow-md flex items-center gap-2 border border-slate-100 select-none transform hover:scale-102 transition-transform">
              <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-sm tracking-tighter">
                Ic
              </div>
              <div className="text-left">
                <span className="block text-[#091e3a] font-display font-black text-lg tracking-tight leading-none">NCMSAIDSI 2026</span>
                <span className="text-[7px] text-[#0052cc] font-sans font-semibold tracking-wider uppercase block">A Nonlinear Experience</span>
              </div>
            </div>

            {/* SMIT Logo Badge */}
            <div className="bg-white px-4 py-2 rounded shadow-md flex items-center gap-2 border border-slate-100 select-none transform hover:scale-102 transition-transform">
              <div className="w-8 h-8 rounded-full bg-[#f4511e] flex items-center justify-center text-white font-bold text-[10px] tracking-tight text-center">
                2026
              </div>
              <div className="text-left">
                <span className="block text-[#091e3a] font-display font-black text-md tracking-tight leading-none">SMIT</span>
                <span className="text-[7px] text-slate-500 font-sans font-medium block">Sikkim Manipal Univ.</span>
              </div>
            </div>
          </div>

          {/* Large Title */}
          <div className="space-y-4">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-display font-extrabold tracking-tight text-white drop-shadow-md select-none">
              {CONFERENCE_INFO.title}
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl font-light text-slate-100 max-w-xl leading-relaxed tracking-wide">
              {CONFERENCE_INFO.fullTitle}
            </p>
          </div>

          {/* Pill Buttons & Badges */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            
            <div className="px-6 py-2.5 rounded-full bg-[#8bc34a] text-slate-900 font-bold text-sm tracking-wider shadow-md flex items-center gap-2 select-none">
              <Calendar className="w-4 h-4 text-slate-800" />
              11-12 DEC 2026
            </div>
          </div>

          {/* Quick Stats or Highlights */}
          <div className="flex items-center gap-6 pt-4 border-t border-white/40 w-full justify-center lg:justify-start">
            <div className="text-center lg:text-left">
              <span className="block text-2xl font-bold font-display text-[#00e676]">3rd</span>
              <span className="text-xs text-slate-300 uppercase font-medium tracking-wider">Edition</span>
            </div>
            <div className="h-8 w-[1px] bg-white/20" />
            <div className="text-center lg:text-left">
              <span className="block text-2xl font-bold font-display text-[#00e676]">Springer</span>
              <span className="text-xs text-slate-300 uppercase font-medium tracking-wider">Proceedings</span>
            </div>
            <div className="h-8 w-[1px] bg-white/20" />
            <div className="text-center lg:text-left">
              <span className="block text-2xl font-bold font-display text-[#00e676]">Sikkim</span>
              <span className="text-xs text-slate-300 uppercase font-medium tracking-wider">Location</span>
            </div>
          </div>

        </div>

        {/* Right Side: Joint Organizers, Secretaries, Sponsors, Registration open */}
        <div className="lg:col-span-6 bg-slate-900/45 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/10 shadow-2xl space-y-6">
          
          {/* Header sponsor grid */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 items-center border-b border-white/10 pb-6">
            {/* Springer Logo */}
            <div className="bg-white/10 rounded p-1.5 flex flex-col items-center justify-center h-10 hover:bg-white/15 transition-colors cursor-help group relative">
              <span className="text-[10px] font-extrabold text-blue-300 tracking-tighter">Springer</span>
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-800 text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Official Publisher</span>
            </div>
            {/* CSIR India */}
            <div className="bg-white/10 rounded p-1.5 flex flex-col items-center justify-center h-10 hover:bg-white/15 transition-colors cursor-help group relative">
              <span className="text-[9px] font-black text-teal-300">CSIR-INDIA</span>
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-800 text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Co-Sponsor</span>
            </div>
            {/* ANRF */}
            <div className="bg-white/10 rounded p-1.5 flex flex-col items-center justify-center h-10 hover:bg-white/15 transition-colors cursor-help group relative">
              <span className="text-[9px] font-bold text-indigo-300">ANRF</span>
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-800 text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Research Foundation</span>
            </div>
            {/* Sikkim S&T */}
            <div className="bg-white/10 rounded p-1.5 flex flex-col items-center justify-center h-10 hover:bg-white/15 transition-colors cursor-help group relative">
              <span className="text-[8px] font-bold text-pink-300 text-center leading-none">SIKKIM S&T</span>
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-800 text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Sikkim Gov S&T Council</span>
            </div>
            {/* iBUS */}
            <div className="bg-white/10 rounded p-1.5 flex flex-col items-center justify-center h-10 hover:bg-white/15 transition-colors cursor-help group relative col-span-2">
              <span className="text-[10px] font-extrabold text-amber-300">iBUS Infrastructure</span>
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-800 text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Digital Partner</span>
            </div>
          </div>

          {/* Edition Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <button 
              id="badge-NCMSAIDSI–2026"
              onClick={() => onNavClick('Downloads')} 
              className="px-3.5 py-1.5 rounded bg-[#ffd600] text-slate-900 font-bold text-xs uppercase tracking-wider hover:bg-yellow-400 transition-colors cursor-pointer"
            >
             NCMSAIDSI 2026
            </button>
            <button 
              id="badge-NCMSAIDSI–2026"
              onClick={() => onNavClick('Downloads')} 
              className="px-3.5 py-1.5 rounded bg-[#0052cc] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#0040a3] transition-colors cursor-pointer"
            >
              NCMSAIDSI 2026
            </button>
            <button 
              id="badge-proceedings"
              onClick={() => onNavClick('Downloads')} 
              className="px-3.5 py-1.5 rounded bg-[#ff6d00] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#e65100] transition-colors cursor-pointer"
            >
              Proceedings
            </button>
          </div>

          {/* Organizers Section */}
          <div className="space-y-2 border-b border-white/5 pb-4">
            <span className="text-[#00e676] text-xs font-semibold uppercase tracking-wider block">Jointly organized by</span>
            <h3 className="text-lg font-bold font-display leading-tight text-white">
              Dept. of Mathematics 
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed font-medium">
              Panimalar Engineering College
            </p>
             
          </div>

          {/* Organizing Secretaries */}
          <div className="space-y-3">
            <span className="text-[#00e676] text-xs font-semibold uppercase tracking-wider block">Organizing Secretaries</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CONFERENCE_INFO.organizingSecretaries.map((sec) => (
                <div key={sec.name} className="bg-white/5 rounded-lg p-3 hover:bg-white/8 transition-colors border border-white/5">
                  <span className="block font-semibold text-sm text-white">{sec.name}</span>
                  <span className="block text-[11px] text-slate-400 leading-none mt-1 mb-2">{sec.dept}</span>
                  <a 
                    href={`mailto:${sec.email}`} 
                    className="inline-flex items-center gap-1.5 text-xs text-[#00e676] hover:underline"
                  >
                    <Mail className="w-3 h-3" />
                    {sec.email}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Paper Submission Call and Registration Link */}
          <div className="pt-4 border-t border-white/90 space-y-3 text-center">
            <p className="text-sm font-semibold text-slate-200">
              Paper submission starts from <span className="text-amber-400 font-bold">{CONFERENCE_INFO.importantDeadlines.submissionStarts}</span>
            </p>
            
            {/* Pulsating Registration Banner */}
            <motion.div
              id="registration-banner"
              onClick={() => onNavClick('Registration')}
              className="inline-block px-6 py-2.5 rounded-full border border-[#00e676]/30 bg-[#00e676]/10 text-[#00e676] font-bold text-sm tracking-wider uppercase cursor-pointer hover:bg-[#00e676]/15 transition-all w-full max-w-sm"
              animate={{ 
                scale: [1, 1.02, 1],
                boxShadow: ["0 0 0 0 rgba(0,230,118,0)", "0 0 12px 2px rgba(0,230,118,0.25)", "0 0 0 0 rgba(0,230,118,0)"]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              ( Registration is open )
            </motion.div>
          </div>

        </div>

      </div>
    </div>
  );
}
