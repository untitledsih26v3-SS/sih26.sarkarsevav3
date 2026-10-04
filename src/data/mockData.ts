import { CitizenRequest, DepartmentNode, ServiceItem } from '../types';

export const REAL_SERVICES = [
  'Senior Citizen Registration',
  'Online Marriage Registration',
  'Ayushman Bharat Card',
  'PAN Card Services',
  'Jeevan Pramaan (Life Certificate)',
  'Housing Scheme Eligibility',
  'Income Certificate Issuance',
  'Property Records & Land Title',
  'Scholarship Verification',
];

export const TRANSLATIONS: Record<string, any> = {
  English: {
    portalAccess: 'Official Portal Access',
    citizenPortal: 'Citizen Portal',
    deptOfficial: 'Dept Official',
    citizenServices: 'Citizen Services',
    deptDashboard: 'Department Oversight',
    aiMitra: 'Sarkar Mitra AI',
    searchPlaceholder: 'Search for Services, Schemes, or Keywords (e.g. Housing, Ayushman, PAN)...',
    trending: 'Trending Searches:',
    selectScheme: 'Target Scheme',
    applicantName: 'Applicant Full Name',
    proceedConsent: 'Proceed to Consent Gate',
    signOut: 'Sign Out',
    welcome: 'Namaste. I am Sarkar Mitra, your AI guide. How can I assist you with Maharashtra government services today?',
    askEligibility: 'Ask about scheme eligibility or track an application...',
    nationalPortal: 'National Portal of India',
    sihTitle: 'SIH 2026 • Problem Statement SIH26129',
    govState: 'Government of Maharashtra',
    subtitle: 'From Fragmented Services to a Unified, Citizen-Centric Interoperability Mesh',
  },
  Hindi: {
    portalAccess: 'आधिकारिक पोर्टल प्रवेश',
    citizenPortal: 'नागरिक पोर्टल',
    deptOfficial: 'विभागीय अधिकारी',
    citizenServices: 'नागरिक सेवाएं',
    deptDashboard: 'विभाग अवलोकन',
    aiMitra: 'सरकार मित्र AI',
    searchPlaceholder: 'सेवाओं, योजनाओं या कीवर्ड खोजें (जैसे आवास, आयुष्मान, पैन)...',
    trending: 'ट्रेंडिंग खोजें:',
    selectScheme: 'लक्षित योजना',
    applicantName: 'आवेदक का पूरा नाम',
    proceedConsent: 'सहमति के लिए आगे बढ़ें',
    signOut: 'साइन आउट',
    welcome: 'नमस्ते। मैं सरकार मित्र हूँ, आपका AI मार्गदर्शक। मैं आज महाराष्ट्र सरकारी सेवाओं में आपकी कैसे मदद कर सकता हूँ?',
    askEligibility: 'योजना पात्रता या आवेदन स्थिति के बारे में पूछें...',
    nationalPortal: 'भारत का राष्ट्रीय पोर्टल',
    sihTitle: 'एसआईएच 2026 • समस्या विवरण SIH26129',
    govState: 'महाराष्ट्र शासन',
    subtitle: 'खंडित सेवाओं से एकीकृत, नागरिक-केंद्रित इंटरऑपरेबिलिटी मेश',
  },
  Marathi: {
    portalAccess: 'अधिकृत पोर्टल प्रवेश',
    citizenPortal: 'नागरिक पोर्टल',
    deptOfficial: 'विभागीय अधिकारी',
    citizenServices: 'नागरिक सेवा',
    deptDashboard: 'विभाग देखरेख',
    aiMitra: 'सरकार मित्र AI',
    searchPlaceholder: 'सेवा, योजना किंवा कीवर्ड शोधा (उदा. गृहनिर्माण, आयुष्मान, पॅन)...',
    trending: 'ट्रेंडिंग शोध:',
    selectScheme: 'लक्ष्य योजना',
    applicantName: 'अर्जदाराचे पूर्ण नाव',
    proceedConsent: 'संमतीसाठी पुढे जा',
    signOut: 'साइन आउट',
    welcome: 'नमस्कार. मी सरकार मित्र आहे, तुमचा AI मार्गदर्शक. मी आज तुम्हाला महाराष्ट्र सरकारी सेवांमध्ये कशी मदत करू शकतो?',
    askEligibility: 'योजना पात्रतेबद्दल किंवा अर्जाच्या स्थितीबद्दल विचारा...',
    nationalPortal: 'भारताचे राष्ट्रीय पोर्टल',
    sihTitle: 'एसआयएच २०२६ • समस्या विवरण SIH26129',
    govState: 'महाराष्ट्र शासन',
    subtitle: 'विभक्त सेवांपासून एकात्मिक, नागरिक-केंद्रीत आंतरकार्यक्षमता प्रणाली',
  },
  Kannada: {
    portalAccess: 'ಅಧಿಕೃತ ಪೋರ್ಟಲ್ ಪ್ರವೇಶ',
    citizenPortal: 'ನಾಗರಿಕ ಪೋರ್ಟಲ್',
    deptOfficial: 'ಇಲಾಖಾ ಅಧಿಕಾರಿ',
    citizenServices: 'ನಾಗರಿಕ ಸೇವೆಗಳು',
    deptDashboard: 'ಇಲಾಖೆಯ ಮೇಲ್ವಿಚಾರಣೆ',
    aiMitra: 'ಸರ್ಕಾರ್ ಮಿತ್ರ AI',
    searchPlaceholder: 'ಸೇವೆಗಳು, ಯೋಜನೆಗಳು ಅಥವಾ ಕೀವರ್ಡ್‌‌ಗಳನ್ನು ಹುಡುಕಿ...',
    trending: 'ಟ್ರೆಂಡಿಂಗ್ ಹುಡುಕಾಟಗಳು:',
    selectScheme: 'ಗುರಿ ಯೋಜನೆ',
    applicantName: 'ಅರ್ಜಿದಾರರ ಪೂರ್ಣ ಹೆಸರು',
    proceedConsent: 'ಸಮ್ಮತಿಗೆ ಮುಂದುವರಿಯಿರಿ',
    signOut: 'ಸೈನ್ ಔಟ್',
    welcome: 'ನಮಸ್ಕಾರ. ನಾನು ಸರ್ಕಾರ್ ಮಿತ್ರ, ನಿಮ್ಮ AI ಮಾರ್ಗದರ್ಶಿ. ಸರ್ಕಾರಿ ಸೇವೆಗಳೊಂದಿಗೆ ನಾನು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?',
    askEligibility: 'ಯೋಜನೆಯ ಅರ್ಹತೆಯ ಬಗ್ಗೆ ಕೇಳಿ...',
    nationalPortal: 'ಭಾರತದ ರಾಷ್ಟ್ರೀಯ ಪೋರ್ಟಲ್',
    sihTitle: 'ಎಸ್ಐಎಚ್ 2026 • ಸಮಸ್ಯೆ ಹೇಳಿಕೆ SIH26129',
    govState: 'ಮಹಾರಾಷ್ಟ್ರ ಸರ್ಕಾರ',
    subtitle: 'ಏಕೀಕೃತ ನಾಗರಿಕ ಕೇಂದ್ರಿತ ಅಂತರಕಾರ್ಯಸಾಧ್ಯತೆಯ ಜಾಲ',
  },
};

