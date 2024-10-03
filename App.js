// src/App.js
import React from 'react';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="h-screen flex">
      {/* Sidebar / Navigation */}
      <NavBar />

      {/* Main content area */}
      <div className="flex-1 bg-gray-100 p-10">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="mt-4">This is the main content area.</p>
      </div>
    </div>
  );
}

export default App;