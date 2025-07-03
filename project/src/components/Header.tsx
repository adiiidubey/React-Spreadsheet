import React from 'react';
import { User, Bell, Settings, HelpCircle } from 'lucide-react';
import { UserAvatar } from './UserAvatar';

interface HeaderProps {
  currentUser: any;
}

export const Header: React.FC<HeaderProps> = ({ currentUser }) => {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">📋</span>
            </div>
            <h1 className="text-xl font-semibold text-gray-900">Workspace</h1>
            <span className="text-gray-400">•</span>
            <span className="text-sm text-gray-600">Folder 2</span>
            <span className="text-gray-400">•</span>
            <span className="text-sm font-medium text-gray-900">Spreadsheet 3</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200">
              <Bell className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200">
              <HelpCircle className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200">
              <Settings className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex items-center space-x-3">
            <UserAvatar user={currentUser} size="md" />
            <div className="text-sm">
              <div className="font-medium text-gray-900">{currentUser.name}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};