export interface AdminCaseItem {
  id: string;
  name: string;
  service: string;
  status: 'Cleared' | 'Anomaly' | 'Pending AI' | 'Manual Review';
  date: string;
  flagged: boolean;
  mismatchDetail?: {
    revenueDb: string;
    identityDb: string;
    reason: string;
  };
}

export const INITIAL_ADMIN_CASES: AdminCaseItem[] = [
  {
    id: 'TXN-IND-88421',
    name: 'Ramesh Kumar',
    service: 'Ayushman Bharat Card',
    status: 'Cleared',
    date: '2026-09-28',
    flagged: false,
  },
  {
    id: 'TXN-IND-11234',
    name: 'John Doe',
    service: 'Income Certificate Issuance',
    status: 'Anomaly',
    date: '2026-09-28',
    flagged: true,
    mismatchDetail: {
      revenueDb: 'J. Doe (Form 26AS mismatch)',
      identityDb: 'John Doe (Aadhaar Verified)',
      reason: 'Name abbreviation mismatch detected across State Revenue DB and CBDT tax records.',
    },
  },
  {
    id: 'TXN-IND-99321',
    name: 'Priya Sharma',
    service: 'PAN Card Services',
    status: 'Pending AI',
    date: '2026-09-29',
    flagged: false,
  },
  {
    id: 'TXN-IND-77210',
    name: 'Anita Desai',
    service: 'Housing Scheme Eligibility',
    status: 'Cleared',
    date: '2026-09-29',
    flagged: false,
  },
  {
    id: 'TXN-IND-55432',
    name: 'Vikram Singh',
    service: 'Senior Citizen Registration',
    status: 'Manual Review',
    date: '2026-09-29',
    flagged: false,
  },
  {
    id: 'IC-2025-99212',
    name: 'Ramesh Kumar',
    service: 'Income Certificate Issuance',
    status: 'Anomaly',
    date: '2026-09-30',
    flagged: true,
    mismatchDetail: {
      revenueDb: 'Ramesh K. (State Treasury DB)',
      identityDb: 'Ramesh Kumar (UIDAI Registry)',
      reason: 'Cross-departmental name spelling variance detected between Land Records & UIDAI identity.',
    },
  },
  {
    id: 'HS-2025-01478',
    name: 'Manya C R',
    service: 'Housing Scheme Eligibility',
    status: 'Cleared',
    date: '2026-09-30',
    flagged: false,
  },
];

