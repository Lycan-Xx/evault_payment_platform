import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Wallet, 
  CreditCard, 
  Send, 
  ArrowDownToLine, 
  PiggyBank, 
  ShieldCheck, 
  Bell, 
  User, 
  Menu,
  LogOut
} from 'lucide-react';

export default function Dashboard() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear authentication
    localStorage.removeItem('isAuthenticated');
    
    // Redirect to sign-in page
    navigate('/sign-in');
  };

  const cardData = [
    { 
      type: 'Visa', 
      last4: '4567', 
      balance: '$2,456.90', 
      color: 'bg-blue-500' 
    },
    { 
      type: 'Mastercard', 
      last4: '1234', 
      balance: '$1,234.50', 
      color: 'bg-purple-500' 
    }
  ];

  const quickActions = [
    { 
      icon: <Send className="text-blue-600" size={24} />, 
      label: 'Send Money' 
    },
    { 
      icon: <ArrowDownToLine className="text-green-600" size={24} />, 
      label: 'Top Up' 
    },
    { 
      icon: <PiggyBank className="text-yellow-600" size={24} />, 
      label: 'Save' 
    },
    { 
      icon: <ShieldCheck className="text-purple-600" size={24} />, 
      label: 'Security' 
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex">
      {/* Sidebar - Hidden on Mobile, Visible on Desktop */}
      <div className="hidden md:block w-64 bg-white shadow-md p-6">
        <div className="flex items-center mb-10">
          <Wallet className="mr-3 text-blue-600" size={30} />
          <h2 className="text-2xl font-bold text-gray-800">eVault</h2>
        </div>
        
        <nav className="space-y-4">
          {['Banking', 'Payments', 'Vault', 'Profile'].map((item) => (
            <div 
              key={item} 
              className="flex items-center p-3 hover:bg-blue-50 rounded-lg cursor-pointer"
            >
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
          
          {/* Logout Option */}
          <div 
            onClick={handleLogout}
            className="flex items-center p-3 hover:bg-blue-50 rounded-lg cursor-pointer text-red-500"
          >
            <LogOut className="mr-2" size={20} />
            <span>Logout</span>
          </div>
        </nav>
      </div>

      {/* Rest of the Dashboard remains the same as previous implementation */}
      {/* ... (previous Dashboard code) ... */}
    </div>
  );
}