export type ScreenId = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type AppMode = 'demo' | 'portal';
export type UserRole = 'citizen' | 'official' | 'admin';

export interface ServiceItem {
  id: string;
  name: string;
  marathiName?: string;
  department?: string;
  category: string;
  icon: string;
  bgLight: string;
  borderLight: string;
  description: string;
  departments: string[];
  dataPoints: string[];
  purpose: string;
  slaDays?: number;
}

export interface CitizenRequest {
  id: string;
  refNo: string;
  title: string;
  serviceId: string;
  applicantName?: string;
  aadhaarHash?: string;
  date: string;
  status: 'Completed' | 'Processing' | 'Pending' | 'Action Required' | 'Under Review';
  eligible: boolean;
  departments: string[];
  completedAt?: string;
  slaDeadline?: string;
  slaDaysRemaining?: number;
  dossier?: {
    identity: { status: string; matchScore: number; verifiedDate: string };
    income: { status: string; annualDeclared: string; verifiedTier: string };
    propertyOrEducation: { status: string; recordDetails: string };
  };
}

export interface DepartmentNode {
  id: string;
  name: string;
  shortName: string;
  icon: string;
  color: string;
  bg: string;
  accent: string;
  latency: string;
  verifiedFields: string[];
}

export interface DepartmentConnector {
  id: string;
  name: string;
  dept: string;
  protocol: 'REST' | 'SOAP-XML' | 'Webhook' | 'SQL-ODBC' | 'Beckn-DPI';
  type: 'Modern API' | 'Legacy Wrapper' | 'National Gateway';
  latencyMs: number;
  uptime: string;
  status: 'active' | 'degraded' | 'syncing';
  recordsSyncedToday: number;
}

export interface MasterBeneficiaryRecord {
  goldenId: string;
  fullName: string;
  aadhaarToken: string;
  mobile: string;
  panHash: string;
  rationCardNo: string;
  district: string;
  confidenceScore: number;
  duplicatePrevented: number;
  linkedDepartmentIds: {
    mahadbt: string;
    mahabhumi: string;
    mahaswayam: string;
    aaplesarkar: string;
  };
}

export interface AuditLogItem {
  id: string;
  timestamp: string;
  actor: string;
  role: string;
  action: string;
  sourceDept: string;
  targetDept: string;
  txHash: string;
  status: 'VERIFIED' | 'FAILED' | 'CONSENT_GRANTED';
}

