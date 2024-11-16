import React from 'react';

export default function StepIndicator({ currentStep, steps }) {
  return (
    <div className="flex justify-between items-center mb-8 relative">
      {steps.map((step, index) => (
        <div 
          key={step.id} 
          className="flex flex-col items-center"
        >
          <div 
            className={`
              w-12 h-12 rounded-full flex items-center justify-center 
              ${currentStep >= step.id 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-200 text-gray-500'}
              transition-all duration-300 ease-in-out
              mb-2 z-10
            `}
          >
            {step.icon}
          </div>
          <span 
            className={`
              text-xs font-medium 
              ${currentStep >= step.id 
                ? 'text-blue-600' 
                : 'text-gray-400'}
            `}
          >
            {step.label}
          </span>
        </div>
      ))}
    </div>
  );
}