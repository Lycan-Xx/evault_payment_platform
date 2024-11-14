

import React, { useState } from 'react';
import { MessageCircle, Headphones } from 'lucide-react';
import Navbar from './Navbar';
import Slider from './Slider';
import InstantPayments from './InstantPayments'; // Import the new component
import SignUp from './SignUp'
import SignIn from './SignIn';

function App() {
    const [ currentView, setCurreentView] = useState('InstantPayments');

    const handleNavigation = (view) => {
      setCurreentView(view);
    };

    const renderRightColumn = () => {
      switch (currentView) {
        case 'sign-in':
        	return <SignIn/>;

        case 'sign-up':
			return <SignUp/>;

			default:
				return <InstantPayments/>;

      }
    };

   
    
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onNavigate={handleNavigation} currentView={currentView} />

      
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 py-12">
        {/* Left Column - Main Content */}
        <div className="block items-center justify-start pl-8 lg:pl-16 pt-[120px]">
          <Slider />
        </div>

        {/* Right Column - Instant Payment */}

		{renderRightColumn()}

      </main>

      <footer className="bg-[#2B7A9E] text-white py-4">
        <div className="container mx-auto px-4 text-center text-base"> {/* Increased text size */}
          <p>Copyrights @ evault 2024</p>
          <p>No 29 Atiku abubakar mall, adamawa state</p>
        </div>
      </footer>

      <div className="fixed bottom-6 right-6 flex flex-col gap-4">
        <button className="bg-[#2B7A9E] text-white p-3 rounded-full shadow-lg hover:bg-opacity-90 transition">
          <MessageCircle className="w-6 h-6" /> {/* Increased icon size */}
        </button>
        <button className="bg-[#2B7A9E] text-white p-3 rounded-full shadow-lg hover:bg-opacity-90 transition">
          <Headphones className="w-6 h-6" /> {/* Increased icon size */}
        </button>
      </div>
    </div>
  );
}

export default App;
