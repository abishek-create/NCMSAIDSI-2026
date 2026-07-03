import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Bell, Calendar, ArrowRight } from 'lucide-react';
import { NEWS_DATA } from '../data/conferenceData';
import { motion, AnimatePresence } from 'motion/react';

export default function NewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const handleNext = () => {
    setExpanded(false);
    setCurrentIndex((prev) => (prev + 1) % NEWS_DATA.length);
  };

  const handlePrev = () => {
    setExpanded(false);
    setCurrentIndex((prev) => (prev - 1 + NEWS_DATA.length) % NEWS_DATA.length);
  };

  const activeNews = NEWS_DATA[currentIndex];

  return (
    <div 
      id="news-and-updates-section"
      className="bg-[#f8fafc] py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200"
    >
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Section Title */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            News and Updates
          </h2>
          <div className="w-16 h-1 bg-[#0052cc] mx-auto rounded-full" />
        </div>

        {/* Active News Card Panel */}
        <div className="bg-white rounded-xl shadow-md border border-slate-100 overflow-hidden max-w-2xl mx-auto">
          <div className="p-6 sm:p-8 space-y-4">
            
            {/* Header / Category Badge */}
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#0052cc] bg-blue-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                <Bell className="w-3 h-3 animate-bounce" />
                {activeNews.category || 'Announcement'}
              </span>
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {activeNews.date}
              </span>
            </div>

            {/* News Title */}
            <h3 className="text-xl font-bold font-display text-slate-900">
              {activeNews.title}
            </h3>

            {/* News Body Content */}
            <div className="text-slate-600 text-sm leading-relaxed min-h-[100px] flex flex-col justify-between">
              <p className={expanded ? "line-clamp-none" : "line-clamp-4"}>
                {activeNews.content}
              </p>

              {expanded && (
                <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-500 space-y-2 bg-slate-50 p-3 rounded-lg">
                  <p><strong>Note for Authors:</strong> Keep monitoring this news box for ongoing alerts. All queries regarding submission templates or timelines should be routed directly to the Organizing Secretariat at SMIT.</p>
                </div>
              )}
            </div>

            {/* Read More / Collapse button */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                id={`news-read-more-btn-${activeNews.id}`}
                onClick={() => setExpanded(!expanded)}
                className="px-4 py-2 rounded bg-[#0052cc] hover:bg-[#0040a3] text-white font-bold text-xs tracking-wider uppercase transition-colors shadow-sm cursor-pointer"
              >
                {expanded ? 'Show Less' : 'Read More'}
              </button>

              <span className="text-[11px] font-mono text-slate-400">
                Update {currentIndex + 1} of {NEWS_DATA.length}
              </span>
            </div>

          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex items-center justify-center gap-4">
          <button
            id="news-nav-prev"
            onClick={handlePrev}
            className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded text-xs font-semibold uppercase tracking-wider transition-colors duration-200 cursor-pointer flex items-center gap-1"
          >
            <ChevronLeft className="w-4 h-4" />
            ← Prev
          </button>
          
          <button
            id="news-nav-next"
            onClick={handleNext}
            className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded text-xs font-semibold uppercase tracking-wider transition-colors duration-200 cursor-pointer flex items-center gap-1"
          >
            Next →
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