export const COMPARISON_MATRIX = [
  {
    capability: 'Single Citizen Identity',
    aapleSarkar: 'Partial',
    digiLocker: 'Partial',
    umang: 'No',
    manualFiles: 'No',
    sarkarSeva: 'Yes (Federated e-Pramaan / UIDAI)',
  },
  {
    capability: 'Automated Cross-Dept. Workflow',
    aapleSarkar: 'No (Siloed)',
    digiLocker: 'No (Repository only)',
    umang: 'No (App container)',
    manualFiles: 'Manual Hand-offs',
    sarkarSeva: 'Yes (LangGraph Swarm)',
  },
  {
    capability: 'Consent-based, DPDP-aligned',
    aapleSarkar: 'Limited',
    digiLocker: 'Yes',
    umang: 'Limited',
    manualFiles: 'No',
    sarkarSeva: 'Yes (Strict DPDP 2023 Ephemeral)',
  },
  {
    capability: 'Real-time Unified Status Tracking',
    aapleSarkar: 'Per-service isolated',
    digiLocker: 'No',
    umang: 'Partial',
    manualFiles: 'No',
    sarkarSeva: 'Yes (Immutable Event Bus & Audit Log)',
  },
  {
    capability: 'Anomaly / Mismatch Detection',
    aapleSarkar: 'No',
    digiLocker: 'No',
    umang: 'No',
    manualFiles: 'No',
    sarkarSeva: 'Yes (AI Validation Agent)',
  },
  {
    capability: 'SLA & Cross-Department Analytics',
    aapleSarkar: 'Limited',
    digiLocker: 'No',
    umang: 'Limited',
    manualFiles: 'No',
    sarkarSeva: 'Yes (Prometheus / Grafana Observability)',
  },
];

export const CITATIONS_DATA = [
  {
    title: 'InDeA Framework (National Reference Baseline)',
    citation: 'MeitY (2018). India Enterprise Architecture (InDeA) Reference Architecture.',
    focus: 'Defines federated, domain-driven enterprise architecture, SSO (e-Pramaan), and data exchange standards.',
    mapping: 'Primary blueprint for integrating legacy systems. Maps to overall architecture, security, and unified portals.',
  },
  {
    title: 'E-Government Interoperability Frameworks',
    citation: 'Guijarro, L. (2007). "Interoperability frameworks for e-government: A review of European initiatives."',
    focus: 'Distinguishes technical, semantic, organizational, and legal interoperability layers.',
    mapping: 'Guides design of common data schemas, MDM, and reusable API connectors.',
  },
  {
    title: 'Interconnected Government & Joint-Service Networks',
    citation: 'Klievink, B., & Janssen, M. (2009). "Realizing interconnected government: Developing joint-service delivery networks."',
    focus: 'Approaches for combining standalone portals into unified joint-service networks using middleware and SOA.',
    mapping: 'Informs the design of a configurable Workflow Orchestrator and Unified Tracking across agencies.',
  },
  {
    title: 'Legacy Integration & Master Data Management (MDM)',
    citation: 'Scholl, H. J., & Klischewski, R. (2007). "E-Government Integration and the Basis of XML among the Research Agenda."',
    focus: 'Distinguishes deep system integration from lightweight interoperability, outlining strategies for API wrappers.',
    mapping: 'Solves challenges of legacy system isolation. Frames use of API gateway and wrap-around data sharing.',
  },
];

