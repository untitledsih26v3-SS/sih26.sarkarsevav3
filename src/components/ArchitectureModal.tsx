import React from 'react';
import { X, Shield, Cpu, Layers, CheckCircle2, Lock, ArrowRight, ExternalLink } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const ArchitectureModal: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="bg-[#0b1226] text-white border border-slate-800 rounded-3xl max-w-3xl w-full p-6 md:p-8 space-y-6 shadow-2xl relative my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="space-y-1 pr-10">
          <div className="flex items-center space-x-2 text-blue-400 text-xs font-mono font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Digital Public Infrastructure (DPI) • Multi-Agent Spec</span>
          </div>
          <h3 className="text-2xl font-black text-white tracking-tight">
            Sarkar Seva Architecture & Interoperability Mesh
          </h3>
          <p className="text-xs text-slate-400">
            How autonomous agents solve government silos without requiring citizen re-submissions.
          </p>
        </div>

        {/* 3 Core Architectural Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-2xl space-y-2">
            <div className="w-8 h-8 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center text-sm">
              🤖
            </div>
            <div className="text-xs font-bold text-white">1. Agent Orchestration</div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Deconstructs citizen queries into atomic departmental tasks, running parallel data agents (UIDAI, CBDT, Land Survey).
            </p>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-2xl space-y-2">
            <div className="w-8 h-8 rounded-xl bg-amber-600/20 text-amber-400 flex items-center justify-center text-sm">
              🛡️
            </div>
            <div className="text-xs font-bold text-white">2. DPDP Consent Vault</div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Enforces time-bound, purpose-restricted access tokens. No citizen credentials or unencrypted PII are ever persisted.
            </p>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-2xl space-y-2">
            <div className="w-8 h-8 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center text-sm">
              ⚡
            </div>
            <div className="text-xs font-bold text-white">3. Open Gov Interop</div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Standardized schemas across state & central ministries using OpenAPI / Beckn Protocol for zero-friction data exchange.
            </p>
          </div>
        </div>

        {/* Flow Diagram Breakdown */}
        <div className="bg-slate-900/60 border border-slate-800/80 p-5 rounded-2xl space-y-3">
          <div className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
            <Layers className="w-3.5 h-3.5 text-blue-400" />
            <span>The 6 Autonomous Agents In Action</span>
          </div>

          <div className="space-y-2 text-xs">
            <div className="flex items-start space-x-2 text-slate-300">
              <span className="font-bold text-blue-400 shrink-0">1. Request Agent:</span>
              <span className="text-slate-400">Natural language processing extracts intended service criteria & policy thresholds.</span>
            </div>
            <div className="flex items-start space-x-2 text-slate-300">
              <span className="font-bold text-blue-400 shrink-0">2. Routing Agent:</span>
              <span className="text-slate-400">Maps criteria to target government endpoints (UIDAI for identity, CBDT for income, State Revenue for land records).</span>
            </div>
            <div className="flex items-start space-x-2 text-slate-300">
              <span className="font-bold text-blue-400 shrink-0">3. Data Agents:</span>
              <span className="text-slate-400">Concurrent workers securely query departmental registries via standardized APIs with zero manual re-entry.</span>
            </div>
            <div className="flex items-start space-x-2 text-slate-300">
              <span className="font-bold text-blue-400 shrink-0">4. Validation Agent:</span>
              <span className="text-slate-400">Executes multi-registry cross-consistency checks, detecting duplicate filings or fraud.</span>
            </div>
            <div className="flex items-start space-x-2 text-slate-300">
              <span className="font-bold text-blue-400 shrink-0">5. Consent & Security Agent:</span>
              <span className="text-slate-400">Audits immutable cryptographic consent envelopes and applies end-to-end TLS 1.3 encryption.</span>
            </div>
            <div className="flex items-start space-x-2 text-slate-300">
              <span className="font-bold text-blue-400 shrink-0">6. Response Agent:</span>
              <span className="text-slate-400">Synthesizes the verifiable adjudication verdict and generates downloadable cryptographic certificates.</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-emerald-400" />
            <span>Built according to GIGW 3.0 & WCAG 2.1 AA standards</span>
          </div>

          <button
            onClick={onClose}
            className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-xl text-xs font-bold transition-colors"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
};
