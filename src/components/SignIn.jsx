import React, { useState, useEffect } from 'react';
import { 
  Lock, Eye, EyeOff, Mail, CheckCircle, AlertCircle, 
  User, Smartphone, Shield, GitMerge 
} from 'lucide-react';

// Enhanced Signin Component
export default function Signin() {
  // Extended State Management
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // Comprehensive Step Definitions
  const Steps = {
    LOGIN: 1,
    TWO_FACTOR: 2,
    SUCCESS: 3
  };

  // Advanced Step Indicator
  function StepIndicator({ currentStep, steps }) {
    return (
      <div className="flex justify-between items-center mb-8 relative">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className="flex flex-col items-center">
              <div 
                className={`
                  w-12 h-12 rounded-full flex items-center justify-center 
                  ${currentStep >= step.id 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-200 text-gray-500'}
                  transition-all duration-300 ease-in-out
                  mb-2 z-10 shadow-md hover:scale-105
                `}
              >
                {step.icon}
              </div>
              <span 
                className={`
                  text-xs font-medium tracking-wider
                  ${currentStep >= step.id 
                    ? 'text-blue-600' 
                    : 'text-gray-400'}
                `}
              >
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div 
                className={`
                  flex-grow h-1 mx-2 
                  ${currentStep > step.id 
                    ? 'bg-blue-500' 
                    : 'bg-gray-200'}
                  transition-all duration-300
                `}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    );
  }

  // Comprehensive Step Definitions
  const stepDefinitions = [
    { 
      id: Steps.LOGIN, 
      label: 'Login', 
      icon: <Lock size={24} strokeWidth={1.5} /> 
    },
    { 
      id: Steps.TWO_FACTOR, 
      label: '2FA', 
      icon: <Shield size={24} strokeWidth={1.5} /> 
    },
    { 
      id: Steps.SUCCESS, 
      label: 'Complete', 
      icon: <CheckCircle size={24} strokeWidth={1.5} /> 
    }
  ];

  // Enhanced Login Step Component
  function LoginStep({ onSubmit }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState(0);

    // Password Strength Checker
    useEffect(() => {
      let strength = 0;
      if (password.length > 7) strength++;
      if (/[A-Z]/.test(password)) strength++;
      if (/[0-9]/.test(password)) strength++;
      if (/[^A-Za-z0-9]/.test(password)) strength++;
      setPasswordStrength(strength);
    }, [password]);

    const handleSubmit = (e) => {
      e.preventDefault();
      
      // Validation
      const validationErrors = {};
      if (!email) validationErrors.email = "Email is required";
      if (!password) validationErrors.password = "Password is required";
      
      if (Object.keys(validationErrors).length) {
        setErrors(validationErrors);
        return;
      }

      onSubmit({ email, password });
    };

    return (
      <div>
        <h3 className="text-lg font-medium text-center text-gray-700 mb-6">
          Sign In to Your Account
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="text-gray-400" size={20} />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`
                w-full pl-10 px-4 py-3 border rounded-lg 
                ${errors.email ? 'border-red-500' : ''}
              `}
              required
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password Input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="text-gray-400" size={20} />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`
                w-full pl-10 px-4 py-3 border rounded-lg pr-10
                ${errors.password ? 'border-red-500' : ''}
              `}
              required
            />
            {/* Password Strength Indicator */}
            <div className="flex mt-1">
              {[...Array(4)].map((_, i) => (
                <div 
                  key={i} 
                  className={`
                    h-1 w-1/4 mx-0.5 rounded-full 
                    ${i < passwordStrength 
                      ? 'bg-green-500' 
                      : 'bg-gray-200'}
                  `}
                />
              ))}
            </div>
            
            {/* Password Visibility Toggle */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
            >
              {showPassword ? 
                <EyeOff size={20} className="text-gray-400" /> : 
                <Eye size={20} className="text-gray-400" />
              }
            </button>
            
            <a href="#" className="text-sm text-blue-500 hover:underline float-right mt-2">
              Forgot password?
            </a>
          </div>

          {/* Remember Me & Submit */}
          <div className="flex justify-between items-center">
            <label className="flex items-center">
              <input 
                type="checkbox" 
                className="mr-2"
                checked={formData.rememberMe}
                onChange={() => setFormData(prev => ({
                  ...prev, 
                  rememberMe: !prev.rememberMe
                }))}
              />
              <span className="text-sm text-gray-600">Remember me</span>
            </label>
          </div>

          <button 
            type="submit"
            className="
              w-full px-4 py-3 bg-blue-500 text-white 
              rounded-lg hover:bg-blue-600 transition
              flex items-center justify-center
            "
          >
            Sign In
          </button>
        </form>

        {/* Social Login Options */}
        <div className="mt-6 space-y-3">
          <div className="flex items-center justify-center space-x-4">
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg flex items-center">
              <GitMerge className="mr-2" size={20} /> Google
            </button>
            <button className="bg-blue-800 text-white px-4 py-2 rounded-lg flex items-center">
              <User className="mr-2" size={20} /> Facebook
            </button>
          </div>
        </div>

        <div className="text-center mt-6">
          <span className="text-sm text-gray-600">New to eVault? </span>
          <a href="#" className="text-blue-500 hover:underline">
            Sign Up
          </a>
        </div>
      </div>
    );
  }

  // Two-Factor Authentication Step
  function TwoFactorStep({ onSubmit }) {
    const [code, setCode] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit(code);
    };

    return (
      <div className="text-center">
        <Shield className="mx-auto mb-4 text-blue-500" size={64} />
        <h3 className="text-2xl font-bold mb-2">Two-Factor Authentication</h3>
        <p className="text-gray-600 mb-6">
          Enter the 6-digit code sent to your registered email/phone
        </p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <input 
            type="text" 
            placeholder="Enter 6-digit code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            maxLength={6}
            className="w-full px-4 py-3 text-center border rounded-lg"
          />
          <button 
            type="submit" 
            className="mt-4 w-full px-4 py-3 bg-blue-500 text-white rounded-lg"
          >
            Verify
          </button>
        </form>
      </div>
    );
  }

  // Success Step Component
  function SuccessStep() {
    return (
      <div className="text-center">
        <CheckCircle className="mx-auto mb-4 text-green-500" size={64} />
        <h3 className="text-2xl font-bold mb-2">Login Successful!</h3>
        <p className="text-gray-600">
          You have successfully signed in to your account.
        </p>
      </div>
    );
  }

  // Login Handler
  const handleLogin = (data) => {
    setFormData(prev => ({ ...prev, ...data }));
    setCurrentStep(Steps.TWO_FACTOR);
  };

  // Two-Factor Authentication Handler
  const handleTwoFactor = (code) => {
    // Simulate verification
    setCurrentStep(Steps.SUCCESS);
  };

  return (
    <div className="bg-white w-full max-w-[36rem] rounded-2xl shadow-2xl p-10 mx-auto mt-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Welcome Back
      </h2>

      {/* Step Indicator */}
      <StepIndicator 
        currentStep={currentStep} 
        steps={stepDefinitions} 
      />

      {/* Dynamic Content Sections */}
      <div className="mt-6 min-h-[24rem]">
        {currentStep === Steps.LOGIN && (
          <LoginStep onSubmit={handleLogin} />
        )}
        {currentStep === Steps.TWO_FACTOR && (
          <TwoFactorStep onSubmit={handleTwoFactor} />
        )}
        {currentStep === Steps.SUCCESS && (
          <SuccessStep />
        )}
      </div>
    </div>
  );
}