import React, { useState } from 'react';
import { X, ArrowRight, CheckCircle2, Shield, Cpu, RefreshCw, Layers, Lock, Sparkles, Terminal } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onJumpToStep?: (screenNum: number) => void;
}

export const HowItWorksModal: React.FC<Props> = ({ isOpen, onClose, onJumpToStep }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  if (!isOpen) return null;

  const steps = [
    {
      num: '01',
      screenTarget: 3,
      title: 'Intent Expression',
      subtitle: 'Natural language search or 1-tap service selection',
      icon: '💬',
      description:
        'Instead of combing through nested departmental sub-menus, the citizen expresses what they need in plain everyday language (e.g. "Check my housing scheme eligibility") or selects from curated popular public services.',
      details: [
        'Semantic parsing interprets citizen goals without requiring bureaucratic terminology.',
        'Zero prerequisite knowledge needed regarding which ministry or state department governs the scheme.',
        'Immediate suggestion cards for Housing, Income Certificates, Land Deeds, and Student Scholarships.',
      ],
      tag: 'Step 1 of 6',
    },
    {
      num: '02',
      screenTarget: 4,
      title: 'Dependency Mapping',
      subtitle: 'Autonomous identification of target public registries',
      icon: '🗺️',
      description:
        'The Routing Agent takes the parsed intent and deconstructs it into the exact public databases required to verify eligibility. For housing schemes, it identifies UIDAI (Identity), CBDT (Income), and State Revenue (Property).',
      details: [
        'Maps criteria to authoritative government master registries via OpenAPI schemas.',
        'Identifies real-time API latency and connectivity status across all departments.',
        'Eliminates the need for citizens to upload certified photocopies or attestation stamps.',
      ],
      tag: 'Step 2 of 6',
    },
    {
      num: '03',
      screenTarget: 5,
      title: 'Pre-Execution Audit',
      subtitle: 'Complete transparency before any data is queried',
      icon: '🔍',
      description:
        'Before a single byte of data is retrieved, the citizen reviews a transparent breakdown: exactly which data points will be read, the legal purpose under the scheme rules, and the expected query count.',
      details: [
        'Itemized data elements: Name, Aadhaar biometric token, Annual gross income, and Urban land holdings.',
        'Explicit legal purpose statement ensuring compliance with the Digital Personal Data Protection (DPDP) Act 2023.',
        'Clear summary metrics: "3 departments • 2 data points • 1 request".',
      ],
      tag: 'Step 3 of 6',
    },
    {
      num: '04',
      screenTarget: 6,
      title: 'Granular Citizen Consent',
      subtitle: 'Total data sovereignty and revocable permissions',
      icon: '🛡️',
      description:
        'Sarkar Seva never assumes blanket permission. The citizen is presented with granular toggles for each department and each specific data attribute. Access is single-use, time-bound, and revocable anytime.',
      details: [
        'Citizen remains in absolute control of their sovereign identity and financial data.',
        'Cryptographic consent artifact generated and stored in citizen\'s private log.',
        'Motto: "Your data. Your control. Our responsibility."',
      ],
      tag: 'Step 4 of 6',
    },
    {
      num: '05',
      screenTarget: 7,
      title: 'Agent Orchestration & Data Exchange',
      subtitle: 'Six autonomous agents coordinating in real time',
      icon: '⚡',
      description:
        'Six specialized agents execute synchronously: Request Agent, Routing Agent, parallel Data Agents querying departmental endpoints, Validation Agent executing invariant consistency checks, Consent & Security Agent auditing TLS 1.3 tunnels, and Response Agent synthesizing results.',
      details: [
        'Parallel execution reduces processing time from weeks to sub-second transactions.',
        'Interoperability tunnel standardizes disparate legacy schemas into unified data models.',
        'Real-time mission-control visualizer tracks each agent\'s microsecond transitions.',
      ],
      tag: 'Step 5 of 6',
    },
    {
      num: '06',
      screenTarget: 10,
      title: 'Instant Adjudication & Credentials',
      subtitle: 'Verifiable legal verdict with immutable timeline',
      icon: '📜',
      description:
        'All cross-registry invariant checks pass (4 / 4 verified with zero duplicate submission). An instant ELIGIBLE verdict is rendered, complete with cryptographic signature, QR-verifiable certificate, and a second-by-second audit journey.',
      details: [
        'Tamper-proof verifiable credentials valid across central and state authorities.',
        'Zero physical trips to government offices or administrative centers.',
        'Permanently logged in the citizen\'s private request ledger with chronological journey audit.',
      ],
      tag: 'Step 6 of 6',
    },
  ];

  const current = steps[activeStepIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="bg-[#0b1226] text-white border border-slate-800 rounded-3xl max-w-4xl w-full p-6 md:p-9 space-y-6 shadow-2xl relative my-8 animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
          title="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="space-y-1.5 pr-10">
          <div className="flex items-center space-x-2 text-blue-400 text-xs font-mono font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Interactive Operational Workflow</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
            How Sarkar Seva Works
          </h2>
          <p className="text-xs md:text-sm text-slate-400">
            A step-by-step breakdown of how autonomous multi-agent orchestration delivers seamless government services.
          </p>
        </div>

        {/* Step Selector Horizontal Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
          {steps.map((s, idx) => (
            <button
              key={s.num}
              onClick={() => setActiveStepIndex(idx)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center space-x-2 ${
                activeStepIndex === idx
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 ring-2 ring-blue-400/30'
                  : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <span className="font-mono text-[10px] opacity-80">{s.num}</span>
              <span>{s.title}</span>
            </button>
          ))}
        </div>

        {/* Active Step Showcase Card */}
        <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-2xl space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
            <div className="flex items-center space-x-3.5">
              <div className="w-12 h-12 rounded-2xl bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center text-2xl shadow-inner">
                {current.icon}
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-[10px] font-mono font-bold bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded">
                    {current.tag}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">Step {current.num}</span>
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight mt-0.5">
                  {current.title}
                </h3>
              </div>
            </div>

            <div className="text-xs text-slate-400 font-medium sm:text-right">
              {current.subtitle}
            </div>
          </div>

          <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-normal">
            {current.description}
          </p>

          <div className="space-y-2 bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              Technical & Governance Highlights
            </div>
            <div className="space-y-1.5 text-xs text-slate-300">
              {current.details.map((item, i) => (
                <div key={i} className="flex items-start space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Jump to this Screen in Demo CTA */}
          {onJumpToStep && (
            <div className="flex items-center justify-between pt-2">
              <span className="text-[11px] text-slate-400">
                Experience this step live in the interactive demo (Screen {current.screenTarget < 10 ? '0' + current.screenTarget : current.screenTarget}/12)
              </span>

              <button
                onClick={() => {
                  onClose();
                  onJumpToStep(current.screenTarget);
                }}
                className="bg-white text-slate-900 hover:bg-slate-100 px-5 py-2 rounded-full text-xs font-bold flex items-center space-x-2 transition-all hover:scale-105 active:scale-95 shadow-md shadow-white/10"
              >
                <span>Jump to Screen {current.screenTarget < 10 ? '0' + current.screenTarget : current.screenTarget}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>

        {/* Footer Navigation */}
        <div className="flex items-center justify-between border-t border-slate-800/80 pt-4 text-xs text-slate-400">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Standardized with OpenAPI, Beckn Protocol & National DPI Specifications</span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setActiveStepIndex((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            >
              Previous Step
            </button>
            <button
              onClick={() => setActiveStepIndex((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
              className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold transition-colors"
            >
              Next Step
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
