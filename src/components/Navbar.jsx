import React from 'react';
import { Vault } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-start py-4">
          <div className="flex items-center">
            <Vault className="h-8 w-8 text-[#2B7A9E]" />
            <span className="ml-2 text-4xl font-bold text-[#2B7A9E]">eVault</span>
          </div>
          
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
          <button className="text-gray-600 hover:text-[#2B7A9E] px-4 py-1.5 rounded-md text-sm font-medium">
            Signin
          </button>
          <button className="text-gray-600 hover:text-[#2B7A9E] px-4 py-1.5 rounded-md text-sm font-medium border border-gray-300">
            Signup
          </button>
          <button className="bg-[#2B7A9E] text-white px-4 py-1.5 rounded-md text-sm font-medium hover:bg-[#236A8E]">
            Download
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;