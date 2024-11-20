import React from 'react';
import { Search, SlidersHorizontal, Banknote, Phone, Wifi, Building2, Car } from 'lucide-react';

const ServiceCard = ({ icon, title, onClick }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-2xl p-4 flex flex-col items-center justify-center hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer"
      onClick={onClick}
    >
      <div className="mb-2 text-[#025798]">
        {icon}
      </div>
      <h3 className="text-1xl font-medium text-gray-700 text-center">
        {title}
      </h3>
    </div>
  );
};

const InstantPayments = ({ onServiceClick }) => {
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
    <div className="w-full max-w-[36rem]">
      <div className="bg-white rounded-2xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-[#025798] mb-8 text-left"> 
          Instant Payment
        </h2>
        
        <div className="relative mb-8 py-4">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="w-6 h-6 text-gray-400" />
          </div>
          
          <input 
            type="text" 
            placeholder="Search for Agent / Vendor" 
            className="w-full p-2 pl-12 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-[#025798] focus:border-transparent transition duration-300 ease-in-out pr-12" 
          />

          <button className="absolute right-4 top-1/2 -translate-y-1/2">
            <SlidersHorizontal className="w-6 h-6 text-gray-400 hover:text-[#025798] transition" />
          </button>
        </div>
        
        <div className="grid grid-cols-3 gap-6 text-black">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              icon={service.icon} 
              title={service.title} 
              onClick={() => onServiceClick(service.title)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstantPayments;