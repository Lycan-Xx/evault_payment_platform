import React, { useState } from "react";
import { useTransition, animated } from "@react-spring/web";
import { MessageCircle, Headphones } from "lucide-react";
import Navbar from "./Navbar";
import Slider from "./Slider";
import InstantPayments from "./InstantPayments";
import InstantPaymentBusiness from "./InstantPaymentBusiness";
import SignUp from "./signup/SignUp";
import SignIn from "./signin/SignIn";
import ConfigureSecurity from "./security/ConfigureSecurity";
import Dashboard from "./Dashboard/Dashboard";
import Footer from "./Footer";

function App() {
  const [currentView, setCurrentView] = useState("instant-payments");

  const transitions = useTransition(currentView, {
    from: { opacity: 0, transform: "translate3d(50%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
    config: { mass: 1, tension: 200, friction: 20 },
  });

  const handleNavigation = (view) => {
    setTimeout(() => {
      setCurrentView(view);
    }, 500);
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Navbar */}
      {currentView !== "dashboard" && currentView !== "instant-payment-business" && (
        <>
          <Navbar onNavigate={handleNavigation} currentView={currentView} />

          {/* Main Content */}
          <main className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 py-12 relative z-10">
  {/* Left Section */}
  <div className="flex flex-col items-center justify-center pl-8 lg:pl-16">
    {/* Navigation Links */}
    <div className="flex space-x-6 mb-12">
      <p className="text-gray-600 hover:text-[#025798] text-2xl font-bold">
        Banking
      </p>
      <p className="text-gray-600 hover:text-[#025798] text-2xl font-bold">
        Payments
      </p>
      <p className="text-gray-600 hover:text-[#025798] text-2xl font-bold">
        Vault
      </p>
    </div>
    {/* Slider */}
    <Slider />
  </div>

  {/* Right Section */}
  <div className="flex items-center justify-center relative w-full h-full">
    {transitions((style, item) => (
      <animated.div
        style={{
          ...style,
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        className="flex flex-col items-center justify-center"
      >
        {item === "configure-security" && (
          <ConfigureSecurity
            onSkip={() => handleNavigation("dashboard")}
            onComplete={() => handleNavigation("dashboard")}
          />
        )}
        {item === "sign-in" && (
          <SignIn
            onContinue={() => handleNavigation("configure-security")}
            onSignUp={() => handleNavigation("sign-up")}
          />
        )}
        {item === "sign-up" && (
          <SignUp
            onCancel={() => handleNavigation("instant-payments")}
          />
        )}
        {item === "instant-payments" && (
          <InstantPayments
            onServiceClick={(service) => {
              if (service === "Instant Payments") {
                handleNavigation("instant-payment-business");
              }
            }}
          />
        )}
      </animated.div>
    ))}
  </div>
</main>


          {/* Footer */}







		 <Footer/>





          {/* Fixed Buttons */}
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

      {currentView === "instant-payment-business" && (
        <InstantPaymentBusiness onNavigate={handleNavigation} />
      )}
      {currentView === "dashboard" && <Dashboard />}
    </div>
  );
}

export default App;
