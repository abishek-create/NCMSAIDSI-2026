import React, { useState } from 'react';
import { X, LogIn, Lock, Mail, CheckCircle, ShieldAlert, Award } from 'lucide-react';
import { motion } from 'motion/react';

interface LoginModalProps {
  onClose: () => void;
}

export default function LoginModal({ onClose }: LoginModalProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'author@panimalar.edu.in' && password === 'ncmsaidsi2026') {
      setIsLogged(true);
      setError('');
    } else {
      setError('Invalid credentials! Try using email "author@panimalar.edu.in" and password "ncmsaidsi2026" for testing.');
    }
  };

  return (
    <div 
      id="login-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
    >
      <div 
        id="login-modal-card"
        className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-md overflow-hidden relative"
      >
        {/* Header decoration */}
        <div className="bg-[#0052cc] p-6 text-white flex justify-between items-center">
          <div>
            <h3 className="font-display font-extrabold text-lg">Author & Delegate Console</h3>
            <p className="text-xs text-sky-100">Access submitted papers, registration tickets and peer reviews.</p>
          </div>
          <button 
            id="close-login-modal"
            onClick={onClose}
            className="p-1 rounded-full bg-black/15 text-white hover:bg-black/25 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form panel */}
        <div className="p-6">
          {isLogged ? (
            <div className="text-center space-y-4 py-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto">
                <CheckCircle className="w-6 h-6" />
              </div>
              
              <div className="space-y-1">
                <h4 className="font-bold text-slate-900 text-base">Welcome Back, Dr. Saha!</h4>
                <p className="text-xs text-slate-500">Log in successful. Below is your active manuscript review status:</p>
              </div>

              {/* Status card */}
              <div className="bg-slate-50 rounded-xl p-4 text-left border border-slate-100 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] bg-indigo-50 text-[#0052cc] font-bold px-2 py-0.5 rounded">ID: NCMSAIDSI–2026-104</span>
                  <span className="text-[10px] bg-amber-50 text-amber-700 font-bold px-2 py-0.5 rounded">Under Review</span>
                </div>
                <h5 className="font-bold text-xs text-slate-800">"Nonlinear Solitary Wave Propagations in Non-Maxwellian Plasmas"</h5>
                <p className="text-[10px] text-slate-400">Review Cycle 1 of 2 completed. Overall recommendation: Minor Revisions.</p>
              </div>

              <button 
                id="logged-continue-btn"
                onClick={onClose}
                className="w-full py-2 bg-slate-900 hover:bg-slate-850 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
              >
                Close Portal
              </button>
            </div>
          ) : (
            <form id="author-login-form" onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-xs text-red-600 flex gap-2">
                  <ShieldAlert className="w-4 h-4 flex-shrink-0 mt-0.5 text-red-500" />
                  <span>{error}</span>
                </div>
              )}

              <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 text-xs text-slate-600 leading-normal">
                <span><strong>Demo Credentials:</strong> Use email <code className="bg-blue-100 text-[#0052cc] px-1 rounded font-bold font-mono">author@panimalar.edu.in</code> and password <code className="bg-blue-100 text-[#0052cc] px-1 rounded font-bold font-mono">ncmsaidsi2026</code> to log in.</span>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Email Address</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input 
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 outline-none focus:border-[#0052cc] text-xs sm:text-sm"
                    placeholder="author@panimalar.edu.in"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Password</label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input 
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 outline-none focus:border-[#0052cc] text-xs sm:text-sm"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-400">
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" className="rounded text-[#0052cc]" />
                  <span>Remember me</span>
                </label>
                <span className="hover:underline cursor-pointer text-[#0052cc]">Forgot password?</span>
              </div>

              <button
                type="submit"
                id="login-submit-btn"
                className="w-full py-2.5 bg-[#00e676] hover:bg-[#00c853] text-[#0f172a] font-extrabold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-1 shadow-md cursor-pointer"
              >
                <LogIn className="w-4 h-4" />
                Sign In to Console
              </button>

            </form>
          )}
        </div>
      </div>
    </div>
  );
}
