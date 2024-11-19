import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import logo from './assets/logo.jpg';

const Navbar = ({ onNavigate, currentView }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between h-[7rem] px-4">
        <div className="flex items-center">
          <img src={logo} alt="logo" className='h-[7rem] w-auto' />
          <span className="text-[3rem] font-bold text-[#025798] ml-2">eVault</span>
        </div>

        <div className={`flex-col lg:flex-row items-center lg:flex ${isNavOpen ? 'flex' : 'hidden'}`}>
          <div className="flex space-x-6 mt-2">
            <button className="text-gray-600 hover:text-[#2B7A9E] text-sm font-medium">Banking</button>
            <button className="text-gray-600 hover:text-[#2B7A9E] text-sm font-medium">Payments</button>
            <button className="text-gray-600 hover:text-[#2B7A9E] text-sm font-medium">Vault</button>
          </div>

          <div className="relative">
            <button
              className="bg-white text-[#025798] px-6 py-2 rounded-xl text-[1.2rem] hover:bg-[#025798] hover:text-white border-[1.5px] border-[#025798] transition duration-700"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              Download
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Playstore</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Appstore</a>
              </div>
            )}
          </div>
        </div>

        <div className="lg:hidden">
          <button onClick={() => setIsNavOpen(!isNavOpen)}>
            <Menu className="w-8 h-8 text-gray-600" />
          </button>
        </div>

        {currentView === 'instant-payments' ? (
          <div className="hidden lg:flex space-x-4">
            <button
              className="bg-[#025798] text-white px-6 py-2 rounded-xl text-[1.2rem] border-[1.5px] border-[#025798] transition duration-400 ease-in"
              onClick={() => onNavigate('sign-in')}
            >
              Sign in
            </button>
            <button
              className="bg-[#025798] text-white px-6 py-2 rounded-xl text-[1.2rem] border-[1.5px] border-[#025798] transition duration-400 ease-in"
              onClick={() => onNavigate('sign-up')}
            >
              Sign up
            </button>
          </div>
        ) : (
          <button
            className="bg-white text-[#025798] px-6 py-2 rounded-xl text-[1.2rem] hover:bg-[#025798] hover:text-white border-[1.5px] border-[#025798] transition duration-700"
            onClick={() => onNavigate('instant-payments')}
          >
            Instant Payments
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;