import React, { useState, useEffect } from 'react';
import {
  SarkarSevaLogo,
  INDIA_FLAG_PATH,
  MAHARASHTRA_EMBLEM_PATH,
  MAHARASHTRA_SEAL_PATH,
} from '../SarkarSevaLogo';
import {
  ArrowRight,
  Lock,
  CheckCircle2,
  Smartphone,
  Mail,
  CreditCard,
  Shield,
  Building2,
  KeyRound,
  Eye,
  EyeOff,
  User,
  Sparkles,
} from 'lucide-react';

interface Props {
  onContinue: (citizenData: { name: string; identifier: string; type: string }) => void;
  onDepartmentLogin?: (officerData: { name: string; department: string; email: string; officerId: string }) => void;
  onBack?: () => void;
  autoFill?: boolean;
}

export const Screen02SignIn: React.FC<Props> = ({
  onContinue,
  onDepartmentLogin,
  onBack,
  autoFill = true,
}) => {
  // Portal toggle: 'citizen' or 'department'
  const [portalType, setPortalType] = useState<'citizen' | 'department'>('citizen');

  // Mode: 'signin' or 'signup'
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');

  // Citizen 3 options: 'mobile' | 'email' | 'aadhaar'
  const [citizenOption, setCitizenOption] = useState<'mobile' | 'email' | 'aadhaar'>('mobile');

  // Form Fields - Citizen
  const [fullName, setFullName] = useState('Manya Sharma');
  const [mobileNumber, setMobileNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('manya.sharma@gov.in');
  const [aadhaarNumber, setAadhaarNumber] = useState('5482-9901-2041');
  const [otpCode, setOtpCode] = useState('4321');
  const [password, setPassword] = useState('••••••••••');
  const [showPassword, setShowPassword] = useState(false);
  const [otpSent, setOtpSent] = useState(false);

  // Form Fields - Department Officer
  const [selectedDept, setSelectedDept] = useState('UIDAI - Identity Department');
  const [officerEmail, setOfficerEmail] = useState('rajesh.verma@uidai.gov.in');
  const [officerId, setOfficerId] = useState('GOV-UID-8842');
  const [officerPasscode, setOfficerPasscode] = useState('NIC-SECURE-2026');

  // Auto-fill typing simulation for mobile (matches product demo video)
  useEffect(() => {
    if (autoFill && portalType === 'citizen' && citizenOption === 'mobile') {
      const targetNumber = '98765 43210';
      setMobileNumber('');
      let idx = 0;
      const interval = setInterval(() => {
        if (idx < targetNumber.length) {
          setMobileNumber((prev) => prev + targetNumber.charAt(idx));
          idx++;
        } else {
          clearInterval(interval);
        }
      }, 50);
      return () => clearInterval(interval);
    }
  }, [autoFill, portalType, citizenOption]);

  const handleCitizenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let identifier = '';
    if (citizenOption === 'mobile') identifier = mobileNumber || '98765 43210';
    if (citizenOption === 'email') identifier = emailAddress || 'manya.sharma@gov.in';
    if (citizenOption === 'aadhaar') identifier = aadhaarNumber || '5482-9901-2041';

    onContinue({
      name: fullName || 'Manya',
      identifier,
      type: citizenOption,
    });
  };

  const handleDepartmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onDepartmentLogin) {
      onDepartmentLogin({
        name: 'Rajesh Verma',
        department: selectedDept,
        email: officerEmail,
        officerId,
      });
    } else {
      // Fallback
      onContinue({
        name: 'Officer Rajesh Verma',
        identifier: officerId,
        type: 'department',
      });
    }
  };

  return (
    <div className="w-full h-full min-h-[600px] bg-white text-slate-900 flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-sm select-none">
      {/* Left Column: Visual Artwork & Trust Banner */}
      <div
        className={`w-full md:w-5/12 p-8 flex flex-col justify-between relative border-r border-slate-100 transition-colors duration-300 ${
          portalType === 'citizen'
            ? 'bg-gradient-to-b from-indigo-100 via-sky-50 to-blue-100'
            : 'bg-gradient-to-b from-slate-900 via-slate-800 to-indigo-950 text-white'
        }`}
      >
        {portalType === 'citizen' ? (
          <>
            <div>
              <div className="flex items-center space-x-2 pb-2">
                <img src={INDIA_FLAG_PATH} alt="India Flag" className="w-6 h-4 object-cover rounded-xs shadow-xs" />
                <img src={MAHARASHTRA_SEAL_PATH} alt="Maharashtra Seal" className="w-5 h-5 object-contain bg-white rounded-full p-0.5" />
                <span className="text-[10px] font-bold text-indigo-900 uppercase tracking-wider">
                  Govt. of Maharashtra
                </span>
              </div>
              <div className="font-handwriting text-3xl font-bold text-indigo-950 flex items-center gap-1.5">
                <span>Mumbai</span>
                <span className="text-amber-600 text-2xl font-serif">✦</span>
              </div>
              <div className="text-xs uppercase tracking-widest text-indigo-800 font-bold mt-0.5">
                Gateway of India
              </div>
            </div>

            {/* Gateway of India Architectural Illustration */}
            <div className="my-auto py-6 flex flex-col items-center justify-center relative">
              <div className="relative flex flex-col items-center">
                <div className="w-40 h-32 border-4 border-amber-900/40 rounded-t-full relative flex items-end justify-center bg-amber-100/60 shadow-inner">
                  <div className="w-18 h-20 bg-amber-900/30 rounded-t-full border-t-2 border-x-2 border-amber-900/40 mb-0" />
                  <div className="absolute -left-3 bottom-0 w-4 h-24 bg-amber-200 border-2 border-amber-900/40 rounded-t-sm" />
                  <div className="absolute -right-3 bottom-0 w-4 h-24 bg-amber-200 border-2 border-amber-900/40 rounded-t-sm" />
                </div>
                <div className="w-56 h-3 bg-blue-400 mt-2 rounded-full shadow-sm" />
                <div className="flex items-center space-x-2 text-xs text-blue-700 mt-2 font-mono font-medium">
                  <span className="text-base">⛵</span>
                  <span>Arabian Sea</span>
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-[11px] text-slate-600 font-bold">
                Citizen Self-Service Window
              </div>
              <div className="text-[10px] text-slate-500">
                Digital Public Infrastructure • Ministry of Electronics & IT (MeitY)
              </div>
            </div>
          </>
        ) : (
          /* Department Portal Left Panel */
          <>
            <div>
              <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                <Shield className="w-3.5 h-3.5" />
                <span>Government of India</span>
              </div>
              <div className="text-xl font-black text-white tracking-tight mt-1">
                Central Secretariat Mesh
              </div>
              <div className="text-xs text-slate-300 font-medium">
                National Nodal Officer & Registry Console
              </div>
            </div>

            {/* Official Seal Graphic */}
            <div className="my-auto py-8 flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-24 h-24 rounded-full bg-slate-800 border-2 border-emerald-500/40 flex items-center justify-center text-4xl shadow-xl shadow-emerald-900/20">
                🏛️
              </div>
              <div className="space-y-1">
                <div className="text-sm font-extrabold text-white">
                  Interoperability Admin Gateway
                </div>
                <div className="text-[11px] text-slate-400 max-w-xs leading-relaxed">
                  Authorized access for UIDAI, CBDT, State Land Registries, and Ministry Adjudicators.
                </div>
              </div>
            </div>

            <div className="text-[11px] text-slate-400 font-mono flex items-center gap-1.5">
              <Lock className="w-3 h-3 text-emerald-400" />
              <span>TLS 1.3 • AES-256 • NIC e-Gov Secured</span>
            </div>
          </>
        )}
      </div>

      {/* Right Column: Portal Switcher & Login / Signup Forms */}
      <div className="w-full md:w-7/12 p-6 md:p-10 flex flex-col justify-center max-w-lg mx-auto space-y-5 overflow-y-auto">
        {/* Portal Switcher Tabs: Citizen vs Department */}
        <div className="bg-slate-100 p-1 rounded-2xl flex items-center text-xs font-bold shadow-inner">
          <button
            type="button"
            onClick={() => setPortalType('citizen')}
            className={`flex-1 py-2 px-3 rounded-xl flex items-center justify-center space-x-2 transition-all ${
              portalType === 'citizen'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <span>👤</span>
            <span>Citizen Portal</span>
          </button>

          <button
            type="button"
            onClick={() => setPortalType('department')}
            className={`flex-1 py-2 px-3 rounded-xl flex items-center justify-center space-x-2 transition-all ${
              portalType === 'department'
                ? 'bg-[#0b1226] text-white shadow-sm'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <span>🏛️</span>
            <span>Department Official</span>
          </button>
        </div>

        {/* Header Greeting */}
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <SarkarSevaLogo size="xs" showText={false} />
            <span className="text-xs font-bold tracking-tight text-slate-800">Sarkar Seva</span>
            <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-mono">
              {portalType === 'citizen' ? 'Citizen Gate' : 'Nodal Officer'}
            </span>
          </div>

          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            {portalType === 'citizen'
              ? authMode === 'signin'
                ? 'Welcome back!'
                : 'Create Citizen Account'
              : 'Nodal Officer Login'}
          </h2>
          <p className="text-xs text-slate-500 font-medium">
            {portalType === 'citizen'
              ? 'Access unified public services, check eligibility & track requests.'
              : 'Authenticate using your authorized government credentials (@gov.in / @nic.in).'}
          </p>
        </div>

        {/* CITIZEN PORTAL FORM */}
        {portalType === 'citizen' && (
          <div className="space-y-4">
            {/* 3 Separate Options: Mobile | Email | Aadhaar */}
            <div className="grid grid-cols-3 gap-1 bg-slate-50 p-1 rounded-xl border border-slate-200/80 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setCitizenOption('mobile')}
                className={`py-2 px-2 rounded-lg flex items-center justify-center space-x-1.5 transition-all ${
                  citizenOption === 'mobile'
                    ? 'bg-white text-blue-700 shadow-xs border border-slate-200/60 font-bold'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Mobile</span>
              </button>

              <button
                type="button"
                onClick={() => setCitizenOption('email')}
                className={`py-2 px-2 rounded-lg flex items-center justify-center space-x-1.5 transition-all ${
                  citizenOption === 'email'
                    ? 'bg-white text-blue-700 shadow-xs border border-slate-200/60 font-bold'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </button>

              <button
                type="button"
                onClick={() => setCitizenOption('aadhaar')}
                className={`py-2 px-2 rounded-lg flex items-center justify-center space-x-1.5 transition-all ${
                  citizenOption === 'aadhaar'
                    ? 'bg-white text-blue-700 shadow-xs border border-slate-200/60 font-bold'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <CreditCard className="w-3.5 h-3.5" />
                <span>Aadhaar</span>
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleCitizenSubmit} className="space-y-3.5">
              {/* If Sign Up, ask for Full Name */}
              {authMode === 'signup' && (
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1 uppercase tracking-wider">
                    Full Legal Name (as per Aadhaar/PAN)
                  </label>
                  <div className="flex items-center border border-slate-300 rounded-xl px-3.5 py-2.5 bg-slate-50 focus-within:bg-white focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                    <User className="w-4 h-4 text-slate-400 mr-2" />
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Manya Sharma"
                      className="w-full bg-transparent text-xs font-semibold focus:outline-none text-slate-800"
                      required
                    />
                  </div>
                </div>
              )}

              {/* Option 1: Mobile */}
              {citizenOption === 'mobile' && (
                <div className="space-y-2">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1 uppercase tracking-wider">
                      Mobile Number
                    </label>
                    <div className="flex items-center border border-slate-300 rounded-xl px-3.5 py-2.5 bg-slate-50/70 focus-within:bg-white focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                      <span className="text-xs font-bold text-slate-700 border-r border-slate-300 pr-2.5 mr-2.5">
                        +91
                      </span>
                      <input
                        type="tel"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        placeholder="Enter 10-digit mobile number"
                        className="w-full bg-transparent text-xs font-semibold focus:outline-none text-slate-800 placeholder:text-slate-400"
                        required
                      />
                      {mobileNumber && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 ml-2" />
                      )}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-[11px] font-bold text-slate-700 mb-1 uppercase tracking-wider">
                      <span>Verification Code (OTP)</span>
                      <button
                        type="button"
                        onClick={() => setOtpSent(true)}
                        className="text-blue-600 hover:text-blue-800 font-semibold normal-case text-xs"
                      >
                        {otpSent ? 'Resend OTP' : 'Send OTP via SMS'}
                      </button>
                    </div>
                    <div className="flex items-center border border-slate-300 rounded-xl px-3.5 py-2 bg-slate-50 focus-within:bg-white focus-within:border-blue-600 transition-all">
                      <KeyRound className="w-4 h-4 text-slate-400 mr-2" />
                      <input
                        type="text"
                        value={otpCode}
                        onChange={(e) => setOtpCode(e.target.value)}
                        placeholder="Enter 4-digit OTP (demo: 4321)"
                        className="w-full bg-transparent text-xs font-mono font-semibold focus:outline-none text-slate-800"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Option 2: Email */}
              {citizenOption === 'email' && (
                <div className="space-y-2">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1 uppercase tracking-wider">
                      Email Address
                    </label>
                    <div className="flex items-center border border-slate-300 rounded-xl px-3.5 py-2.5 bg-slate-50 focus-within:bg-white focus-within:border-blue-600 transition-all">
                      <Mail className="w-4 h-4 text-slate-400 mr-2" />
                      <input
                        type="email"
                        value={emailAddress}
                        onChange={(e) => setEmailAddress(e.target.value)}
                        placeholder="name@example.com"
                        className="w-full bg-transparent text-xs font-semibold focus:outline-none text-slate-800"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-[11px] font-bold text-slate-700 mb-1 uppercase tracking-wider">
                      <span>Password or Passcode</span>
                      <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold normal-case text-xs">
                        Forgot?
                      </a>
                    </div>
                    <div className="flex items-center border border-slate-300 rounded-xl px-3.5 py-2 bg-slate-50 focus-within:bg-white focus-within:border-blue-600 transition-all">
                      <KeyRound className="w-4 h-4 text-slate-400 mr-2" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                        className="w-full bg-transparent text-xs font-mono font-semibold focus:outline-none text-slate-800"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="text-slate-400 hover:text-slate-600 ml-2"
                      >
                        {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Option 3: Aadhaar */}
              {citizenOption === 'aadhaar' && (
                <div className="space-y-2">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1 uppercase tracking-wider">
                      12-Digit Aadhaar Number / VID
                    </label>
                    <div className="flex items-center border border-slate-300 rounded-xl px-3.5 py-2.5 bg-slate-50 focus-within:bg-white focus-within:border-blue-600 transition-all">
                      <CreditCard className="w-4 h-4 text-slate-400 mr-2" />
                      <input
                        type="text"
                        value={aadhaarNumber}
                        onChange={(e) => setAadhaarNumber(e.target.value)}
                        placeholder="XXXX-XXXX-XXXX"
                        className="w-full bg-transparent text-xs font-mono font-bold tracking-wider focus:outline-none text-slate-800"
                        required
                      />
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 ml-2" />
                    </div>
                  </div>

                  <div className="bg-blue-50/70 border border-blue-200/80 p-2.5 rounded-xl text-[11px] text-blue-900 leading-tight">
                    🔒 Direct UIDAI authentication via DigiLocker token. OTP will be verified against your registered Aadhaar mobile.
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#0b1226] text-white py-3 rounded-xl text-xs font-bold hover:bg-slate-800 flex items-center justify-center space-x-2 shadow-md shadow-slate-900/10 transition-all active:scale-[0.99]"
              >
                <span>{authMode === 'signin' ? 'Continue to Sarkar Seva' : 'Complete Registration'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>

            {/* Toggle Signin / Signup */}
            <div className="text-center text-xs text-slate-500">
              {authMode === 'signin' ? (
                <>
                  New to Sarkar Seva?{' '}
                  <button
                    type="button"
                    onClick={() => setAuthMode('signup')}
                    className="font-bold text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    Register here
                  </button>
                </>
              ) : (
                <>
                  Already registered?{' '}
                  <button
                    type="button"
                    onClick={() => setAuthMode('signin')}
                    className="font-bold text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    Sign in
                  </button>
                </>
              )}
            </div>

            {/* Google SSO Button */}
            <div className="relative flex items-center justify-center">
              <div className="border-t border-slate-200 w-full" />
              <span className="bg-white px-3 text-[11px] text-slate-400 font-medium">or</span>
            </div>

            <button
              type="button"
              onClick={() => onContinue({ name: 'Manya Sharma', identifier: 'Google SSO', type: 'google' })}
              className="w-full border border-slate-200 py-2.5 rounded-xl text-xs font-medium text-slate-700 hover:bg-slate-50 flex items-center justify-center space-x-2 transition-all shadow-xs"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              <span>Continue with Google</span>
            </button>
          </div>
        )}

        {/* DEPARTMENT OFFICIAL PORTAL FORM */}
        {portalType === 'department' && (
          <form onSubmit={handleDepartmentSubmit} className="space-y-4">
            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1 uppercase tracking-wider">
                Select Department / Ministry
              </label>
              <div className="flex items-center border border-slate-300 rounded-xl px-3.5 py-2.5 bg-slate-50 focus-within:bg-white focus-within:border-blue-600 transition-all">
                <Building2 className="w-4 h-4 text-slate-400 mr-2" />
                <select
                  value={selectedDept}
                  onChange={(e) => setSelectedDept(e.target.value)}
                  className="w-full bg-transparent text-xs font-semibold focus:outline-none text-slate-800 cursor-pointer"
                >
                  <option value="UIDAI - Identity Department">UIDAI - Identity Department (Aadhaar Registry)</option>
                  <option value="CBDT - Income Department">CBDT - Income Department (Direct Taxes & ITR)</option>
                  <option value="State Revenue - Property Registry">State Revenue - Property & Land Records</option>
                  <option value="Ministry of Housing & Urban Affairs">Ministry of Housing & Urban Affairs (PMAY)</option>
                  <option value="Central Interoperability Mesh Admin">Central Interoperability Mesh Admin (MeitY)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1 uppercase tracking-wider">
                Official Govt Email (@gov.in / @nic.in)
              </label>
              <div className="flex items-center border border-slate-300 rounded-xl px-3.5 py-2.5 bg-slate-50 focus-within:bg-white focus-within:border-blue-600 transition-all">
                <Mail className="w-4 h-4 text-slate-400 mr-2" />
                <input
                  type="email"
                  value={officerEmail}
                  onChange={(e) => setOfficerEmail(e.target.value)}
                  placeholder="officer.name@nic.in"
                  className="w-full bg-transparent text-xs font-semibold focus:outline-none text-slate-800"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1 uppercase tracking-wider">
                  Officer PPO / Code
                </label>
                <div className="flex items-center border border-slate-300 rounded-xl px-3.5 py-2 bg-slate-50 focus-within:bg-white focus-within:border-blue-600 transition-all">
                  <input
                    type="text"
                    value={officerId}
                    onChange={(e) => setOfficerId(e.target.value)}
                    placeholder="e.g. GOV-UID-8842"
                    className="w-full bg-transparent text-xs font-mono font-bold focus:outline-none text-slate-800"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1 uppercase tracking-wider">
                  NIC 2FA Token
                </label>
                <div className="flex items-center border border-slate-300 rounded-xl px-3.5 py-2 bg-slate-50 focus-within:bg-white focus-within:border-blue-600 transition-all">
                  <KeyRound className="w-4 h-4 text-slate-400 mr-2" />
                  <input
                    type="password"
                    value={officerPasscode}
                    onChange={(e) => setOfficerPasscode(e.target.value)}
                    placeholder="Security token"
                    className="w-full bg-transparent text-xs font-mono font-bold focus:outline-none text-slate-800"
                    required
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#0b1226] text-white py-3 rounded-xl text-xs font-bold hover:bg-slate-800 flex items-center justify-center space-x-2 shadow-md shadow-slate-900/10 transition-all hover:scale-[1.01] active:scale-[0.99]"
            >
              <span>Authenticate as Department Official</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <div className="bg-amber-50 border border-amber-200/80 p-2.5 rounded-xl text-[11px] text-amber-900 leading-tight">
              ⚠️ Official government usage only. Unauthorized access attempts are monitored under the Information Technology Act 2000.
            </div>
          </form>
        )}

        {/* Security Reassurance */}
        <div className="flex items-center justify-center space-x-1.5 text-[11px] text-slate-500 pt-1">
          <Lock className="w-3.5 h-3.5 text-slate-400" />
          <span>Secure & trusted. Your data is safe with us.</span>
        </div>
      </div>
    </div>
  );
};
