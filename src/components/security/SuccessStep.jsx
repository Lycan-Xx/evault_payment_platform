import React from 'react';
import { CheckCircle } from 'lucide-react';
import SecurityStep from './SecurityStep';

const SuccessStep = ({ onComplete }) => (
  <SecurityStep>
    <div className="w-24 h-24 text-green-500">
      <CheckCircle className="w-full h-full" />
    </div>
    <div className="text-center space-y-4">
      <h2 className="text-2xl font-bold text-gray-800">Verification Successful!</h2>
      <p className="text-gray-600">Your BVN has been successfully verified</p>
    </div>
    <button
      onClick={onComplete}
      className="px-8 py-3 bg-[#2B7A9E] text-white rounded-lg hover:bg-[#236785] transition-colors"
    >
      Continue
    </button>
  </SecurityStep>
);

export default SuccessStep;