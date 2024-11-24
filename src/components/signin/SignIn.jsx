import React, { useState } from 'react';
import { Eye, EyeOff, Mail } from 'lucide-react';

function SuccessStep({ onContinue }) {
  return (
    <div className="text-center">
      <Mail className="mx-auto mb-4 text-[#025798]" size={64} />
      <h3 className="text-2xl font-bold mb-2">Login Successful!</h3>
      <p className="text-gray-600">
        You have successfully signed in to your account.
      </p>
      <div className='pt-8'>
        <button
          onClick={onContinue}
          className="bg-[#025798] text-white px-6 py-2 rounded-xl text-[1.2rem] border-[1.5px] border-[#025798] hover:bg-white hover:text-[#025798] transition duration-400 ease-in"
          >
          Continue
        </button>
      </div>
    </div>
  );
}

export default function SignIn({ onContinue, onSignUp }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const Steps = {
    LOGIN: 1,
    SUCCESS: 2,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentStep(Steps.SUCCESS);
  };

  return (
    <div className="bg-white w-full max-w-[36rem] rounded-2xl shadow-2xl p-14 mx-auto mt-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Welcome Back
      </h2>

      {currentStep === Steps.LOGIN && (
        <div>
          <h3 className="text-lg font-medium text-center text-gray-700 mb-6">
            Sign In to Your Account
          </h3>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 text-[1.2rem] border-2 border-[#025798] rounded-xl"
                required
              />
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 text-[1.2rem] border-2 border-[#025798] rounded-xl pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                {showPassword ? <EyeOff size={20} className="text-gray-400" /> : <Eye size={20} className="text-gray-400" />}
              </button>
              <a href="#" className="text-lg text-[#025798] hover:underline float-right mt-12">
                Forgot password?
              </a>
            </div>
            <button 
              type="submit"
              className="w-1/4 px-6 py-3 whitespace-nowrap bg-[#025798] hover:bg-white text-white hover:text-[#025798] transition duration-300 border-2 border-[#025798] text-[1.2rem] rounded-lg ease-linear"
            >
              Sign In
            </button>
          </form>

          <div className="text-center mt-12">
            <span className="text-lg text-gray-700">New to eVault? </span>
            <button
              className='w-1/4 px-4 py-3 ml-6 rounded-lg whitespace-nowrap bg-white border-2 border-[#025798] text-lg hover:text-white hover:bg-[#025798] transition duration-300 ease-linear'
              onClick={onSignUp}
            >
              Sign Up
            </button>
          </div>
        </div>
      )}

      {currentStep === Steps.SUCCESS && (
        <SuccessStep onContinue={onContinue} />
      )}
    </div>
  );
}