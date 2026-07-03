import React, { useState } from 'react';
import { 
  Users, Award, Calendar, BookOpen, FileText, ClipboardList, Phone, 
  ArrowLeft, Search, CheckCircle2, AlertCircle, Download, Upload, 
  MapPin, Mail, ChevronRight, Calculator, FileCheck, Ticket 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  COMMITTEE_DATA, SPEAKERS_DATA, IMPORTANT_DATES_DATA, 
  REGISTRATION_PRICING, CALL_FOR_PAPERS_INFO, CONFERENCE_INFO 
} from '../data/conferenceData';

interface DetailsViewProps {
  tab: string;
  onBackToHome: () => void;
}

export default function ConferenceDetailsView({ tab, onBackToHome }: DetailsViewProps) {
  // Common Search / Filter States
  const [speakerFilter, setSpeakerFilter] = useState<'All' | 'Keynote' | 'Plenary' | 'Invited'>('All');
  
  // Registration Form States
  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regOrg, setRegOrg] = useState('');
  const [regCat, setRegCat] = useState('UG / PG Student');
  const [regRegion, setRegRegion] = useState<'National' | 'International'>('National');
  const [regMode, setRegMode] = useState<'Physical' | 'Online'>('Physical');
  const [regType, setRegType] = useState<'Presenter' | 'Attendee'>('Presenter');
  const [regSubmitted, setRegSubmitted] = useState(false);
  const [regReceiptId, setRegReceiptId] = useState('');

  // Paper Submission States
  const [subTitle, setSubTitle] = useState('');
  const [subAbstract, setSubAbstract] = useState('');
  const [subTrack, setSubTrack] = useState('Track 1: Mathematical Foundations & Methods');
  const [subAuthors, setSubAuthors] = useState('');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [subSubmitted, setSubSubmitted] = useState(false);
  const [subPaperId, setSubPaperId] = useState('');

  // Contact States
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMsg, setContactMsg] = useState('');
  const [contactSent, setContactSent] = useState(false);

  // Dynamic Registration Fee Calculation
  const calculateFee = () => {
    if (regRegion === 'National') {
      const item = REGISTRATION_PRICING.national.find(c => c.category === regCat) || REGISTRATION_PRICING.national[0];
      // Early bird vs Regular (early bird ends March 20)
      let baseFeeStr = item.earlyBird;
      let numericFee = parseInt(baseFeeStr.replace(/[^0-9]/g, ''));
      if (regMode === 'Online') {
        numericFee = Math.round(numericFee * 0.8); // 20% discount
      }
      return `₹ ${numericFee.toLocaleString('en-IN')}`;
    } else {
      // International
      const searchCat = regCat === 'UG / PG Student' || regCat === 'PhD Scholar / Research Fellow' ? 'Student / Scholar' : 'Academician / Faculty';
      const item = REGISTRATION_PRICING.international.find(c => c.category === searchCat) || REGISTRATION_PRICING.international[0];
      let baseFeeStr = item.earlyBird;
      let numericFee = parseInt(baseFeeStr.replace(/[^0-9]/g, ''));
      if (regMode === 'Online') {
        numericFee = Math.round(numericFee * 0.8);
      }
      return `$ ${numericFee}`;
    }
  };

  // Submit Registration Handlers
  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!regName || !regEmail || !regOrg) return;
    const randomId = 'REG-' + Math.floor(100000 + Math.random() * 900000);
    setRegReceiptId(randomId);
    setRegSubmitted(true);
  };

  // Drag and Drop handlers
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type === 'application/pdf') {
        simulateFileUpload(file);
      } else {
        alert('Please upload PDF files only!');
      }
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      simulateFileUpload(e.target.files[0]);
    }
  };

  const simulateFileUpload = (file: File) => {
    setUploadedFile(file);
    setUploadProgress(10);
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 15;
      });
    }, 200);
  };

  const handlePaperSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subTitle || !subAuthors || !uploadedFile || uploadProgress < 100) return;
    const paperNum = Math.floor(100 + Math.random() * 900);
    setSubPaperId(`NCMSAIDSI–2026-${paperNum}`);
    setSubSubmitted(true);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactEmail || !contactMsg) return;
    setContactSent(true);
  };

  // Filter speakers based on selection
  const filteredSpeakers = SPEAKERS_DATA.filter(s => 
    speakerFilter === 'All' ? true : s.type === speakerFilter
  );

  return (
    <div id="details-view-container" className="min-h-screen bg-slate-50 pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8 flex items-center justify-between">
          <button
            id="breadcrumb-back-to-home"
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white hover:bg-slate-100 text-slate-700 hover:text-slate-900 shadow-sm border border-slate-200 transition-colors font-medium text-sm cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
          
          <span className="text-xs font-mono text-slate-400 uppercase tracking-widest bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
            NCMSAIDSI 2026 Portal
          </span>
        </div>

        {/* Dynamic Inner Layout Page content */}
        <div className="bg-white rounded-2xl shadow-md border border-slate-200/60 overflow-hidden min-h-[500px]">
          
          {/* Section banner */}
          <div className="bg-gradient-to-r from-[#0052cc] to-sky-600 p-8 sm:p-12 text-white relative">
            <div className="absolute inset-0 bg-black/10 pointer-events-none" />
            <div className="relative z-10 space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00e676] block">
                INFORMATION & SERVICE PORTAL
              </span>
              <h1 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight">
                {tab}
              </h1>
              <p className="text-xs sm:text-sm text-sky-100 max-w-2xl font-medium">
                Official guide, registrations, and scientific resources for the 3rd International Conference on Nonlinear Dynamics and Applications.
              </p>
            </div>
          </div>

          <div className="p-6 sm:p-10">

            {/* COMMITTEE PAGE */}
            {tab === 'Committee' && (
              <div id="committee-section-view" className="space-y-12">
                <p className="text-sm text-slate-500 leading-relaxed max-w-3xl border-l-4 border-[#0052cc] pl-4">
                  The organizational hierarchy of NCMSAIDSI–2026 is governed by an eminent technical and advisory board representing top universities worldwide, working in coordination with Sikkim Manipal University.
                </p>

                <div className="space-y-10">
                  {COMMITTEE_DATA.map((group) => (
                    <div key={group.role} className="space-y-4">
                      <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
                        <Users className="w-5 h-5 text-[#0052cc]" />
                        {group.role}
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {group.members.map((member) => (
                          <div 
                            key={member.name}
                            className="bg-slate-50/50 hover:bg-slate-50 p-4 rounded-xl border border-slate-100 flex flex-col justify-between"
                          >
                            <div>
                              <span className="block font-bold text-slate-900 text-sm">{member.name}</span>
                              <span className="block text-xs text-indigo-600 font-medium mt-1">{member.designation}</span>
                            </div>
                            <span className="block text-xs text-slate-500 mt-2 font-mono leading-tight">{member.institution}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SPEAKERS PAGE */}
            {tab === 'Speakers' && (
              <div id="speakers-section-view" className="space-y-8">
                {/* Filters */}
                <div className="flex flex-wrap items-center gap-2 border-b border-slate-100 pb-6">
                  {(['All', 'Keynote', 'Plenary', 'Invited'] as const).map((filter) => (
                    <button
                      key={filter}
                      id={`speaker-filter-btn-${filter.toLowerCase()}`}
                      onClick={() => setSpeakerFilter(filter)}
                      className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                        speakerFilter === filter
                          ? 'bg-[#0052cc] text-white shadow-md'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {filter} {filter !== 'All' ? 'Speakers' : ''}
                    </button>
                  ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredSpeakers.map((speaker) => (
                    <div 
                      key={speaker.name}
                      className="bg-slate-50/40 rounded-2xl p-5 border border-slate-150 flex flex-col justify-between space-y-4 shadow-sm"
                    >
                      <div className="space-y-4">
                        {/* Custom initials avatar */}
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-full ${speaker.imagePlaceholderColor} flex items-center justify-center text-white font-extrabold text-sm shadow-inner`}>
                            {speaker.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                          </div>
                          <div>
                            <span className="inline-block px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 text-[10px] font-bold uppercase tracking-wider">
                              {speaker.type} Speaker
                            </span>
                            <h3 className="font-bold text-slate-900 text-sm mt-0.5 leading-snug">{speaker.name}</h3>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <p className="text-xs text-slate-500 font-medium leading-tight">
                            {speaker.designation}
                          </p>
                          <p className="text-xs text-slate-400 font-mono">
                            {speaker.institution}
                          </p>
                        </div>
                      </div>

                      {speaker.topic && (
                        <div className="bg-white rounded-lg p-3 border border-slate-100 text-left">
                          <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">Proposed Topic</span>
                          <span className="text-xs font-medium text-slate-700 line-clamp-2 leading-snug mt-1">
                            "{speaker.topic}"
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CALL FOR PAPERS PAGE */}
            {tab === 'Call for Papers' && (
              <div id="cfp-section-view" className="space-y-10">
                <p className="text-sm text-slate-600 leading-relaxed max-w-4xl">
                  {CALL_FOR_PAPERS_INFO.description} Accepted papers will be compiled into structured Springer volumes.
                </p>

                {/* Tracks Grid */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
                    Conference Tracks & Major Topics
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {CALL_FOR_PAPERS_INFO.tracks.map((track, tIdx) => (
                      <div key={track.title} className="bg-slate-50/50 rounded-xl p-5 border border-slate-150 space-y-3">
                        <span className="text-xs font-bold text-[#0052cc] uppercase block">TRACK {tIdx + 1}</span>
                        <h4 className="font-bold text-slate-900 text-sm">{track.title}</h4>
                        <ul className="space-y-1.5 pl-2">
                          {track.topics.map((topic) => (
                            <li key={topic} className="text-xs text-slate-600 flex items-start gap-1.5">
                              <span className="text-[#00e676] font-bold mt-0.5">•</span>
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Guidelines */}
                <div className="bg-slate-900 text-white rounded-xl p-6 sm:p-8 space-y-4">
                  <h3 className="text-base font-bold font-display text-amber-400 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-amber-400" />
                    Author Submission Guidelines
                  </h3>
                  <ul className="space-y-2.5">
                    {CALL_FOR_PAPERS_INFO.submissionGuidelines.map((g, idx) => (
                      <li key={idx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2">
                        <span className="bg-slate-800 text-amber-400 font-bold rounded-full w-5 h-5 flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        {g}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                    <span className="text-xs text-slate-400">
                      Submit drafts exclusively in Adobe PDF (.pdf) format.
                    </span>
                    <button 
                      id="download-springer-template-btn"
                      className="px-4 py-2 rounded bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Download className="w-4 h-4" />
                      Download Springer Template
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* REGISTRATION PAGE */}
            {tab === 'Registration' && (
              <div id="registration-section-view" className="space-y-10">
                
                {/* Active Ticket Banner */}
                {regSubmitted ? (
                  <div className="bg-[#00e676]/10 border border-[#00e676]/30 rounded-xl p-6 max-w-xl mx-auto space-y-4 text-center">
                    <div className="w-12 h-12 bg-[#00e676]/20 rounded-full flex items-center justify-center text-[#00e676] mx-auto">
                      <Ticket className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-extrabold text-[#00c853] text-lg">Registration Successful!</h3>
                      <p className="text-xs text-slate-500">Your registration request has been locked. Check your email for validation.</p>
                    </div>

                    <div className="bg-white rounded-lg p-4 text-left border border-slate-100 space-y-2">
                      <p className="text-xs text-slate-400">REGISTRATION DETAILS</p>
                      <p className="text-sm font-bold text-slate-900">Name: <span className="font-normal text-slate-700">{regName}</span></p>
                      <p className="text-sm font-bold text-slate-900">Email: <span className="font-normal text-slate-700">{regEmail}</span></p>
                      <p className="text-sm font-bold text-slate-900">Institution: <span className="font-normal text-slate-700">{regOrg}</span></p>
                      <p className="text-sm font-bold text-slate-900">Category: <span className="font-normal text-slate-700">{regCat} ({regMode} mode)</span></p>
                      <p className="text-sm font-bold text-[#0052cc]">Fee Locked: <span className="font-extrabold">{calculateFee()}</span></p>
                      <p className="text-xs font-mono text-slate-400 pt-2 border-t border-slate-100">RECEIPT ID: {regReceiptId}</p>
                    </div>

                    <button
                      id="register-another-btn"
                      onClick={() => {
                        setRegSubmitted(false);
                        setRegName('');
                        setRegEmail('');
                        setRegOrg('');
                      }}
                      className="px-4 py-2 rounded bg-[#0052cc] hover:bg-[#0040a3] text-white font-bold text-xs uppercase tracking-wider cursor-pointer"
                    >
                      Register Another Delegate
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Fee Details */}
                    <div className="lg:col-span-7 space-y-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
                          National Delegate Fees
                        </h3>
                        <div className="overflow-x-auto rounded-lg border border-slate-200">
                          <table className="min-w-full divide-y divide-slate-200 text-xs sm:text-sm">
                            <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider text-[10px] font-bold">
                              <tr>
                                <th className="px-4 py-3 text-left">Category</th>
                                <th className="px-4 py-3 text-center">Early Bird (Before Mar 20)</th>
                                <th className="px-4 py-3 text-center">Regular</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-150">
                              {REGISTRATION_PRICING.national.map((row) => (
                                <tr key={row.category} className="hover:bg-slate-50/50">
                                  <td className="px-4 py-2.5 font-medium text-slate-900">{row.category}</td>
                                  <td className="px-4 py-2.5 text-center text-indigo-600 font-bold">{row.earlyBird}</td>
                                  <td className="px-4 py-2.5 text-center text-slate-500">{row.regular}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
                          International Delegate Fees
                        </h3>
                        <div className="overflow-x-auto rounded-lg border border-slate-200">
                          <table className="min-w-full divide-y divide-slate-200 text-xs sm:text-sm">
                            <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider text-[10px] font-bold">
                              <tr>
                                <th className="px-4 py-3 text-left">Category</th>
                                <th className="px-4 py-3 text-center">Early Bird (Before Mar 20)</th>
                                <th className="px-4 py-3 text-center">Regular</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-150">
                              {REGISTRATION_PRICING.international.map((row) => (
                                <tr key={row.category} className="hover:bg-slate-50/50">
                                  <td className="px-4 py-2.5 font-medium text-slate-900">{row.category}</td>
                                  <td className="px-4 py-2.5 text-center text-indigo-600 font-bold">{row.earlyBird}</td>
                                  <td className="px-4 py-2.5 text-center text-slate-500">{row.regular}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <span className="text-xs font-bold text-slate-700 block">Pricing Guidelines:</span>
                        <ul className="space-y-1.5 pl-2">
                          {REGISTRATION_PRICING.notes.map((note, idx) => (
                            <li key={idx} className="text-xs text-slate-500 flex items-start gap-1">
                              <span>•</span>
                              {note}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Interactive Form */}
                    <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-6">
                      <div className="space-y-1">
                        <h3 className="font-bold text-slate-900 text-md flex items-center gap-1.5">
                          <Calculator className="w-5 h-5 text-[#0052cc]" />
                          Register & Lock Fee
                        </h3>
                        <p className="text-xs text-slate-400">Fill in details to calculate and submit registration.</p>
                      </div>

                      <form id="registration-calculator-form" onSubmit={handleRegisterSubmit} className="space-y-4 text-xs sm:text-sm">
                        
                        <div>
                          <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Full Name</label>
                          <input 
                            type="text"
                            required
                            value={regName}
                            onChange={(e) => setRegName(e.target.value)}
                            className="w-full px-3 py-2 rounded-lg bg-white border border-slate-250 focus:border-[#0052cc] outline-none text-slate-800 text-sm font-medium"
                            placeholder="Dr./Mr./Ms. First Last"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Email ID</label>
                          <input 
                            type="email"
                            required
                            value={regEmail}
                            onChange={(e) => setRegEmail(e.target.value)}
                            className="w-full px-3 py-2 rounded-lg bg-white border border-slate-250 focus:border-[#0052cc] outline-none text-slate-800 text-sm font-medium"
                            placeholder="you@domain.com"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Institution / Affiliation</label>
                          <input 
                            type="text"
                            required
                            value={regOrg}
                            onChange={(e) => setRegOrg(e.target.value)}
                            className="w-full px-3 py-2 rounded-lg bg-white border border-slate-250 focus:border-[#0052cc] outline-none text-slate-800 text-sm font-medium"
                            placeholder="Sikkim Manipal University"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Region</label>
                            <select 
                              value={regRegion}
                              onChange={(e) => {
                                const val = e.target.value as 'National' | 'International';
                                setRegRegion(val);
                                setRegCat(val === 'National' ? 'UG / PG Student' : 'Student / Scholar');
                              }}
                              className="w-full px-3 py-2 rounded-lg bg-white border border-slate-250 text-slate-700 outline-none text-xs font-medium"
                            >
                              <option value="National">Indian National</option>
                              <option value="International">International</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Category</label>
                            <select 
                              value={regCat}
                              onChange={(e) => setRegCat(e.target.value)}
                              className="w-full px-3 py-2 rounded-lg bg-white border border-slate-250 text-slate-700 outline-none text-xs font-medium"
                            >
                              {regRegion === 'National' ? (
                                <>
                                  <option value="UG / PG Student">UG / PG Student</option>
                                  <option value="PhD Scholar / Research Fellow">PhD Scholar</option>
                                  <option value="Academic Faculty / Scientist">Faculty / Scientist</option>
                                  <option value="Industry Delegates">Industry Delegate</option>
                                </>
                              ) : (
                                <>
                                  <option value="Student / Scholar">Student / Scholar</option>
                                  <option value="Academician / Faculty">Academician / Faculty</option>
                                  <option value="Industry Delegates">Industry Delegate</option>
                                </>
                              )}
                            </select>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Attendance Mode</label>
                            <select 
                              value={regMode}
                              onChange={(e) => setRegMode(e.target.value as 'Physical' | 'Online')}
                              className="w-full px-3 py-2 rounded-lg bg-white border border-slate-250 text-slate-700 outline-none text-xs font-medium"
                            >
                              <option value="Physical">In-Person (Sikkim)</option>
                              <option value="Online">Online / Hybrid (20% off)</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Delegate Type</label>
                            <select 
                              value={regType}
                              onChange={(e) => setRegType(e.target.value as 'Presenter' | 'Attendee')}
                              className="w-full px-3 py-2 rounded-lg bg-white border border-slate-250 text-slate-700 outline-none text-xs font-medium"
                            >
                              <option value="Presenter">Presenter</option>
                              <option value="Attendee">Attendee Only</option>
                            </select>
                          </div>
                        </div>

                        {/* Cost Display Panel */}
                        <div className="bg-indigo-900 text-white rounded-xl p-4 text-center">
                          <span className="text-[10px] text-indigo-200 uppercase tracking-widest font-semibold block">Calculated Fee</span>
                          <span className="text-2xl font-extrabold block text-white mt-1">
                            {calculateFee()}
                          </span>
                          <span className="text-[9px] text-indigo-300 block mt-1">Early-bird rate applies.</span>
                        </div>

                        <button
                          type="submit"
                          id="submit-registration-btn"
                          className="w-full py-2.5 rounded-lg bg-[#00e676] hover:bg-[#00c853] text-[#0f172a] font-bold text-xs uppercase tracking-wider shadow-md transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                        >
                          <Ticket className="w-4 h-4" />
                          Complete Registration
                        </button>

                      </form>
                    </div>

                  </div>
                )}
              </div>
            )}

            {/* PAPER SUBMISSION PAGE */}
            {tab === 'Paper Submission' && (
              <div id="submission-section-view" className="space-y-10">
                
                {subSubmitted ? (
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 max-w-xl mx-auto space-y-4 text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0052cc] mx-auto">
                      <FileCheck className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-extrabold text-[#0052cc] text-lg">Paper Submitted Successfully!</h3>
                      <p className="text-xs text-slate-500">Your draft paper has been assigned a reference ID and queued for blind peer review.</p>
                    </div>

                    <div className="bg-white rounded-lg p-4 text-left border border-slate-100 space-y-2">
                      <p className="text-xs text-slate-400">SUBMISSION METADATA</p>
                      <p className="text-xs font-bold text-slate-900 leading-tight">Title: <span className="font-normal text-slate-700">"{subTitle}"</span></p>
                      <p className="text-xs font-bold text-slate-900 leading-tight">Authors: <span className="font-normal text-slate-700">{subAuthors}</span></p>
                      <p className="text-xs font-bold text-slate-900 leading-tight">Track: <span className="font-normal text-slate-700">{subTrack}</span></p>
                      <p className="text-xs font-bold text-slate-900 leading-tight">Attached: <span className="font-normal text-indigo-600 font-mono">{uploadedFile?.name}</span></p>
                      <p className="text-xs font-mono text-slate-500 pt-2 border-t border-slate-100 font-bold">ASSIGNED PAPER ID: <span className="text-indigo-600 font-extrabold">{subPaperId}</span></p>
                    </div>

                    <button
                      id="submit-another-paper-btn"
                      onClick={() => {
                        setSubSubmitted(false);
                        setSubTitle('');
                        setSubAbstract('');
                        setSubAuthors('');
                        setUploadedFile(null);
                        setUploadProgress(0);
                      }}
                      className="px-4 py-2 rounded bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold uppercase tracking-wider cursor-pointer"
                    >
                      Submit Another Paper
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Submission guidelines */}
                    <div className="lg:col-span-6 space-y-6">
                      <div className="space-y-3">
                        <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
                          Paper submission starts from 3rd November 2025
                        </h3>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          All scientific papers must be prepared in Springer formats and submitted online. The official evaluation follows a strict double-blind peer review methodology. Ensure author anonymity within the uploaded PDF file for initial review rounds.
                        </p>
                      </div>

                      <div className="space-y-3">
                        <span className="text-xs font-bold text-slate-700 block">Required Metadata Checklist:</span>
                        <div className="space-y-2">
                          <div className="flex items-start gap-2 text-xs text-slate-600">
                            <CheckCircle2 className="w-4 h-4 text-[#00e676] flex-shrink-0" />
                            <span><strong>Full Abstract:</strong> A concise 150-250 word summary of objectives and results.</span>
                          </div>
                          <div className="flex items-start gap-2 text-xs text-slate-600">
                            <CheckCircle2 className="w-4 h-4 text-[#00e676] flex-shrink-0" />
                            <span><strong>Authors List:</strong> Full names, affiliations, email addresses, and country.</span>
                          </div>
                          <div className="flex items-start gap-2 text-xs text-slate-600">
                            <CheckCircle2 className="w-4 h-4 text-[#00e676] flex-shrink-0" />
                            <span><strong>PDF Draft:</strong> Formatted properly, minus structural author details for double-blind compatibility.</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 flex gap-3">
                        <AlertCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                        <div className="space-y-1">
                          <span className="font-bold text-slate-900 text-xs">Indexed in Springer Series</span>
                          <p className="text-[11px] text-slate-500">All presented papers will be sent for inclusion in the Springer Proceedings in Physics book series.</p>
                        </div>
                      </div>
                    </div>

                    {/* Interactive Submission Portal Form */}
                    <div className="lg:col-span-6 bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-6">
                      <div className="space-y-1">
                        <h3 className="font-bold text-slate-900 text-md flex items-center gap-1">
                          <Upload className="w-5 h-5 text-[#0052cc]" />
                          Online Draft Submission Portal
                        </h3>
                        <p className="text-xs text-slate-400">Simulation of Springer EquinOCS / EasyChair gateway.</p>
                      </div>

                      <form id="paper-submission-form" onSubmit={handlePaperSubmit} className="space-y-4 text-xs sm:text-sm">
                        
                        <div>
                          <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Paper Title</label>
                          <input 
                            type="text"
                            required
                            value={subTitle}
                            onChange={(e) => setSubTitle(e.target.value)}
                            className="w-full px-3 py-2 rounded-lg bg-white border border-slate-250 focus:border-[#0052cc] outline-none text-slate-800 text-xs sm:text-sm font-medium"
                            placeholder="Enter full scientific title"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Author Name(s) & Affiliation(s)</label>
                          <input 
                            type="text"
                            required
                            value={subAuthors}
                            onChange={(e) => setSubAuthors(e.target.value)}
                            className="w-full px-3 py-2 rounded-lg bg-white border border-slate-250 focus:border-[#0052cc] outline-none text-slate-800 text-xs sm:text-sm font-medium"
                            placeholder="e.g. Asit Saha (SMIT), Santo Banerjee (SMIT)"
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Primary Track</label>
                            <select 
                              value={subTrack}
                              onChange={(e) => setSubTrack(e.target.value)}
                              className="w-full px-3 py-2 rounded-lg bg-white border border-slate-250 text-slate-700 outline-none text-xs font-medium"
                            >
                              <option value="Track 1: Mathematical Foundations & Methods">Track 1: Foundations</option>
                              <option value="Track 2: Chaos, Fractals & Complex Networks">Track 2: Chaos & Networks</option>
                              <option value="Track 3: Engineering, Physics & Natural Applications">Track 3: Eng. & Physics</option>
                              <option value="Track 4: Interdisciplinary & Emerging Domains">Track 4: Interdisciplinary</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Manuscript Type</label>
                            <select 
                              className="w-full px-3 py-2 rounded-lg bg-white border border-slate-250 text-slate-700 outline-none text-xs font-medium"
                            >
                              <option value="Full Research Paper">Full Research Paper (8-12 pages)</option>
                              <option value="Short Paper / Work-in-Progress">Short Paper (4-6 pages)</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Abstract Text</label>
                          <textarea 
                            rows={3}
                            value={subAbstract}
                            onChange={(e) => setSubAbstract(e.target.value)}
                            className="w-full px-3 py-2 rounded-lg bg-white border border-slate-250 focus:border-[#0052cc] outline-none text-slate-800 text-xs font-medium resize-none"
                            placeholder="Paste your 150-250 word paper abstract here..."
                          />
                        </div>

                        {/* Drag and Drop Box */}
                        <div className="space-y-1">
                          <label className="block text-xs font-bold text-slate-600 uppercase">Upload PDF Document</label>
                          <div
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                            className={`border-2 border-dashed rounded-xl p-4 text-center transition-all cursor-pointer ${
                              isDragging 
                                ? 'border-[#0052cc] bg-blue-50/50' 
                                : uploadedFile 
                                  ? 'border-emerald-400 bg-emerald-50/10' 
                                  : 'border-slate-300 hover:border-slate-400 bg-white'
                            }`}
                          >
                            <input 
                              type="file"
                              id="paper-file-select-input"
                              accept=".pdf"
                              onChange={handleFileSelect}
                              className="hidden"
                            />
                            
                            <label htmlFor="paper-file-select-input" className="cursor-pointer space-y-2 block">
                              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-500">
                                <Upload className="w-4 h-4" />
                              </div>
                              
                              {uploadedFile ? (
                                <div className="space-y-1">
                                  <span className="block text-xs font-bold text-slate-800 truncate px-2">{uploadedFile.name}</span>
                                  <span className="block text-[10px] text-slate-400">{(uploadedFile.size / 1024 / 1024).toFixed(2)} MB • PDF Document</span>
                                </div>
                              ) : (
                                <div className="space-y-1">
                                  <span className="block text-xs font-semibold text-slate-700">Drag & drop your PDF file here</span>
                                  <span className="block text-[10px] text-[#0052cc] hover:underline font-bold">or click to browse from device</span>
                                </div>
                              )}
                            </label>
                          </div>
                        </div>

                        {/* Progress Bar */}
                        {uploadProgress > 0 && (
                          <div className="space-y-1">
                            <div className="flex justify-between text-[10px] font-bold text-slate-500">
                              <span>Upload Status: {uploadProgress}%</span>
                              <span>{uploadProgress === 100 ? 'File verified' : 'Processing...'}</span>
                            </div>
                            <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                              <div className="bg-[#0052cc] h-full transition-all duration-300" style={{ width: `${uploadProgress}%` }} />
                            </div>
                          </div>
                        )}

                        <button
                          type="submit"
                          id="paper-submission-submit-btn"
                          disabled={!uploadedFile || uploadProgress < 100}
                          className={`w-full py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider shadow-md transition-colors flex items-center justify-center gap-1.5 cursor-pointer ${
                            uploadedFile && uploadProgress === 100
                              ? 'bg-[#0052cc] hover:bg-[#0040a3] text-white'
                              : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                          }`}
                        >
                          <FileCheck className="w-4 h-4" />
                          Submit Scientific Manuscript
                        </button>

                      </form>
                    </div>

                  </div>
                )}
              </div>
            )}

            {/* IMPORTANT DATES PAGE */}
            {tab === 'Important Dates' && (
              <div id="dates-section-view" className="space-y-8">
                <p className="text-sm text-slate-500 max-w-3xl">
                  Keep track of the official milestones. Submissions or payments completed after these defined schedules will fail to qualify for standard presentation schedules.
                </p>

                {/* Vertical Timeline */}
                <div className="relative max-w-2xl mx-auto pl-6 border-l-2 border-slate-200 space-y-8 py-4">
                  {IMPORTANT_DATES_DATA.map((milestone) => {
                    const isUpcoming = milestone.status === 'upcoming';
                    const isPassed = milestone.status === 'passed';
                    const isActive = milestone.status === 'active';
                    
                    return (
                      <div key={milestone.event} className="relative">
                        {/* Bullet node */}
                        <div className={`absolute -left-[31px] top-0 w-4 h-4 rounded-full border-2 bg-white flex items-center justify-center ${
                          isPassed 
                            ? 'border-slate-300' 
                            : isActive 
                              ? 'border-[#00e676]' 
                              : 'border-[#0052cc] animate-pulse'
                        }`}>
                          <div className={`w-1.5 h-1.5 rounded-full ${
                            isPassed 
                              ? 'bg-slate-300' 
                              : isActive 
                                ? 'bg-[#00e676]' 
                                : 'bg-[#0052cc]'
                          }`} />
                        </div>

                        {/* Card body */}
                        <div className={`p-4 rounded-xl border ${
                          isActive 
                            ? 'bg-[#00e676]/5 border-[#00e676]/30 shadow-md ring-1 ring-[#00e676]/10' 
                            : milestone.highlight
                              ? 'bg-indigo-50/20 border-indigo-100 shadow-sm'
                              : 'bg-white border-slate-100'
                        }`}>
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <span className="text-sm font-bold text-slate-900 font-display">
                              {milestone.event}
                            </span>
                            
                            <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full border ${
                              isPassed 
                                ? 'bg-slate-150 text-slate-400 border-slate-200' 
                                : isActive 
                                  ? 'bg-[#00e676]/10 text-emerald-700 border-[#00e676]/20' 
                                  : 'bg-blue-50 text-[#0052cc] border-blue-100'
                            }`}>
                              {milestone.status}
                            </span>
                          </div>

                          <p className={`text-xs font-bold mt-1.5 ${
                            isActive ? 'text-[#00c853]' : milestone.highlight ? 'text-[#0052cc]' : 'text-slate-500'
                          }`}>
                            {milestone.date}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* AWARDS PAGE */}
            {tab === 'Awards' && (
              <div id="awards-section-view" className="space-y-8">
                <p className="text-sm text-slate-500 max-w-2xl leading-relaxed">
                  NCMSAIDSI–2026 is excited to recognize academic excellence among scholars and researchers. Outstanding scientific work presented in the technical segments will qualify for the following evaluations:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Award card 1 */}
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100/40 border border-amber-200 space-y-4">
                    <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center text-white shadow-md">
                      <Award className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold text-slate-900 font-display">Best Paper Award</h3>
                      <p className="text-xs text-amber-800 font-semibold uppercase tracking-wider">Open to All Presenters</p>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Given to the best original full paper describing novel mathematical methods or experimental designs. Determined by a special evaluation board from the advisory committee.
                    </p>
                    <div className="pt-3 border-t border-amber-200 text-xs text-amber-900 font-semibold flex items-center justify-between">
                      <span>Award Cash Prize: $ 300</span>
                      <span>Certificate + Springer Book voucher</span>
                    </div>
                  </div>

                  {/* Award card 2 */}
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-indigo-100/40 border border-indigo-200 space-y-4">
                    <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-md">
                      <Award className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold text-slate-900 font-display">Best Student Presentation</h3>
                      <p className="text-xs text-indigo-800 font-semibold uppercase tracking-wider">Undergraduate / Postgraduate / PhD Scholars</p>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Aimed at recognizing promising young research students. Awarded based on clarity of vocal presentation, visual slides, and defense during the active Q&A technical sessions.
                    </p>
                    <div className="pt-3 border-t border-indigo-200 text-xs text-indigo-900 font-semibold flex items-center justify-between">
                      <span>Award Cash Prize: $ 200</span>
                      <span>Certificate + Academic Book Hampers</span>
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* DOWNLOADS PAGE */}
            {tab === 'Downloads' && (
              <div id="downloads-section-view" className="space-y-6">
                <p className="text-sm text-slate-500 max-w-2xl">
                  Quickly access scientific resources, offline circulars, templates, and registration instructions in PDF/MS-Word formats.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { label: "Springer Physics - LaTeX Template", ext: "ZIP / LaTeX", size: "3.2 MB" },
                    { label: "Springer Physics - MS Word Template", ext: "DOCX", size: "1.4 MB" },
                    { label: "NCMSAIDSI–2026 - Official Call for Papers Brochure", ext: "PDF", size: "850 KB" },
                    { label: "NCMSAIDSI–2026 - Registration Circular & Fee Structures", ext: "PDF", size: "420 KB" },
                    { label: "NCMSAIDSI–2024 - Scientific Proceedings Volume Index", ext: "PDF", size: "1.2 MB" },
                    { label: "Sikkim Travel & Local Accommodation Guide", ext: "PDF", size: "2.1 MB" }
                  ].map((doc) => (
                    <div 
                      key={doc.label} 
                      className="bg-slate-50/50 hover:bg-slate-50 border border-slate-150 p-4 rounded-xl flex items-center justify-between transition-colors hover:border-slate-200"
                    >
                      <div className="space-y-1 text-left">
                        <span className="block font-semibold text-slate-900 text-xs sm:text-sm">{doc.label}</span>
                        <span className="block text-[11px] text-slate-400 uppercase font-mono">{doc.ext} • {doc.size}</span>
                      </div>
                      <button 
                        id={`file-download-btn-${doc.label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                        className="p-2.5 rounded-lg bg-[#0052cc] hover:bg-[#0040a3] text-white transition-colors cursor-pointer"
                        aria-label={`Download ${doc.label}`}
                      >
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CONTACT US PAGE */}
            {tab === 'Contact Us' && (
              <div id="contact-section-view" className="space-y-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Address info and emails */}
                  <div className="lg:col-span-6 space-y-6">
                    <div className="space-y-4 text-left">
                      <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
                        Organizing Headquarters
                      </h3>
                      
                      <div className="space-y-4">
                        <div className="flex gap-3">
                          <div className="p-2.5 rounded-lg bg-blue-50 text-[#0052cc] flex-shrink-0">
                            <MapPin className="w-5 h-5" />
                          </div>
                          <div className="space-y-1">
                            <span className="block text-xs font-bold text-slate-700 uppercase">Venue Address</span>
                            <p className="text-xs sm:text-sm text-slate-600 leading-normal">
                              Department of Mathematics & Dept. of CSE,<br />
                              Sikkim Manipal Institute of Technology (SMIT),<br />
                              Majitar, Rangpo, East Sikkim, 737136, India
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <div className="p-2.5 rounded-lg bg-pink-50 text-pink-600 flex-shrink-0">
                            <Mail className="w-5 h-5" />
                          </div>
                          <div className="space-y-1">
                            <span className="block text-xs font-bold text-slate-700 uppercase">Direct Correspondences</span>
                            <div className="space-y-1 text-xs">
                              <p className="text-slate-600"><strong>Asit Saha:</strong> <a href="mailto:asitsaha125@gmail.com" className="text-[#0052cc] hover:underline">asitsaha125@gmail.com</a></p>
                              <p className="text-slate-600"><strong>Santo Banerjee:</strong> <a href="mailto:santoban@gmail.com" className="text-[#0052cc] hover:underline">santoban@gmail.com</a></p>
                              <p className="text-slate-600"><strong>Office Helpdesk:</strong> <span className="text-slate-700 font-medium">+91 3592 246220 Ext. 273</span></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-900 text-white p-5 rounded-2xl flex items-center justify-between">
                      <div className="space-y-1">
                        <span className="block text-[11px] text-amber-400 font-bold uppercase tracking-wider">Himalayan Hospitality</span>
                        <h4 className="text-sm font-bold">Traveling to Sikkim</h4>
                        <p className="text-[11px] text-slate-300">Bagdogra Airport (IXB) and New Jalpaiguri Railway Station (NJP) are the primary entry hubs, 3 hours drive to SMIT.</p>
                      </div>
                    </div>
                  </div>

                  {/* Direct message Form */}
                  <div className="lg:col-span-6 bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-6">
                    {contactSent ? (
                      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center space-y-3">
                        <div className="w-10 h-10 bg-[#00e676]/20 rounded-full flex items-center justify-center text-[#00c853] mx-auto">
                          <CheckCircle2 className="w-5 h-5" />
                        </div>
                        <h4 className="font-bold text-slate-900 text-sm">Message Sent Successfully!</h4>
                        <p className="text-xs text-slate-500">Thank you for your inquiry. The organizing secretaria helpdesk will reach you soon.</p>
                        <button 
                          onClick={() => {
                            setContactSent(false);
                            setContactName('');
                            setContactEmail('');
                            setContactMsg('');
                          }}
                          className="px-4 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold rounded cursor-pointer"
                        >
                          Write Another Inquiry
                        </button>
                      </div>
                    ) : (
                      <form id="contact-message-form" onSubmit={handleContactSubmit} className="space-y-4">
                        <div className="space-y-1 text-left">
                          <h4 className="font-bold text-slate-900 text-sm">Direct Helpdesk Inquiry</h4>
                          <p className="text-xs text-slate-400">Post queries regarding registration payment issues or travel requests.</p>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Your Name</label>
                          <input 
                            type="text"
                            required
                            value={contactName}
                            onChange={(e) => setContactName(e.target.value)}
                            className="w-full px-3 py-2 rounded-lg bg-white border border-slate-250 text-slate-800 outline-none text-xs sm:text-sm font-medium focus:border-[#0052cc]"
                            placeholder="John Doe"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Your Email</label>
                          <input 
                            type="email"
                            required
                            value={contactEmail}
                            onChange={(e) => setContactEmail(e.target.value)}
                            className="w-full px-3 py-2 rounded-lg bg-white border border-slate-250 text-slate-800 outline-none text-xs sm:text-sm font-medium focus:border-[#0052cc]"
                            placeholder="john@example.com"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-600 uppercase mb-1">How can we help you?</label>
                          <textarea 
                            rows={3}
                            required
                            value={contactMsg}
                            onChange={(e) => setContactMsg(e.target.value)}
                            className="w-full px-3 py-2 rounded-lg bg-white border border-slate-250 text-slate-800 outline-none text-xs sm:text-sm font-medium focus:border-[#0052cc] resize-none"
                            placeholder="Type details of your question here..."
                          />
                        </div>

                        <button 
                          type="submit"
                          id="submit-contact-form-btn"
                          className="w-full py-2 bg-[#0052cc] hover:bg-[#0040a3] text-white text-xs font-bold rounded-lg uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-1"
                        >
                          Send Helpdesk Message
                        </button>
                      </form>
                    )}
                  </div>

                </div>
              </div>
            )}

          </div>

        </div>

        {/* Back to Home CTA on bottom */}
        <div className="mt-8 text-center">
          <button
            id="footer-back-to-home-btn"
            onClick={onBackToHome}
            className="px-6 py-2.5 bg-slate-900 hover:bg-slate-850 text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-md"
          >
            Back to Homepage
          </button>
        </div>

      </div>
    </div>
  );
}
