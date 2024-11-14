import React, { useState } from 'react';
import classNames from 'classnames';
import StepIndicator from './signup/StepIndicator';
import AccountTypeStep from './signup/AccountTypeStep';
import DataInputStep from './signup/DataInputStep';
import SuccessStep from './signup/SuccessStep';

const Steps = {
  ACCOUNT_TYPE: 1,
  DATA_INPUT: 2,
  SUCCESS: 3,
};

export default function SignUp() {
  const [currentStep, setCurrentStep] = useState(Steps.ACCOUNT_TYPE);
  const [accountType, setAccountType] = useState(null);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: '',
  });

  const handleAccountTypeSelect = (type) => {
    setAccountType(type);
    setCurrentStep(Steps.DATA_INPUT);
  };

  const handleDataSubmit = (data) => {
    setFormData(data);
    setCurrentStep(Steps.SUCCESS);
  };

  const handleBack = () => {
    if (currentStep === Steps.DATA_INPUT) {
      setCurrentStep(Steps.ACCOUNT_TYPE);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Sign Up</h2>
        {accountType && currentStep !== Steps.SUCCESS && (
          <span className="text-sm font-medium text-gray-600">
            {accountType} Account
          </span>
        )}
      </div>

      <StepIndicator currentStep={currentStep} />

      <div className="mt-8">
        {currentStep === Steps.ACCOUNT_TYPE && (
          <AccountTypeStep onSelect={handleAccountTypeSelect} />
        )}
        {currentStep === Steps.DATA_INPUT && (
          <DataInputStep 
            accountType={accountType}
            onSubmit={handleDataSubmit}
            onBack={handleBack}
          />
        )}
        {currentStep === Steps.SUCCESS && (
          <SuccessStep accountType={accountType} />
        )}
      </div>
    </div>
  );
}