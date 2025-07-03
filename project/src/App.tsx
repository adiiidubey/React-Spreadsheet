import React from 'react';
import { Header } from './components/Header';
import { Toolbar } from './components/Toolbar';
import { SpreadsheetTable } from './components/SpreadsheetTable';
import { BottomNavigation } from './components/BottomNavigation';
import { useSpreadsheetData } from './hooks/useSpreadsheetData';
import { mockUsers } from './data/mockData';

function App() {
  const {
    data,
    sortState,
    activeView,
    dataCounts,
    handleSort,
    setActiveView
  } = useSpreadsheetData();

  const currentUser = mockUsers[0]; // Simulating logged-in user

  const handleToolbarAction = (action: string) => {
    console.log(`${action} clicked`);
    // In a real app, these would trigger actual functionality
    switch (action) {
      case 'import':
        alert('Import functionality would open a file dialog');
        break;
      case 'export':
        alert('Export functionality would download the data');
        break;
      case 'share':
        alert('Share functionality would open sharing options');
        break;
      case 'newAction':
        alert('New Action would open a form to create a new row');
        break;
      case 'hideFields':
        alert('Hide Fields would show/hide column options');
        break;
      case 'sort':
        alert('Sort options would appear');
        break;
      case 'filter':
        alert('Filter options would appear');
        break;
      case 'cellView':
        alert('Cell view options would appear');
        break;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentUser={currentUser} />
      
      <div className="max-w-full mx-auto">
        <Toolbar
          onImport={() => handleToolbarAction('import')}
          onExport={() => handleToolbarAction('export')}
          onShare={() => handleToolbarAction('share')}
          onNewAction={() => handleToolbarAction('newAction')}
          onToggleHideFields={() => handleToolbarAction('hideFields')}
          onSort={() => handleToolbarAction('sort')}
          onFilter={() => handleToolbarAction('filter')}
          onCellView={() => handleToolbarAction('cellView')}
        />
        
        <div className="p-6">
          <SpreadsheetTable
            data={data}
            onSort={handleSort}
            sortState={sortState}
          />
        </div>
        
        <BottomNavigation
          activeView={activeView}
          onViewChange={setActiveView}
          dataCounts={dataCounts}
        />
      </div>
    </div>
  );
}

export default App;