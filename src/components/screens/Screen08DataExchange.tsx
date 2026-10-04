import React, { useState, useEffect } from 'react';
import { ArrowRight, Settings, Check } from 'lucide-react';

interface Props {
  onNext: () => void;
}

export const Screen08DataExchange: React.FC<Props> = ({ onNext }) => {
  const [activeStep, setActiveStep] = useState<number>(2); // 0: Request, 1: Standardize, 2: Exchange, 3: Return

  useEffect(() => {
    const cycle = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 1800);
    return () => clearInterval(cycle);
  }, []);

  return (
    <div className="w-full h-full min-h-[580px] bg-[#fbfbfe] text-slate-900 p-6 md:p-10 flex flex-col justify-between rounded-2xl relative select-none">
      {/* Header */}
      <div className="space-y-1">
        <div className="flex items-center space-x-2">
          <Settings className="w-4 h-4 text-slate-700 animate-[spin_8s_linear_infinite]" />
          <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
            Data Exchange
          </h2>
        </div>
        <p className="text-xs text-slate-500 font-medium">
          Government systems communicating through the interoperability layer.
        </p>
      </div>

      {/* Main Interactive Diagram */}
      <div className="my-auto py-6 flex flex-col md:flex-row items-center justify-between gap-6 px-4 md:px-8 relative">
        {/* Left Column: 3 Department Source Systems */}
        <div className="space-y-3.5 w-full md:w-56 shrink-0">
          <div className="bg-white border border-slate-200/90 p-3.5 rounded-xl shadow-sm flex items-center justify-between hover:border-blue-400 transition-all">
            <div className="flex items-center space-x-2.5">
              <span className="text-base">👤</span>
              <span className="text-xs font-bold text-slate-800">Identity Dept</span>
            </div>
            <div className="flex items-center space-x-1 text-emerald-600 font-mono text-[11px] font-bold">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
              <span>4m</span>
            </div>
          </div>

          <div className="bg-white border border-slate-200/90 p-3.5 rounded-xl shadow-sm flex items-center justify-between hover:border-blue-400 transition-all">
            <div className="flex items-center space-x-2.5">
              <span className="text-base">💰</span>
              <span className="text-xs font-bold text-slate-800">Income Dept</span>
            </div>
            <div className="flex items-center space-x-1 text-emerald-600 font-mono text-[11px] font-bold">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
              <span>4m</span>
            </div>
          </div>

          <div className="bg-white border border-slate-200/90 p-3.5 rounded-xl shadow-sm flex items-center justify-between hover:border-blue-400 transition-all">
            <div className="flex items-center space-x-2.5">
              <span className="text-base">🏢</span>
              <span className="text-xs font-bold text-slate-800">Revenue Dept</span>
            </div>
            <div className="flex items-center space-x-1 text-emerald-600 font-mono text-[11px] font-bold">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
              <span>4m</span>
            </div>
          </div>
        </div>

        {/* Center: Interoperability Mesh Pipeline with Data Stream */}
        <div className="flex-1 w-full flex flex-col items-center justify-center relative py-6">
          <svg className="w-full h-32 hidden md:block" viewBox="0 0 300 120" preserveAspectRatio="none">
            {/* Top department curve */}
            <path
              d="M 10 20 C 120 20, 160 60, 290 60"
              fill="none"
              stroke="#cbd5e1"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            {/* Middle department line */}
            <path
              d="M 10 60 L 290 60"
              fill="none"
              stroke="#60a5fa"
              strokeWidth="2.5"
              strokeDasharray="5 5"
            />
            {/* Bottom department curve */}
            <path
              d="M 10 100 C 120 100, 160 60, 290 60"
              fill="none"
              stroke="#cbd5e1"
              strokeWidth="2"
              strokeDasharray="4 4"
            />

            {/* Moving encrypted packet pulses */}
            <circle cx="150" cy="60" r="4.5" fill="#2563eb">
              <animate attributeName="cx" from="10" to="290" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0;1;1;0" dur="2s" repeatCount="indefinite" />
            </circle>
          </svg>

          {/* Interoperability Tunnel Label */}
          <div className="mt-1 flex flex-col items-center bg-blue-50/90 border border-blue-200 px-4 py-1.5 rounded-full shadow-sm">
            <span className="text-[10px] text-blue-700 font-mono font-bold uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping"></span>
              <span>Interoperability Tunnel</span>
            </span>
          </div>
        </div>

        {/* Right Column: Response Destination Card */}
        <div className="w-full md:w-48 bg-white border-2 border-blue-200/80 p-5 rounded-2xl shadow-md text-center space-y-1.5 shrink-0">
          <div className="text-xs font-black text-slate-900 uppercase tracking-wider">
            Response
          </div>
          <div className="text-xs text-blue-600 font-bold flex items-center justify-center gap-1">
            <span>→ To Agents</span>
          </div>
          <div className="text-[10px] text-slate-400 font-mono mt-1 pt-1 border-t border-slate-100">
            TLS 1.3 • AES-256
          </div>
        </div>
      </div>

      {/* Bottom Step Flow Pills & Navigation */}
      <div className="flex flex-col md:flex-row items-center justify-between border-t border-slate-200 pt-4 gap-4">
        {/* Workflow Pills */}
        <div className="flex items-center space-x-1.5 sm:space-x-2 text-xs font-bold">
          <button
            onClick={() => setActiveStep(0)}
            className={`px-3.5 py-1.5 rounded-full transition-all ${
              activeStep === 0
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-slate-900 text-white'
            }`}
          >
            Request
          </button>
          <span className="text-slate-400 text-xs">→</span>

          <button
            onClick={() => setActiveStep(1)}
            className={`px-3.5 py-1.5 rounded-full transition-all ${
              activeStep === 1
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-slate-900 text-white'
            }`}
          >
            Standardize
          </button>
          <span className="text-slate-400 text-xs">→</span>

          <button
            onClick={() => setActiveStep(2)}
            className={`px-3.5 py-1.5 rounded-full transition-all ${
              activeStep === 2
                ? 'bg-blue-600 text-white shadow-sm ring-2 ring-blue-300'
                : 'bg-slate-900 text-white'
            }`}
          >
            Exchange
          </button>
          <span className="text-slate-400 text-xs">→</span>

          <button
            onClick={() => setActiveStep(3)}
            className={`px-3.5 py-1.5 rounded-full transition-all ${
              activeStep === 3
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-slate-900 text-white'
            }`}
          >
            Return
          </button>
        </div>

        {/* Next Button */}
        <button
          onClick={onNext}
          className="bg-[#0b1226] text-white px-7 py-2.5 rounded-full text-xs font-bold hover:bg-slate-800 shadow-md shadow-slate-900/10 flex items-center space-x-2 transition-all hover:scale-105 active:scale-95"
        >
          <span>Next</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
