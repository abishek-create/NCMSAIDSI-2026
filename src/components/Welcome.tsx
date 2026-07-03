import React from 'react';
import { BookOpen, MapPin, Radio, Users } from 'lucide-react';
import { CONFERENCE_INFO } from '../data/conferenceData';

export default function Welcome() {
  const highlights = [
    {
      title: "Springer Proceedings",
      desc: "Peer-reviewed papers will be published in the Springer Series of 'Springer Proceedings in Physics', indexed by Scopus and Web of Science.",
      icon: BookOpen,
      color: "bg-blue-50 text-[#0052cc]"
    },
    {
      title: "Hybrid Presentation",
      desc: "Presenters and attendees can join either physically at the lush SMIT campus or virtually from anywhere in the world.",
      icon: Radio,
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "Scenic Venue",
      desc: "Located on the banks of the Teesta River in Majitar, East Sikkim, SMIT offers a gorgeous Himalayan setting for collaborative science.",
      icon: MapPin,
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      title: "Peer Collaboration",
      desc: "Network with leading mathematicians, engineers, and physicists in specialized domains of complexity and chaos theory.",
      icon: Users,
      color: "bg-amber-50 text-amber-600"
    }
  ];

  return (
    <div 
      id="welcome-section"
      className="bg-white py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-100"
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        
        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
          Welcome to NCMSAIDSI 2026
        </h2>
        
        {/* Sub-line under heading */}
        <div className="w-24 h-1 bg-[#0052cc] mx-auto rounded-full" />

        {/* Welcome Text block */}
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto font-sans">
          The 3rd International Conference on Nonlinear Dynamics and Applications (NCMSAIDSI 2026) brings together leading academicians, researchers, and professionals worldwide in a hybrid format. It provides a distinguished platform to share insights and advancements in nonlinear science and its applications across Engineering, Physics, Social Sciences, and Applied Mathematics, fostering interdisciplinary collaboration and innovation. Join us to explore cutting-edge research and shape the future of nonlinear dynamics.
        </p>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-10 text-left">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.title} 
                className="p-5 rounded-xl border border-slate-100 hover:border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-all duration-200 flex gap-4"
              >
                <div className={`p-3 rounded-lg h-12 w-12 flex items-center justify-center ${item.color} flex-shrink-0 shadow-sm`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm tracking-tight mb-1">{item.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
