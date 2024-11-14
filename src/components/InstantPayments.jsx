// src/components/InstantPayments.js

import React from 'react';
import { Search, MessageCircle, Banknote, Phone, Wifi, Building2, Car } from 'lucide-react'; // Import the necessary icons
import ServiceCard from './ServiceCard';

const InstantPayments = () => {
  const services = [
    { icon: <Banknote size={60} />, title: 'Instant Payments' },
    { icon: <Phone size={60} />, title: 'Airtime' },
    { icon: <Wifi size={60} />, title: 'Data' },
    { icon: <Building2 size={60} />, title: 'Schools' },
    { icon: <Phone size={60} />, title: 'Remita' },
    { icon: <Wifi size={60} />, title: 'Government' },
    { icon: <Banknote size={60} />, title: 'Auditing fee' },
    { icon: <Phone size={60} />, title: 'Eatery' },
    { icon: <Car size={60} />, title: 'Transport' }
  ];

  return (
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
              className="w-full p-4 pl-12 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-[#2B7A9E] focus:border-transparent transition duration-300 ease-in-out pr-12" 
            /> {/* Increased padding and font size */}

            <button className="absolute right-4 top-1/2 -translate-y-1/2">
              <MessageCircle className="w-5 h-5 text-gray-400 hover:text-[#2B7A9E] transition" /> {/* Increased icon size */}
            </button>
          </div>
          
          <div className="grid grid-cols-3 gap-4 text-black">
            {services.map((service, index) => (
              <ServiceCard key={index} icon={service.icon} title={service.title} className="p-4 flex flex-col items-center justify-center"/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstantPayments;