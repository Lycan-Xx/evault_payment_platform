import React from 'react';
import classNames from 'classnames';

export default function StepIndicator({ currentStep }) {
  const steps = [
    { number: 1 },
    { number: 2 },
    { number: 3 },
  ];

  return (
    <div className="flex justify-between">
      {steps.map((step, index) => (
        <div key={step.number} className="flex items-center">
          <div className="flex flex-col items-center">
            <div
              className={classNames(
                'w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium',
                {
                  'bg-blue-600 text-white': currentStep >= step.number,
                  'bg-gray-200 text-gray-600': currentStep < step.number,
                }
              )}
            />
          </div>
          {index < steps.length - 1 && (
            <div
              className={classNames('h-0.5 w-16 mx-2', {
                'bg-blue-600': currentStep > step.number,
                'bg-gray-200': currentStep <= step.number,
              })}
            />
          )}
        </div>
      ))}
    </div>
  );
}
