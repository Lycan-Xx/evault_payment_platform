
import React from 'react';
import { User, Briefcase } from 'lucide-react';

export default function AccountTypeStep({ onSelect }) {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-medium text-center text-gray-700">
        Choose an account type
      </h3>
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => onSelect('Personal')}
          className="p-6 w-[180px] border-2 border-gray-200 rounded-lg hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors flex flex-col items-center"
        >
          <User className="mb-2" size={40} strokeWidth={1.5} />
          <h4 className="text-lg font-medium mb-2 text-gray-800">Personal</h4>
          <p className="text-sm text-gray-600 text-center">
            For individual use and personal finances
          </p>
        </button>
        <button
          onClick={() => onSelect('Business')}
          className="p-6 w-[180px] border-2 border-gray-200 rounded-lg hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors flex flex-col items-center"
        >
          <Briefcase className="mb-2" size={40} strokeWidth={1.5} />
          <h4 className="text-lg font-medium mb-2 text-gray-800">Business</h4>
          <p className="text-sm text-gray-600 text-center">
            For companies and business operations
          </p>
        </button>
      </div>
    </div>
  );
}