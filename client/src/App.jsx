import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Membership from './pages/Membership';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiesPolicy from './pages/CookiesPolicy';
import GuestPass from './pages/GuestPass';
import Facilities from './pages/Facilities';
import Trainers from './pages/Trainers';
import Wellness from './pages/Wellness';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [user, setUser] = useState(null);

  // Restore user session on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('aurafit_user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        localStorage.removeItem('aurafit_user');
      }
    }
  }, []);

  // Instant scroll to top when page changes (smooth scroll looks broken on navigation)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    localStorage.setItem('aurafit_user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('aurafit_user');
    setCurrentPage('home');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'membership':
        return <Membership setCurrentPage={setCurrentPage} />;
      case 'contact':
        return <Contact />;
      case 'login':
        return <Login setCurrentPage={setCurrentPage} onLoginSuccess={handleLoginSuccess} />;
      case 'register':
        return <Register setCurrentPage={setCurrentPage} onLoginSuccess={handleLoginSuccess} />;
      case 'privacy':
        return <PrivacyPolicy setCurrentPage={setCurrentPage} />;
      case 'terms':
        return <TermsOfService setCurrentPage={setCurrentPage} />;
      case 'cookies':
        return <CookiesPolicy setCurrentPage={setCurrentPage} />;
      case 'guest-pass':
        return <GuestPass setCurrentPage={setCurrentPage} />;
      case 'facilities':
        return <Facilities setCurrentPage={setCurrentPage} />;
      case 'trainers':
        return <Trainers setCurrentPage={setCurrentPage} />;
      case 'wellness':
        return <Wellness setCurrentPage={setCurrentPage} />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-obsidian-900 text-gray-300 font-sans custom-scrollbar">
      {/* Navigation Header */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        user={user}
        onLogout={handleLogout}
      />

      {/* Active Page Body */}
      <main className="flex-grow">
        {renderPage()}
      </main>

      {/* Footer Section */}
      <Footer setCurrentPage={setCurrentPage} />

      {/* Floating Call to Action */}
      <WhatsAppButton />
    </div>
  );
}

export default App;
