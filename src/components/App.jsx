import React from 'react';
import { Phone, Wifi, Building2, Banknote, Car, MessageCircle, Headphones, Search } from 'lucide-react';
import Navbar from './Navbar';
import ServiceCard from './ServiceCard';
import Slider from './Slider';

function App() {
  const services = [
    { icon: <Banknote size={24} />, title: 'Instant Payments' },
    { icon: <Phone size={24} />, title: 'Airtime' },
    { icon: <Wifi size={24} />, title: 'Data' },
    { icon: <Building2 size={24} />, title: 'Schools' },
    { icon: <Phone size={24} />, title: 'Remita' },
    { icon: <Wifi size={24} />, title: 'Government' },
    { icon: <Banknote size={24} />, title: 'Auditing fee' },
    { icon: <Phone size={24} />, title: 'Eatery' },
    { icon: <Car size={24} />, title: 'Transport' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 py-12">
        {/* Left Column - Main Content */}
        <div className="block items-center justify-start pl-8 lg:pl-16 pt-[120px]">
          <Slider />
        </div>

        {/* Right Column - Instant Payment */}
        <div className="flex items-center">
          <div className="w-full max-w-2xl"> {/* Increased max-width */}
            <div className="bg-white rounded-lg shadow-lg p-8"> {/* Increased padding */}
              <h2 className="text-2xl font-bold text-[#2B7A9E] mb-6"> {/* Increased font size */}
                Instant payment
              </h2>
              
              {/* Enhanced Search Bar */}
              <div className="relative mb-6">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="w-5 h-5 text-gray-400" /> {/* Increased icon size */}
                </div>
                <input
                  type="text"
                  placeholder="Search for Agent / Vendor"
                  className="
                    w-full 
                    p-4 
                    pl-12 
                    border 
                    border-gray-300 
                    rounded-lg 
                    text-base 
                    focus:outline-none 
                    focus:ring-2 
                    focus:ring-[#2B7A9E] 
                    focus:border-transparent 
                    transition 
                    duration-300 
                    ease-in-out
                    pr-12
                  " {/* Increased padding and font size */}
                />
                <button className="absolute right-4 top-1/2 -translate-y-1/2">
                  <MessageCircle className="w-5 h-5 text-gray-400 hover:text-[#2B7A9E] transition" /> {/* Increased icon size */}
                </button>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                {services.map((service, index) => (
                  <ServiceCard key={index} icon={service.icon} title={service.title} />
                ))}
              </div>
            </div>
          </div>
        </div>
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