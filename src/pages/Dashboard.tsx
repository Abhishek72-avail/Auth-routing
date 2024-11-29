import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { LogOut, User } from 'lucide-react';

export function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <User className="h-6 w-6 text-gray-600" />
              <span className="ml-2 text-gray-800 font-medium">
                Welcome, {user?.name}
              </span>
            </div>
            <button
              onClick={logout}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </button>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 p-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Dashboard</h2>
            <p className="text-gray-600">This is a protected route. You can only see this if you're authenticated.</p>
          </div>
        </div>
      </main>
    </div>
  );
}