import React from 'react';
import { ArrowRight, CheckCircle2, Download, Award, Sparkles } from 'lucide-react';
import { ServiceItem } from '../../types';

interface Props {
  service: ServiceItem;
  refNo?: string;
  timestamp?: string;
  onContinue: () => void;
  onViewCertificate?: () => void;
}

export const Screen10FinalResult: React.FC<Props> = ({
  service,
  refNo = 'GV-00102',
  timestamp = '09:43 AM • 12 Sep 2026',
  onContinue,
  onViewCertificate,
}) => {
  return (
    <div className="w-full h-full min-h-[580px] bg-[#fbfbfe] text-slate-900 p-6 md:p-10 flex flex-col justify-between rounded-2xl relative select-none text-center">
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <div className="font-handwriting text-3xl md:text-4xl text-indigo-950 font-bold flex items-center gap-1.5">
          <span>All systems in sync!</span>
          <span className="text-amber-500 text-2xl font-serif">✦</span>
        </div>
        <div className="text-xs font-mono text-slate-500 font-semibold flex items-center gap-1.5 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          <span>Result Ready</span>
        </div>
      </div>

      {/* Center Result Card */}
      <div className="max-w-lg mx-auto space-y-5 my-auto py-2">
        {/* Service Icon */}
        <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 text-3xl flex items-center justify-center mx-auto shadow-sm border border-blue-100">
          {service.icon}
        </div>

        {/* Title and Verdict */}
        <div className="space-y-3">
          <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
            {service.name} Eligibility
          </h2>

          <div>
            <div className="inline-block bg-emerald-600 text-white font-extrabold px-8 py-2 rounded-full text-sm md:text-base tracking-widest shadow-md shadow-emerald-600/20 transform hover:scale-105 transition-transform">
              ELIGIBLE
            </div>
          </div>

          <p className="text-xs text-slate-500 font-medium">
            Based on verified information from 3 government systems.
          </p>
        </div>

        {/* 3 Verification Badges */}
        <div className="grid grid-cols-3 gap-2.5">
          <div className="bg-white border border-slate-200/90 p-2.5 rounded-xl shadow-xs flex flex-col items-center justify-center space-y-1">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span className="text-[11px] font-bold text-slate-700">Identity Verified</span>
            <span className="text-[9px] text-slate-400 font-mono">UIDAI 2026</span>
          </div>

          <div className="bg-white border border-slate-200/90 p-2.5 rounded-xl shadow-xs flex flex-col items-center justify-center space-y-1">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span className="text-[11px] font-bold text-slate-700">Income Verified</span>
            <span className="text-[9px] text-slate-400 font-mono">CBDT Cleared</span>
          </div>

          <div className="bg-white border border-slate-200/90 p-2.5 rounded-xl shadow-xs flex flex-col items-center justify-center space-y-1">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span className="text-[11px] font-bold text-slate-700">Property Verified</span>
            <span className="text-[9px] text-slate-400 font-mono">Registry Match</span>
          </div>
        </div>

        {/* Audit Details */}
        <div className="flex items-center justify-between text-xs text-slate-500 border-t border-slate-200/80 pt-3.5 font-mono">
          <span>Request ID: <strong className="text-slate-800">{refNo}</strong></span>
          <span>Completed: <strong className="text-slate-800">{timestamp}</strong></span>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
        <button
          onClick={onContinue}
          className="bg-[#0b1226] text-white px-8 py-3 rounded-full text-xs font-bold hover:bg-slate-800 shadow-md shadow-slate-900/10 flex items-center space-x-2 transition-all hover:scale-105 active:scale-95"
        >
          <span>Continue to application</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        {onViewCertificate && (
          <button
            onClick={onViewCertificate}
            className="text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 px-5 py-3 rounded-full text-xs font-semibold flex items-center space-x-2 shadow-xs transition-colors"
          >
            <Award className="w-4 h-4 text-blue-600" />
            <span>View Digital Certificate</span>
          </button>
        )}
      </div>
    </div>
  );
};