export const SCREEN_CAPTIONS: Record<number, { title: string; caption: string }> = {
  1: {
    title: '01 Landing Page',
    caption: 'Sarkar Seva opens with one clear promise: government services, connected. Identity, Income and Revenue departments are joined around a single request — same you, better process, faster services.',
  },
  2: {
    title: '02 Sign In',
    caption: 'Citizens log in with a mobile number or email, use Aadhaar, or continue with Google. A quiet reassurance sits underneath: secure and trusted, your data is safe with us.',
  },
  3: {
    title: '03 Citizen Home (Dashboard)',
    caption: 'Manya lands on her dashboard. She simply types what she needs in plain language, or picks a popular service — Housing Scheme, Income Certificate, Property Records — and sees her recent requests below.',
  },
  4: {
    title: '04 Start a Request',
    caption: 'Sarkar Seva understands the request instantly — Housing Scheme Eligibility — and shows exactly which systems will be involved: the Identity, Income and Revenue departments.',
  },
  5: {
    title: '05 Request Review',
    caption: 'Before anything is fetched, the citizen reviews the request: what information is needed — Identity, Income, Property — and the purpose, with a summary of 3 departments, 2 data points and 1 request.',
  },
  6: {
    title: '06 Consent / Authorization',
    caption: 'Citizens stay in control. Sarkar Seva asks permission for each department and each detail it will access — data is used only for this request and access can be revoked anytime. Your data. Your control. Our responsibility.',
  },
  7: {
    title: '07 Agent Orchestration (Live)',
    caption: 'The live view: six coordinated agents work as one — Request, Routing, three Data Agents (Identity, Income, Property), Validation, Consent & Security, and Response. Multiple agents. One goal.',
  },
  8: {
    title: '08 Data Exchange',
    caption: 'Behind the scenes, government systems talk through the interoperability layer. Requests are standardised, exchanged securely with Identity, Income and Revenue departments, and the response is returned to the agents.',
  },
  9: {
    title: '09 Validation',
    caption: 'Information is cross-checked across departments: identity match found, income record verified, property details verified. Consistency checks pass and the result is 4 / 4 verified — no duplicate submission required.',
  },
  10: {
    title: '10 Final Result',
    caption: 'All systems in sync. The verdict is clear: Housing Scheme Eligibility — ELIGIBLE — based on verified information from 3 government systems, with Request ID GV-00102 completed at 09:43 AM on 12 Sep 2026.',
  },
  11: {
    title: '11 Request Timeline',
    caption: 'Every step is traceable. The Request Journey records each moment from submission at 09:41 to eligibility confirmed at 09:43 — tracked across departments, in real time.',
  },
  12: {
    title: '12 Request History',
    caption: 'All requests live in one place. Your Requests shows every service with its reference number, date and status — Housing Scheme, Scholarship Verification and Property Records completed, Income Certificate still processing. Small steps. Big impact.',
  },
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'housing-scheme',
    name: 'Housing Scheme',
    category: 'Welfare & Housing',
    icon: '🏠',
    bgLight: 'bg-amber-50/80',
    borderLight: 'border-amber-200/70',
    description: "We'll check information from multiple departments to determine eligibility.",
    departments: ['Identity Department', 'Income Department', 'Revenue Department'],
    dataPoints: ['Name & Aadhaar verification', 'Annual income details', 'Existing property records'],
    purpose: 'Determining scheme eligibility based on your verified information across national registries.',
  },
  {
    id: 'income-cert',
    name: 'Income Certificate',
    category: 'Revenue & Tax',
    icon: '📄',
    bgLight: 'bg-blue-50/80',
    borderLight: 'border-blue-200/70',
    description: 'Instant certified income certificate issuance via automated tax and payroll records.',
    departments: ['Identity Department', 'Income Department'],
    dataPoints: ['Aadhaar biometric hash', 'CBDT Form 26AS/ITR', 'Bank statement validation'],
    purpose: 'Issuing verifiable digital income certificate with tamper-proof cryptographic signature.',
  },
  {
    id: 'property-records',
    name: 'Property Records',
    category: 'Land & Urban',
    icon: '🏡',
    bgLight: 'bg-emerald-50/80',
    borderLight: 'border-emerald-200/70',
    description: 'Land parcel ownership verification and encumbrance certificate retrieval.',
    departments: ['Identity Department', 'Revenue Department'],
    dataPoints: ['Aadhaar verification', 'State Land Survey registry', 'Sub-registrar deed index'],
    purpose: 'Ownership title authentication and non-encumbrance status verification.',
  },
  {
    id: 'scholarship-verification',
    name: 'Scholarship Verification',
    category: 'Education & Youth',
    icon: '🎓',
    bgLight: 'bg-purple-50/80',
    borderLight: 'border-purple-200/70',
    description: 'Automated student merit-cum-means scholarship eligibility check.',
    departments: ['Identity Department', 'Income Department', 'Education Board'],
    dataPoints: ['Student enrollment ID', 'Parent annual income', 'Academic percentile record'],
    purpose: 'Disbursing direct benefit transfer (DBT) scholarship support to qualified scholars.',
  },
];

