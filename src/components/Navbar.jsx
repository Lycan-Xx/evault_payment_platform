import React from 'react';
import classNames from 'classnames'
import logo from './assets/evault_main_logo.png';

const Navbar = ({ onNavigate }) => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto ml-2 flex items-center h-[7rem]">
        <img src={logo} alt="logo" className='h-[7rem] w-auto' />

        <div className="flex flex-col ml-6">
          <span className="text-[2rem] font-bold text-[#2B7A9E]">eVault</span>

          <div className="flex space-x-6 mt-2">
            <button className="flex items-center text-gray-600 hover:text-[#2B7A9E] text-sm font-medium">
              <span className="w-2 h-2 bg-gray-600 rounded-full mr-2"></span>
              Banking
            </button>
            <button className="flex items-center text-gray-600 hover:text-[#2B7A9E] text-sm font-medium">
              <span className="w-2 h-2 bg-gray-600 rounded-full mr-2"></span>
              Payments
            </button>
            <button className="flex items-center text-gray-600 hover:text-[#2B7A9E] text-sm font-medium">
              <span className="w-2 h-2 bg-gray-600 rounded-full mr-2"></span>
              Vault
            </button>
          </div>
        </div>

        <div className="absolute top-4 right-4 flex items-center space-x-3">
          <button 
            className={classNames("text-gray-600 hover:text-[#2B7A9E] px-4 py-1.5 rounded-md text-2xl border border-gray-300")} 
            onClick={() => onNavigate('sign-in')}
          >
            Signin
          </button>
          <button 
            className="text-gray-600 hover:text-[#2B7A9E] px-4 py-1.5 rounded-md text-2xl border border-gray-300"
            onClick={() => onNavigate('sign-up')}
          >
            Signup
          </button>
          <button className="bg-[#2B7A9E] text-white px-4 py-1.5 rounded-md text-2xl hover:bg-[#236A8E]">
            Download
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;