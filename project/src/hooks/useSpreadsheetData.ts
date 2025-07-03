import { useState, useMemo } from 'react';
import { SpreadsheetRow, FilterState, SortState, ViewMode } from '../types';
import { mockData } from '../data/mockData';

export const useSpreadsheetData = () => {
  const [data] = useState<SpreadsheetRow[]>(mockData);
  const [filterState, setFilterState] = useState<FilterState>({ column: null, value: '' });
  const [sortState, setSortState] = useState<SortState>({ column: null, direction: 'asc' });
  const [activeView, setActiveView] = useState<ViewMode>('All Orders');

  const filteredAndSortedData = useMemo(() => {
    let result = [...data];

    // Apply view filter
    if (activeView !== 'All Orders') {
      switch (activeView) {
        case 'Pending':
          result = result.filter(row => row.status === 'In-progress' || row.status === 'Need to start');
          break;
        case 'Reviewed':
          result = result.filter(row => row.status === 'Complete');
          break;
        case 'Arrived':
          result = result.filter(row => row.status === 'Blocked');
          break;
      }
    }

    // Apply filter
    if (filterState.column && filterState.value) {
      result = result.filter(row => {
        const value = row[filterState.column as keyof SpreadsheetRow];
        if (typeof value === 'string') {
          return value.toLowerCase().includes(filterState.value.toLowerCase());
        }
        if (typeof value === 'object' && value && 'name' in value) {
          return (value as any).name.toLowerCase().includes(filterState.value.toLowerCase());
        }
        return false;
      });
    }

    // Apply sort
    if (sortState.column) {
      result.sort((a, b) => {
        let aValue = a[sortState.column as keyof SpreadsheetRow];
        let bValue = b[sortState.column as keyof SpreadsheetRow];

        // Handle user objects
        if (typeof aValue === 'object' && aValue && 'name' in aValue) {
          aValue = (aValue as any).name;
          bValue = (bValue as any).name;
        }

        // Handle dates
        if (sortState.column === 'submitted' || sortState.column === 'dueDate') {
          const parseDate = (dateStr: string) => {
            const [day, month, year] = dateStr.split('-');
            return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
          };
          aValue = parseDate(aValue as string);
          bValue = parseDate(bValue as string);
        }

        if (aValue < bValue) return sortState.direction === 'asc' ? -1 : 1;
        if (aValue > bValue) return sortState.direction === 'asc' ? 1 : -1;
        return 0;
      });
    }

    return result;
  }, [data, filterState, sortState, activeView]);

  const dataCounts = useMemo(() => {
    return {
      'All Orders': data.length,
      'Pending': data.filter(row => row.status === 'In-progress' || row.status === 'Need to start').length,
      'Reviewed': data.filter(row => row.status === 'Complete').length,
      'Arrived': data.filter(row => row.status === 'Blocked').length,
    };
  }, [data]);

  const handleSort = (column: string) => {
    setSortState(prev => ({
      column,
      direction: prev.column === column && prev.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  const handleFilter = (column: string, value: string) => {
    setFilterState({ column, value });
  };

  return {
    data: filteredAndSortedData,
    filterState,
    sortState,
    activeView,
    dataCounts,
    handleSort,
    handleFilter,
    setActiveView
  };
};