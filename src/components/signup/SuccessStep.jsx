import React from 'react';
import { Check } from 'lucide-react';

export default function SuccessStep({ accountType }) {
  return (
    <div className="text-center py-8">
		
	  <Check className="mx-auto mb-6 text-green-500" size={64} />
      <h3 className="text-2xl font-bold text-gray-900 mb-2">
        Account Created Successfully!
      </h3>
      <p className="text-gray-600 text-xl">
        Your {accountType.toLowerCase()} account has been successfully created. You can now sign in
        to access your account.
      </p>
      <button
        className="mt-6 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={() => window.location.reload()}
      >
        Sign In
      </button>
    </div>
  );
}