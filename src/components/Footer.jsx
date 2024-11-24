import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FaPhone, FaEnvelope, FaMapMarker } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#025798] text-white py-6 flex flex-col md:flex-row justify-between items-start md:items-center w-full">
      {/* Left Section: Logo and Tagline */}
      <div className="flex flex-col pl-4 mb-4 md:mb-0">
		<div className="space-x-2 mb-8">
        <a href="#" className="text-2xl font-bold tracking-wider hover:underline">
          eVault
        </a>
        <span className="text-sm font-mono text-gray-300 mt-2">Powered by Bellbank</span>
		</div>

        {/* Contact */}
        <ul className="space-y-1 text-gray-300">
          <li>
            <a href="tel:+234000000000" className="flex text-[0.75rem] items-center hover:text-[#2B7A9E] transition-colors">
              <FaPhone className="mr-1" aria-hidden="true" /> +234 000000000
            </a>
          </li>
          <li>
            <a href="mailto:support@evault.com.ng" className="flex text-sm items-center hover:text-[#2B7A9E] transition-colors">
              <FaEnvelope className="mr-1" aria-hidden="true" /> support@evault.com.ng
            </a>
          </li>
          <li className="flex items-center">
            <FaMapMarker className="mr-1 text-sm" aria-hidden="true" /> No 29 Atiku Abubakar Mall, Numan road, Adamawa State, NG
          </li>
        </ul>
      </div>

      {/* Center Section: Social Icons and Copyright */}
      <div className="flex flex-col items-center space-y-1">
        <div className="flex space-x-4 mb-2">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#2B7A9E] transition-colors"
            aria-label="Facebook"
          >
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#2B7A9E] transition-colors"
            aria-label="Twitter"
          >
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#2B7A9E] transition-colors"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
        </div>

        <p className="text-sm text-gray-400">
          © 2024 - eVault. All rights reserved.
        </p>
      </div>

      {/* Right Section: Privacy Policy and Terms */}
      <div className="pr-4 text-sm space-x-4">
        <a
          href="/privacy-policy"
          className="hover:text-[#2B7A9E] transition-colors"
          aria-label="Privacy Policy"
        >
          Privacy Policy
        </a>
        <a
          href="/terms-and-conditions"
          className="hover:text-[#2B7A9E] transition-colors"
          aria-label="Terms and Conditions"
        >
          Terms and Conditions
        </a>
      </div>
    </footer>
  );
};

export default Footer;
