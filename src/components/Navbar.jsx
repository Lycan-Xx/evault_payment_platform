import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from './assets/logo.jpg';

const Navbar = ({ onNavigate, currentView }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className="bg-white shadow-2xl rounded-b-3xl border-b-[5px] border-[#025798]">
      <div className="container mx-auto flex items-center justify-between h-[7rem] px-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src={logo} alt="logo" className="h-[7rem] w-auto" />
          <span className="hidden lg:block text-[2rem] lg:text-[3rem] font-bold text-[#025798] ml-0 mt-[3.7rem]">
            Vault
          </span>
        </div>

        {/* Mobile Navigation Links */}
        <div
          className={`absolute top-[7rem] left-0 w-full bg-[#025798] lg:hidden transition-all duration-300 ease-in-out ${
            isNavOpen ? 'flex flex-col shadow-md' : 'hidden'
          }`}
        >
          <ul className="space-y-4 p-4">
            <li>
              <button
                className="text-white hover:bg-[#033e58] w-full text-left px-4 py-2 rounded"
                onClick={() => {
                  onNavigate('instant-payments');
                  setIsNavOpen(false);
                }}
              >
                Instant Payments
              </button>
            </li>
            <li>
              <button
                className="text-white hover:bg-[#033e58] w-full text-left px-4 py-2 rounded"
                onClick={() => {
                  onNavigate('sign-in');
                  setIsNavOpen(false);
                }}
              >
                Sign In
              </button>
            </li>
            <li>
              <button
                className="text-white hover:bg-[#033e58] w-full text-left px-4 py-2 rounded"
                onClick={() => {
                  onNavigate('sign-up');
                  setIsNavOpen(false);
                }}
              >
                Sign Up
              </button>
            </li>
            <li>
              <button
                className="text-white hover:bg-[#033e58] w-full text-left px-4 py-2 rounded"
                onClick={() => {
                  setIsDialogOpen(true);
                  setIsNavOpen(false);
                }}
              >
                Download
              </button>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setIsNavOpen(!isNavOpen)}>
            {isNavOpen ? <X className="w-8 h-8 text-gray-600" /> : <Menu className="w-8 h-8 text-gray-600" />}
          </button>
        </div>

        {/* Desktop Action Buttons */}
        {currentView === 'instant-payments' ? (
          <div className="hidden lg:flex space-x-4">
            <button
              className="bg-[#025798] text-white px-6 py-2 rounded-xl text-[1.2rem] border-[1.5px] border-[#025798] hover:bg-white hover:text-[#025798] transition duration-400 ease-in"
              onClick={() => onNavigate('sign-in')}
            >
              Sign In
            </button>
            <button
              className="bg-[#025798] text-white px-6 py-2 rounded-xl text-[1.2rem] border-[1.5px] border-[#025798] hover:bg-white hover:text-[#025798] transition duration-400 ease-in"
              onClick={() => onNavigate('sign-up')}
            >
              Sign Up
            </button>
            <div className="relative">
              <button
                className="bg-white text-[#025798] px-6 py-2 rounded-xl text-[1.2rem] hover:bg-[#025798] hover:text-white border-[1.5px] border-[#025798] transition duration-700"
                onClick={() => setIsDialogOpen(true)}
              >
                Download
              </button>
            </div>
          </div>
        ) : (
          <button
            className="hidden lg:block bg-white text-[#025798] px-6 py-2 rounded-xl text-[1.2rem] hover:bg-[#025798] hover:text-white border-[1.5px] border-[#025798] transition duration-700"
            onClick={() => onNavigate('instant-payments')}
          >
            Instant Payments
          </button>
        )}
      </div>

      {/* Dialog Popup */}
      {isDialogOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md text-center">
            <h2 className="text-xl font-semibold mb-4 text-[#025798]">Choose Your Platform</h2>
            <div className="flex justify-around">
              <a
                href="#"
                className="bg-[#34A853] text-white px-6 py-3 rounded-lg text-lg hover:bg-green-700"
              >
                Android
              </a>
              <a
                href="#"
                className="bg-[#007AFF] text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-800"
              >
                iOS
              </a>
            </div>
            <button
              className="mt-4 text-[#025798] hover:underline"
              onClick={() => setIsDialogOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;