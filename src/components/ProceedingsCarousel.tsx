import React from 'react';
import { BookOpen, Award, CheckCircle } from 'lucide-react';
import { PAST_PROCEEDINGS } from '../data/conferenceData';

export default function ProceedingsCarousel() {
  return (
    <div 
      id="past-proceedings-showcase"
      className="bg-slate-50 py-16 px-4 border-b border-slate-200 select-none"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-3">
          <span className="text-[#0052cc] text-xs font-bold uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Springer Publications
          </span>
          <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
            Published Conference Proceedings
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
            Previous peer-reviewed research papers from the conference series have been published by Springer.
          </p>
        </div>

        {/* 3 Book Covers Grid - Styled as simple, non-interactive visual book illustrations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto justify-items-center">
          {PAST_PROCEEDINGS.map((vol, index) => {
            // Distinct Springer-inspired color themes for each volume to make them look genuine and unique
            const coverThemes = [
              {
                bg: "bg-[#e2af2e]", // Classic Golden/Yellow Springer Cover
                accent: "bg-[#1f2937]", // Dark Slate Band
                text: "text-slate-900",
                spine: "border-amber-700/30",
                subText: "text-amber-950",
                spineColor: "bg-amber-600/20"
              },
              {
                bg: "bg-[#2563eb]", // Rich Royal Blue Springer Cover
                accent: "bg-[#ffffff]", // Clean White Band
                text: "text-white",
                spine: "border-blue-900/30",
                subText: "text-blue-100",
                spineColor: "bg-blue-800/20"
              },
              {
                bg: "bg-[#0f766e]", // Dark Teal Springer Cover
                accent: "bg-[#f8fafc]", // Off-White Band
                text: "text-white",
                spine: "border-teal-950/30",
                subText: "text-teal-100",
                spineColor: "bg-teal-950/20"
              }
            ];

            const theme = coverThemes[index] || coverThemes[0];

            return (
              <div 
                key={vol.volume}
                id={`proceedings-book-cover-col-${vol.volume}`}
                className="flex flex-col items-center space-y-4"
              >
                {/* Book Jacket 3D Look */}
                <div 
                  className={`relative w-56 h-80 rounded-r-xl shadow-[12px_16px_28px_-6px_rgba(0,0,0,0.3),-2px_0_4px_rgba(0,0,0,0.05)] overflow-hidden ${theme.bg} ${theme.text} border-l-[8px] ${theme.spine} flex flex-col justify-between p-5 transform hover:-translate-y-2 hover:shadow-[16px_24px_36px_-6px_rgba(0,0,0,0.35)] transition-all duration-300 select-none`}
                >
                  {/* Left book spine crease overlay */}
                  <div className={`absolute left-0 top-0 w-2.5 h-full ${theme.spineColor}`} />
                  
                  {/* Header / Editor Block */}
                  <div className="pl-3 space-y-1">
                    <span className="text-[9px] uppercase tracking-wider font-extrabold block opacity-85">
                      Springer Proceedings
                    </span>
                    <p className="text-[10px] font-bold tracking-tight leading-tight">
                      {vol.editors.join(' · ')} <span className="font-medium">Editors</span>
                    </p>
                  </div>

                  {/* Mid Title & Volume Band */}
                  <div className="my-auto pl-3 space-y-3">
                    <div className="h-[2px] bg-current opacity-30 w-12" />
                    <h4 className="text-xs font-serif font-black tracking-tight leading-snug uppercase max-h-24 overflow-hidden">
                      {vol.title.split(',')[0]}
                    </h4>
                    <span className={`inline-block text-[9px] font-extrabold uppercase tracking-widest bg-black/10 px-2 py-0.5 rounded ${theme.subText}`}>
                      Volume {vol.volume}
                    </span>
                  </div>

                  {/* Footer / Publisher Block */}
                  <div className="border-t border-current/20 pt-3 pl-3 flex items-center justify-between">
                    <div className="text-left">
                      <p className="text-[8px] uppercase tracking-widest font-mono opacity-75">ISSN 0930-8989</p>
                      <p className="text-[8px] font-semibold opacity-90">Scopus Indexed</p>
                    </div>
                    <span className="text-xs font-display font-extrabold tracking-tighter italic">
                      Springer
                    </span>
                  </div>
                </div>

                {/* Sub-label under the book */}
                <div className="text-center space-y-1 max-w-[210px]">
                  <p className="text-xs font-bold text-slate-800 line-clamp-1">
                    Volume {vol.volume}: {vol.subtitle}
                  </p>
                  <p className="text-[10px] text-slate-400 font-medium">
                    Published by Springer Nature
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
