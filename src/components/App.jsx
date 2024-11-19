import React, { useState } from 'react';
import { MessageCircle, Headphones } from 'lucide-react';
import Navbar from './Navbar';
import Slider from './Slider';
import InstantPayments from './InstantPayments';
import SignUp from './signup/SignUp';
import SignIn from './signin/SignIn';
import ConfigureSecurity from './security/ConfigureSecurity';
import Dashboard from './Dashboard/Dashboard';

function App() {
  const [currentView, setCurrentView] = useState('instant-payments');

  const handleNavigation = (view) => {
    setTimeout(() => {
      setCurrentView(view);
    }, 500);
  };

  const renderRightColumn = () => {
    switch (currentView) {
      case 'configure-security':
        return (
          <ConfigureSecurity
            onSkip={() => handleNavigation('dashboard')} // Skip loads Dashboard
            onComplete={() => handleNavigation('dashboard')} // Completion also loads Dashboard
          />
        );
      case 'sign-in':
        return (
          <SignIn
            onContinue={() => handleNavigation('configure-security')}
            onSignUp={() => handleNavigation('sign-up')}
          />
        );
      case 'sign-up':
        return <SignUp onCancel={() => handleNavigation('instant-payments')} />;
      default:
        return <InstantPayments />;
    }
  };
  
  
  return (
    <div className="min-h-screen flex flex-col transition-opacity duration-500">
      {currentView !== 'dashboard' && (
        <>
          <Navbar onNavigate={handleNavigation} currentView={currentView} />

          <main className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 py-12">
            {/* Left Column: Static Slider */}
            <div className="block items-center justify-start pl-8 lg:pl-16 pt-[120px]">
              <Slider />
            </div>

            {/* Right Column: Dynamic Content */}
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
        </>
      )}

      {/* Render Dashboard when currentView is 'dashboard' */}
      {currentView === 'dashboard' && <Dashboard />}
    </div>
  );
}

export default App;
