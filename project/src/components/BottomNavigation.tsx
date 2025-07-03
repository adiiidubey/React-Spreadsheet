import React from 'react';
import { ViewMode } from '../types';

interface BottomNavigationProps {
  activeView: ViewMode;
  onViewChange: (view: ViewMode) => void;
  dataCounts: Record<ViewMode, number>;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({
  activeView,
  onViewChange,
  dataCounts
}) => {
  const views: ViewMode[] = ['All Orders', 'Pending', 'Reviewed', 'Arrived'];

  return (
    <div className="bg-white border-t border-gray-200 px-6 py-3">
      <div className="flex space-x-8">
        {views.map((view) => (
          <button
            key={view}
            onClick={() => onViewChange(view)}
            className={`flex items-center space-x-2 px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
              activeView === view
                ? 'text-blue-600 bg-blue-50 border border-blue-200'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            <span>{view}</span>
            <span 
              className={`px-2 py-0.5 text-xs rounded-full ${
                activeView === view
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              {dataCounts[view]}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};