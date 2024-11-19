import React, { useState } from "react";
import logo from '../assets/logo.jpg';
import {
  Wallet,
  CreditCard,
  Send,
  ArrowDownToLine,
  PhoneCall,
  PiggyBank,
  Globe,
  ShieldCheck,
  Train,
  Building,
  Bell,
  Receipt,
  User,
  SatelliteDishIcon,
  Menu,
  ArrowRightLeft, // Transfer icon
  Layers, // Withdraw icon
  History, // History icon
  Mail,
} from "lucide-react";

export default function Dashboard() {
  const [selectedTab, setSelectedTab] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const cardData = [
    {
      name: "Wema Bank",
      balance: "₦2,500.98",
    },
    {
      name: "Monie Point",
      balance: "₦0.00",
    },
    {
      name: "Zenith Bank",
      balance: "₦0.00",
    },
  ];

  const transferHistory = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    date: `2024-11-${10 + i}`,
    amount: `₦${(1000 + i * 100).toFixed(2)}`,
    recipient: `Recipient ${i + 1}`,
  }));

  const renderTabContent = () => {
    switch (selectedTab) {
      case "Transfer":
        return (
          <form className="p-4 bg-gray-50 rounded-md shadow-md transition duration-500">
            <h4 className="text-lg font-bold mb-4 flex items-center">
              <ArrowRightLeft className="mr-2" /> Funds Transfer
            </h4>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Recipient</label>
              <input
                type="text"
                placeholder="Enter recipient name"
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Amount</label>
              <input
                type="number"
                placeholder="Enter amount"
                className="w-full p-2 border rounded-md"
              />
            </div>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 flex items-center justify-center">
              <Send className="mr-2" /> Transfer
            </button>
          </form>
        );
      case "History":
        return (
          <div className="p-4 bg-gray-50 rounded-md shadow-md transition duration-500">
            <h4 className="text-lg font-bold mb-4 flex items-center">
              <History className="mr-2" /> Transfer History
            </h4>
            <ul className="space-y-2">
              {transferHistory.map((history) => (
                <li
                  key={history.id}
                  className="p-2 bg-white border rounded-md shadow-sm"
                >
                  <div className="flex justify-between">
                    <span>{history.date}</span>
                    <span className="font-semibold">{history.amount}</span>
                  </div>
                  <p className="text-gray-600">To: {history.recipient}</p>
                </li>
              ))}
            </ul>
          </div>
        );
      case "Withdraw":
        return (
          <form className="p-4 bg-gray-50 rounded-md shadow-md transition duration-500">
            <h4 className="text-lg font-bold mb-4 flex items-center">
              <Layers className="mr-2" /> Withdraw Funds
            </h4>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Amount</label>
              <input
                type="number"
                placeholder="Enter amount"
                className="w-full p-2 border rounded-md"
              />
            </div>
            <button className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 flex items-center justify-center">
              <ArrowDownToLine className="mr-2" /> Withdraw
            </button>
          </form>
        );
      default:
        return null;
    }
  };

  const services = [
    { title: "Instant Payment", description: "Pay instantly", icon: Wallet },
    { title: "Airtime Recharge", description: "Top up airtime", icon: PhoneCall },
    { title: "Data Bundles", description: "Purchase data", icon: Globe },
    { title: "School Fees Payment", description: "Pay school fees", icon: Building },
    { title: "Remita Payments", description: "Remita services", icon: Receipt },
    { title: "Cable Subscriptions", description: "Subscribe to cable", icon: SatelliteDishIcon },
    { title: "Transport Bookings", description: "Book transportation", icon: Train },
  ];

  const toggleTab = (tab) => {
    setSelectedTab(selectedTab === tab ? null : tab);
  };

  return (
    <div className="bg-blue-800 bg-opacity-85 min-h-full h-[24rem] rounded-ee-2xl flex flex-col md:flex-row">

      {/* Sidebar */}
      <div className={`w-64 bg-white shadow-md p-6 ${isSidebarOpen ? 'block' : 'hidden'} md:block`}>
        <div className="mb-10">
          <div className="flex items-center">

				<img src={logo} alt="logo" className="w-[5rem] h-[5rem] mb-2 mr-3" />
				
            <h2 className="text-3xl font-bold text-[#025798] mt-4">eVault</h2>
          </div>
          <div className="mt-6">
            <img
              src="https://picsum.photos/id/237/200/300"
              alt="User Avatar"
              className="rounded-full w-[7rem] h-[7rem]"
            />
            <h3 className="text-lg font-bold mt-2">Usman Ahmad</h3>
            <p className="text-gray-600 text-sm">Customer (User)</p>
          </div>
        </div>
        <nav className="space-y-4">
          {["Home", "Trade", "Vault", "Settings", "Customers"].map((item) => (
            <div
              key={item}
              className="flex items-center p-3 hover:bg-blue-50 rounded-lg cursor-pointer"
            >
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
        </nav>
        <button className="absolute bottom-6 left-6 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700">
          Logout
        </button>
      </div>

      {/* Hamburger Menu Button */}
      <button
        className="p-4 md:hidden"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <Menu className="text-gray-700" size={30} />
      </button>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8">

        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-white text-xl font-bold">
            Wallet Balance: ₦2,500.98
          </div>
          <div className="flex space-x-4">
            <Bell className="text-white hover:text-blue-600 cursor-pointer" size={24} />
            <Mail className="text-white hover:text-blue-600 cursor-pointer" size={24} />
            <img
              src="https://picsum.photos/id/237/200/300"
              alt="User Avatar"
              className="rounded-full w-10 h-10 cursor-pointer"
            />
          </div>
        </div>

        <p className="text-xl font-bold text-white mb-8">Evault Dashboard</p>

        {/* Wallet Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="rounded-lg p-4 text-white"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 255, 0.5), rgba(0, 0, 255, 0.5)), url('https://picsum.photos/200?random=${index}')`,
                backgroundSize: 'cover',
              }}
            >
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-sm font-semibold">Expires</p>
                  <p className="text-lg font-bold">05/26</p>
                </div>
              </div>
              <div className="text-center">
                <p className="text-sm font-semibold">Cardholder Name</p>
                <p className="text-lg font-bold">John Doe</p>
              </div>
              <div className="text-right mt-4">
                <p className="text-sm font-semibold">Card Number</p>
                <p className="text-lg font-bold">**** **** **** 1234</p>
              </div>
            </div>
          ))}
        </div>

        {/* Radio Tabs Navigation */}
        <div className="bg-white rounded-xl p-6 shadow-md mb-6">
          <div className="flex justify-around mb-4">
            {[
              { 
                name: "Transfer", 
                icon: ArrowRightLeft 
              },
              { 
                name: "Withdraw", 
                icon: Layers 
              },
              { 
                name: "History", 
                icon: History 
              }
            ].map(({ name, icon: Icon }) => (
              <button
                key={name}
                onClick={() => toggleTab(name)}
                className={`flex items-center py-2 px-4 rounded-md transition duration-500 ${
                  selectedTab === name
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-blue-50"
                }`}
              >
                <Icon className="mr-2" />
                {name}
              </button>
            ))}
          </div>
          {selectedTab && (
            <div className="transition duration-500 mt-4">
              {renderTabContent()}
            </div>
          )}
        </div>

        {/* Our Services Section */}
        <div className="bg-white rounded-xl p-6 shadow-md">
          <h3 className="text-xl font-bold mb-4">Our Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 border rounded-md hover:shadow-lg"
              >
                <service.icon size={48} strokeWidth={1.5} />
                <h4 className="text-lg font-bold">{service.title}</h4>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}