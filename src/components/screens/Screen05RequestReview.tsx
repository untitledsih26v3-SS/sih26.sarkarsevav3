import React from 'react';
import { ArrowLeft, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { ServiceItem } from '../../types';

interface Props {
  service: ServiceItem;
  refNo?: string;
  onContinue: () => void;
  onBack: () => void;
}

export const Screen05RequestReview: React.FC<Props> = ({
  service,
  refNo = 'GV-00102',
  onContinue,
  onBack,
}) => {
  return (
    <div className="w-full h-full min-h-[580px] bg-[#fbfbfe] text-slate-900 p-6 md:p-10 flex flex-col justify-between rounded-2xl relative select-none">
      {/* Top Bar with Back Button */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="text-xs font-semibold text-slate-500 hover:text-slate-900 flex items-center space-x-1.5 transition-colors group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
          <span>Back</span>
        </button>

        <span className="text-[11px] font-mono text-slate-400 font-medium">
          Step 2 of 3: Pre-Execution Audit
        </span>
      </div>

      {/* Main Review Content */}
      <div className="max-w-2xl mx-auto space-y-5 w-full my-auto">
        <div className="space-y-1">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            Review your request
          </h2>
          <p className="text-xs text-slate-500 font-medium">
            Please check the details before we proceed.
          </p>
        </div>

        {/* Selected Request Card */}
        <div className="bg-white border border-slate-100 rounded-2xl p-4 flex items-center justify-between shadow-sm">
          <div className="flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-xl shadow-inner">
              {service.icon}
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">
                {service.name} Eligibility
              </div>
              <div className="text-[11px] text-slate-400 font-mono font-medium">
                Request Id: <span className="font-semibold text-slate-700">{refNo}</span>
              </div>
            </div>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full border border-blue-100">
            Adjudication Draft
          </span>
        </div>

        {/* Two Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Column 1: Information Required */}
          <div className="bg-white border border-slate-100 rounded-2xl p-5 space-y-3.5 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Information Required
              </span>
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex items-start space-x-3 p-2 rounded-xl bg-slate-50/70 border border-slate-100">
                <span className="text-base">👤</span>
                <div>
                  <div className="font-bold text-slate-800">Identity</div>
                  <div className="text-[10px] text-slate-500 font-medium">
                    Name, Aadhaar verification
                  </div>
                </div>
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 ml-auto shrink-0 mt-0.5" />
              </div>

              <div className="flex items-start space-x-3 p-2 rounded-xl bg-slate-50/70 border border-slate-100">
                <span className="text-base">📄</span>
                <div>
                  <div className="font-bold text-slate-800">Income</div>
                  <div className="text-[10px] text-slate-500 font-medium">
                    Annual income details & tax returns
                  </div>
                </div>
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 ml-auto shrink-0 mt-0.5" />
              </div>

              <div className="flex items-start space-x-3 p-2 rounded-xl bg-slate-50/70 border border-slate-100">
                <span className="text-base">🛡️</span>
                <div>
                  <div className="font-bold text-slate-800">Property</div>
                  <div className="text-[10px] text-slate-500 font-medium">
                    Existing property records & land registry
                  </div>
                </div>
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 ml-auto shrink-0 mt-0.5" />
              </div>
            </div>
          </div>

          {/* Column 2: Purpose */}
          <div className="bg-white border border-slate-100 rounded-2xl p-5 space-y-3 shadow-sm flex flex-col justify-between">
            <div className="space-y-2">
              <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Purpose
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                {service.purpose}
              </p>
              <div className="bg-amber-50/60 border border-amber-100/80 rounded-xl p-2.5 text-[11px] text-amber-900 leading-tight">
                🔒 Protected under Digital Personal Data Protection (DPDP) Act 2023. No data is stored beyond evaluation.
              </div>
            </div>

            <div className="text-[11px] text-slate-500 pt-3 border-t border-slate-100 flex items-center space-x-2 font-mono">
              <span>⏱</span>
              <span className="font-semibold text-slate-700">3 departments • 2 data points • 1 request</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="flex items-center justify-between border-t border-slate-100 pt-4">
        <span className="text-[11px] text-slate-400">
          Click Continue to configure citizen authorization and consent
        </span>

        <button
          onClick={onContinue}
          className="bg-[#0b1226] text-white px-7 py-2.5 rounded-full text-xs font-bold hover:bg-slate-800 shadow-md shadow-slate-900/10 flex items-center space-x-2 transition-all hover:scale-105 active:scale-95"
        >
          <span>Continue</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
