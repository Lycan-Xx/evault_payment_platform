import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const InstantPaymentBusiness = ({ onNavigate }) => {
  const [paymentType, setPaymentType] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [subType, setSubType] = useState('');
  const [formData, setFormData] = useState({});
  const [paymentMethod, setPaymentMethod] = useState('card'); // Default payment method
  const [randomImage, setRandomImage] = useState('');

  // Fetch a random image when the component loads
  useEffect(() => {
    const fetchRandomImage = async () => {
      const images = [
        'https://picsum.photos/400/300?random=1',
        'https://picsum.photos/400/300?random=2',
        'https://picsum.photos/400/300?random=3',
      ];      
      const randomIndex = Math.floor(Math.random() * images.length);
      setRandomImage(images[randomIndex]);
    };

    fetchRandomImage();
  }, []);

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
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsDialogOpen(true);
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
        {/* Left section with the random image */}
        <div className="w-full lg:w-1/2 p-8 bg-gray-200 flex items-center justify-center">
          <img src={randomImage} alt="Random" className="max-w-full max-h-full rounded-xl shadow-lg" />
        </div>

        {/* Right section with the payment form */}
        <div className="w-full lg:w-1/2 p-8 bg-white flex items-center justify-center">
          <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
            <h2 className="text-3xl font-bold mb-6 text-blue-700 text-center">Payment</h2>
            <p className='mb-12 text-gray-600'>Try our services for free before <a className='text-xl text-blue-600 font-semibold' href="#">Sign Up</a></p>
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
                  Checkout
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Dialog for confirming payment */}
      {isDialogOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-[#025798]">Payment Checkout</h2>
              <button
                className="text-gray-600 hover:text-red-600 text-xl"
                onClick={() => setIsDialogOpen(false)}
              >
                &times;
              </button>
            </div>

            {/* Summary Section */}
            <div className="border-b mb-4">
              <div className="grid grid-cols-2 gap-2 text-sm font-semibold text-gray-700">
                <div>Category:</div>
                <div>{paymentType || 'N/A'}</div>
                <div>Subcategory:</div>
                <div>{subType || 'N/A'}</div>
                <div>Unit:</div>
                <div>{formData.units || 'N/A'}</div>
                <div>Rate:</div>
                <div>{formData.rate || 'N/A'}</div>
                <div>Amount:</div>
                <div>{formData.amount || 'N/A'}</div>
              </div>
            </div>

            {/* Tab Interface */}
            <div>
              <div className="flex border-b">
                <button
                  className={`w-1/3 py-2 ${paymentMethod === 'card' ? 'border-b-4 border-blue-600 text-blue-600' : 'text-gray-600'}`}
                  onClick={() => setPaymentMethod('card')}
                >
                  Card
                </button>
                <button
                  className={`w-1/3 py-2 ${paymentMethod === 'transfer' ? 'border-b-4 border-blue-600 text-blue-600' : 'text-gray-600'}`}
                  onClick={() => setPaymentMethod('transfer')}
                >
                  Transfer
                </button>
                <button
                  className={`w-1/3 py-2 ${paymentMethod === 'ussd' ? 'border-b-4 border-blue-600 text-blue-600' : 'text-gray-600'}`}
                  onClick={() => setPaymentMethod('ussd')}
                >
                  USSD
                </button>
              </div>

              {/* Tab Content */}
              <div className="mt-4">
                {paymentMethod === 'card' && (
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">Card Payment</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                        <input
                          type="text"
                          name="cardNumber"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-300"
                          placeholder="Enter Card Number"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                        <input
                          type="text"
                          name="expiryDate"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-300"
                          placeholder="MM/YY"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                        <input
                          type="text"
                          name="cvv"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-300"
                          placeholder="CVV"
                        />
                      </div>
                    </div>
                    <button
                      className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
                      onClick={() => console.log('Proceed with Card Payment')}
                    >
                      Proceed
                    </button>
                  </div>
                )}

                {paymentMethod === 'transfer' && (
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">Bank Transfer Details</h3>
                    <div className="space-y-2">
                      <div>
                        <p className="text-sm font-medium text-gray-700">Account Number:</p>
                        <p className="text-lg font-semibold text-gray-800">1234567890</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-700">Account Name:</p>
                        <p className="text-lg font-semibold text-gray-800">John Doe</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-700">Bank Name:</p>
                        <p className="text-lg font-semibold text-gray-800">ABC Bank</p>
                      </div>
                    </div>
                    <button
                      className="mt-4 px-6 py-2 bg-green-600 text white rounded-lg shadow hover:bg-green-700"
                      onClick={() => console.log('Proceed with Bank Transfer')}
                    >
                      Proceed
                    </button>
                  </div>
                )}

                {paymentMethod === 'ussd' && (
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">USSD Payment</h3>
                    <p className="text-sm text-gray-700">Dial *123*456# to proceed with the payment.</p>
                    <button
                      className="mt-4 px-6 py-2 bg-yellow-600 text-white rounded-lg shadow hover:bg-yellow-700"
                      onClick={() => console.log('Proceed with USSD Payment')}
                    >
                      Proceed
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InstantPaymentBusiness;