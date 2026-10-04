import React, { useState } from 'react';
import {
  SarkarSevaLogo,
  GovOfficialLogosBar,
  INDIA_FLAG_PATH,
  MAHARASHTRA_EMBLEM_PATH,
  MAHARASHTRA_SEAL_PATH,
} from '../SarkarSevaLogo';
import {
  ArrowRight,
  Play,
  Sparkles,
  Shield,
  Cpu,
  Layers,
  CheckCircle2,
  Lock,
  Building2,
  Users,
  ChevronDown,
  ChevronUp,
  FileText,
  Landmark,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  KeyRound,
  Check,
  AlertCircle,
  HelpCircle,
  Zap,
} from 'lucide-react';
import { ScreenId } from '../../types';

interface Props {
  onStart: () => void;
  onWatchDemo: () => void;
  onOpenArchitecture?: () => void;
  onOpenAbout?: () => void;
  onOpenHowItWorks?: () => void;
  onHome?: () => void;
  onJumpToScreen?: (screen: ScreenId) => void;
}

export const Screen01Landing: React.FC<Props> = ({
  onStart,
  onWatchDemo,
  onHome,
}) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Contact Form State
  const [formName, setFormName] = useState('Manya Sharma');
  const [formPhone, setFormPhone] = useState('98765 43210');
  const [formEmail, setFormEmail] = useState('manya.sharma@gov.in');
  const [formCategory, setFormCategory] = useState('Application Status Delay');
  const [formMessage, setFormMessage] = useState('');
  const [formOtp, setFormOtp] = useState('4321');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('GRV-2026-90412');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleFaq = (index: number) => {
    setActiveFaq((prev) => (prev === index ? null : index));
  };

  const handleSendOtp = () => {
    if (!formPhone) return;
    setIsOtpSent(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isOtpSent) {
      setIsOtpSent(true);
      return;
    }
    const generatedId = `GRV-2026-${Math.floor(10000 + Math.random() * 90000)}`;
    setTicketId(generatedId);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setIsOtpSent(false);
    setFormMessage('');
  };

  const faqs = [
    {
      q: 'Is my Aadhaar or personal financial data permanently stored on Sarkar Seva servers?',
      a: 'No. Sarkar Seva operates strictly under India’s Digital Personal Data Protection (DPDP) Act 2023. All identity and tax queries utilize single-use, ephemeral cryptographic access tokens via UIDAI DigiLocker and CBDT APIs. No unencrypted citizen data is ever retained in secondary databases after eligibility adjudication.',
    },
    {
      q: 'How does Sarkar Seva determine scheme eligibility in under 60 seconds?',
      a: 'Instead of requiring citizens to upload paper photocopies and waiting for manual clerk reviews, our autonomous Data Agents query public master registries in parallel. The Validation Agent executes deterministic policy rules against verified records in real time.',
    },
    {
      q: 'Can I revoke access granted to government departments?',
      a: 'Yes. Citizens maintain complete data sovereignty. Before any data exchange occurs, you can toggle permissions for individual departments and revoke active consent at any time from your Citizen Profile.',
    },
    {
      q: 'Are the digital certificates issued legally binding?',
      a: 'Yes. All certificates are cryptographically sealed with Government of India Public Key Infrastructure (PKI) and embed a tamper-proof QR code verifiable across all municipal, state, and central authorities.',
    },
    {
      q: 'What happens if a connected department registry (e.g. State Land Records or CBDT) experiences downtime?',
      a: 'Sarkar Seva incorporates resilient failover with asynchronous agent retry queues. If an endpoint is degraded, the Consent & Security Agent preserves the cryptographic authorization token and retries in the background, notifying you via SMS/Email the moment verification clears without requiring you to re-file.',
    },
    {
      q: 'Is Aadhaar biometric authentication mandatory, or can I use mobile OTP?',
      a: 'Biometrics are never strictly mandatory for standard inquiries. Citizens can choose between Aadhaar-linked mobile OTP, DigiLocker single-use token, or standard email/mobile 2-factor authentication.',
    },
    {
      q: 'How does Sarkar Seva prevent corruption, bribery, or manual touts?',
      a: 'By eliminating discretionary manual human gating for straightforward statutory criteria, decisions are rendered deterministically by code and verifiable public policy rules. Every step is cryptographically audited on an immutable timeline, guaranteeing zero room for unofficial facilitation fees.',
    },
    {
      q: 'Can rural citizens access Sarkar Seva through Common Service Centres (CSC)?',
      a: 'Yes. Village Level Entrepreneurs (VLEs) at over 400,000 Common Service Centres (CSC) across rural India can assist citizens with Sarkar Seva via biometric or OTP authentication.',
    },
    {
      q: 'Is there multi-lingual support for regional Indian languages?',
      a: 'Yes. In addition to English, Sarkar Seva supports Hindi, Marathi, Bengali, Tamil, Telugu, Kannada, Gujarati, Malayalam, Odia, and Punjabi for both text prompts and voice guidance.',
    },
    {
      q: 'How do I track the chronological audit trail of my past requests?',
      a: 'Navigate to "My Requests" or Screen 12 in the demo. Every request logs an immutable second-by-second timeline from submission to registry query, consistency check, and certificate issuance.',
    },
  ];

  return (
    <div className="w-full h-full min-h-[580px] max-h-[780px] overflow-y-auto bg-[#fbfbfe] text-slate-900 rounded-2xl relative scroll-smooth selection:bg-blue-600 selection:text-white">
      {/* SECTION 1: HERO VIEWPORT (id="hero") */}
      <section
        id="hero"
        className="min-h-[580px] p-6 md:p-10 flex flex-col justify-between relative overflow-hidden border-b border-slate-200/70"
      >
        {/* Ambient background glows */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-indigo-50/60 rounded-full blur-3xl pointer-events-none" />

        {/* Sticky-like Header Inside Landing Page */}
        <header className="relative z-10 flex items-center justify-between pb-4">
          <div className="flex items-center space-x-2">
            <GovOfficialLogosBar variant="light" onClickHome={() => scrollToSection('hero')} />
          </div>

          {/* Clean Navigation Links with Direct Section Scrolling */}
          <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium text-slate-600">
            <button
              onClick={() => scrollToSection('hero')}
              className="hover:text-blue-600 transition-colors font-bold text-blue-600"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="hover:text-blue-600 transition-colors font-semibold text-slate-700"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="hover:text-blue-600 transition-colors font-semibold text-slate-700"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('architecture')}
              className="hover:text-blue-600 transition-colors flex items-center gap-1.5 font-semibold text-slate-700"
            >
              <span>Architecture</span>
              <span className="text-[10px] bg-blue-100 text-blue-700 font-semibold px-1.5 py-0.5 rounded">
                Gov Mesh
              </span>
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="hover:text-blue-600 transition-colors font-semibold text-slate-700"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="hover:text-blue-600 transition-colors font-semibold text-slate-700"
            >
              Contact / Help
            </button>
          </nav>

          <div className="flex items-center space-x-2">
            <button
              onClick={onStart}
              className="bg-[#0b1226] text-white px-5 py-2.5 rounded-full text-xs font-semibold hover:bg-slate-800 shadow-md shadow-slate-900/10 transition-all hover:scale-105 active:scale-95"
            >
              Get Started
            </button>
          </div>
        </header>

        {/* Hero Main Content */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto py-6">
          {/* Left Column Text */}
          <div className="lg:col-span-7 space-y-5">
            <div className="space-y-1">
              <div className="font-handwriting text-3xl md:text-4xl text-slate-500 -mb-2">
                Government services
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-[#0f172a] tracking-tight leading-[0.95]">
                connected.
              </h1>
            </div>

            <p className="text-slate-600 text-base md:text-lg font-normal max-w-lg leading-relaxed">
              One request. Multiple departments. One coordinated journey.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onStart}
                className="bg-[#0b1226] text-white px-7 py-3 rounded-full text-sm font-semibold hover:bg-slate-800 flex items-center space-x-2.5 shadow-lg shadow-slate-950/15 transition-all hover:translate-x-0.5"
              >
                <span>Start a request</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onWatchDemo}
                className="text-slate-700 bg-white/80 hover:bg-white border border-slate-200/80 px-5 py-3 rounded-full text-sm font-semibold hover:text-slate-900 flex items-center space-x-2.5 transition-all shadow-sm"
              >
                <div className="w-6 h-6 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span>Watch how it works</span>
              </button>
            </div>

            <div className="pt-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <div className="font-handwriting text-2xl md:text-3xl text-indigo-900 font-semibold tracking-wide">
                Same you. Better process. Faster services.
              </div>
            </div>
          </div>

          {/* Right Column Diagram: Central Hub + 3 Orbiting Nodes */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[320px]">
            <div className="absolute w-72 h-72 rounded-full border border-dashed border-slate-300 animate-[spin_60s_linear_infinite]" />
            <div className="absolute w-52 h-52 rounded-full border border-dashed border-blue-200/80" />

            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 320 320">
              <line x1="160" y1="160" x2="160" y2="40" stroke="#93c5fd" strokeWidth="1.5" strokeDasharray="4 4" />
              <line x1="160" y1="160" x2="55" y2="250" stroke="#fde68a" strokeWidth="1.5" strokeDasharray="4 4" />
              <line x1="160" y1="160" x2="265" y2="250" stroke="#a7f3d0" strokeWidth="1.5" strokeDasharray="4 4" />
            </svg>

            <div className="relative z-20 w-28 h-28 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex flex-col items-center justify-center shadow-xl shadow-blue-600/30 animate-pulse-glow">
              <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center text-xl mb-1 backdrop-blur-sm">
                🏛️
              </div>
              <span className="text-xs font-bold tracking-tight">Sarkar Seva</span>
              <span className="text-[9px] text-blue-200 uppercase tracking-widest mt-0.5">Core Mesh</span>
            </div>

            <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center bg-white px-3.5 py-2 rounded-xl shadow-md border border-blue-100 hover:scale-105 transition-transform">
              <span className="text-base">👤</span>
              <span className="text-[11px] font-bold text-blue-900">Identity</span>
              <span className="text-[9px] text-blue-500 font-mono">UIDAI / DigiLocker</span>
            </div>

            <div className="absolute bottom-4 left-4 z-20 flex flex-col items-center bg-white px-3.5 py-2 rounded-xl shadow-md border border-amber-100 hover:scale-105 transition-transform">
              <span className="text-base">💰</span>
              <span className="text-[11px] font-bold text-amber-900">Income</span>
              <span className="text-[9px] text-amber-600 font-mono">CBDT / IT Dept</span>
            </div>

            <div className="absolute bottom-4 right-4 z-20 flex flex-col items-center bg-white px-3.5 py-2 rounded-xl shadow-md border border-emerald-100 hover:scale-105 transition-transform">
              <span className="text-base">🏢</span>
              <span className="text-[11px] font-bold text-emerald-900">Revenue</span>
              <span className="text-[9px] text-emerald-600 font-mono">Land Records</span>
            </div>
          </div>
        </div>

        {/* Scroll down prompt */}
        <div className="relative z-10 flex items-center justify-between text-xs text-slate-400 border-t border-slate-200/60 pt-3">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
            <span className="text-slate-600 font-medium">Digital Public Infrastructure (DPI) Orchestrator</span>
          </div>

          <button
            onClick={() => scrollToSection('about')}
            className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-1 transition-colors"
          >
            <span>Scroll for About, How It Works & Help</span>
            <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
          </button>
        </div>
      </section>

      {/* SECTION 2: ABOUT SARKAR SEVA (id="about") */}
      <section
        id="about"
        className="p-6 md:p-12 space-y-8 border-b border-slate-200/70 bg-gradient-to-b from-white to-slate-50/60"
      >
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="flex items-center space-x-2 text-blue-600 text-xs font-mono font-semibold uppercase tracking-wider">
            <Landmark className="w-4 h-4" />
            <span>01 • Vision & Foundation</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            About Sarkar Seva
          </h2>

          <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal">
            Sarkar Seva is an autonomous, agentic civic tech platform engineered to dissolve bureaucratic silos. While traditional government websites serve as static directories pointing citizens to dozens of separate departmental portals requiring repetitive logins and duplicate submissions, Sarkar Seva introduces a unified, citizen-centric interoperability mesh.
          </p>
        </div>

        {/* Core Mission Banner */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden">
          <div className="relative z-10 space-y-2">
            <div className="text-xs font-bold uppercase tracking-widest text-blue-300 font-mono">
              The Guiding Philosophy
            </div>
            <div className="text-xl md:text-2xl font-bold leading-snug">
              "One request. Multiple departments. One coordinated journey."
            </div>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-normal max-w-2xl pt-1">
              Citizens should never be the courier service between government departments. When you express an intent once, our autonomous multi-agent mesh coordinates the required public registries behind the scenes.
            </p>
          </div>
        </div>

        {/* Comparison: Traditional Portals vs. Sarkar Seva */}
        <div className="max-w-4xl mx-auto space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
            The Paradigm Shift
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="bg-white border border-red-100 p-5 rounded-2xl space-y-2.5 shadow-sm">
              <div className="font-bold text-red-600 flex items-center gap-1.5 text-sm">
                <span>✕</span>
                <span>The Traditional Portal Ordeal</span>
              </div>
              <ul className="space-y-2 text-slate-600 leading-relaxed">
                <li>• Multiple disjointed portals requiring separate logins & passwords.</li>
                <li>• Repeated manual re-uploading of the same Aadhaar, PAN, and income proofs.</li>
                <li>• Weeks spent waiting for physical, manual cross-department attestations.</li>
                <li>• High vulnerability to document spoofing and duplicate fraudulent submissions.</li>
              </ul>
            </div>

            <div className="bg-white border border-emerald-100 p-5 rounded-2xl space-y-2.5 shadow-sm">
              <div className="font-bold text-emerald-700 flex items-center gap-1.5 text-sm">
                <span>✓</span>
                <span>The Sarkar Seva Autonomous Model</span>
              </div>
              <ul className="space-y-2 text-slate-700 leading-relaxed">
                <li>• Single unified window: write in natural language or tap a service card.</li>
                <li>• Zero data re-entry: verified direct interop with UIDAI, CBDT, & Land registries.</li>
                <li>• Sub-minute automated adjudication powered by 6 coordinated agents.</li>
                <li>• Cryptographically sealed, verifiable digital certificates with instant QR proof.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="max-w-4xl mx-auto space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Four Foundational Pillars
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            <div className="bg-white border border-slate-200/80 p-4 rounded-2xl space-y-1.5 shadow-xs">
              <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs">
                01
              </div>
              <div className="text-xs font-bold text-slate-900">Multi-Agent Mesh</div>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Autonomous agents collaborate in real time on routing, verification, and adjudication.
              </p>
            </div>

            <div className="bg-white border border-slate-200/80 p-4 rounded-2xl space-y-1.5 shadow-xs">
              <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-xs">
                02
              </div>
              <div className="text-xs font-bold text-slate-900">Citizen Sovereignty</div>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Complies with India's DPDP Act 2023. Explicit, granular consent is required and revocable.
              </p>
            </div>

            <div className="bg-white border border-slate-200/80 p-4 rounded-2xl space-y-1.5 shadow-xs">
              <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs">
                03
              </div>
              <div className="text-xs font-bold text-slate-900">Interoperable DPI</div>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                OpenAPI schemas link central authorities (UIDAI, CBDT) with state-level land registries.
              </p>
            </div>

            <div className="bg-white border border-slate-200/80 p-4 rounded-2xl space-y-1.5 shadow-xs">
              <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-xs">
                04
              </div>
              <div className="text-xs font-bold text-slate-900">Zero Duplication</div>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Once data is verified across any public master registry, citizens never submit it again.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: HOW IT WORKS (id="how-it-works") */}
      <section
        id="how-it-works"
        className="p-6 md:p-12 space-y-8 border-b border-slate-200/70 bg-white"
      >
        <div className="max-w-4xl mx-auto space-y-3">
          <div className="flex items-center space-x-2 text-amber-600 text-xs font-mono font-semibold uppercase tracking-wider">
            <Zap className="w-4 h-4" />
            <span>02 • Operational Journey</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            How It Works: Step-by-Step
          </h2>

          <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-normal">
            From the moment you express a civic need to instant verifiable certificate delivery, Sarkar Seva executes a synchronized 6-phase journey.
          </p>
        </div>

        {/* 6 Step Cards with Text-Only Demo Indicators */}
        <div className="max-w-4xl mx-auto space-y-3.5">
          {[
            {
              step: '01',
              title: 'Express Intent in Natural Language',
              subtitle: 'Type what you need or select a popular service card',
              desc: 'No need to know complex ministry divisions or scheme eligibility rulebooks. Type in plain language like "Check my housing scheme eligibility", and our Request Agent resolves the intent criteria.',
              screenText: 'Test in Demo (Sc. 03)',
            },
            {
              step: '02',
              title: 'Autonomous Dependency Mapping',
              subtitle: 'Routing Agent pinpoints required government master databases',
              desc: 'The platform identifies exact departmental touchpoints: Identity (UIDAI Aadhaar), Income (CBDT IT Dept), and Property (State Revenue & Land Survey).',
              screenText: 'Test in Demo (Sc. 04)',
            },
            {
              step: '03',
              title: 'Transparent Pre-Execution Audit',
              subtitle: 'Itemized inspection before a single byte is queried',
              desc: 'You inspect the exact data attributes that will be verified, the legal purpose under the scheme, and the query metric (e.g. 3 departments • 2 data points • 1 request).',
              screenText: 'Test in Demo (Sc. 05)',
            },
            {
              step: '04',
              title: 'Granular Citizen Consent & Data Sovereignty',
              subtitle: 'You grant or revoke permission for each individual department',
              desc: 'Compliant with India DPDP Act 2023. Explicit, single-use authorization is generated. "Your data. Your control. Our responsibility."',
              screenText: 'Test in Demo (Sc. 06)',
            },
            {
              step: '05',
              title: 'Agent Orchestration & Interop Tunnel',
              subtitle: 'Six autonomous agents execute synchronously in real time',
              desc: 'Request Agent, Routing Agent, parallel Data Agents, Validation Agent, Consent & Security Agent, and Response Agent coordinate through an encrypted TLS 1.3 tunnel.',
              screenText: 'Test in Demo (Sc. 07 & 08)',
            },
            {
              step: '06',
              title: 'Adjudication Verdict & Verifiable Credential',
              subtitle: 'Instant ELIGIBLE verdict with cryptographic QR code certificate',
              desc: 'Cross-registry checks pass (4 / 4 verified). An official verifiable certificate of eligibility is generated and recorded on an immutable timeline.',
              screenText: 'Test in Demo (Sc. 10)',
            },
          ].map((item) => (
            <div
              key={item.step}
              className="bg-slate-50/70 border border-slate-200/80 p-5 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4 group"
            >
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-mono font-bold text-sm shrink-0 shadow-sm">
                  {item.step}
                </div>
                <div className="space-y-1">
                  <div className="text-sm font-bold text-slate-900">
                    {item.title}
                  </div>
                  <div className="text-[11px] text-blue-700 font-semibold font-mono">
                    {item.subtitle}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pt-0.5">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Text Only Indicator as requested by user */}
              <span className="text-[11px] font-mono font-semibold text-slate-500 bg-slate-200/70 px-3 py-1 rounded-full shrink-0 self-start md:self-center">
                {item.screenText}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: ARCHITECTURE & GOV MESH (id="architecture") */}
      <section
        id="architecture"
        className="p-6 md:p-12 space-y-8 border-b border-slate-200/70 bg-[#070d1e] text-white"
      >
        <div className="max-w-4xl mx-auto space-y-3">
          <div className="flex items-center space-x-2 text-blue-400 text-xs font-mono font-semibold uppercase tracking-wider">
            <Cpu className="w-4 h-4" />
            <span>03 • Multi-Agent Specifications</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
            System Architecture & The 6 Agents
          </h2>

          <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-normal">
            Sarkar Seva is built on a distributed agentic mesh conforming to National Digital Public Infrastructure (DPI) and Beckn Protocol specifications.
          </p>
        </div>

        {/* 6 Autonomous Agents In Detail */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl space-y-2">
            <div className="flex items-center space-x-2 text-blue-400 font-bold text-sm">
              <span>🤖</span>
              <span>1. Request Agent</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Synthesizes raw citizen input using semantic parsing. Identifies eligibility thresholds, target program criteria, and required parameters without asking for bureaucratic jargon.
            </p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl space-y-2">
            <div className="flex items-center space-x-2 text-blue-400 font-bold text-sm">
              <span>🗺️</span>
              <span>2. Routing Agent</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Dynamically maps parsed criteria to live government endpoints (UIDAI for identity, CBDT for income, State Revenue for land records) using OpenAPI schemas.
            </p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl space-y-2">
            <div className="flex items-center space-x-2 text-emerald-400 font-bold text-sm">
              <span>⚡</span>
              <span>3. Data Agents (Parallel)</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Three concurrent sub-agents execute parallel authenticated queries against departmental master databases. Transitions state from Pending to Verifying to Verified in milliseconds.
            </p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl space-y-2">
            <div className="flex items-center space-x-2 text-emerald-400 font-bold text-sm">
              <span>🔍</span>
              <span>4. Validation Agent</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Performs cross-registry consistency checks: confirms name spelling matches across Aadhaar and PAN, validates income thresholds, and guarantees no duplicate previous sanction exists.
            </p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl space-y-2">
            <div className="flex items-center space-x-2 text-amber-400 font-bold text-sm">
              <span>🛡️</span>
              <span>5. Consent & Security Agent</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Enforces time-bound, purpose-restricted access envelopes under the DPDP Act 2023. Encrypts all transit data using TLS 1.3 and AES-GCM-256 with tamper-evident hashing.
            </p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl space-y-2">
            <div className="flex items-center space-x-2 text-purple-400 font-bold text-sm">
              <span>📜</span>
              <span>6. Response Agent</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Synthesizes the verifiable adjudication verdict and generates tamper-proof digital certificates complete with QR verification codes and an immutable chronological audit trail.
            </p>
          </div>
        </div>

        {/* Interoperability Pipeline Summary */}
        <div className="max-w-4xl mx-auto bg-slate-900/90 border border-slate-800 p-5 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="space-y-1">
            <div className="font-bold text-white uppercase tracking-wider text-[11px]">
              Standardized Interoperability Tunnel
            </div>
            <div className="text-slate-400">
              Request → Standardize → Exchange → Return pipeline executing at ~4.2ms latency.
            </div>
          </div>

          <button
            onClick={onStart}
            className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-full text-xs font-bold transition-all shadow-md shadow-blue-600/30 shrink-0"
          >
            Launch Citizen Portal
          </button>
        </div>
      </section>

      {/* SECTION 5: FREQUENTLY ASKED QUESTIONS (id="faq") */}
      <section
        id="faq"
        className="p-6 md:p-12 space-y-6 border-b border-slate-200/70 bg-slate-50/70"
      >
        <div className="max-w-4xl mx-auto space-y-2">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600">
            04 • Knowledge Base & Legal Safeguards
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs text-slate-500">
            Comprehensive answers on DPDP Act data rights, multi-registry verification, and legal admissibility.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-xs transition-all"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full p-4 text-left flex items-center justify-between gap-4 font-bold text-xs md:text-sm text-slate-900 hover:text-blue-600 transition-colors"
              >
                <span>{faq.q}</span>
                {activeFaq === index ? (
                  <ChevronUp className="w-4 h-4 text-slate-500 shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                )}
              </button>

              {activeFaq === index && (
                <div className="px-4 pb-4 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 font-medium">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6: CONTACT US / HELP & GRIEVANCE REDRESSAL (id="contact") */}
      <section
        id="contact"
        className="p-6 md:p-12 space-y-8 border-b border-slate-200/70 bg-gradient-to-b from-white to-blue-50/30"
      >
        <div className="max-w-4xl mx-auto space-y-3">
          <div className="flex items-center space-x-2 text-emerald-600 text-xs font-mono font-semibold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            <span>05 • Citizen Support & Redressal Desk</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Contact Us & Help Center
          </h2>

          <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
            Need assistance or have concerns regarding an application? Reach out to our 24x7 National Support Desk or submit a grievance verified via OTP for rapid resolution.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Official Contact Information */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white border border-slate-200/80 p-5 rounded-2xl space-y-4 shadow-sm">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-100 pb-2">
                Official Helplines & Authority
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">National Citizen Toll-Free</div>
                    <div className="text-blue-600 font-mono font-bold text-sm">1800-11-2026</div>
                    <div className="text-[10px] text-slate-500">24x7 Toll-Free • English, Hindi & 10 Languages</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Official Helpdesk Email</div>
                    <div className="text-slate-700 font-mono">support@sarkarseva.gov.in</div>
                    <div className="text-[10px] text-slate-500">Fast response within 2 working hours</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Secretariat Office</div>
                    <div className="text-slate-600 text-[11px] leading-relaxed">
                      Ministry of Electronics & IT (MeitY), Electronics Niketan, 6 CGO Complex, Lodhi Road, New Delhi - 110003
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Grievance SLA</div>
                    <div className="text-slate-600 text-[11px]">
                      Integrated with Central Public Grievance Redress and Monitoring System (CPGRAMS). Target resolution: &lt; 4 hours.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50/70 border border-emerald-200/80 p-4 rounded-2xl text-[11px] text-emerald-950 flex items-center gap-2">
              <Shield className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>All complaints are cryptographically tracked with immutable docket timestamps.</span>
            </div>
          </div>

          {/* Right Column: Interactive Concern / Grievance Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200/80 p-6 rounded-2xl shadow-sm space-y-4">
            {isSubmitted ? (
              <div className="text-center py-8 space-y-4 animate-in fade-in zoom-in-95">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto text-2xl shadow-inner">
                  ✓
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-black text-slate-900">
                    Concern Registered Successfully
                  </h3>
                  <div className="text-xs text-slate-500">
                    Your grievance has been verified and dispatched to the designated nodal officer.
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl font-mono text-xs max-w-sm mx-auto space-y-1 text-left">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Docket Number:</span>
                    <strong className="text-blue-600">{ticketId}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Citizen:</span>
                    <strong>{formName}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Category:</span>
                    <strong>{formCategory}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Status:</span>
                    <span className="text-emerald-600 font-bold">Assigned to Officer</span>
                  </div>
                </div>

                <button
                  onClick={resetForm}
                  className="bg-[#0b1226] text-white px-6 py-2.5 rounded-full text-xs font-bold hover:bg-slate-800 transition-colors"
                >
                  Raise Another Concern
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-3.5">
                <div className="space-y-1 border-b border-slate-100 pb-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-800">
                    Raise a Concern or Grievance
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Fill in your details and verify via mobile OTP to register an official ticket.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1 uppercase tracking-wider">
                      Full Legal Name
                    </label>
                    <input
                      type="text"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="e.g. Manya Sharma"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1 uppercase tracking-wider">
                      Mobile Number
                    </label>
                    <div className="flex items-center bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus-within:border-blue-600 focus-within:bg-white">
                      <span className="text-xs font-bold text-slate-600 mr-2 border-r border-slate-300 pr-2">
                        +91
                      </span>
                      <input
                        type="tel"
                        value={formPhone}
                        onChange={(e) => setFormPhone(e.target.value)}
                        placeholder="98765 43210"
                        className="w-full bg-transparent text-xs font-semibold text-slate-800 focus:outline-none"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1 uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1 uppercase tracking-wider">
                      Query / Concern Category
                    </label>
                    <select
                      value={formCategory}
                      onChange={(e) => setFormCategory(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white cursor-pointer"
                    >
                      <option value="Application Status Delay">Application Status Delay</option>
                      <option value="DigiLocker / Aadhaar Verification">DigiLocker / Aadhaar Verification</option>
                      <option value="Income Certificate Discrepancy">Income Certificate Discrepancy</option>
                      <option value="Land Record Boundary Mismatch">Land Record Boundary Mismatch</option>
                      <option value="Consent Revocation Request">Consent Revocation Request</option>
                      <option value="Other Civic Feedback">Other Civic Feedback</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1 uppercase tracking-wider">
                    Concern Description
                  </label>
                  <textarea
                    rows={2}
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    placeholder="Briefly describe your issue or question..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-medium text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white"
                    required
                  />
                </div>

                {/* OTP Verification Field */}
                <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl space-y-2">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-bold text-slate-700 uppercase tracking-wider">
                      Mobile OTP Verification
                    </span>
                    <button
                      type="button"
                      onClick={handleSendOtp}
                      className="text-blue-600 hover:text-blue-800 font-bold transition-colors"
                    >
                      {isOtpSent ? 'Resend OTP' : 'Send OTP to +91 ' + formPhone}
                    </button>
                  </div>

                  <div className="flex items-center space-x-2">
                    <div className="flex-1 flex items-center bg-white border border-slate-300 rounded-lg px-3 py-1.5 focus-within:border-blue-600">
                      <KeyRound className="w-3.5 h-3.5 text-slate-400 mr-2" />
                      <input
                        type="text"
                        value={formOtp}
                        onChange={(e) => setFormOtp(e.target.value)}
                        placeholder="Enter 4-digit OTP (demo: 4321)"
                        className="w-full bg-transparent text-xs font-mono font-bold text-slate-800 focus:outline-none"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="bg-[#0b1226] hover:bg-slate-800 text-white px-5 py-2 rounded-lg text-xs font-bold transition-all shadow-xs flex items-center space-x-1.5 shrink-0"
                    >
                      <span>Verify & Submit</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {isOtpSent && (
                    <div className="text-[10px] text-emerald-600 flex items-center gap-1 font-semibold">
                      <Check className="w-3 h-3" />
                      <span>OTP sent to +91 {formPhone}. Use demo code 4321.</span>
                    </div>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 7: GOVERNMENT CITIZEN FOOTER */}
      <footer className="p-6 md:p-10 bg-slate-900 text-slate-300 text-xs space-y-6">
        <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border-b border-slate-800 pb-6">
          <div className="flex flex-wrap items-center gap-3">
            {/* 1. Indian Flag */}
            <div className="flex items-center space-x-2 bg-slate-800/80 px-2.5 py-1.5 rounded-xl border border-slate-700/60">
              <img src={INDIA_FLAG_PATH} alt="National Flag of India" className="w-6 h-4 object-cover rounded-xs" />
              <span className="text-[11px] font-bold text-slate-200">Government of India</span>
            </div>

            {/* 2. Maharashtra National Emblem */}
            <div className="flex items-center space-x-2 bg-slate-800/80 px-2.5 py-1.5 rounded-xl border border-slate-700/60">
              <img src={MAHARASHTRA_EMBLEM_PATH} alt="Government of Maharashtra" className="w-5 h-5 object-contain bg-white rounded-full p-0.5" />
              <span className="text-[11px] font-bold text-slate-200">Govt. of Maharashtra</span>
            </div>

            {/* 3. Maharashtra State Seal */}
            <div className="flex items-center space-x-2 bg-slate-800/80 px-2.5 py-1.5 rounded-xl border border-slate-700/60">
              <img src={MAHARASHTRA_SEAL_PATH} alt="State Seal of Maharashtra" className="w-5 h-5 object-contain bg-white rounded-full p-0.5" />
              <span className="text-[11px] font-bold text-slate-200">State Seal</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400 font-medium">
            <button onClick={() => scrollToSection('hero')} className="hover:text-white transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="hover:text-white transition-colors">
              How It Works
            </button>
            <button onClick={() => scrollToSection('architecture')} className="hover:text-white transition-colors">
              Architecture
            </button>
            <button onClick={() => scrollToSection('faq')} className="hover:text-white transition-colors">
              FAQ
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">
              Contact / Help
            </button>
            <button onClick={onWatchDemo} className="hover:text-white transition-colors text-amber-400">
              ▶ Video Demo
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-2 text-[11px] text-slate-500">
          <div>
            Built in accordance with Guidelines for Indian Government Websites (GIGW 3.0) and WCAG 2.1 AA.
          </div>
          <div>Ministry of Electronics & IT • Government of India</div>
        </div>
      </footer>
    </div>
  );
};
