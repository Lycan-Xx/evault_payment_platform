import React, { useState } from 'react';
import { useTransition, animated } from '@react-spring/web';
import { MessageCircle, Headphones } from 'lucide-react';
import Navbar from './Navbar';
import Slider from './Slider';
import InstantPayments from './InstantPayments';
import InstantPaymentBusiness from './InstantPaymentBusiness';
import SignUp from './signup/SignUp';
import SignIn from './signin/SignIn';
import ConfigureSecurity from './security/ConfigureSecurity';
import Dashboard from './Dashboard/Dashboard';

function App() {
  const [currentView, setCurrentView] = useState('instant-payments');

  const transitions = useTransition(currentView, {
    from: { opacity: 0, transform: 'translate3d(50%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
    config: { mass: 1, tension: 200, friction: 20 },
  });

  const handleNavigation = (view) => {
    setTimeout(() => {
      setCurrentView(view);
    }, 500);
  };

  return (
    <div className="min-h-screen flex flex-col transition-opacity duration-500">
      {currentView !== 'dashboard' && currentView !== 'instant-payment-business' && (
        <>
          <Navbar onNavigate={handleNavigation} currentView={currentView} />

          <main className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 py-12">
            <div className="block items-center justify-start pl-8 lg:pl-16 pt-[120px]">
              <div className="flex space-x-6 mb-24 mt-8">
                <p className="text-gray-600 hover:text-[#2B7A9E] text-2xl font-bold">Banking</p>
                <p className="text-gray-600 hover:text-[#2B7A9E] text-2xl font-bold">Payments</p>
                <p className="text-gray-600 hover:text-[#2B7A9E] text-2xl font-bold">Vault</p>
              </div>
              <Slider />
            </div>

            <div className="relative w-full h-full">
              {transitions((style, item) => (
                <animated.div style={{ ...style, position: 'absolute', width: '100%', height: '100%' }}>
                  {item === 'configure-security' && (
                    <ConfigureSecurity
                      onSkip={() => handleNavigation('dashboard')}
                      onComplete={() => handleNavigation('dashboard')}
                    />
                  )}
                  {item === 'sign-in' && (
                    <SignIn
                      onContinue={() => handleNavigation('configure-security')}
                      onSignUp={() => handleNavigation('sign-up')}
                    />
                  )}
                  {item === 'sign-up' && <SignUp onCancel={() => handleNavigation('instant-payments')} />}
                  {item === 'instant-payments' && (
                    <InstantPayments
                      onServiceClick={(service) => {
                        if (service === 'Instant Payments') {
                          handleNavigation('instant-payment-business');
                        }
                      }}
                    />
                  )}
                </animated.div>
              ))}
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

      {currentView === 'instant-payment-business' && (
        <InstantPaymentBusiness onNavigate={handleNavigation} />
      )}
      {currentView === 'dashboard' && <Dashboard />}
    </div>
  );
}

export default App;
