import React, { useState } from 'react';
import { Search, ChevronRight, CheckCircle2, Clock, Plus, Filter } from 'lucide-react';
import { CitizenRequest } from '../../types';

interface Props {
  requests: CitizenRequest[];
  onSelectRequest?: (req: CitizenRequest) => void;
  onNewRequest: () => void;
  onReplayDemo: () => void;
  showModalInitial?: boolean;
}

export const Screen12RequestHistory: React.FC<Props> = ({
  requests,
  onSelectRequest,
  onNewRequest,
  onReplayDemo,
  showModalInitial = false,
}) => {
  const [showModal, setShowModal] = useState(showModalInitial);
  const [searchFilter, setSearchFilter] = useState('');
  const [filterType, setFilterType] = useState<'All' | 'Completed' | 'Processing'>('All');

  const filtered = requests.filter((r) => {
    const matchesSearch =
      r.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
      r.refNo.toLowerCase().includes(searchFilter.toLowerCase());
    const matchesFilter = filterType === 'All' || r.status === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="w-full h-full min-h-[580px] bg-[#fbfbfe] text-slate-900 p-6 md:p-10 flex flex-col justify-between rounded-2xl relative select-none">
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
            Your Requests
          </h2>
          <p className="text-xs text-slate-500 font-medium">
            Track and manage all your government service requests.
          </p>
        </div>

        <div className="flex items-center space-x-2.5">
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              placeholder="Search requests..."
              className="bg-white border border-slate-200 rounded-full pl-8 pr-3 py-1.5 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 transition-colors w-32 md:w-44"
            />
          </div>

          <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold shadow-sm">
            MC
          </div>
        </div>
      </div>

      {/* Request Cards List */}
      <div className="space-y-3 max-w-2xl mx-auto w-full my-auto py-2">
        {filtered.map((req) => (
          <div
            key={req.id}
            onClick={() => onSelectRequest && onSelectRequest(req)}
            className="bg-white border border-slate-100 hover:border-blue-200 p-4 rounded-2xl shadow-sm flex items-center justify-between transition-all cursor-pointer group hover:scale-[1.01]"
          >
            <div className="flex items-center space-x-3.5">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-base shadow-inner group-hover:bg-blue-100 transition-colors">
                {req.serviceId.includes('housing')
                  ? '🏠'
                  : req.serviceId.includes('income')
                  ? '📄'
                  : req.serviceId.includes('scholarship')
                  ? '🎓'
                  : '🏡'}
              </div>
              <div>
                <div className="text-xs md:text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {req.title}
                </div>
                <div className="text-[11px] text-slate-400 font-mono font-medium mt-0.5">
                  {req.refNo} • {req.date}
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              {req.status === 'Completed' ? (
                <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>Completed</span>
                </span>
              ) : (
                <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800 flex items-center gap-1.5">
                  <Clock className="w-3 h-3 text-amber-600 animate-spin" />
                  <span>Processing</span>
                </span>
              )}

              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-slate-800 transition-colors" />
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="text-center py-8 text-xs text-slate-400">
            No matching requests found.
          </div>
        )}
      </div>

      {/* Footer Bar */}
      <div className="flex items-center justify-between border-t border-slate-200/80 pt-4">
        <div className="font-handwriting text-2xl md:text-3xl text-indigo-950 font-bold tracking-wide">
          Small steps. Big impact.
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={onNewRequest}
            className="text-xs font-semibold text-slate-600 hover:text-slate-900 px-3 py-1.5 rounded-full hover:bg-slate-100 transition-colors hidden sm:block"
          >
            + New Request
          </button>

          <button
            onClick={() => setShowModal(true)}
            className="bg-[#0b1226] text-white px-6 py-2.5 rounded-full text-xs font-bold hover:bg-slate-800 shadow-md shadow-slate-900/10 transition-all hover:scale-105 active:scale-95"
          >
            Complete Demo
          </button>
        </div>
      </div>

      {/* Replay Modal Overlay (Exact Ending from Video) */}
      {showModal && (
        <div className="absolute inset-0 bg-[#090e1c]/85 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center p-6 text-center space-y-5 z-50 animate-in fade-in zoom-in-95 duration-200">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-700 via-blue-600 to-indigo-500 text-white flex items-center justify-center text-2xl shadow-xl shadow-blue-500/25">
            ⚡
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
              That's Sarkar Seva
            </h2>
            <p className="text-xs md:text-sm text-slate-300 max-w-sm font-medium">
              One request. Multiple departments. One coordinated journey.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <button
              onClick={() => {
                setShowModal(false);
                onReplayDemo();
              }}
              className="bg-white text-slate-900 px-8 py-3 rounded-full text-xs font-black hover:bg-slate-100 shadow-xl shadow-white/20 transition-all hover:scale-105 active:scale-95"
            >
              Replay demo
            </button>

            <button
              onClick={() => setShowModal(false)}
              className="text-slate-400 hover:text-white px-4 py-2 text-xs font-medium transition-colors"
            >
              Close and Explore Portal
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
