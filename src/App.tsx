import React, { useState, useEffect } from 'react';
import { ScreenId, ServiceItem, CitizenRequest } from './types';
import { SCREEN_CAPTIONS, SERVICES, INITIAL_REQUESTS } from './data/mockData';
import { Screen01Landing } from './components/screens/Screen01Landing';
import { Screen02SignIn } from './components/screens/Screen02SignIn';
import { Screen03CitizenHome } from './components/screens/Screen03CitizenHome';
import { Screen04StartRequest } from './components/screens/Screen04StartRequest';
import { Screen05RequestReview } from './components/screens/Screen05RequestReview';
import { Screen06Consent } from './components/screens/Screen06Consent';
import { Screen07AgentOrchestration } from './components/screens/Screen07AgentOrchestration';
import { Screen08DataExchange } from './components/screens/Screen08DataExchange';
import { Screen09Validation } from './components/screens/Screen09Validation';
import { Screen10FinalResult } from './components/screens/Screen10FinalResult';
import { Screen11RequestTimeline } from './components/screens/Screen11RequestTimeline';
import { Screen12RequestHistory } from './components/screens/Screen12RequestHistory';
import { ArchitectureModal } from './components/ArchitectureModal';
import { CertificateModal } from './components/CertificateModal';
import { AboutModal } from './components/AboutModal';
import { HowItWorksModal } from './components/HowItWorksModal';
import { DepartmentConsoleModal } from './components/DepartmentConsoleModal';
import { VideoPlayerModal } from './components/VideoPlayerModal';
import { SarkarSevaLogo, GovOfficialLogosBar } from './components/SarkarSevaLogo';
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Maximize2,
  Minimize2,
  Layers,
  Sparkles,
  RotateCcw,
  Info,
  HelpCircle,
  Building2,
  Home,
  Tv,
  Phone,
  X,
} from 'lucide-react';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenId>(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<ServiceItem>(SERVICES[0]);
  const [citizenName, setCitizenName] = useState<string>('Manya');
  const [refNumber, setRefNumber] = useState<string>('GV-00102');
  const [requestsList, setRequestsList] = useState<CitizenRequest[]>(INITIAL_REQUESTS);
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  const [isArchModalOpen, setIsArchModalOpen] = useState<boolean>(false);
  const [isCertModalOpen, setIsCertModalOpen] = useState<boolean>(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState<boolean>(false);
  const [isHowItWorksModalOpen, setIsHowItWorksModalOpen] = useState<boolean>(false);
  const [isDeptConsoleOpen, setIsDeptConsoleOpen] = useState<boolean>(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState<boolean>(false);
  const [officerInfo, setOfficerInfo] = useState({
    name: 'Rajesh Verma',
    department: 'UIDAI - Identity Department',
    email: 'rajesh.verma@uidai.gov.in',
    officerId: 'GOV-UID-8842',
  });

  // Auto-play timer (transitions every 4.5 seconds like a product demo presentation)
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentScreen((prev) => {
          if (prev >= 12) {
            setIsAutoPlaying(false);
            return 12;
          }
          return (prev + 1) as ScreenId;
        });
      }, 4200);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying]);

  const goToScreen = (screen: ScreenId) => {
    setCurrentScreen(screen);
  };

  const nextScreen = () => {
    if (currentScreen < 12) {
      setCurrentScreen((prev) => (prev + 1) as ScreenId);
    }
  };

  const prevScreen = () => {
    if (currentScreen > 1) {
      setCurrentScreen((prev) => (prev - 1) as ScreenId);
    }
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying((prev) => !prev);
  };

  const handleSelectService = (serviceId: string, customQuery?: string) => {
    const found = SERVICES.find((s) => s.id === serviceId) || SERVICES[0];
    setSelectedService(found);
    if (customQuery) {
      // If user typed a custom query, we could adjust ref number or title
      setRefNumber(`GV-${Math.floor(10000 + Math.random() * 90000)}`);
    }
    goToScreen(4);
  };

  const handleSignInContinue = (citizenData: { name: string; identifier: string; type: string }) => {
    if (citizenData.name) {
      setCitizenName(citizenData.name);
    }
    goToScreen(3);
  };

  const handleDepartmentLogin = (officerData: {
    name: string;
    department: string;
    email: string;
    officerId: string;
  }) => {
    setOfficerInfo(officerData);
    setIsDeptConsoleOpen(true);
  };

  const navigateToHomeSection = (sectionId: string) => {
    if (currentScreen !== 1) {
      setCurrentScreen(1);
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const captionData = SCREEN_CAPTIONS[currentScreen] || {
    title: `Screen ${currentScreen < 10 ? '0' + currentScreen : currentScreen}`,
    caption: '',
  };

  return (
    <div className="min-h-screen bg-[#050914] text-white flex flex-col justify-between p-2 md:p-6 select-none font-sans">
      {/* Outer Showcase Container */}
      <div
        className={`w-full mx-auto bg-[#090e1c] text-white rounded-3xl p-3 md:p-6 shadow-2xl border border-slate-800/80 flex flex-col justify-between transition-all duration-300 ${
          isFullScreen ? 'max-w-7xl min-h-[860px]' : 'max-w-5xl min-h-[760px]'
        }`}
      >
        {/* Top Demo Player Bar (Exact Match from Video Demo) */}
        <header className="flex flex-wrap items-center justify-between pb-3.5 border-b border-slate-800/80 text-xs md:text-sm gap-2">
          {/* Official Government Logos & Product Demo Badge - Clicking navigates to Home */}
          <div className="flex items-center space-x-2">
            <GovOfficialLogosBar variant="dark" onClickHome={() => goToScreen(1)} />
            <span className="text-blue-400 font-mono text-[10px] bg-blue-950/70 border border-blue-500/30 px-2 py-0.5 rounded-full hidden lg:inline">
              DPI Demo
            </span>
          </div>

          {/* Quick Screen Select & Interactive Navigation */}
          <div className="flex items-center space-x-2 md:space-x-2.5">
            {/* Direct Home Navigation Button */}
            <button
              onClick={() => navigateToHomeSection('hero')}
              className={`px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${
                currentScreen === 1
                  ? 'bg-blue-600 text-white font-bold shadow-xs'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white'
              }`}
              title="Return to Home Screen"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>

            {/* Play Demo Video Button */}
            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="px-3 py-1 rounded-full bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-md shadow-red-600/30 transition-all hover:scale-105 active:scale-95"
              title="Play Official Product Video Demo (01:47)"
            >
              <Play className="w-3 h-3 fill-current ml-0.5" />
              <span>Play Video</span>
            </button>

            {/* Quick Screen Dropdown */}
            <select
              value={currentScreen}
              onChange={(e) => goToScreen(Number(e.target.value) as ScreenId)}
              className="bg-slate-900 border border-slate-700/80 text-slate-300 rounded-full px-2.5 py-1 text-xs font-mono font-medium focus:outline-none focus:border-blue-500 cursor-pointer hidden sm:block"
            >
              {Array.from({ length: 12 }, (_, i) => i + 1).map((num) => (
                <option key={num} value={num}>
                  Screen {num < 10 ? `0${num}` : num} / 12
                </option>
              ))}
            </select>

            {/* Prev Button */}
            <button
              onClick={prevScreen}
              disabled={currentScreen === 1}
              className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 transition-all ${
                currentScreen === 1
                  ? 'bg-slate-800/40 text-slate-600 cursor-not-allowed'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300 active:scale-95'
              }`}
              title="Previous Screen"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Prev</span>
            </button>

            {/* Screen Counter (Exact text as in video: Screen 01 / 12) */}
            <span className="text-slate-400 font-mono text-xs md:text-sm font-semibold px-1">
              Screen {currentScreen < 10 ? `0${currentScreen}` : currentScreen} / 12
            </span>

            {/* Next Button */}
            <button
              onClick={nextScreen}
              disabled={currentScreen === 12}
              className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 transition-all ${
                currentScreen === 12
                  ? 'bg-slate-800/40 text-slate-600 cursor-not-allowed'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300 active:scale-95'
              }`}
              title="Next Screen"
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>

            {/* Auto-Play Toggle */}
            <button
              onClick={toggleAutoPlay}
              className={`px-3.5 py-1 rounded-full font-bold text-xs flex items-center gap-1.5 transition-all shadow-sm ${
                isAutoPlaying
                  ? 'bg-amber-600 hover:bg-amber-500 text-white animate-pulse'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
              }`}
            >
              {isAutoPlaying ? (
                <>
                  <Pause className="w-3 h-3 fill-current" />
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                  <span>Auto-play</span>
                </>
              )}
            </button>

            {/* About Page Navigation Button */}
            <button
              onClick={() => navigateToHomeSection('about')}
              className="px-2.5 py-1 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-semibold"
              title="About Sarkar Seva Platform"
            >
              <Info className="w-3.5 h-3.5 text-blue-400" />
              <span className="hidden md:inline">About</span>
            </button>

            {/* How It Works Page Navigation Button */}
            <button
              onClick={() => navigateToHomeSection('how-it-works')}
              className="px-2.5 py-1 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-semibold"
              title="How Sarkar Seva Works"
            >
              <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden md:inline">How It Works</span>
            </button>

            {/* Architecture Page Navigation Button */}
            <button
              onClick={() => navigateToHomeSection('architecture')}
              className="px-2.5 py-1 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-semibold"
              title="Inspect Multi-Agent Architecture"
            >
              <Layers className="w-3.5 h-3.5 text-indigo-400" />
              <span className="hidden lg:inline">Architecture</span>
            </button>

            {/* FAQ Page Navigation Button */}
            <button
              onClick={() => navigateToHomeSection('faq')}
              className="px-2.5 py-1 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-semibold"
              title="Frequently Asked Questions"
            >
              <HelpCircle className="w-3.5 h-3.5 text-teal-400" />
              <span className="hidden xl:inline">FAQ</span>
            </button>

            {/* Contact / Help Navigation Button */}
            <button
              onClick={() => navigateToHomeSection('contact')}
              className="px-2.5 py-1 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-semibold"
              title="Contact Us / Help Center"
            >
              <Phone className="w-3.5 h-3.5 text-rose-400" />
              <span className="hidden xl:inline">Contact / Help</span>
            </button>

            {/* Department Officer Gate Button */}
            <button
              onClick={() => setIsDeptConsoleOpen(true)}
              className="px-2.5 py-1 rounded-full bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/40 text-emerald-300 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-semibold"
              title="Department Nodal Officer Gate & Console"
            >
              <Building2 className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden xl:inline">Officer Gate</span>
            </button>

            {/* Expand / Minimize View */}
            <button
              onClick={() => setIsFullScreen((prev) => !prev)}
              className="p-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors hidden sm:block"
              title={isFullScreen ? 'Normal View' : 'Expanded View'}
            >
              {isFullScreen ? (
                <Minimize2 className="w-3.5 h-3.5" />
              ) : (
                <Maximize2 className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
        </header>

        {/* Viewport Container (Where the Screen Renders with Clean Transitions) */}
        <div className="relative w-full my-4 rounded-2xl overflow-hidden min-h-[580px] bg-slate-900 flex items-center justify-center border border-slate-800/50 shadow-inner">
          {/* Floating Auto-Play Status & Exit/Pause Pill */}
          {isAutoPlaying && (
            <div className="absolute top-3 left-1/2 -translate-x-1/2 z-40 bg-slate-950/90 backdrop-blur-md border border-slate-700 px-4 py-1.5 rounded-full text-xs font-semibold text-white flex items-center space-x-3 shadow-2xl animate-in fade-in slide-in-from-top-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <span>Auto-Playing Demo • Screen {currentScreen < 10 ? '0' + currentScreen : currentScreen} / 12</span>
              <button
                onClick={() => setIsAutoPlaying(false)}
                className="bg-amber-600 hover:bg-amber-500 text-white px-2.5 py-0.5 rounded-full text-[11px] font-bold flex items-center gap-1 transition-all cursor-pointer"
                title="Pause Auto-Play"
              >
                <Pause className="w-3 h-3 fill-current" />
                <span>Pause</span>
              </button>
              <button
                onClick={() => {
                  setIsAutoPlaying(false);
                  goToScreen(1);
                }}
                className="bg-slate-800 hover:bg-red-600 text-slate-300 hover:text-white px-2.5 py-0.5 rounded-full text-[11px] font-bold flex items-center gap-1 transition-all cursor-pointer"
                title="Stop & Exit to Home"
              >
                <X className="w-3 h-3" />
                <span>Exit Demo</span>
              </button>
            </div>
          )}

          {currentScreen === 1 && (
            <Screen01Landing
              onHome={() => navigateToHomeSection('hero')}
              onStart={() => goToScreen(2)}
              onWatchDemo={() => setIsVideoModalOpen(true)}
              onJumpToScreen={(screen) => goToScreen(screen)}
            />
          )}

          {currentScreen === 2 && (
            <Screen02SignIn
              onContinue={handleSignInContinue}
              onDepartmentLogin={handleDepartmentLogin}
              onBack={() => goToScreen(1)}
              autoFill={true}
            />
          )}

          {currentScreen === 3 && (
            <Screen03CitizenHome
              citizenName={citizenName}
              onSelectService={handleSelectService}
              onViewRequests={() => goToScreen(12)}
              onOpenAbout={() => setIsAboutModalOpen(true)}
              onOpenHowItWorks={() => setIsHowItWorksModalOpen(true)}
              autoTypeQuery={true}
            />
          )}

          {currentScreen === 4 && (
            <Screen04StartRequest
              service={selectedService}
              onContinue={() => goToScreen(5)}
              onBack={() => goToScreen(3)}
            />
          )}

          {currentScreen === 5 && (
            <Screen05RequestReview
              service={selectedService}
              refNo={refNumber}
              onContinue={() => goToScreen(6)}
              onBack={() => goToScreen(4)}
            />
          )}

          {currentScreen === 6 && (
            <Screen06Consent
              onAllow={() => goToScreen(7)}
              onCancel={() => goToScreen(5)}
            />
          )}

          {currentScreen === 7 && (
            <Screen07AgentOrchestration
              refNo={refNumber}
              onNext={() => goToScreen(8)}
              autoPlay={true}
            />
          )}

          {currentScreen === 8 && (
            <Screen08DataExchange onNext={() => goToScreen(9)} />
          )}

          {currentScreen === 9 && (
            <Screen09Validation onShowVerdict={() => goToScreen(10)} />
          )}

          {currentScreen === 10 && (
            <Screen10FinalResult
              service={selectedService}
              refNo={refNumber}
              onContinue={() => goToScreen(11)}
              onViewCertificate={() => setIsCertModalOpen(true)}
            />
          )}

          {currentScreen === 11 && (
            <Screen11RequestTimeline
              refNo={refNumber}
              onNext={() => goToScreen(12)}
            />
          )}

          {currentScreen === 12 && (
            <Screen12RequestHistory
              requests={requestsList}
              onSelectRequest={(req) => {
                setRefNumber(req.refNo);
                const s = SERVICES.find((item) => item.id === req.serviceId) || SERVICES[0];
                setSelectedService(s);
                goToScreen(10);
              }}
              onNewRequest={() => goToScreen(3)}
              onReplayDemo={() => {
                goToScreen(1);
                setIsAutoPlaying(true);
              }}
              showModalInitial={false}
            />
          )}
        </div>

        {/* Bottom Commentary & Narrative Sync Bar (Exact Match from Video) */}
        <footer className="pt-3 border-t border-slate-800 text-xs text-slate-400 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <div className="flex items-start gap-2.5 max-w-3xl">
            <span className="font-extrabold text-blue-400 whitespace-nowrap">
              {captionData.title}:
            </span>
            <p className="text-slate-300 font-medium leading-relaxed">
              {captionData.caption}
            </p>
          </div>

          <div className="flex items-center space-x-3 shrink-0 self-end md:self-center">
            <button
              onClick={() => goToScreen(1)}
              className="text-slate-400 hover:text-white text-xs flex items-center gap-1 transition-colors"
              title="Reset to Screen 01"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>

            <span className="text-slate-500 font-mono text-[11px] border-l border-slate-800 pl-3">
              Inspired by Sarkar Seva & Digital India Framework
            </span>
          </div>
        </footer>
      </div>

      {/* Auxiliary Modals */}
      <AboutModal
        isOpen={isAboutModalOpen}
        onClose={() => setIsAboutModalOpen(false)}
        onOpenHowItWorks={() => {
          setIsAboutModalOpen(false);
          setIsHowItWorksModalOpen(true);
        }}
        onStartRequest={() => {
          setIsAboutModalOpen(false);
          goToScreen(2);
        }}
      />

      <HowItWorksModal
        isOpen={isHowItWorksModalOpen}
        onClose={() => setIsHowItWorksModalOpen(false)}
        onJumpToStep={(screenNum) => {
          setIsHowItWorksModalOpen(false);
          goToScreen(screenNum as ScreenId);
        }}
      />

      <ArchitectureModal
        isOpen={isArchModalOpen}
        onClose={() => setIsArchModalOpen(false)}
      />

      <CertificateModal
        isOpen={isCertModalOpen}
        onClose={() => setIsCertModalOpen(false)}
        service={selectedService}
        refNo={refNumber}
        citizenName="Manya Sharma"
      />

      <DepartmentConsoleModal
        isOpen={isDeptConsoleOpen}
        onClose={() => setIsDeptConsoleOpen(false)}
        officerDetails={officerInfo}
        onSwitchToCitizen={() => {
          setIsDeptConsoleOpen(false);
          goToScreen(3);
        }}
      />

      <VideoPlayerModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        onJumpToInteractiveScreen={(screen) => {
          setIsVideoModalOpen(false);
          goToScreen(screen);
        }}
      />
    </div>
  );
}
