import React from 'react';

interface StatusBadgeProps {
  status: 'In-progress' | 'Need to start' | 'Complete' | 'Blocked';
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const getStatusStyles = () => {
    switch (status) {
      case 'In-progress':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Need to start':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Complete':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Blocked':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <span 
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border transition-colors duration-200 ${getStatusStyles()}`}
    >
      {status}
    </span>
  );
};