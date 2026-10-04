import React from 'react';
import { X, Shield, Users, Landmark, FileText, CheckCircle2, Lock, Sparkles, Cpu, Award } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onOpenHowItWorks?: () => void;
  onStartRequest?: () => void;
}

export const AboutModal: React.FC<Props> = ({
  isOpen,
  onClose,
  onOpenHowItWorks,
  onStartRequest,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="bg-[#0b1226] text-white border border-slate-800 rounded-3xl max-w-4xl w-full p-6 md:p-9 space-y-7 shadow-2xl relative my-8 animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
          title="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="space-y-2 pr-10">
          <div className="flex items-center space-x-2 text-blue-400 text-xs font-mono font-semibold uppercase tracking-wider">
            <Landmark className="w-4 h-4" />
            <span>Digital Public Infrastructure • Government of India Initiative</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
            About Sarkar Seva
          </h2>
          <p className="text-xs md:text-sm text-slate-300 leading-relaxed max-w-2xl">
            Sarkar Seva is an autonomous, agentic civic tech platform engineered to dissolve bureaucratic silos. One plain-language citizen request coordinates multiple ministries, automates verified cross-checks, and delivers instant, legally binding service outcomes.
          </p>
        </div>

        {/* Vision Statement Box */}
        <div className="bg-gradient-to-r from-blue-900/40 via-indigo-900/30 to-purple-900/30 border border-blue-500/30 p-5 rounded-2xl relative overflow-hidden">
          <div className="flex items-start space-x-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-400/40 flex items-center justify-center text-xl shrink-0">
              ⚡
            </div>
            <div className="space-y-1">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-300">
                Core Mission & Paradigm Shift
              </div>
              <p className="text-xs md:text-sm text-slate-200 leading-relaxed font-medium">
                "For decades, citizens navigated government departments as separate, disconnected islands. Sarkar Seva inverts the burden: the citizen expresses their intent once, and our autonomous multi-agent mesh coordinates the departments behind the scenes."
              </p>
              <div className="font-handwriting text-xl text-blue-300 pt-1">
                Same you. Better process. Faster services.
              </div>
            </div>
          </div>
        </div>

        {/* The Problem vs The Sarkar Seva Solution */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
            <Users className="w-4 h-4 text-amber-400" />
            <span>Transforming the Citizen Experience</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            {/* Legacy Approach */}
            <div className="bg-slate-900/70 border border-red-900/30 p-4 rounded-2xl space-y-2">
              <div className="font-bold text-red-400 flex items-center gap-1.5 text-xs">
                <span>✕</span>
                <span>The Traditional Portal Ordeal</span>
              </div>
              <ul className="space-y-1.5 text-slate-400 leading-relaxed">
                <li>• Multiple disjointed portals requiring separate logins & passwords.</li>
                <li>• Repeated manual re-uploading of the same Aadhaar, PAN, and income proofs.</li>
                <li>• Weeks spent waiting for manual cross-departmental officer attestations.</li>
                <li>• High vulnerability to document spoofing and duplicate fraudulent submissions.</li>
              </ul>
            </div>

            {/* Sarkar Seva Approach */}
            <div className="bg-slate-900/70 border border-emerald-900/40 p-4 rounded-2xl space-y-2">
              <div className="font-bold text-emerald-400 flex items-center gap-1.5 text-xs">
                <span>✓</span>
                <span>The Sarkar Seva Autonomous Model</span>
              </div>
              <ul className="space-y-1.5 text-slate-300 leading-relaxed">
                <li>• Single unified window: write in natural language or tap a service card.</li>
                <li>• Zero data re-entry: verified direct interop with UIDAI, CBDT, & Land registries.</li>
                <li>• Sub-minute automated adjudication powered by 6 coordinated agents.</li>
                <li>• Cryptographically sealed, verifiable digital certificates with instant QR proof.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 4 Foundation Pillars */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
            <Cpu className="w-4 h-4 text-blue-400" />
            <span>Key Pillars of Sarkar Seva</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl space-y-1.5">
              <div className="w-7 h-7 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div className="text-xs font-bold text-white">Multi-Agent Orchestration</div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Six specialized agents collaborate synchronously on routing, data retrieval, security, and response generation.
              </p>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl space-y-1.5">
              <div className="w-7 h-7 rounded-lg bg-amber-600/20 text-amber-400 flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div className="text-xs font-bold text-white">Citizen Data Sovereignty</div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Complies strictly with India's DPDP Act 2023. Explicit, granular consent is requested and revocable at any second.
              </p>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl space-y-1.5">
              <div className="w-7 h-7 rounded-lg bg-emerald-600/20 text-emerald-400 flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div className="text-xs font-bold text-white">Interoperable DPI Mesh</div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Standardized APIs bridge central registries (UIDAI, Income Tax) with state-level revenue and urban local body databases.
              </p>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl space-y-1.5">
              <div className="w-7 h-7 rounded-lg bg-purple-600/20 text-purple-400 flex items-center justify-center text-sm font-bold">
                4
              </div>
              <div className="text-xs font-bold text-white">Zero Duplicate Filing</div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Cross-consistency checks guarantee that once information is verified in any public registry, you never resubmit it.
              </p>
            </div>
          </div>
        </div>

        {/* Legal & Compliance Notice */}
        <div className="border-t border-slate-800/80 pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center space-x-2">
            <Lock className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              MeitY Certified • GIGW 3.0 Guidelines for Indian Government Websites • WCAG 2.1 AA
            </span>
          </div>

          <div className="flex items-center space-x-3 w-full sm:w-auto justify-end">
            {onOpenHowItWorks && (
              <button
                onClick={() => {
                  onClose();
                  onOpenHowItWorks();
                }}
                className="text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
              >
                Read How It Works →
              </button>
            )}

            <button
              onClick={() => {
                onClose();
                if (onStartRequest) onStartRequest();
              }}
              className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-full text-xs font-bold shadow-md shadow-blue-600/20 transition-all hover:scale-105"
            >
              Start Request Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
