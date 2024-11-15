import React, { useState } from 'react';
import { Lock, Eye, EyeOff, Mail } from 'lucide-react';

export default function Signin() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const Steps = {
    LOGIN: 1,
    SUCCESS: 2,
  };

  const stepDefinitions = [
    { 
      id: Steps.LOGIN, 
      label: 'Login', 
      icon: <Lock size={24} strokeWidth={1.5} /> 
    },
    { 
      id: Steps.SUCCESS, 
      label: 'Complete', 
      icon: <Mail size={24} strokeWidth={1.5} /> 
    }
  ];

  // Step Indicator Component (same as in SignUp)
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

  // Login Step Component
  function LoginStep({ onSubmit }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit({ email, password });
    };

    return (
      <div>
        <h3 className="text-lg font-medium text-center text-gray-700 mb-6">
          Sign In to Your Account
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg"
              required
            />
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg pr-10"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
            >
              {showPassword ? <EyeOff size={20} className="text-gray-400" /> : <Eye size={20} className="text-gray-400" />}
            </button>
            <a href="#" className="text-sm text-blue-500 hover:underline float-right mt-8">
              Forgot password?
            </a>
          </div>
          <button 
            type="submit"
            className="w-[7rem] px-4 py-3 bg-blue-500 text-white rounded-lg"
          >
            Sign In
          </button>
        </form>
        <div className="text-center mt-8">
          <span className="text-sm text-gray-600">New to eVault? </span>
          <a href="#" className="text-xl text-blue-500 hover:underline">
            Sign Up
          </a>
        </div>
      </div>
    );
  }

  // Success Step Component
  function SuccessStep() {
    return (
      <div className="text-center">
        <Mail className="mx-auto mb-4 text-green-500" size={64} />
        <h3 className="text-2xl font-bold mb-2">Login Successful!</h3>
        <p className="text-gray-600">
          You have successfully signed in to your account.
        </p>
      </div>
    );
  }

  const handleLogin = (data) => {
    setFormData(data);
    setCurrentStep(Steps.SUCCESS);
  };

  return (
    <div className="bg-white w-full max-w-[36rem] rounded-2xl shadow-2xl p-20 mx-auto mt-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Welcome Back
      </h2>

      

      {/* Content Sections */}
      <div className="mt-6 h-[16rem]">
        {currentStep === Steps.LOGIN && (
          <LoginStep onSubmit={handleLogin} />
        )}
        {currentStep === Steps.SUCCESS && (
          <SuccessStep />
        )}
      </div>
    </div>
  );
}