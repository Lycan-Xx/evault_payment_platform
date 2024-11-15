import React from 'react';

export default function AccountTypeStep({ onSelect }) {
  return (
    <div className="space-y-6 ">
      <h3 className="text-lg font-medium text-center">Choose an account type</h3>
      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={() => onSelect('Personal')}
          className="p-6 w-[180px] border-2 border-gray-200 rounded-lg hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
        >
          <h4 className="text-lg font-medium mb-2">Personal</h4>
          <p className="text-sm text-gray-600">
            For individual use and personal finances
          </p>
        </button>
        <button
          onClick={() => onSelect('Business')}
          className="p-6 w-[180px] border-2 border-gray-200 rounded-lg hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
        >
          <h4 className="text-lg font-medium mb-2">Business</h4>
          <p className="text-sm text-gray-600">
            For companies and business operations
          </p>
        </button>
      </div>
    </div>
  );
}