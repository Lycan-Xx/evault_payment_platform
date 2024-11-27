import React from "react";
import { Bell, Mail } from "lucide-react";

const TopBar = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div className="text-white text-xl font-bold">Wallet Balance: ₦2,500.98</div>
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
  );
};

export default TopBar;