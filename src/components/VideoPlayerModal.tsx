import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  FastForward,
  Rewind,
  ArrowRight,
  LogOut,
  Sparkles,
} from 'lucide-react';
import { ScreenId } from '../types';
import { SCREEN_CAPTIONS } from '../data/mockData';
import { SarkarSevaLogo } from './SarkarSevaLogo';
import { Screen01Landing } from './screens/Screen01Landing';
import { Screen02SignIn } from './screens/Screen02SignIn';
import { Screen03CitizenHome } from './screens/Screen03CitizenHome';
import { Screen04StartRequest } from './screens/Screen04StartRequest';
import { Screen05RequestReview } from './screens/Screen05RequestReview';
import { Screen06Consent } from './screens/Screen06Consent';
import { Screen07AgentOrchestration } from './screens/Screen07AgentOrchestration';
import { Screen08DataExchange } from './screens/Screen08DataExchange';
import { Screen09Validation } from './screens/Screen09Validation';
import { Screen10FinalResult } from './screens/Screen10FinalResult';
import { Screen11RequestTimeline } from './screens/Screen11RequestTimeline';
import { Screen12RequestHistory } from './screens/Screen12RequestHistory';
import { SERVICES, INITIAL_REQUESTS } from '../data/mockData';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onJumpToInteractiveScreen: (screen: ScreenId) => void;
}

// 12 chapters with exact start seconds based on video (total 107 seconds)
const CHAPTERS: { screen: ScreenId; startSec: number; endSec: number; title: string }[] = [
  { screen: 1, startSec: 0, endSec: 8, title: '01 Landing Page' },
  { screen: 2, startSec: 8, endSec: 16, title: '02 Sign In' },
  { screen: 3, startSec: 16, endSec: 25, title: '03 Citizen Home' },
  { screen: 4, startSec: 25, endSec: 33, title: '04 Start Request' },
  { screen: 5, startSec: 33, endSec: 41, title: '05 Request Review' },
  { screen: 6, startSec: 41, endSec: 49, title: '06 Consent / Authorization' },
  { screen: 7, startSec: 49, endSec: 61, title: '07 Agent Orchestration' },
  { screen: 8, startSec: 61, endSec: 71, title: '08 Data Exchange' },
  { screen: 9, startSec: 71, endSec: 80, title: '09 Validation' },
  { screen: 10, startSec: 80, endSec: 88, title: '10 Final Result' },
  { screen: 11, startSec: 88, endSec: 97, title: '11 Request Timeline' },
  { screen: 12, startSec: 97, endSec: 107, title: '12 Request History' },
];

