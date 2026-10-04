import React, { useState } from 'react';
import { Check, Shield, ArrowRight } from 'lucide-react';

interface Props {
  onAllow: () => void;
  onCancel: () => void;
}

export const Screen06Consent: React.FC<Props> = ({ onAllow, onCancel }) => {
  const [consents, setConsents] = useState({
    identity: true,
    income: true,
    property: true,
  });

  const toggleConsent = (key: keyof typeof consents) => {
    setConsents((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const allConsented = consents.identity && consents.income && consents.property;

  return (
    <div className="w-full h-full min-h-[580px] bg-[#fbfbfe] text-slate-900 p-6 md:p-10 flex flex-col md:flex-row gap-6 md:gap-8 rounded-2xl relative select-none">
      {/* Left Column: Consent Checklist */}
      <div className="w-full md:w-7/12 flex flex-col justify-between space-y-5">
        <div className="space-y-1.5">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
              Granular Consent
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
            You're in control
          </h2>
          <p className="text-xs text-slate-500 font-medium leading-relaxed">
            Sarkar Seva wants to access your data from the following government systems to process your request.
          </p>
        </div>

        {/* 3 Department Consent Cards */}
        <div className="space-y-3">
          {/* Item 1: Identity */}
          <div
            onClick={() => toggleConsent('identity')}
            className="bg-white border border-slate-100 p-3.5 rounded-2xl flex items-center justify-between shadow-sm cursor-pointer hover:border-emerald-200 transition-all group"
          >
            <div className="flex items-center space-x-3.5">
              <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-sm shadow-inner">
                🛡️
              </div>
              <div>
                <div className="text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                  Identity Department
                </div>
                <div className="text-[11px] text-slate-500 font-medium">
                  Details: Name, Aadhaar, Profile
                </div>
              </div>
            </div>
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                consents.identity
                  ? 'bg-emerald-500 text-white shadow-sm'
                  : 'border-2 border-slate-300 bg-slate-50'
              }`}
            >
              {consents.identity && <Check className="w-3.5 h-3.5 stroke-[3]" />}
            </div>
          </div>

          {/* Item 2: Income */}
          <div
            onClick={() => toggleConsent('income')}
            className="bg-white border border-slate-100 p-3.5 rounded-2xl flex items-center justify-between shadow-sm cursor-pointer hover:border-emerald-200 transition-all group"
          >
            <div className="flex items-center space-x-3.5">
              <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-sm shadow-inner">
                📄
              </div>
              <div>
                <div className="text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                  Income Department
                </div>
                <div className="text-[11px] text-slate-500 font-medium">
                  Details: Income, Tax details
                </div>
              </div>
            </div>
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                consents.income
                  ? 'bg-emerald-500 text-white shadow-sm'
                  : 'border-2 border-slate-300 bg-slate-50'
              }`}
            >
              {consents.income && <Check className="w-3.5 h-3.5 stroke-[3]" />}
            </div>
          </div>

          {/* Item 3: Property */}
          <div
            onClick={() => toggleConsent('property')}
            className="bg-white border border-slate-100 p-3.5 rounded-2xl flex items-center justify-between shadow-sm cursor-pointer hover:border-emerald-200 transition-all group"
          >
            <div className="flex items-center space-x-3.5">
              <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center text-sm shadow-inner">
                🏠
              </div>
              <div>
                <div className="text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                  Property Department
                </div>
                <div className="text-[11px] text-slate-500 font-medium">
                  Details: Property records
                </div>
              </div>
            </div>
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                consents.property
                  ? 'bg-emerald-500 text-white shadow-sm'
                  : 'border-2 border-slate-300 bg-slate-50'
              }`}
            >
              {consents.property && <Check className="w-3.5 h-3.5 stroke-[3]" />}
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="text-[11px] text-slate-400 font-medium leading-relaxed">
          Your data is accessed securely and only for this request. You can revoke access anytime.
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4 pt-2">
          <button
            onClick={onAllow}
            disabled={!allConsented}
            className={`px-7 py-3 rounded-full text-xs font-bold flex items-center space-x-2 shadow-lg transition-all ${
              allConsented
                ? 'bg-[#0b1226] text-white hover:bg-slate-800 shadow-slate-900/10 hover:scale-105 active:scale-95'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            <span>Allow access</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={onCancel}
            className="text-slate-600 px-4 py-3 text-xs font-semibold hover:text-slate-900 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>

      {/* Right Column: Visual Graphic Banner with Handwriting */}
      <div className="w-full md:w-5/12 bg-gradient-to-tr from-slate-100 via-indigo-50/70 to-blue-50/50 rounded-2xl p-8 flex flex-col items-center justify-center text-center space-y-6 relative overflow-hidden border border-slate-100">
        <div className="w-20 h-20 rounded-2xl bg-white shadow-lg shadow-indigo-500/10 flex items-center justify-center text-4xl border border-blue-50">
          <Shield className="w-10 h-10 text-blue-600 stroke-[1.75]" />
        </div>

        <div className="space-y-1">
          <div className="font-handwriting text-3xl md:text-4xl font-bold text-indigo-950 leading-tight">
            Your data.<br />
            Your control.<br />
            Our responsibility.
          </div>
        </div>

        <div className="text-[10px] text-slate-400 uppercase tracking-widest font-mono">
          MeitY Certified Data Vault
        </div>
      </div>
    </div>
  );
};
