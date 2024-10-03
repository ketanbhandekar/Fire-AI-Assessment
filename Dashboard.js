// src/App.js
import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import Settings from './components/Settings';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between">
          <h1 className="text-2xl md:text-3xl font-bold">Dashboard</h1>
          <nav className="flex space-x-4">
            <button
              className={`mr-4 ${currentPage === 'dashboard' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
              onClick={() => setCurrentPage('dashboard')}
            >
              Home
            </button>
            <button
              className={`${currentPage === 'settings' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
              onClick={() => setCurrentPage('settings')}
            >
              Settings
            </button>
          </nav>
        </div>
      </header>

      <main className="p-4 sm:p-6 lg:p-8">
        {currentPage === 'dashboard' && <Dashboard />}
        {currentPage === 'settings' && <Settings />}
      </main>
    </div>
  );
}

export default App;
