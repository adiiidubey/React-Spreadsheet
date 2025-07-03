import { SpreadsheetRow, User } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Alpha Patel',
    email: 'alpha@example.com',
    avatar: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=400',
    initials: 'AP'
  },
  {
    id: '2',
    name: 'Irfan Khan',
    email: 'irfan@example.com',
    avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400',
    initials: 'IK'
  },
  {
    id: '3',
    name: 'Mark Johnson',
    email: 'mark@example.com',
    avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    initials: 'MJ'
  },
  {
    id: '4',
    name: 'Emily Green',
    email: 'emily@example.com',
    avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
    initials: 'EG'
  },
  {
    id: '5',
    name: 'Jessica Brown',
    email: 'jessica@example.com',
    avatar: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400',
    initials: 'JB'
  },
  {
    id: '6',
    name: 'Sophie Choudhury',
    email: 'sophie@example.com',
    avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
    initials: 'SC'
  },
  {
    id: '7',
    name: 'Tejas Pandey',
    email: 'tejas@example.com',
    avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400',
    initials: 'TP'
  },
  {
    id: '8',
    name: 'Rachel Lee',
    email: 'rachel@example.com',
    avatar: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400',
    initials: 'RL'
  },
  {
    id: '9',
    name: 'Tom Wright',
    email: 'tom@example.com',
    avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    initials: 'TW'
  },
  {
    id: '10',
    name: 'Kevin Smith',
    email: 'kevin@example.com',
    avatar: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=400',
    initials: 'KS'
  }
];

export const mockData: SpreadsheetRow[] = [
  {
    id: '1',
    jobRequest: 'Launch social media campaign for product announcement',
    submitted: '15-11-2024',
    status: 'In-progress',
    submitter: mockUsers[0],
    url: 'www.alphaproduct.com',
    assigned: mockUsers[5],
    priority: 'Medium',
    dueDate: '20-11-2024',
    estimatedValue: 6200000
  },
  {
    id: '2',
    jobRequest: 'Update press kit for company rebranding initiative',
    submitted: '28-10-2024',
    status: 'Need to start',
    submitter: mockUsers[1],
    url: 'www.ifanslaap.com',
    assigned: mockUsers[6],
    priority: 'High',
    dueDate: '30-10-2024',
    estimatedValue: 3500000
  },
  {
    id: '3',
    jobRequest: 'Finalize user testing feedback for app redesign',
    submitted: '05-12-2024',
    status: 'In-progress',
    submitter: mockUsers[2],
    url: 'www.markbytus.com',
    assigned: mockUsers[7],
    priority: 'Medium',
    dueDate: '10-12-2024',
    estimatedValue: 4750000
  },
  {
    id: '4',
    jobRequest: 'Design new features for the website dashboard',
    submitted: '10-01-2025',
    status: 'Complete',
    submitter: mockUsers[3],
    url: 'www.emilygreen.com',
    assigned: mockUsers[8],
    priority: 'Low',
    dueDate: '15-01-2025',
    estimatedValue: 8900000
  },
  {
    id: '5',
    jobRequest: 'Prepare financial report for Q4 quarterly review',
    submitted: '25-01-2025',
    status: 'Blocked',
    submitter: mockUsers[4],
    url: 'www.jessicabro.com',
    assigned: mockUsers[9],
    priority: 'Low',
    dueDate: '30-01-2025',
    estimatedValue: 2800000
  }
];