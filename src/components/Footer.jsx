import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white py-12 px-4 h-18">
      <div className="container mx-auto max-w-6xl">
        {/* Logo/Brand Section */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold tracking-wider">eVault</h2>
        </div>

        
        {/* Social Media Icons */}
        <div className="flex justify-center mb-8 space-x-6">
          <a 
            href="https://www.facebook.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-[#2B7A9E] transition-colors"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-[#2B7A9E] transition-colors"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a 
            href="https://www.instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-[#2B7A9E] transition-colors"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>

        {/* Contact and Legal Links */}
        <div className="text-center mb-8 space-y-4">
          <div className="space-x-4">
            <a href="/privacy-policy" className="hover:text-[#2B7A9E] transition-colors">Privacy Policy</a>
            <span className="text-gray-500">|</span>
            <a href="/terms-and-conditions" className="hover:text-[#2B7A9E] transition-colors">Terms and Conditions</a>
            <span className="text-gray-500">|</span>
            <a href="https://www.bellbank.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#2B7A9E] transition-colors">
              Powered by Bellbank
            </a>
          </div>
          <div>
            <p>Contact: <a href="mailto:support@evault.com" className="hover:text-[#2B7A9E] transition-colors">support@evault.com</a></p>
            <p>Phone: <span className="hover:text-[#2B7A9E] transition-colors">123-456-7890</span></p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          <p>Copyright © 2024 Evault. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;