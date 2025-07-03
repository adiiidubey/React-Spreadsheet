import React from 'react';
import { 
  EyeOff, 
  ArrowUpDown, 
  Filter, 
  Grid3X3, 
  Upload, 
  Download, 
  Share2, 
  Plus,
  Search,
  MoreHorizontal
} from 'lucide-react';

interface ToolbarProps {
  onImport: () => void;
  onExport: () => void;
  onShare: () => void;
  onNewAction: () => void;
  onToggleHideFields: () => void;
  onSort: () => void;
  onFilter: () => void;
  onCellView: () => void;
}

export const Toolbar: React.FC<ToolbarProps> = ({
  onImport,
  onExport,
  onShare,
  onNewAction,
  onToggleHideFields,
  onSort,
  onFilter,
  onCellView
}) => {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-700">Tool bar</span>
            <MoreHorizontal className="w-4 h-4 text-gray-400" />
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={onToggleHideFields}
              className="flex items-center space-x-2 px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
            >
              <EyeOff className="w-4 h-4" />
              <span>Hide fields</span>
            </button>
            
            <button
              onClick={onSort}
              className="flex items-center space-x-2 px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
            >
              <ArrowUpDown className="w-4 h-4" />
              <span>Sort</span>
            </button>
            
            <button
              onClick={onFilter}
              className="flex items-center space-x-2 px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
            >
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </button>
            
            <button
              onClick={onCellView}
              className="flex items-center space-x-2 px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
            >
              <Grid3X3 className="w-4 h-4" />
              <span>Cell view</span>
            </button>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={onImport}
            className="flex items-center space-x-2 px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
          >
            <Upload className="w-4 h-4" />
            <span>Import</span>
          </button>
          
          <button
            onClick={onExport}
            className="flex items-center space-x-2 px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
          >
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
          
          <button
            onClick={onShare}
            className="flex items-center space-x-2 px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
          >
            <Share2 className="w-4 h-4" />
            <span>Share</span>
          </button>
          
          <button
            onClick={onNewAction}
            className="flex items-center space-x-2 px-4 py-1.5 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 transition-colors duration-200 shadow-sm"
          >
            <Plus className="w-4 h-4" />
            <span>New Action</span>
          </button>
        </div>
      </div>
    </div>
  );
};