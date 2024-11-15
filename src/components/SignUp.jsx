import React, { useState } from 'react';
import { User, Briefcase, Check, UserPlus, Mail, Lock } from 'lucide-react';
import SuccessStep from './signup/SuccessStep';
import StepIndicator from './signup/StepIndicator';
import AccountTypeStep from './signup/AccountTypeStep';
import DataInputStep from './signup/DataInputStep';





// Main SignUp Component
export default function SignUp() {
  const Steps = {
    ACCOUNT_TYPE: 1,
    DATA_INPUT: 2,
    SUCCESS: 3,
  };

  const stepDefinitions = [
    { 
      id: Steps.ACCOUNT_TYPE, 
      label: 'Account Type', 
      icon: <UserPlus size={24} strokeWidth={1.5} /> 
    },
    { 
      id: Steps.DATA_INPUT, 
      label: 'Personal Info', 
      icon: <Mail size={24} strokeWidth={1.5} /> 
    },
    { 
      id: Steps.SUCCESS, 
      label: 'Complete', 
      icon: <Check size={24} strokeWidth={1.5} /> 
    }
  ];

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
    <div className="bg-white w-full max-w-[36rem] rounded-2xl shadow-2xl p-14 mx-auto mt-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Create Your Account
      </h2>

      {/* Step Indicator */}
      <StepIndicator 
        currentStep={currentStep} 
        steps={stepDefinitions} 
      />

      {/* Content Sections */}
      <div className="mt-6">
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


