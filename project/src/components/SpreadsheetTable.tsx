import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { SpreadsheetRow, SortState } from '../types';
import { UserAvatar } from './UserAvatar';
import { StatusBadge } from './StatusBadge';
import { PriorityBadge } from './PriorityBadge';
import { format } from 'date-fns';

interface SpreadsheetTableProps {
  data: SpreadsheetRow[];
  onSort: (column: string) => void;
  sortState: SortState;
}

export const SpreadsheetTable: React.FC<SpreadsheetTableProps> = ({
  data,
  onSort,
  sortState
}) => {
  const [editingCell, setEditingCell] = useState<{row: string, column: string} | null>(null);

  const formatCurrency = (value: number) => {
    return `₹${(value / 1000000).toFixed(1)}M`;
  };

  const formatDate = (dateString: string) => {
    try {
      const [day, month, year] = dateString.split('-');
      const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
      return format(date, 'dd-MM-yyyy');
    } catch {
      return dateString;
    }
  };

  const handleCellDoubleClick = (rowId: string, column: string) => {
    setEditingCell({ row: rowId, column });
  };

  const handleCellBlur = () => {
    setEditingCell(null);
  };

  const SortButton: React.FC<{ column: string; children: React.ReactNode }> = ({ column, children }) => (
    <button
      onClick={() => onSort(column)}
      className="flex items-center space-x-1 text-left w-full hover:bg-gray-50 px-2 py-1 rounded transition-colors duration-200"
    >
      <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">{children}</span>
      <div className="flex flex-col">
        <ChevronUp 
          className={`w-3 h-3 ${
            sortState.column === column && sortState.direction === 'asc' 
              ? 'text-blue-600' 
              : 'text-gray-300'
          }`} 
        />
        <ChevronDown 
          className={`w-3 h-3 -mt-1 ${
            sortState.column === column && sortState.direction === 'desc' 
              ? 'text-blue-600' 
              : 'text-gray-300'
          }`} 
        />
      </div>
    </button>
  );

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left">
                <SortButton column="jobRequest">Job Request</SortButton>
              </th>
              <th className="px-6 py-3 text-left">
                <SortButton column="submitted">Submitted</SortButton>
              </th>
              <th className="px-6 py-3 text-left">
                <SortButton column="status">Status</SortButton>
              </th>
              <th className="px-6 py-3 text-left">
                <SortButton column="submitter">Submitter</SortButton>
              </th>
              <th className="px-6 py-3 text-left">
                <SortButton column="url">URL</SortButton>
              </th>
              <th className="px-6 py-3 text-left">
                <SortButton column="assigned">Assigned</SortButton>
              </th>
              <th className="px-6 py-3 text-left">
                <SortButton column="priority">Priority</SortButton>
              </th>
              <th className="px-6 py-3 text-left">
                <SortButton column="dueDate">Due Date</SortButton>
              </th>
              <th className="px-6 py-3 text-left">
                <SortButton column="estimatedValue">Est. Value</SortButton>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.map((row, index) => (
              <tr key={row.id} className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-6 py-4">
                  <div 
                    className="text-sm text-gray-900 max-w-xs cursor-text"
                    onDoubleClick={() => handleCellDoubleClick(row.id, 'jobRequest')}
                    onBlur={handleCellBlur}
                  >
                    {row.jobRequest}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-gray-900">{formatDate(row.submitted)}</span>
                </td>
                <td className="px-6 py-4">
                  <StatusBadge status={row.status} />
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <UserAvatar user={row.submitter} size="sm" />
                    <span className="text-sm text-gray-900 font-medium">{row.submitter.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <a
                    href={`https://${row.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200"
                  >
                    <span>{row.url}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <UserAvatar user={row.assigned} size="sm" />
                    <span className="text-sm text-gray-900 font-medium">{row.assigned.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <PriorityBadge priority={row.priority} />
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-gray-900">{formatDate(row.dueDate)}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm font-medium text-gray-900">{formatCurrency(row.estimatedValue)}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {data.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-500 text-sm">No data available</div>
        </div>
      )}
    </div>
  );
};