export const DEPARTMENTS: DepartmentNode[] = [
  {
    id: 'identity',
    name: 'Identity Department',
    shortName: 'Identity Dept',
    icon: '👤',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    accent: 'border-blue-200',
    latency: '4m',
    verifiedFields: ['Name & DoB', 'Aadhaar Verification', 'Biometric Token Hash', 'Residential Address'],
  },
  {
    id: 'income',
    name: 'Income Department',
    shortName: 'Income Dept',
    icon: '💰',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    accent: 'border-amber-200',
    latency: '4m',
    verifiedFields: ['Annual Gross Income', 'ITR Assessment Year', 'Tax Filing Status', 'Income Slab Category'],
  },
  {
    id: 'revenue',
    name: 'Revenue Department',
    shortName: 'Revenue Dept',
    icon: '🏛️',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    accent: 'border-emerald-200',
    latency: '4m',
    verifiedFields: ['Property Ownership Records', 'Urban Land Holding', 'Agricultural Acreage', 'Title Encumbrance'],
  },
];

export const INITIAL_REQUESTS: CitizenRequest[] = [
  {
    id: 'req-01',
    refNo: 'GV-00102',
    title: 'Housing Scheme Eligibility',
    serviceId: 'housing-scheme',
    date: '12 Sep 2026',
    status: 'Completed',
    eligible: true,
    departments: ['Identity Dept', 'Income Dept', 'Revenue Dept'],
    completedAt: '09:43 AM • 12 Sep 2026',
  },
  {
    id: 'req-02',
    refNo: 'SV-00131',
    title: 'Scholarship Verification',
    serviceId: 'scholarship-verification',
    date: '08 Sep 2026',
    status: 'Completed',
    eligible: true,
    departments: ['Identity Dept', 'Income Dept', 'Education Board'],
    completedAt: '02:15 PM • 08 Sep 2026',
  },
  {
    id: 'req-03',
    refNo: 'IC-00090',
    title: 'Income Certificate',
    serviceId: 'income-cert',
    date: '01 Sep 2026',
    status: 'Processing',
    eligible: true,
    departments: ['Identity Dept', 'Income Dept'],
  },
  {
    id: 'req-04',
    refNo: 'PR-00087',
    title: 'Property Records',
    serviceId: 'property-records',
    date: '01 Sep 2026',
    status: 'Completed',
    eligible: true,
    departments: ['Identity Dept', 'Revenue Dept'],
    completedAt: '11:20 AM • 01 Sep 2026',
  },
];

export const TIMELINE_EVENTS = [
  { time: '09:41', title: 'Request submitted', detail: 'Citizen Manya initiated Housing Scheme Eligibility query' },
  { time: '09:41', title: 'Request understood', detail: 'Natural language semantic parsing resolved intent & criteria' },
  { time: '09:42', title: 'Departments identified', detail: 'Routing agent identified Identity, Income & Revenue dependencies' },
  { time: '09:42', title: 'Identity verified', detail: 'Aadhaar UIDAI token authenticated with zero-knowledge proof' },
  { time: '09:42', title: 'Income verified', detail: 'Income Tax CBDT automated verification cleared (< ₹3.5L threshold)' },
  { time: '09:43', title: 'Property verified', detail: 'State Land Survey registry confirmed zero existing urban dwelling ownership' },
  { time: '09:43', title: 'Eligibility confirmed', detail: 'Adjudication engine verified 4/4 mandatory conditions met' },
];
