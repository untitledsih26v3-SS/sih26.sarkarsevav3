import React from 'react';
import { ArrowRight, Check, CheckCheck, ShieldCheck } from 'lucide-react';

interface Props {
  onShowVerdict: () => void;
}

export const Screen09Validation: React.FC<Props> = ({ onShowVerdict }) => {
  return (
    <div className="w-full h-full min-h-[580px] bg-[#fbfbfe] text-slate-900 p-6 md:p-10 flex flex-col justify-between rounded-2xl relative select-none">
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
            Validating Information
          </h2>
          <p className="text-xs text-slate-500 font-medium">
            Cross-checking data across departments.
          </p>
        </div>
        <div className="w-8 h-8 rounded-xl border border-slate-200 bg-white flex items-center justify-center text-slate-600 shadow-sm">
          <ShieldCheck className="w-4 h-4 text-blue-600" />
        </div>
      </div>

      {/* Main Validation Matrix (2 Columns) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-auto py-4">
        {/* Left Column: Department Verification Records */}
        <div className="space-y-3">
          {/* Identity Match Card */}
          <div className="bg-white border border-slate-100 p-3.5 rounded-xl flex items-center justify-between shadow-sm hover:border-emerald-200 transition-all">
            <div className="flex items-center space-x-3.5">
              <span className="text-xl">👤</span>
              <div>
                <div className="text-xs font-bold text-slate-800">Identity</div>
                <div className="text-[11px] text-slate-500 font-medium">Match found</div>
              </div>
            </div>
            <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shadow-xs">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
            </div>
          </div>

          {/* Income Record Card */}
          <div className="bg-white border border-slate-100 p-3.5 rounded-xl flex items-center justify-between shadow-sm hover:border-emerald-200 transition-all">
            <div className="flex items-center space-x-3.5">
              <span className="text-xl">📄</span>
              <div>
                <div className="text-xs font-bold text-slate-800">Income</div>
                <div className="text-[11px] text-slate-500 font-medium">Record verified</div>
              </div>
            </div>
            <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shadow-xs">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
            </div>
          </div>

          {/* Property Record Card */}
          <div className="bg-white border border-slate-100 p-3.5 rounded-xl flex items-center justify-between shadow-sm hover:border-emerald-200 transition-all">
            <div className="flex items-center space-x-3.5">
              <span className="text-xl">🏢</span>
              <div>
                <div className="text-xs font-bold text-slate-800">Property</div>
                <div className="text-[11px] text-slate-500 font-medium">Details verified</div>
              </div>
            </div>
            <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shadow-xs">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
            </div>
          </div>

          {/* Verified Count Pill */}
          <div className="inline-flex items-center space-x-2 bg-emerald-100/90 text-emerald-800 px-4 py-1.5 rounded-full text-xs font-extrabold border border-emerald-200/80 shadow-xs">
            <CheckCheck className="w-4 h-4 stroke-[2.5]" />
            <span>4 / 4 verified</span>
          </div>
        </div>

        {/* Right Column: Consistency Check Card & Handwriting Annotation */}
        <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm flex flex-col justify-between">
          <div className="space-y-3">
            <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              Consistency Check
            </div>
            <div className="space-y-2 text-xs text-slate-600 font-medium">
              <div className="flex items-center space-x-2.5">
                <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>Identity matches across Aadhaar & Voter registries</span>
              </div>

              <div className="flex items-center space-x-2.5">
                <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>Income record valid and below subsidy threshold</span>
              </div>

              <div className="flex items-center space-x-2.5">
                <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>Property record found (no prior sanctioned pucca unit)</span>
              </div>

              <div className="flex items-center space-x-2.5">
                <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>Required information complete & cryptographically sealed</span>
              </div>
            </div>
          </div>

          {/* Handwritten Annotation */}
          <div className="pt-5 border-t border-slate-100">
            <div className="font-handwriting text-2xl md:text-3xl text-indigo-950 font-bold tracking-wide">
              No duplicate submission required.
            </div>
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="flex items-center justify-between border-t border-slate-200/80 pt-4">
        <span className="text-[11px] text-slate-400 font-mono">
          Adjudication status: Verified All Invariants
        </span>

        <button
          onClick={onShowVerdict}
          className="bg-[#0b1226] text-white px-7 py-2.5 rounded-full text-xs font-bold hover:bg-slate-800 shadow-md shadow-slate-900/10 flex items-center space-x-2 transition-all hover:scale-105 active:scale-95"
        >
          <span>Show Verdict</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
