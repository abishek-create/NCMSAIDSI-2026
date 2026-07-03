import React from 'react';
import { BookOpen, Calendar, HelpCircle, ArrowRight, CheckCircle2, Download } from 'lucide-react';
import { PAST_PROCEEDINGS } from '../data/conferenceData';

export default function ProceedingsSection() {
  return (
    <div id="our-proceedings-section" className="bg-white">
      {/* Blue Banner Header */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-100 py-16 px-4 text-center border-b border-slate-200">
        <div className="max-w-4xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
            Our Proceedings
          </h2>
          <p className="text-sm sm:text-md text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
            Our previous conferences have been successfully published as peer-reviewed volumes indexed in major academic databases:
          </p>
        </div>
      </div>

      {/* Main List of past volumes */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {PAST_PROCEEDINGS.map((vol) => (
            <div 
              key={vol.volume} 
              id={`proceedings-list-vol-${vol.volume}`}
              className="bg-slate-50/50 hover:bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-100 hover:border-slate-200 transition-all duration-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Cover Column */}
              <div className="lg:col-span-3 flex flex-col items-center">
                <div className="w-full max-w-[180px] bg-gradient-to-b from-[#091e3a] to-[#0044cc] p-4 text-white rounded-lg shadow-lg flex flex-col justify-between aspect-[3/4]">
                  <div className="text-[8px] font-bold text-slate-300 leading-tight uppercase">
                    Springer Series
                  </div>
                  <div className="my-auto space-y-2">
                    <h4 className="text-[10px] font-bold tracking-tight text-white line-clamp-3">
                      {vol.title}
                    </h4>
                    <span className="block text-[8px] text-[#00e676] font-semibold">
                      Vol {vol.volume}
                    </span>
                  </div>
                  <div className="text-[8px] text-slate-400 font-mono border-t border-white/10 pt-2">
                    Springer Physics
                  </div>
                </div>
              </div>

              {/* Text Column */}
              <div className="lg:col-span-9 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
                  <div>
                    <span className="text-xs font-semibold text-[#0052cc] uppercase tracking-wider block">
                      Springer Proceedings in Physics
                    </span>
                    <h3 className="text-xl font-bold font-display text-slate-900 mt-1">
                      {vol.subtitle}
                    </h3>
                  </div>
                  <span className="text-xs font-semibold bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full border border-emerald-100 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Published
                  </span>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {vol.description}
                </p>

                {/* Key topics included */}
                <div className="space-y-2">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wide block">
                    Key Topics Covered:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {vol.topics.map((topic) => (
                      <span 
                        key={topic}
                        className="text-xs bg-slate-200/60 hover:bg-slate-200 text-slate-700 px-3 py-1 rounded-md transition-colors"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Editors metadata */}
                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
                  <span>
                    <strong>Editors:</strong> {vol.editors.join(', ')}
                  </span>
                  <span>
                    <strong>Indexed:</strong> Scopus, Inspec, Web of Science, Google Scholar
                  </span>
                  <button 
                    id={`proceedings-download-btn-vol-${vol.volume}`}
                    className="inline-flex items-center gap-1.5 text-xs text-[#0052cc] hover:text-[#0040a3] font-bold hover:underline bg-blue-50 px-3 py-1.5 rounded cursor-pointer transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Download Index PDF
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
