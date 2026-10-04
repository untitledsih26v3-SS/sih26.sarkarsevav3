import React from 'react';
import { UserRole, AppMode } from '../types';
import {
  Users,
  Shield,
  Server,
  Sparkles,
  Layers,
  Building,
  CheckCircle2,
} from 'lucide-react';

interface Props {
  currentRole: UserRole;
  onChangeRole: (role: UserRole) => void;
  appMode: AppMode;
  onToggleMode: (mode: AppMode) => void;
  onOpenArchitecture: () => void;
}

export const HeaderNav: React.FC<Props> = ({
  currentRole,
  onChangeRole,
  appMode,
  onToggleMode,
  onOpenArchitecture,
}) => {
  return (
    <header className="w-full bg-[#070b1a] border-b border-slate-800/80 px-4 py-3 text-white">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Brand & State Government Identity */}
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-700 via-indigo-600 to-amber-500 flex items-center justify-center text-white font-black text-lg shadow-md shadow-blue-500/20">
            ⚡
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-base tracking-tight text-white">
                Sarkar Seva
              </span>
              <span className="text-[10px] bg-amber-500/20 text-amber-300 font-bold px-2 py-0.5 rounded-full border border-amber-500/30">
                Govt of Maharashtra
              </span>
            </div>
            <p className="text-[10px] text-slate-400 font-mono">
              PS ID: 26129 • System Integration &amp; Interoperability Middleware
            </p>
          </div>
        </div>

        {/* Center: Role Switcher (RBAC) */}
        <div className="flex items-center bg-slate-900/90 p-1 rounded-2xl border border-slate-800">
          <button
            onClick={() => {
              onChangeRole('citizen');
              onToggleMode('portal');
            }}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              currentRole === 'citizen' && appMode === 'portal'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Citizen Window</span>
          </button>

          <button
            onClick={() => {
              onChangeRole('official');
              onToggleMode('portal');
            }}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              currentRole === 'official' && appMode === 'portal'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Shield className="w-3.5 h-3.5" />
            <span>Official Desk 360</span>
          </button>

          <button
            onClick={() => {
              onChangeRole('admin');
              onToggleMode('portal');
            }}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              currentRole === 'admin' && appMode === 'portal'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Server className="w-3.5 h-3.5" />
            <span>Middleware Hub</span>
          </button>
        </div>

        {/* Right Action: Demo Showcase & Architecture */}
        <div className="flex items-center space-x-2.5">
          <button
            onClick={() => onToggleMode('demo')}
            className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              appMode === 'demo'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/25 ring-2 ring-emerald-400/40'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
            <span>12-Screen Demo Player</span>
          </button>

          <button
            onClick={onOpenArchitecture}
            className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            title="Inspect DPI Architecture"
          >
            <Layers className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
