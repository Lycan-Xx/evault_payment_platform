  import React from 'react';
  import classNames from 'classnames'
  import logo from './assets/evault_main_logo.png';

  const Navbar = ({ onNavigate }) => {
    return (
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto ml-2 flex items-center h-[7rem]">
          <img src={logo} alt="logo" className='h-[7rem] w-auto' />

          <div className="flex flex-col ml-1 mb-8">
            <span className="text-[3rem] font-bold text-[#025798] mt-4">eVault</span>

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

          <div className="absolute top-4 right-4 flex items-center space-x-4">
            <button 
              className=" bg-[#025798] text-white hover:bg-white w-2/6 hover:text-[#025798] px-6 py-2 rounded-xl text-[1.2rem] border-[1.5px] border-[#025798] transition duration-400 ease-in"
              onClick={() => onNavigate('sign-in')}
            >
              Sign in
            </button>
            <button 
              className=" bg-[#025798] text-white whitespace-nowrap hover:bg-white w-2/6 hover:text-[#025798] px-6 py-2 rounded-xl text-[1.2rem] border-[1.5px] border-[#025798] transition duration-400 ease-in"
              onClick={() => onNavigate('sign-up')}
            >
              Sign up
            </button>
            <button className="bg-white text-[#025798] px-6 py-2 rounded-xl text-[1.2rem] hover:bg-[#025798] hover:text-white border-[1.5px] border-[#025798] transition duration-700">
              Download
            </button>
          </div>
        </div>
      </nav>
    );
  };

  export default Navbar;