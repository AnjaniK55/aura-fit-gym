import React from 'react';

const Footer = ({ setCurrentPage }) => {
  return (
    <footer className="bg-obsidian-800 border-t border-white/5 pt-16 pb-8 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Info */}
          <div className="space-y-4">
            <span className="text-2xl font-black uppercase tracking-wider text-white">
              AURA<span className="text-gold-500 font-normal text-xl">FIT</span>
            </span>
            <p className="text-sm">
              An exclusive sanctuary dedicated to luxury fitness, holistic health, and bespoke training. Achieve ultimate physical refinement with us.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => setCurrentPage('home')} className="hover:text-gold-500 transition-colors duration-200 cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('about')} className="hover:text-gold-500 transition-colors duration-200 cursor-pointer">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('services')} className="hover:text-gold-500 transition-colors duration-200 cursor-pointer">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('membership')} className="hover:text-gold-500 transition-colors duration-200 cursor-pointer">
                  Membership Plans
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('contact')} className="hover:text-gold-500 transition-colors duration-200 cursor-pointer">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-4">Club Hours</h4>
            <ul className="space-y-2 text-sm">
              <li>Monday - Friday: 05:00 AM - 10:00 PM</li>
              <li>Saturday: 06:00 AM - 08:00 PM</li>
              <li>Sunday: 08:00 AM - 04:00 PM</li>
              <li className="text-gold-500 text-xs font-semibold uppercase tracking-wider mt-2">Personal Training Hours: 24/7</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-4">Contact Club</h4>
            <ul className="space-y-2 text-sm">
              <li>123 Luxury Avenue, Suite 100</li>
              <li>Beverly Hills, CA 90210</li>
              <li>
                <a href="tel:+13105550199" className="hover:text-gold-500 transition-colors duration-200">
                  +1 (310) 555-0199
                </a>
              </li>
              <li>
                <a href="mailto:membership@aurafit.com" className="hover:text-gold-500 transition-colors duration-200">
                  membership@aurafit.com
                </a>
              </li>
            </ul>
          </div>
        </div>


        {/* Copyright */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} AURA FIT. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button 
              onClick={() => setCurrentPage('privacy')} 
              className="hover:text-gold-500 transition-colors cursor-pointer bg-transparent border-0 p-0 text-xs font-light text-gray-400"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => setCurrentPage('terms')} 
              className="hover:text-gold-500 transition-colors cursor-pointer bg-transparent border-0 p-0 text-xs font-light text-gray-400"
            >
              Terms of Service
            </button>
            <button 
              onClick={() => setCurrentPage('cookies')} 
              className="hover:text-gold-500 transition-colors cursor-pointer bg-transparent border-0 p-0 text-xs font-light text-gray-400"
            >
              Cookies Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
