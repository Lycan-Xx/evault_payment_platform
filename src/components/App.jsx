import React, { useState } from 'react';
import { MessageCircle, Headphones } from 'lucide-react';
import Navbar from './Navbar';
import Slider from './Slider';
import InstantPayments from './InstantPayments';
import SignUp from './signup/SignUp';
import SignIn from './signin/SignIn';
import ConfigureSecurity from './security/ConfigureSecurity';

function App() {
  // State to track the current view
  const [currentView, setCurrentView] = useState('instant-payments');

  // Function to change the current view
  const handleNavigation = (view) => {
    setCurrentView(view);
  };

  // Render the component based on the current view
  const renderRightColumn = () => {
    switch (currentView) {
      case 'configure-security':
        return <ConfigureSecurity />;
      case 'sign-in':
        return <SignIn onContinue={() => handleNavigation('configure-security')} />;
      case 'sign-up':
        return <SignUp />;
      default:
        return <InstantPayments />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onNavigate={handleNavigation} />

      <main className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 py-12">
        {/* Left Column - Main Content */}
        <div className="block items-center justify-start pl-8 lg:pl-16 pt-[120px]">
          <Slider />
        </div>

        {/* Right Column */}
        <div className="flex items-center justify-center">
          {renderRightColumn()}
        </div>
      </main>

      <footer className="bg-[#2B7A9E] text-white py-4">
        <div className="container mx-auto px-4 text-center text-base">
          <p>Copyrights @ evault 2024</p>
          <p>No 29 Atiku abubakar mall, adamawa state</p>
        </div>
      </footer>

      <div className="fixed bottom-6 right-6 flex flex-col gap-4">
        <button className="bg-[#2B7A9E] text-white p-3 rounded-full shadow-lg hover:bg-opacity-90 transition">
          <MessageCircle className="w-6 h-6" />
        </button>
        <button className="bg-[#2B7A9E] text-white p-3 rounded-full shadow-lg hover:bg-opacity-90 transition">
          <Headphones className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

export default App;