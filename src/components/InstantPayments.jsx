import React from 'react';
import { Search, SlidersHorizontal, Banknote, Phone, Wifi, Building2, Car } from 'lucide-react';

const ServiceCard = ({ icon, title }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer">
      <div className="mb-2 text-[#2B7A9E]">
        {icon}
      </div>
      <h3 className="text-sm font-medium text-gray-700 text-center">
        {title}
      </h3>
    </div>
  );
};

const InstantPayments = () => {
  const services = [
    { icon: <Banknote size={48} strokeWidth={1.5} />, title: 'Instant Payments' },
    { icon: <Phone size={48} strokeWidth={1.5} />, title: 'Airtime' },
    { icon: <Wifi size={48} strokeWidth={1.5} />, title: 'Data' },
    { icon: <Building2 size={48} strokeWidth={1.5} />, title: 'Schools' },
    { icon: <Phone size={48} strokeWidth={1.5} />, title: 'Remita' },
    { icon: <Wifi size={48} strokeWidth={1.5} />, title: 'Government' },
    { icon: <Banknote size={48} strokeWidth={1.5} />, title: 'Auditing fee' },
    { icon: <Phone size={48} strokeWidth={1.5} />, title: 'Eatery' },
    { icon: <Car size={48} strokeWidth={1.5} />, title: 'Transport' }
  ];

  return (
      <div className="w-full max-w-[36rem]"> {/* Increased max-width */}
        <div className="bg-white rounded-2xl shadow-2xl p-8"> {/* Enhanced shadow and padding */}
          <h2 className="text-3xl font-bold text-[#2B7A9E] mb-8 text-center"> 
            Instant Payment Services
          </h2>
          
          {/* Enhanced Search Bar */}
          <div className="relative mb-8">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="w-6 h-6 text-gray-400" />
            </div>
            
            <input 
              type="text" 
              placeholder="Search for Agent / Vendor" 
              className="w-full p-4 pl-12 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-[#2B7A9E] focus:border-transparent transition duration-300 ease-in-out pr-12" 
            />

            <button className="absolute right-4 top-1/2 -translate-y-1/2">
              <SlidersHorizontal className="w-6 h-6 text-gray-400 hover:text-[#2B7A9E] transition" />
            </button>
          </div>
          
          {/* Increased grid gap and adjusted columns */}
          <div className="grid grid-cols-3 gap-6 text-black"> 
            {services.map((service, index) => (
              <ServiceCard 
                key={index} 
                icon={service.icon} 
                title={service.title} 
              />
            ))}
          </div>
        </div>
      </div>
  );
};

export default InstantPayments;