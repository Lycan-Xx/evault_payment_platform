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
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
          role="dialog"
          aria-labelledby="download-dialog-title"
          aria-describedby="download-dialog-description"
        >
          <div className="relative w-11/12 max-w-md p-6 bg-[#04448c] [dark]:bg-white-800 rounded-2xl shadow-2xl transform transition-all duration-300 ease-in-out hover:scale-105 dark:shadow-lg dark:shadow-blue-500/50">
            {/* Close Button */}
            <button
              onClick={() => setIsDialogOpen(false)}
              className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Content */}
            <div className="text-center">
              <h2 id="download-dialog-title" className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                Download Our App
              </h2>
              <p id="download-dialog-description" className="text-gray-600 dark:text-gray-300 mb-6">
                In an instant send support, feed a passion, or strengthen a bond
              </p>

              {/* Download Buttons */}
              <div className="flex justify-center space-x-4 mt-4">
  {/* App Store Button */}
  <a
    href="#"
    className="flex items-center bg-[#04448c] text-white px-4 py-2 rounded-lg shadow hover:bg-gray-800 transition-colors dark:bg-gray-700 dark:hover:bg-gray-600"
  >
    <img
      src="https://cdn.icon-icons.com/icons2/56/PNG/512/meter_macappstore_11408.png"
      alt="App Store"
      className="w-5 h-5 mr-2"
    />
    <span className="text-sm font-medium">App Store</span>
  </a>

  {/* Google Play Button */}
  <a
    href="#"
    className="flex items-center bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition-colors dark:bg-green-700 dark:hover:bg-green-600"
  >
    <img
      src="https://cdn.icon-icons.com/icons2/2699/PNG/512/google_play_tile_logo_icon_168147.png"
      alt="Google Play"
      className="w-5 h-5 mr-2"
    />
    <span className="text-sm font-medium">Google Play</span>
  </a>
</div>

              {/* QR Code Section */}
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  Or scan the QR code to download
                </p>
                <div className="flex justify-center">
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://example.com"
                    alt="QR Code"
                    className="w-32 h-32"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;