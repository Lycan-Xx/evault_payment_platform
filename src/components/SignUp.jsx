import React, { useState } from 'react';
import { User, Briefcase, Check, UserPlus, Mail, Lock } from 'lucide-react';

// Step Indicator Component
function StepIndicator({ currentStep, steps }) {
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

// Account Type Step Component
function AccountTypeStep({ onSelect }) {
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

// Data Input Step Component
function DataInputStep({ accountType, onSubmit, onBack }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div>
      <h3 className="text-lg font-medium text-center text-gray-700 mb-6">
        {accountType}  Details
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg"
          required
        />
        <div className="flex justify-between">
          <button 
            type="button"
            onClick={onBack}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg"
          >
            Back
          </button>
          <button 
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}

// Success Step Component
function SuccessStep({ accountType }) {
  return (
    <div className="text-center">
      <Check className="mx-auto mb-4 text-green-500" size={64} />
      <h3 className="text-2xl font-bold mb-2">Account Created!</h3>
      <p className="text-gray-600">
        Your {accountType} account has been successfully created.
      </p>
    </div>
  );
}