export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  initials: string;
}

export interface SpreadsheetRow {
  id: string;
  jobRequest: string;
  submitted: string;
  status: 'In-progress' | 'Need to start' | 'Complete' | 'Blocked';
  submitter: User;
  url: string;
  assigned: User;
  priority: 'High' | 'Medium' | 'Low';
  dueDate: string;
  estimatedValue: number;
}

export interface FilterState {
  column: string | null;
  value: string;
}

export interface SortState {
  column: string | null;
  direction: 'asc' | 'desc';
}

export type ViewMode = 'All Orders' | 'Pending' | 'Reviewed' | 'Arrived';