export const VideoPlayerModal: React.FC<Props> = ({
  isOpen,
  onClose,
  onJumpToInteractiveScreen,
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [speed, setSpeed] = useState<number>(1);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showControlsHint, setShowControlsHint] = useState<boolean>(false);
  const totalDuration = 107; // 1:47 runtime

  const activeChapter =
    CHAPTERS.find((ch) => currentTime >= ch.startSec && currentTime < ch.endSec) ||
    CHAPTERS[CHAPTERS.length - 1];

  const currentScreenId = activeChapter.screen;
  const captionData = SCREEN_CAPTIONS[currentScreenId];

  // Speech Narration Ref
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const lastSpokenScreen = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      synthRef.current = window.speechSynthesis;
    }
  }, []);

  // Text-to-speech voice narration synchronized with each screen
  useEffect(() => {
    if (!isOpen || isMuted || !synthRef.current) {
      if (synthRef.current) synthRef.current.cancel();
      return;
    }

    if (lastSpokenScreen.current !== currentScreenId && isPlaying) {
      lastSpokenScreen.current = currentScreenId;
      synthRef.current.cancel();
      const textToSpeak = `${captionData?.title}. ${captionData?.caption}`;
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.rate = 1.05 * speed;
      utterance.pitch = 1.0;
      synthRef.current.speak(utterance);
    }
  }, [currentScreenId, isPlaying, isMuted, isOpen, speed, captionData]);

  // Global Keyboard Shortcuts (Escape to exit, Space to pause/play, Arrows to seek)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        handleClose();
      } else if (e.key === ' ' || e.code === 'Space') {
        e.preventDefault();
        togglePlay();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setCurrentTime((prev) => Math.max(0, prev - 5));
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        setCurrentTime((prev) => Math.min(totalDuration, prev + 5));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, totalDuration]);

  // Playback timer ticker
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (isOpen && isPlaying) {
      timer = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= totalDuration) {
            setIsPlaying(false);
            return totalDuration;
          }
          return Math.min(totalDuration, prev + 1);
        });
      }, 1000 / speed);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isOpen, isPlaying, speed, totalDuration]);

  if (!isOpen) return null;

  const togglePlay = () => {
    setIsPlaying((prev) => {
      const next = !prev;
      if (!next && synthRef.current) {
        synthRef.current.cancel();
      }
      return next;
    });
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setCurrentTime(val);
    if (synthRef.current) synthRef.current.cancel();
    lastSpokenScreen.current = null;
  };

  const jumpToChapter = (startSec: number) => {
    setCurrentTime(startSec);
    setIsPlaying(true);
    if (synthRef.current) synthRef.current.cancel();
    lastSpokenScreen.current = null;
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins < 10 ? '0' + mins : mins}:${secs < 10 ? '0' + secs : secs}`;
  };

  const handleClose = () => {
    if (synthRef.current) synthRef.current.cancel();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 md:p-6 bg-slate-950/92 backdrop-blur-xl overflow-y-auto select-none animate-in fade-in duration-200">
      <div
        className={`bg-[#060b18] text-white border border-slate-800 rounded-3xl w-full p-4 md:p-6 flex flex-col justify-between shadow-2xl relative transition-all duration-300 ${
          isFullscreen ? 'max-w-7xl h-[95vh]' : 'max-w-5xl min-h-[740px]'
        }`}
      >
        {/* Top Video Header with Prominent Exit & Pause Status */}
        <div className="flex flex-wrap items-center justify-between pb-3 border-b border-slate-800 text-xs md:text-sm gap-2">
          <div className="flex items-center space-x-2">
            <SarkarSevaLogo size="xs" showText={false} />
            <span className="font-extrabold tracking-tight text-white">
              Sarkar Seva
            </span>
            <span className="text-slate-400 font-mono text-xs hidden sm:inline">
              • Official Product Video Demo (01:47)
            </span>
            <span
              className={`text-[10px] font-bold px-2 py-0.5 rounded-full font-mono uppercase tracking-wider ${
                isPlaying
                  ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/30'
                  : 'bg-amber-950/80 text-amber-400 border border-amber-500/30'
              }`}
            >
              {isPlaying ? '▶ Playing' : '⏸ Paused'}
            </span>
          </div>

          {/* Quick Exit & Interactive Actions */}
          <div className="flex items-center space-x-2">
            {/* Quick Pause / Resume Button in Top Bar */}
            <button
              onClick={togglePlay}
              className={`px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm ${
                isPlaying
                  ? 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                  : 'bg-amber-600 hover:bg-amber-500 text-white animate-pulse'
              }`}
              title={isPlaying ? 'Pause Video (Space)' : 'Resume Video (Space)'}
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 fill-current" />
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  <span>Resume</span>
                </>
              )}
            </button>

            {/* Jump to Interactive Screen */}
            <button
              onClick={() => onJumpToInteractiveScreen(currentScreenId)}
              className="bg-blue-600 hover:bg-blue-500 text-white px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center space-x-1.5 shadow-sm transition-all hover:scale-105"
              title="Test this current screen interactively"
            >
              <span className="hidden sm:inline">Interactive Mode</span>
              <span className="sm:hidden">Try</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Prominent Exit Button in Header */}
            <button
              onClick={handleClose}
              className="bg-red-600/90 hover:bg-red-600 text-white px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-md shadow-red-600/30 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              title="Exit Video Demo (Press Esc)"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Exit Demo</span>
              <span className="text-[10px] bg-red-800/80 px-1.5 py-0.5 rounded font-mono hidden sm:inline">
                Esc
              </span>
            </button>
          </div>
        </div>

        {/* Video Screen Canvas Frame with Click-to-Pause/Play & Pause Overlay */}
        <div
          className="relative w-full my-3 rounded-2xl overflow-hidden min-h-[500px] flex-1 bg-slate-900 border border-slate-800 shadow-2xl flex items-center justify-center cursor-pointer group"
          onClick={togglePlay}
          onMouseEnter={() => setShowControlsHint(true)}
          onMouseLeave={() => setShowControlsHint(false)}
        >
          {/* Active Screen Rendering */}
          <div className="w-full h-full pointer-events-none">
            {currentScreenId === 1 && (
              <Screen01Landing
                onStart={() => jumpToChapter(8)}
                onWatchDemo={() => {}}
                onOpenArchitecture={() => {}}
                onOpenAbout={() => {}}
                onOpenHowItWorks={() => {}}
              />
            )}
            {currentScreenId === 2 && (
              <Screen02SignIn
                onContinue={() => jumpToChapter(16)}
                onBack={() => jumpToChapter(0)}
                autoFill={true}
              />
            )}
            {currentScreenId === 3 && (
              <Screen03CitizenHome
                citizenName="Manya"
                onSelectService={() => jumpToChapter(25)}
                onViewRequests={() => jumpToChapter(97)}
                autoTypeQuery={true}
              />
            )}
            {currentScreenId === 4 && (
              <Screen04StartRequest
                service={SERVICES[0]}
                onContinue={() => jumpToChapter(33)}
                onBack={() => jumpToChapter(16)}
              />
            )}
            {currentScreenId === 5 && (
              <Screen05RequestReview
                service={SERVICES[0]}
                refNo="GV-00102"
                onContinue={() => jumpToChapter(41)}
                onBack={() => jumpToChapter(25)}
              />
            )}
            {currentScreenId === 6 && (
              <Screen06Consent
                onAllow={() => jumpToChapter(49)}
                onCancel={() => jumpToChapter(33)}
              />
            )}
            {currentScreenId === 7 && (
              <Screen07AgentOrchestration
                refNo="GV-00102"
                onNext={() => jumpToChapter(61)}
                autoPlay={true}
              />
            )}
            {currentScreenId === 8 && (
              <Screen08DataExchange onNext={() => jumpToChapter(71)} />
            )}
            {currentScreenId === 9 && (
              <Screen09Validation onShowVerdict={() => jumpToChapter(80)} />
            )}
            {currentScreenId === 10 && (
              <Screen10FinalResult
                service={SERVICES[0]}
                refNo="GV-00102"
                onContinue={() => jumpToChapter(88)}
              />
            )}
            {currentScreenId === 11 && (
              <Screen11RequestTimeline
                refNo="GV-00102"
                onNext={() => jumpToChapter(97)}
              />
            )}
            {currentScreenId === 12 && (
              <Screen12RequestHistory
                requests={INITIAL_REQUESTS}
                onNewRequest={() => jumpToChapter(16)}
                onReplayDemo={() => jumpToChapter(0)}
                showModalInitial={currentTime >= 102}
              />
            )}
          </div>

          {/* PAUSED Big Center Badge & Tap-to-Resume Overlay */}
          {!isPlaying && (
            <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-xs flex flex-col items-center justify-center space-y-3 z-30 transition-all">
              <div className="w-18 h-18 rounded-full bg-blue-600/90 text-white flex items-center justify-center text-3xl shadow-2xl ring-4 ring-white/20 transition-transform hover:scale-110">
                <Play className="w-8 h-8 fill-current ml-1" />
              </div>
              <div className="text-center space-y-1">
                <div className="text-base font-extrabold text-white tracking-wide">
                  VIDEO PAUSED
                </div>
                <div className="text-xs text-slate-300">
                  Click anywhere or press Space to resume
                </div>
              </div>
            </div>
          )}

          {/* Hover Floating Controls Bar inside video screen */}
          {showControlsHint && isPlaying && (
            <div className="absolute top-4 right-4 z-30 bg-slate-950/80 border border-slate-700/80 px-3 py-1.5 rounded-full text-xs text-slate-300 flex items-center space-x-3 shadow-lg pointer-events-none">
              <span>Click screen to pause</span>
              <span className="text-slate-500 font-mono text-[10px]">Esc to exit</span>
            </div>
          )}

          {/* Subtitle Teleprompter Overlay at Bottom of Video Screen */}
          <div
            className="absolute bottom-3 inset-x-4 bg-slate-950/85 backdrop-blur-md border border-slate-700/70 p-2.5 rounded-xl text-center shadow-lg transition-all z-20 pointer-events-none"
          >
            <span className="text-amber-400 font-bold text-xs mr-2">
              [{activeChapter.title}]:
            </span>
            <span className="text-slate-100 text-xs font-medium leading-relaxed">
              {captionData?.caption}
            </span>
          </div>
        </div>

        {/* Video Controls Bar */}
        <div className="space-y-3 bg-[#080f22] p-3.5 rounded-2xl border border-slate-800">
          {/* Progress Timeline Scrubber */}
          <div className="space-y-1.5">
            <div className="relative flex items-center">
              <input
                type="range"
                min={0}
                max={totalDuration}
                value={currentTime}
                onChange={handleSeek}
                className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500 hover:h-2 transition-all"
              />
            </div>

            {/* Chapter Markers Row */}
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 overflow-x-auto gap-2 pt-0.5">
              {CHAPTERS.map((ch) => (
                <button
                  key={ch.screen}
                  onClick={() => jumpToChapter(ch.startSec)}
                  className={`px-1.5 py-0.5 rounded transition-colors whitespace-nowrap ${
                    currentScreenId === ch.screen
                      ? 'bg-blue-600 text-white font-bold'
                      : 'hover:text-slate-200'
                  }`}
                  title={`${ch.title} (${formatTime(ch.startSec)})`}
                >
                  {ch.screen < 10 ? '0' + ch.screen : ch.screen}
                </button>
              ))}
            </div>
          </div>

          {/* Buttons & Time Row */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
            {/* Left Controls */}
            <div className="flex items-center space-x-2.5">
              {/* Primary Play / Pause Button with Label */}
              <button
                onClick={togglePlay}
                className={`px-3.5 py-1.5 rounded-full font-bold text-xs flex items-center gap-1.5 transition-all shadow-sm ${
                  isPlaying
                    ? 'bg-blue-600 hover:bg-blue-500 text-white'
                    : 'bg-amber-600 hover:bg-amber-500 text-white ring-2 ring-amber-400/40'
                }`}
                title={isPlaying ? 'Pause Video (Space)' : 'Play Video (Space)'}
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3.5 h-3.5 fill-current" />
                    <span>Pause</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                    <span>Resume</span>
                  </>
                )}
              </button>

              <button
                onClick={() => setCurrentTime((prev) => Math.max(0, prev - 5))}
                className="text-slate-400 hover:text-white p-1"
                title="Rewind 5s (Left Arrow)"
              >
                <Rewind className="w-4 h-4" />
              </button>

              <button
                onClick={() => setCurrentTime((prev) => Math.min(totalDuration, prev + 5))}
                className="text-slate-400 hover:text-white p-1"
                title="Fast Forward 5s (Right Arrow)"
              >
                <FastForward className="w-4 h-4" />
              </button>

              <button
                onClick={() => jumpToChapter(0)}
                className="text-slate-400 hover:text-white p-1"
                title="Restart Video"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>

              {/* Timecode */}
              <div className="font-mono text-xs text-slate-300 font-semibold pl-1">
                <span className="text-blue-400">{formatTime(currentTime)}</span>
                <span className="text-slate-500"> / {formatTime(totalDuration)}</span>
              </div>
            </div>

            {/* Right Controls */}
            <div className="flex items-center space-x-2.5">
              {/* Audio Narration Toggle */}
              <button
                onClick={() => setIsMuted((prev) => !prev)}
                className={`flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-xs transition-colors ${
                  isMuted
                    ? 'bg-slate-800 text-slate-400 hover:text-slate-200'
                    : 'bg-emerald-950/70 border border-emerald-500/40 text-emerald-300'
                }`}
                title={isMuted ? 'Turn Narration Voice On' : 'Turn Narration Voice Off'}
              >
                {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                <span className="text-[11px] font-semibold">{isMuted ? 'Voice Off' : 'Voice Narration'}</span>
              </button>

              {/* Speed Selector */}
              <div className="flex items-center space-x-1 bg-slate-900 border border-slate-700/80 px-2 py-0.5 rounded-lg text-[11px] font-mono">
                {[1, 1.25, 1.5].map((s) => (
                  <button
                    key={s}
                    onClick={() => setSpeed(s)}
                    className={`px-1.5 py-0.5 rounded ${
                      speed === s ? 'bg-blue-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {s}x
                  </button>
                ))}
              </div>

              {/* Fullscreen Toggle */}
              <button
                onClick={() => setIsFullscreen((prev) => !prev)}
                className="text-slate-400 hover:text-white p-1"
                title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
              >
                {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
              </button>

              {/* Persistent Bottom Exit Button */}
              <button
                onClick={handleClose}
                className="bg-slate-800 hover:bg-red-600 text-slate-300 hover:text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 transition-all ml-1"
                title="Exit Video Demo (Esc)"
              >
                <X className="w-3.5 h-3.5" />
                <span>Exit</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
