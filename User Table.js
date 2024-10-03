// src/components/UserTable.js
import React from 'react';

const UserTable = () => {
  const users = [
    { name: 'John Doe', email: 'john@example.com', status: 'Active' },
    { name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive' },
    { name: 'Michael Brown', email: 'michael@example.com', status: 'Active' },
    { name: 'Emily White', email: 'emily@example.com', status: 'Pending' },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">User List</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 text-left text-gray-600">Name</th>
            <th className="py-2 text-left text-gray-600">Email</th>
            <th className="py-2 text-left text-gray-600">Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="border-t">
              <td className="py-2">{user.name}</td>
              <td className="py-2">{user.email}</td>
              <td className="py-2">{user.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
