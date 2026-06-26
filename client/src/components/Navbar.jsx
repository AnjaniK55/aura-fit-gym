import React, { useState } from 'react';

const Navbar = ({ currentPage, setCurrentPage, user, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'membership', label: 'Plans' },
    { id: 'guest-pass', label: 'Guest Pass' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => setCurrentPage('home')}>
            <span className="text-2xl font-black uppercase tracking-wider text-white">
              AURA<span className="text-gold-500 font-normal text-xl">FIT</span>
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => setCurrentPage(link.id)}
                className={`relative py-2 text-sm font-semibold tracking-wider uppercase transition-colors duration-300 cursor-pointer ${
                  currentPage === link.id ? 'text-gold-500' : 'text-gray-200 hover:text-white'
                }`}
              >
                {link.label}
                {currentPage === link.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gold-500 transition-all duration-300"></span>
                )}
              </button>
            ))}
          </div>

          {/* Desktop Auth State */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-6">
                <span className="text-sm text-gray-200">
                  Welcome, <span className="font-semibold text-gold-500">{user.username}</span>
                </span>
                <button
                  onClick={onLogout}
                  className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white border border-white/20 hover:border-gold-500 hover:text-gold-500 rounded transition-all duration-300 cursor-pointer"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-6">
                <button
                  onClick={() => setCurrentPage('login')}
                  className="text-sm font-semibold text-gray-200 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  Sign In
                </button>
                <button
                  onClick={() => setCurrentPage('register')}
                  className="px-5 py-2 text-sm font-semibold uppercase tracking-wider text-obsidian-900 bg-gold-500 hover:bg-gold-400 rounded transition-all duration-300 cursor-pointer shadow-lg shadow-gold-500/20"
                >
                  Join Club
                </button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass border-b border-white/5 animate-fade-in-up">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setCurrentPage(link.id);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium tracking-wide uppercase transition-colors cursor-pointer ${
                  currentPage === link.id ? 'bg-gold-500/10 text-gold-500' : 'text-gray-200 hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}

            <div className="border-t border-white/5 pt-4 pb-2 px-3">
              {user ? (
                <div className="flex flex-col space-y-3">
                  <span className="text-sm text-gray-200">
                    Logged in as: <span className="font-semibold text-gold-500">{user.username}</span>
                  </span>
                  <button
                    onClick={() => {
                      onLogout();
                      setIsOpen(false);
                    }}
                    className="w-full text-center py-2 text-xs font-semibold uppercase tracking-wider text-white border border-white/20 hover:border-gold-500 rounded transition-all duration-300 cursor-pointer"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex flex-col space-y-3">
                  <button
                    onClick={() => {
                      setCurrentPage('login');
                      setIsOpen(false);
                    }}
                    className="w-full text-left py-2 text-sm font-semibold text-gray-200 hover:text-white cursor-pointer"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => {
                      setCurrentPage('register');
                      setIsOpen(false);
                    }}
                    className="w-full text-center py-2 text-sm font-semibold uppercase tracking-wider text-obsidian-900 bg-gold-500 hover:bg-gold-400 rounded transition-all duration-300 cursor-pointer"
                  >
                    Join Club
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
