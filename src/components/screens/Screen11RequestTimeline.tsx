import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { TIMELINE_EVENTS } from '../../data/mockData';

interface Props {
  refNo?: string;
  onNext: () => void;
}

export const Screen11RequestTimeline: React.FC<Props> = ({
  refNo = 'GV-00102',
  onNext,
}) => {
  return (
    <div className="w-full h-full min-h-[580px] bg-[#fbfbfe] text-slate-900 p-6 md:p-10 flex flex-col justify-between rounded-2xl relative select-none">
      {/* Top Header */}
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <div className="text-xs font-mono text-slate-400 font-medium">
            Request ID: <span className="font-semibold text-slate-700">{refNo}</span>
          </div>
          <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
            Request Journey
          </h2>
        </div>

        <div className="font-handwriting text-2xl md:text-3xl text-indigo-950 font-bold max-w-xs text-right leading-tight hidden sm:block">
          Tracked across departments, in real time.
        </div>
      </div>

      {/* Main Timeline Card */}
      <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 shadow-sm max-w-xl mx-auto w-full my-auto space-y-4">
        {TIMELINE_EVENTS.map((event, index) => (
          <div
            key={index}
            className="flex items-center justify-between text-xs hover:bg-slate-50/60 p-1.5 rounded-lg transition-colors"
          >
            <div className="flex items-center space-x-3.5">
              <span className="font-mono text-slate-400 text-[11px] font-semibold w-11">
                {event.time}
              </span>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-xs shadow-emerald-500/50" />
              <span className="font-bold text-slate-800 text-xs md:text-sm">
                {event.title}
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px]">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Navigation */}
      <div className="flex items-center justify-between border-t border-slate-200/80 pt-4">
        <span className="text-[11px] text-slate-400 font-mono">
          Immutable Cryptographic Log • Blockchain Anchored
        </span>

        <button
          onClick={onNext}
          className="bg-[#0b1226] text-white px-7 py-2.5 rounded-full text-xs font-bold hover:bg-slate-800 shadow-md shadow-slate-900/10 flex items-center space-x-2 transition-all hover:scale-105 active:scale-95"
        >
          <span>View History</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
