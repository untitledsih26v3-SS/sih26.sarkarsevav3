import React from 'react';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import { ServiceItem } from '../../types';

interface Props {
  service: ServiceItem;
  onContinue: () => void;
  onBack: () => void;
}

export const Screen04StartRequest: React.FC<Props> = ({ service, onContinue, onBack }) => {
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
          Step 1 of 3: Intent Identification
        </span>
      </div>

      {/* Main Body */}
      <div className="max-w-xl mx-auto space-y-7 w-full text-center my-auto">
        <div className="space-y-1">
          <div className="font-handwriting text-3xl md:text-4xl font-bold text-indigo-950 flex items-center justify-center gap-2">
            <span>We understood your request!</span>
            <span className="text-amber-500 text-2xl animate-spin">✦</span>
          </div>
          <p className="text-xs text-slate-500">
            Our multi-agent intent engine automatically extracted the required public registries.
          </p>
        </div>

        {/* Selected Service Card */}
        <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm text-left flex items-center space-x-4 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl shadow-inner shrink-0">
            {service.icon}
          </div>
          <div>
            <div className="text-base font-bold text-slate-900">
              {service.name} Eligibility
            </div>
            <div className="text-xs text-slate-500 font-medium mt-0.5">
              {service.description}
            </div>
          </div>
        </div>

        {/* Involved Systems Section */}
        <div className="space-y-3 text-left">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Systems that will be involved
            </span>
            <span className="text-[10px] text-blue-600 font-semibold bg-blue-50 px-2 py-0.5 rounded-full">
              Automated Interoperability
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {service.departments.map((dept, index) => {
              const icons = ['👤', '📄', '🏛️', '🎓'];
              const borders = ['border-blue-100', 'border-indigo-100', 'border-amber-100'];
              return (
                <div
                  key={dept}
                  className={`bg-white border ${borders[index % borders.length]} p-3.5 rounded-xl flex items-center space-x-3 shadow-sm hover:scale-[1.02] transition-transform`}
                >
                  <span className="text-xl">{icons[index % icons.length]}</span>
                  <div>
                    <div className="text-xs font-bold text-slate-800 leading-tight">
                      {dept}
                    </div>
                    <div className="text-[9px] text-emerald-600 font-semibold mt-0.5 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      <span>Connected</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="flex items-center justify-between border-t border-slate-100 pt-4">
        <div className="flex items-center gap-1.5 text-xs text-slate-400">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>Cross-departmental query mapped with zero manual data re-entry</span>
        </div>

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
