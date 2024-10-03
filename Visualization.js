// src/App.js
import React from 'react';
import SalesBarChart from './components/SalesBarChart';
import CategoryPieChart from './components/CategoryPieChart';
import UserTable from './components/UserTable';

function App() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Dashboard Visualizations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Bar Chart for Sales */}
        <div className="bg-white p-4 shadow rounded-lg">
          <SalesBarChart />
        </div>

        {/* Pie Chart for Product Categories */}
        <div className="bg-white p-4 shadow rounded-lg">
          <CategoryPieChart />
        </div>

        {/* Table for User List */}
        <div className="lg:col-span-3 bg-white p-4 shadow rounded-lg">
          <UserTable />
        </div>
      </div>
    </div>
  );
}

export default App;
