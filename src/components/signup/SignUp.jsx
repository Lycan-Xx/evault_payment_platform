import React, { useState } from 'react';
import { UserPlus, Mail, Check } from 'lucide-react';
import StepIndicator from './StepIndicator';

// Account Type Step Component
function AccountTypeStep({ onSelect }) {
  return (
    <div className={`space-y-4 transition-opacity duration-500`}>
      <h3 className="text-xl font-medium text-center text-gray-700">
        Choose an account type
      </h3>
      <div className="flex justify-center space-x-4 gap-6 ">
        <button
          onClick={() => onSelect('Personal')}
          className="p-6 w-[180px]  border-2 border-gray-200 rounded-2xl hover:border-[#025798] focus:outline-none focus:ring-2 focus:ring-[#025798] transition-colors flex flex-col items-center"
        >
          <UserPlus className="mb-2" size={40} strokeWidth={1.5} />
          <h4 className="text-xl font-medium mb-2 text-gray-800">Personal</h4>
          <p className="text-lg text-gray-600 text-center">
            For individual use and personal finances
          </p>
        </button>
        <button
          onClick={() => onSelect('Business')}
          className="p-6 w-[180px] border-2 border-gray-200 rounded-2xl hover:border-[#025798] focus:outline-none focus:ring-2 focus:ring-[#025798] transition-colors flex flex-col items-center"
        >
          <Mail className="mb-2" size={40} strokeWidth={1.5} />
          <h4 className="text-xl font-medium mb-2 text-gray-800">Business</h4>
          <p className="text-lg text-gray-600 text-center">
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
    step: 1,
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    sex: '',
    dob: '',
    state: '',
    address: '',
    password: '',
    verifyPassword: '',
    vaultPhrase: '',
    referralCode: '',
    businessName: '',
    rcNumber: '',
    nin: '',
  });

  const [errors, setErrors] = useState({});
  const [transition, setTransition] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const validatePersonalInfo = () => {
    const newErrors = {};
    if (!formData.firstname) newErrors.firstname = 'Firstname is required';
    if (!formData.lastname) newErrors.lastname = 'Lastname is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.sex) newErrors.sex = 'Sex is required';
    if (!formData.dob) newErrors.dob = 'Date of birth is required';
    if (!formData.state) newErrors.state = 'State is required';
    if (!formData.address) newErrors.address = 'Address is required';
    return newErrors;
  };

  const validateBusinessInfo = () => {
    const newErrors = {};
    if (!formData.businessName) newErrors.businessName = 'Business name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.rcNumber) newErrors.rcNumber = 'RC Number is required';
    if (!formData.nin) newErrors.nin = 'NIN is required';
    return newErrors;
  };

  const handleContinue = () => {
    let newErrors = {};
    if (accountType === 'Personal') {
      newErrors = validatePersonalInfo();
    } else {
      newErrors = validateBusinessInfo();
    }

    if (Object.keys(newErrors).length === 0) {
      setTransition(true);
      setTimeout(() => {
        setFormData(prev => ({ ...prev, step: prev.step + 1 }));
        setTransition(false);
      }, 500);
    } else {
      setErrors(newErrors);
    }
  };

  const handleBackButton = () => {
    setTransition(true);
    setTimeout(() => {
      setFormData(prev => ({ ...prev, step: prev.step - 1 }));
      setTransition(false);
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div>
      <h3 className="text-lg font-bold text-center text-gray-700 mb-6">
        {accountType === 'Personal' ? 'Please input your Personal details' : 'Please provide your Business details'}
      </h3>
      <form onSubmit={handleSubmit} className={`space-y-4 transition-opacity duration-500 ${transition ? 'opacity-0' : 'opacity-100'}`}>
        {accountType === 'Personal' && formData.step === 1 && (
          <>
            <div className="flex space-x-4">
              <input
                type="text"
                name="firstname"
                placeholder="First Name"
                value={formData.firstname}
                onChange={handleChange}
                className="w-1/2 px-4 py-2 border border-gray-400 rounded-lg"
                required
              />
              <input
                type="text"
                name="lastname"
                placeholder="Last Name"
                value={formData.lastname}
                onChange={handleChange}
                className="w-1/2 px-4 py-2 border border-gray-400 rounded-lg"
                required
              />
            </div>
            <p className="text-red-500">{errors.firstname}</p>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-400 rounded-lg"
              required
            />
            <p className="text-red-500">{errors.email}</p>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-400 rounded-lg"
              required
            />
            <p className="text-red-500">{errors.phone}</p>
            <div className="flex space-x-4">
              <select
                name="sex"
                value={formData.sex}
                onChange={handleChange}
                className="w-1/2 px-4 py-2 border border-gray-400 rounded-lg"
                required
              >
                <option value="">Select Sex</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-1/2 px-4 py-2 border border-gray-400 rounded-lg"
                required
              >
                <option value="">State of Origin</option>
                <option value="State1">State1</option>
                <option value="State2">State2</option>
                {/* Add other states */}
              </select>
            </div>
            <p className="text-red-500">{errors.sex || errors.state}</p>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-400 rounded-lg"
              required
            />
            <p className="text-red-500">{errors.dob}</p>
            <input
              type="text"
              name="address"
              placeholder="Home Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-400 rounded-lg"
              required
            />
            <p className="text-red-500">{errors.address}</p>


            {/* --------------------------------------------- */}

            <div className="flex justify-between">
              <button
                type="button"
                onClick={handleBackButton}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
              >
                Continue
              </button>
            </div>

{/* --------------------------------- */}

            <button
              type="button"
              onClick={handleContinue}
              className="w-1/4 px-4 py-2 bg-[#025798] hover:bg-white text-white hover:text-[#025798] transition duration-300 border-2 border-[#025798] text-[1.2rem] rounded-lg ease-linear"
            >
              Continue
            </button>
          </>
        )}
        {(accountType === 'Personal' && formData.step === 2) || (accountType === 'Business' && formData.step === 2) ? (
          <>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-400 rounded-lg"
              required
            />
            <input
              type="password"
              name="verifyPassword"
              placeholder="Verify Password"
              value={formData.verifyPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-400 rounded-lg"
              required
            />
            <input
              type="text"
              name="vaultPhrase"
              placeholder="Vaultphrase/Pin"
              value={formData.vaultPhrase}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-400 rounded-lg"
              required
            />
            <input
              type="text"
              name="referralCode"
              placeholder="Referral Code"
              value={formData.referralCode}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-400 rounded-lg"
            />
            <div className="flex justify-between">
              <button
                type="button"
                onClick={handleBackButton}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg"
              >
                Back
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
              >
                Complete
              </button>
            </div>
          </>
        ) : accountType === 'Business' && formData.step === 1 && (
          <>
            <input
              type="text"
              name="businessName"
              placeholder="Business Name"
              value={formData.businessName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
            <p className="text-red-500">{errors.businessName}</p>

            <input
              type="email"
			  name="email"
			  placeholder="Email Address"
			  value={formData.email}
			  onChange={handleChange}
			  className="w-full px-4 py-2 border rounded-lg"
			  required
             />
			 <p className="text-red-500">{errors.email}</p>

            <input
              type="text"
              name="rcNumber"
              placeholder="RC - Number"
              value={formData.rcNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
            <p className="text-red-500">{errors.rcNumber}</p>
            <input
              type="text"
              name="nin"
              placeholder="NIN"
              value={formData.nin}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
            <p className="text-red-500">{errors.nin}</p>
            <button
              type="button"
              onClick={handleContinue}
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Continue
            </button>
          </>
        )}
      </form>
    </div>
  );
}

// Success Step Component
function SuccessStep({ accountType }) {
  return (
    <div className="text-center py-8">
      <Check className="mx-auto mb-6 text-green-500" size={64} />
      <h3 className="text-2xl font-bold text-gray-900 mb-2">
        Account Created Successfully!
      </h3>
      <p className="text-gray-600 text-xl text-nowrap">
        Your {accountType} account has been successfully created.
      </p>
	  <br />
	  <p className='text-gray-600 text-xl'>
		Sign in to access your account.
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

  const handleAccountTypeSelect = (type) => {
    setAccountType(type);
    setCurrentStep(Steps.DATA_INPUT);
  };

  const handleDataSubmit = (data) => {
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

      {/* Conditional Step Indicator */}
      {accountType && (
        <StepIndicator 
          currentStep={currentStep} 
          steps={stepDefinitions} 
        />
      )}

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