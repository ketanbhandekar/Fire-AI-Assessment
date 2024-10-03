// src/components/Dashboard.js
import React from 'react';
import SalesBarChart from './SalesBarChart';
import CategoryPieChart from './CategoryPieChart';
import UserTable from './UserTable';

const Dashboard = () => {
  return (
    <div>
      <h2 className="text-xl md:text-2xl font-bold mb-6">Dashboard Visualizations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Sales Bar Chart */}
        <div className="bg-white p-4 shadow rounded-lg">
          <SalesBarChart />
        </div>

        {/* Category Pie Chart */}
        <div className="bg-white p-4 shadow rounded-lg">
          <CategoryPieChart />
        </div>

        {/* User Table - spans across all columns on larger screens */}
        <div className="lg:col-span-3 bg-white p-4 shadow rounded-lg">
          <UserTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
