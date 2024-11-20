import React, { useState } from 'react';
import Navbar from './Navbar';

const InstantPaymentBusiness = ({ onNavigate }) => {
  const [paymentType, setPaymentType] = useState('');
  const [subType, setSubType] = useState('');
  const [formData, setFormData] = useState({});

  const handlePaymentTypeChange = (e) => {
    setPaymentType(e.target.value);
    setSubType('');
    setFormData({});
  };

  const handleSubTypeChange = (e) => {
    setSubType(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const renderPaymentFields = () => {
    switch (paymentType) {
      case 'electricity':
        return subType ? (
          <div className="bg-white shadow-lg rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Electricity Payment Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Meter/Bill Number</label>
                  <input
                    type="text"
                    name="meterNumber"
                    value={formData.meterNumber || ''}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-300"
                    placeholder="Enter Meter/Bill Number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name of Payee</label>
                  <input
                    type="text"
                    name="payeeName"
                    value={formData.payeeName || ''}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-300"
                    placeholder="Enter Name of Payee"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber || ''}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-300"
                    placeholder="Enter Phone Number"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email (Optional)</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email || ''}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-300"
                    placeholder="Enter Email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Units</label>
                  <input
                    type="number"
                    name="units"
                    value={formData.units || ''}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-300"
                    placeholder="Enter Units"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
                  <input
                    type="number"
                    name="amount"
                    value={formData.amount || ''}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-300"
                    placeholder="Enter Amount"
                  />
                </div>
              </div>
            </div>
          </div>
        ) : null;

      case 'school':
        return subType ? (
          <div className="bg-white shadow-lg rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">School Payment Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Classroom</label>
                  <select
                    name="classroom"
                    value={formData.classroom || ''}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-300"
                  >
                    <option value="">Select Classroom</option>
                    <option value="class1">Class 1</option>
                    <option value="class2">Class 2</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email || ''}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-300"
                    placeholder="Enter Email"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Student Name</label>
                  <input
                    type="text"
                    name="studentName"
                    value={formData.studentName || ''}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-300"
                    placeholder="Enter Student Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
                  <input
                    type="number"
                    name="amount"
                    value={formData.amount || ''}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-300"
                    placeholder="Enter Amount"
                  />
                </div>
              </div>
            </div>
          </div>
        ) : null;

      case 'internet':
        return subType ? (
          <div className="bg-white shadow-lg rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Internet Payment Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Data Type</label>
                  <select
                    name="dataType"
                    value={formData.dataType || ''}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-300"
                  >
                    <option value="">Select Data Type</option>
                    <option value="sme">SME</option>
                    <option value="corporate">Corporate</option>
                    <option value="gifting">Gifting</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Data Plan</label>
                  <select
                    name="dataPlan"
                    value={formData.dataPlan || ''}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-300"
                  >
                    <option value="">Select Data Plan</option>
                    <option value="1gb">1 GB</option>
                    <option value="2gb">2 GB</option>
                  </select>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber || ''}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-300"
                    placeholder="Enter Phone Number"
                  />
                </div>
              </div>
            </div>
          </div>
        ) : null;

      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar onNavigate={onNavigate} currentView="instant-payments" />

      <div className="flex flex-col lg:flex-row flex-1">
        <div className="w-full lg:w-1/2 p-8 bg-blue-200 lg:order-first">
          <h2 className="text-2xl font-bold">Left Column</h2>
        </div>

        <div className="w-full lg:w-1/2 p-8 bg-white shadow-lg relative">
          <h2 className="text-3xl font-bold mb-6 text-blue-700">Payment</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-lg font-semibold mb-2 text-gray-800">What are you paying for?</label>
              <select
                value={paymentType}
                onChange={handlePaymentTypeChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-300"
              >
                <option value="">Select an option</option>
                <option value="electricity">Electricity</option>
                <option value="school">School fees</option>
                <option value="internet">Internet service</option>
              </select>
            </div>

            {paymentType && (
              <div>
                <label className="block text-lg font-semibold mb-2 text-gray-800">
                  {paymentType === 'electricity' ? 'Utility type' :
                   paymentType === 'school' ? 'School name' :
                   'Select Network'}
                </label>
                <select
                  value={subType}
                  onChange={handleSubTypeChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-300"
                >
                  <option value="">
                    {paymentType === 'electricity' ? 'Select utility type' :
                     paymentType === 'school' ? 'Select school' :
                     'Select network'}
                  </option>
                  {paymentType === 'electricity' && [
                    <option key="prepaid" value="prepaid">Prepaid</option>,
                    <option key="postpaid" value="postpaid">Postpaid</option>
                  ]}
                  {paymentType === 'school' && [
                    <option key="school1" value="school1">School 1</option>,
                    <option key="school2" value="school2">School 2</option>
                  ]}
                  {paymentType === 'internet' && [
                    <option key="airtel" value="airtel">Airtel</option>,
                    <option key="glo" value="glo">Glo</option>,
                    <option key="9mobile" value="9mobile">9mobile</option>,
                    <option key="mtn" value="mtn">MTN</option>
                  ]}
                </select>
              </div>
            )}

            {renderPaymentFields()}

            <div className="flex justify-end mt-4">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <footer className="bg-[#2B7A9E] text-white py-4">
        <div className="container mx-auto px-4 text-center text-base">
          <p>Copyrights @ evault 2024</p>
          <p>No 29 Atiku abubakar mall, adamawa state</p>
        </div>
      </footer>
    </div>
  );
};

export default InstantPaymentBusiness;