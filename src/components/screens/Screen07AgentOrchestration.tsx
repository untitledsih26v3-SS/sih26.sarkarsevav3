import React, { useState, useEffect } from 'react';
import { ArrowRight, Check, RotateCw } from 'lucide-react';

interface Props {
  refNo?: string;
  onNext: () => void;
  autoPlay?: boolean;
}

export const Screen07AgentOrchestration: React.FC<Props> = ({
  refNo = 'GV-00102',
  onNext,
  autoPlay = true,
}) => {
  // Step stages: 0 (initial), 1 (Identity verifying), 2 (Identity verified, Income verifying),
  // 3 (Income verified, Property verifying), 4 (All verified, Validation done), 5 (All agents completed)
  const [stage, setStage] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;

    setStage(0);
    const t1 = setTimeout(() => setStage(1), 500);
    const t2 = setTimeout(() => setStage(2), 1100);
    const t3 = setTimeout(() => setStage(3), 1700);
    const t4 = setTimeout(() => setStage(4), 2300);
    const t5 = setTimeout(() => setStage(5), 2900);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [autoPlay]);

  const restartSimulation = () => {
    setStage(0);
    setTimeout(() => setStage(1), 400);
    setTimeout(() => setStage(2), 1000);
    setTimeout(() => setStage(3), 1600);
    setTimeout(() => setStage(4), 2200);
    setTimeout(() => setStage(5), 2800);
  };

  const isCompleted = stage >= 5;

  return (
    <div className="w-full h-full min-h-[580px] bg-[#0a1128] text-white p-6 md:p-10 flex flex-col justify-between rounded-2xl relative select-none overflow-hidden shadow-2xl">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Bar */}
      <div className="relative z-10 flex items-center justify-between text-xs border-b border-slate-800/80 pb-3">
        <div className="font-mono text-slate-400 font-medium">
          Request ID: <span className="text-slate-200">{refNo}</span>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={restartSimulation}
            className="text-[11px] text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
            title="Replay Agent Execution"
          >
            <RotateCw className="w-3 h-3" />
            <span>Replay</span>
          </button>

          <div className="flex items-center space-x-2 bg-slate-900/80 px-3 py-1 rounded-full border border-slate-700/60">
            <div
              className={`w-2 h-2 rounded-full ${
                isCompleted ? 'bg-emerald-400' : 'bg-emerald-400 animate-ping'
              }`}
            />
            <span
              className={`font-semibold text-xs ${
                isCompleted ? 'text-emerald-400' : 'text-emerald-300'
              }`}
            >
              {isCompleted ? 'Completed' : 'Processing...'}
            </span>
          </div>
        </div>
      </div>

      {/* Main Orchestration Board */}
      <div className="relative z-10 my-auto py-2">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white">
            Agent Orchestration
          </h2>
          <div className="relative hidden md:block">
            <div className="font-handwriting text-2xl text-blue-300 font-semibold tracking-wide">
              Multiple agents. One goal.
            </div>
            {/* Curved hand-drawn arrow */}
            <svg
              className="w-16 h-8 text-blue-400 absolute -bottom-6 right-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 60 30"
            >
              <path
                d="M 10 25 C 25 25, 45 20, 50 5"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path d="M 45 4 L 51 5 L 50 12" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* Coordinated Agents List */}
        <div className="space-y-3.5 max-w-2xl text-xs">
          {/* 1. Request Agent */}
          <div className="flex items-center space-x-3">
            <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] font-bold shadow-sm shadow-emerald-500/30">
              <Check className="w-3 h-3 stroke-[3]" />
            </div>
            <div>
              <span className="font-bold text-slate-100">1. Request Agent:</span>{' '}
              <span className="text-slate-400 font-medium">Understanding your request</span>
            </div>
          </div>

          {/* 2. Routing Agent */}
          <div className="flex items-center space-x-3">
            <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] font-bold shadow-sm shadow-emerald-500/30">
              <Check className="w-3 h-3 stroke-[3]" />
            </div>
            <div>
              <span className="font-bold text-slate-100">2. Routing Agent:</span>{' '}
              <span className="text-slate-400 font-medium">Identifying required departments</span>
            </div>
          </div>

          {/* 3. Data Agents Section */}
          <div className="pl-8 space-y-2">
            <div className="font-bold text-slate-300 text-xs">3. Data Agents</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {/* Identity Sub-card */}
              <div
                className={`border p-3 rounded-xl flex items-center justify-between transition-all ${
                  stage >= 2
                    ? 'bg-emerald-950/40 border-emerald-500/60 shadow-sm shadow-emerald-900/30'
                    : stage === 1
                    ? 'bg-amber-950/40 border-amber-500/60 shadow-sm shadow-amber-900/30'
                    : 'bg-slate-800/80 border-slate-700'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <span className="text-sm">👤</span>
                  <span className="font-bold text-slate-200">Identity</span>
                </div>
                {stage >= 2 ? (
                  <span className="text-[10px] text-emerald-400 font-mono font-bold flex items-center gap-1">
                    <Check className="w-3 h-3" />
                    <span>Verified</span>
                  </span>
                ) : stage === 1 ? (
                  <span className="text-[10px] text-amber-400 font-mono font-bold animate-pulse">
                    Verifying...
                  </span>
                ) : (
                  <span className="text-[10px] text-slate-500 font-mono">Pending...</span>
                )}
              </div>

              {/* Income Sub-card */}
              <div
                className={`border p-3 rounded-xl flex items-center justify-between transition-all ${
                  stage >= 3
                    ? 'bg-emerald-950/40 border-emerald-500/60 shadow-sm shadow-emerald-900/30'
                    : stage === 2
                    ? 'bg-amber-950/40 border-amber-500/60 shadow-sm shadow-amber-900/30'
                    : 'bg-slate-800/80 border-slate-700'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <span className="text-sm">💰</span>
                  <span className="font-bold text-slate-200">Income</span>
                </div>
                {stage >= 3 ? (
                  <span className="text-[10px] text-emerald-400 font-mono font-bold flex items-center gap-1">
                    <Check className="w-3 h-3" />
                    <span>Verified</span>
                  </span>
                ) : stage === 2 ? (
                  <span className="text-[10px] text-amber-400 font-mono font-bold animate-pulse">
                    Verifying...
                  </span>
                ) : (
                  <span className="text-[10px] text-slate-500 font-mono">Pending...</span>
                )}
              </div>

              {/* Property Sub-card */}
              <div
                className={`border p-3 rounded-xl flex items-center justify-between transition-all ${
                  stage >= 4
                    ? 'bg-emerald-950/40 border-emerald-500/60 shadow-sm shadow-emerald-900/30'
                    : stage === 3
                    ? 'bg-amber-950/40 border-amber-500/60 shadow-sm shadow-amber-900/30'
                    : 'bg-slate-800/80 border-slate-700'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <span className="text-sm">🏢</span>
                  <span className="font-bold text-slate-200">Property</span>
                </div>
                {stage >= 4 ? (
                  <span className="text-[10px] text-emerald-400 font-mono font-bold flex items-center gap-1">
                    <Check className="w-3 h-3" />
                    <span>Verified</span>
                  </span>
                ) : stage === 3 ? (
                  <span className="text-[10px] text-amber-400 font-mono font-bold animate-pulse">
                    Verifying...
                  </span>
                ) : (
                  <span className="text-[10px] text-slate-500 font-mono">Pending...</span>
                )}
              </div>
            </div>
          </div>

          {/* 4. Validation Agent */}
          <div
            className={`flex items-center space-x-3 transition-colors ${
              stage >= 4 ? 'text-slate-200' : 'text-slate-400'
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold transition-all ${
                stage >= 4
                  ? 'bg-emerald-500 text-white shadow-sm shadow-emerald-500/30'
                  : 'border border-slate-600 text-slate-400'
              }`}
            >
              {stage >= 4 ? <Check className="w-3 h-3 stroke-[3]" /> : '4'}
            </div>
            <div>
              <span className="font-bold">4. Validation Agent:</span>{' '}
              <span className="text-slate-400 font-medium">Checking data consistency</span>
            </div>
          </div>

          {/* 5. Consent & Security Agent */}
          <div
            className={`flex items-center space-x-3 transition-colors ${
              stage >= 5 ? 'text-slate-200' : 'text-slate-400'
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold transition-all ${
                stage >= 5
                  ? 'bg-emerald-500 text-white shadow-sm shadow-emerald-500/30'
                  : 'border border-slate-600 text-slate-400'
              }`}
            >
              {stage >= 5 ? <Check className="w-3 h-3 stroke-[3]" /> : '5'}
            </div>
            <div>
              <span className="font-bold">5. Consent & Security Agent:</span>{' '}
              <span className="text-slate-400 font-medium">Ensuring secure data exchange</span>
            </div>
          </div>

          {/* 6. Response Agent */}
          <div
            className={`flex items-center space-x-3 transition-colors ${
              stage >= 5 ? 'text-slate-200' : 'text-slate-400'
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold transition-all ${
                stage >= 5
                  ? 'bg-emerald-500 text-white shadow-sm shadow-emerald-500/30'
                  : 'border border-slate-600 text-slate-400'
              }`}
            >
              {stage >= 5 ? <Check className="w-3 h-3 stroke-[3]" /> : '6'}
            </div>
            <div>
              <span className="font-bold">6. Response Agent:</span>{' '}
              <span className="text-slate-400 font-medium">
                {stage >= 5 ? 'Response ready!' : 'Preparing final response...'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Controls */}
      <div className="relative z-10 flex items-center justify-between border-t border-slate-800/80 pt-4">
        <div className="font-handwriting text-xl text-slate-300 font-medium">
          Multiple agents. One goal. →
        </div>

        <button
          onClick={onNext}
          className="bg-white text-slate-900 px-6 py-2.5 rounded-full text-xs font-bold hover:bg-slate-100 shadow-lg shadow-white/10 flex items-center space-x-2 transition-all hover:scale-105 active:scale-95"
        >
          <span>View Data Flow</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
