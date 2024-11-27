import React, { useState } from "react";
import { useSpring, useTransition, animated } from "react-spring"; // Import React Spring

// Import all subcomponents
import Sidebar from "../Dashboard/SideBar";
import TopBar from "./TopBar";
import PaymentCards from "../Dashboard/PaymentCard";
import TabContent from "./TabContent";
import Services from "./Services";

// Import icons for services
import {
  Wallet,
  PhoneCall,
  Globe,
  Building,
  Receipt,
  SatelliteDishIcon,
  Train,
} from "lucide-react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(null); // Manage active tab state

  // Payment card data
  const cardData = [
    {
      name: "Wema Bank",
      balance: "₦2,500.98",
      cardNumber: "**** **** **** 1234",
      expiry: "05/26",
      cardholder: "John Doe",
    },
    {
      name: "Monie Point",
      balance: "₦0.00",
      cardNumber: "**** **** **** 5678",
      expiry: "06/26",
      cardholder: "Jane Doe",
    },
    {
      name: "Zenith Bank",
      balance: "₦0.00",
      cardNumber: "**** **** **** 9101",
      expiry: "07/26",
      cardholder: "Alex Smith",
    },
  ];

  // Services data
  const services = [
    { title: "Instant Payment", description: "Pay instantly", icon: Wallet },
    { title: "Airtime Recharge", description: "Top up airtime", icon: PhoneCall },
    { title: "Data Bundles", description: "Purchase data", icon: Globe },
    { title: "School Fees Payment", description: "Pay school fees", icon: Building },
    { title: "Remita Payments", description: "Remita services", icon: Receipt },
    { title: "Cable Subscriptions", description: "Subscribe to cable", icon: SatelliteDishIcon },
    { title: "Transport Bookings", description: "Book transportation", icon: Train },
  ];

  const transferHistory = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    date: `2024-11-${10 + i}`,
    amount: `₦${(1000 + i * 100).toFixed(2)}`,
    recipient: `Recipient ${i + 1}`,
  }));

  const handleTabClick = (tab) => {
    setActiveTab(activeTab === tab ? null : tab);
  };

  // Transition for Tabs
  const transitions = useTransition(activeTab, {
    from: { opacity: 0, transform: "translateY(20px)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    leave: { opacity: 0, transform: "translateY(-20px)" },
    config: { tension: 210, friction: 20 },
  });

  // Spring animation for Services section
  const servicesSpring = useSpring({
    opacity: activeTab === null ? 1 : 0,
    transform: activeTab === null ? "translateY(0px)" : "translateY(-20px)",
    config: { tension: 180, friction: 20 },
  });

  return (
    <div className="bg-white min-h-screen flex">
      <Sidebar selectedTab={"Home"} setSelectedTab={() => {}} />

      <div className="flex-1 p-6">
        <TopBar />
        <PaymentCards cardData={cardData} />

        <div className="my-6">
          <div className="flex space-x-4">
            {["Transfer", "Withdraw", "History"].map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`py-2 px-4 rounded-md ${
                  activeTab === tab ? "bg-blue-600 text-white" : "bg-white text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {transitions((style, item) =>
          item ? (
            <animated.div style={style}>
              <TabContent selectedTab={item} transferHistory={transferHistory} />
            </animated.div>
          ) : null
        )}

        {activeTab === null && (
          <animated.div style={servicesSpring}>
            <Services services={services} />
          </animated.div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
