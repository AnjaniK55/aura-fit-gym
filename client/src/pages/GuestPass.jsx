import React, { useState } from 'react';
import { API_BASE_URL } from '../config';

const GuestPass = ({ setCurrentPage }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    fitnessGoal: 'Build Muscle',
    visitDate: ''
  });
  
  const [passData, setPassData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    // Basic validations
    if (!formData.name || !formData.email || !formData.phone || !formData.age || !formData.visitDate) {
      setError('All fields are required');
      return;
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    const phoneRegex = /^\+?[0-9\s\-()]{7,15}$/;
    if (!phoneRegex.test(formData.phone)) {
      setError('Please enter a valid phone number');
      return;
    }

    const parsedAge = parseInt(formData.age, 10);
    if (isNaN(parsedAge) || parsedAge < 14 || parsedAge > 100) {
      setError('Age must be between 14 and 100');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/guest-passes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          age: parsedAge,
          fitnessGoal: formData.fitnessGoal,
          visitDate: formData.visitDate
        })
      });

      let data;
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      }

      if (!response.ok) {
        throw new Error((data && data.message) || `Request failed with status ${response.status}`);
      }

      if (!data || !data.success) {
        throw new Error('Invalid server response. Please verify that your API backend is running and reachable.');
      }

      setPassData(data.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  // Generate beautiful SVG Mock QR Code dynamically
  const renderQRCode = (passId) => {
    return (
      <svg className="w-32 h-32 mx-auto bg-white p-2 rounded-lg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="qrGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0D0E12" />
            <stop offset="100%" stopColor="#D4AF37" />
          </linearGradient>
        </defs>
        {/* Outer boundaries / finder patterns */}
        <rect x="5" y="5" width="20" height="20" fill="url(#qrGrad)" />
        <rect x="8" y="8" width="14" height="14" fill="#FFFFFF" />
        <rect x="11" y="11" width="8" height="8" fill="url(#qrGrad)" />

        <rect x="75" y="5" width="20" height="20" fill="url(#qrGrad)" />
        <rect x="78" y="8" width="14" height="14" fill="#FFFFFF" />
        <rect x="81" y="11" width="8" height="8" fill="url(#qrGrad)" />

        <rect x="5" y="75" width="20" height="20" fill="url(#qrGrad)" />
        <rect x="8" y="8" width="14" height="14" fill="#FFFFFF" />
        <rect x="11" y="81" width="8" height="8" fill="url(#qrGrad)" />

        {/* Small alignment block */}
        <rect x="75" y="75" width="8" height="8" fill="url(#qrGrad)" />

        {/* Random QR code pixels grid data representation */}
        <rect x="30" y="5" width="4" height="8" fill="url(#qrGrad)" />
        <rect x="38" y="5" width="8" height="4" fill="url(#qrGrad)" />
        <rect x="50" y="5" width="4" height="12" fill="url(#qrGrad)" />
        <rect x="58" y="9" width="12" height="4" fill="url(#qrGrad)" />

        <rect x="30" y="20" width="8" height="4" fill="url(#qrGrad)" />
        <rect x="42" y="16" width="4" height="8" fill="url(#qrGrad)" />
        <rect x="62" y="20" width="8" height="8" fill="url(#qrGrad)" />
        <rect x="50" y="24" width="8" height="4" fill="url(#qrGrad)" />

        <rect x="5" y="30" width="12" height="4" fill="url(#qrGrad)" />
        <rect x="22" y="30" width="4" height="8" fill="url(#qrGrad)" />
        <rect x="34" y="30" width="16" height="4" fill="url(#qrGrad)" />
        <rect x="55" y="30" width="8" height="8" fill="url(#qrGrad)" />
        <rect x="67" y="34" width="28" height="4" fill="url(#qrGrad)" />

        <rect x="5" y="42" width="4" height="8" fill="url(#qrGrad)" />
        <rect x="15" y="38" width="16" height="4" fill="url(#qrGrad)" />
        <rect x="35" y="38" width="4" height="16" fill="url(#qrGrad)" />
        <rect x="43" y="42" width="20" height="4" fill="url(#qrGrad)" />
        <rect x="70" y="42" width="8" height="12" fill="url(#qrGrad)" />
        <rect x="82" y="38" width="12" height="4" fill="url(#qrGrad)" />

        <rect x="15" y="50" width="8" height="8" fill="url(#qrGrad)" />
        <rect x="27" y="50" width="4" height="12" fill="url(#qrGrad)" />
        <rect x="35" y="58" width="20" height="4" fill="url(#qrGrad)" />
        <rect x="60" y="50" width="4" height="16" fill="url(#qrGrad)" />
        <rect x="78" y="58" width="16" height="4" fill="url(#qrGrad)" />

        <rect x="5" y="66" width="16" height="4" fill="url(#qrGrad)" />
        <rect x="25" y="66" width="12" height="4" fill="url(#qrGrad)" />
        <rect x="42" y="66" width="8" height="8" fill="url(#qrGrad)" />
        <rect x="68" y="66" width="4" height="8" fill="url(#qrGrad)" />
        <rect x="85" y="66" width="10" height="4" fill="url(#qrGrad)" />

        <rect x="30" y="78" width="4" height="16" fill="url(#qrGrad)" />
        <rect x="38" y="82" width="16" height="4" fill="url(#qrGrad)" />
        <rect x="58" y="78" width="4" height="12" fill="url(#qrGrad)" />
        <rect x="66" y="86" width="8" height="4" fill="url(#qrGrad)" />
        <rect x="88" y="78" width="6" height="12" fill="url(#qrGrad)" />
      </svg>
    );
  };

  return (
    <div className="pt-20 bg-obsidian-900 min-h-screen animate-fade-in-up">
      {/* CSS print utility specifically styled to isolate the guest pass passId ticket card */}
      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          body {
            background: #0D0E12 !important;
            color: #FFFFFF !important;
          }
          nav, footer, button, .no-print {
            display: none !important;
            height: 0 !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          .print-container {
            padding: 0 !important;
            margin: 0 !important;
            background: none !important;
          }
          #printable-guest-pass {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 450px !important;
            max-width: 450px !important;
            box-shadow: none !important;
            border: 2px solid #D4AF37 !important;
            background: #131418 !important;
            page-break-inside: avoid;
          }
        }
      `}} />

      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 print-container">
        {/* Back navigation */}
        <button 
          onClick={() => setCurrentPage('home')}
          className="flex items-center text-xs font-semibold text-gold-500 uppercase tracking-widest hover:text-gold-400 transition-colors mb-8 cursor-pointer no-print"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </button>

        {passData ? (
          /* DIGITAL DEMO PASS VIEW */
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8 no-print">
              <span className="text-gold-500 font-semibold uppercase tracking-widest text-xs">
                Success
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-wide mt-2">
                Your Pass is Ready
              </h1>
              <p className="text-gray-400 mt-2 font-light text-sm">
                Present this card at the front desk upon arrival.
              </p>
            </div>

            {/* The actual Pass Card */}
            <div 
              id="printable-guest-pass" 
              className="relative glass rounded-2xl overflow-hidden border-2 border-gold-500/30 bg-gradient-to-b from-obsidian-800 to-obsidian-950 shadow-2xl p-6 sm:p-8"
            >
              {/* Card Gold Trim lines decoration */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600"></div>
              
              <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/5">
                <div>
                  <span className="text-xl font-black uppercase tracking-wider text-white">
                    AURA<span className="text-gold-500 font-normal text-lg">FIT</span>
                  </span>
                  <p className="text-[10px] text-gold-500 uppercase tracking-widest font-semibold mt-0.5">Beverly Hills</p>
                </div>
                <div className="text-right">
                  <span className="inline-block bg-gold-500/10 text-gold-500 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded border border-gold-500/20">
                    One Day Pass
                  </span>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-[10px] font-semibold text-gray-500 uppercase tracking-widest">Guest Holder</label>
                  <p className="text-lg font-bold text-white uppercase tracking-wide mt-1">{passData.name}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-semibold text-gray-500 uppercase tracking-widest">Valid Date</label>
                    <p className="text-sm font-semibold text-white mt-1">
                      {new Date(passData.visitDate).toLocaleDateString('en-US', {
                        weekday: 'short',
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                        timeZone: 'UTC'
                      })}
                    </p>
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold text-gray-500 uppercase tracking-widest">Pass ID</label>
                    <p className="text-sm font-semibold text-gold-500 font-mono mt-1">{passData.passId}</p>
                  </div>
                </div>

                {/* QR Code Container */}
                <div className="py-6 border-t border-b border-white/5 text-center">
                  {renderQRCode(passData.passId)}
                  <p className="text-[9px] text-gray-500 font-mono tracking-widest mt-3 uppercase">Scan at entry gate</p>
                </div>

                <div className="text-center text-[10px] text-gray-400 font-light italic leading-relaxed">
                  Terms: Government-issued photo ID required. Pass is valid for one day access to facilities, spa locker rooms, and standard cardio levels. Must be 18+ or accompanied by an adult.
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center no-print">
              <button 
                onClick={handlePrint}
                className="px-6 py-4 bg-gold-500 hover:bg-gold-400 text-obsidian-900 font-bold uppercase tracking-widest text-xs rounded transition-all duration-300 shadow-lg shadow-gold-500/20 cursor-pointer flex items-center justify-center"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
                Print / Save PDF
              </button>
              <button 
                onClick={() => {
                  setPassData(null);
                  setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    age: '',
                    fitnessGoal: 'Build Muscle',
                    visitDate: ''
                  });
                }}
                className="px-6 py-4 border border-white/20 hover:border-gold-500 hover:text-gold-500 text-white font-bold uppercase tracking-widest text-xs rounded transition-all duration-300 cursor-pointer"
              >
                Request Another
              </button>
            </div>
          </div>
        ) : (
          /* GUEST PASS REQUEST FORM VIEW */
          <div className="max-w-xl mx-auto glass p-8 rounded-2xl bg-obsidian-800 border border-white/5">
            <div className="text-center mb-10">
              <span className="text-gold-500 font-semibold uppercase tracking-widest text-xs">
                Free Pass
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-wide mt-2">
                One Day Guest Pass
              </h1>
              <p className="text-gray-400 mt-3 font-light text-sm sm:text-base">
                Register below to receive your digital one day entry pass to AURA FIT.
              </p>
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-xs rounded p-4 mb-6">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-obsidian-900 border border-white/10 rounded px-4 py-3 text-white text-sm focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500/30 transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-obsidian-900 border border-white/10 rounded px-4 py-3 text-white text-sm focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500/30 transition-colors"
                    placeholder="name@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-obsidian-900 border border-white/10 rounded px-4 py-3 text-white text-sm focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500/30 transition-colors"
                    placeholder="(555) 000-0000"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="age" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Age</label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    required
                    min="14"
                    max="100"
                    value={formData.age}
                    onChange={handleChange}
                    className="w-full bg-obsidian-900 border border-white/10 rounded px-4 py-3 text-white text-sm focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500/30 transition-colors"
                    placeholder="e.g. 25"
                  />
                </div>
                <div>
                  <label htmlFor="visitDate" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Preferred Visit Date</label>
                  <input
                    type="date"
                    id="visitDate"
                    name="visitDate"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.visitDate}
                    onChange={handleChange}
                    className="w-full bg-obsidian-900 border border-white/10 rounded px-4 py-3 text-gray-300 text-sm focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500/30 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="fitnessGoal" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Fitness Goal</label>
                <select
                  id="fitnessGoal"
                  name="fitnessGoal"
                  value={formData.fitnessGoal}
                  onChange={handleChange}
                  className="w-full bg-obsidian-900 border border-white/10 rounded px-4 py-3 text-gray-300 text-sm focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500/30 transition-colors"
                >
                  <option value="Build Muscle">Build Muscle & Strength</option>
                  <option value="Weight Loss">Weight Loss & Cardio Conditioning</option>
                  <option value="Flexibility">Flexibility, Yoga & Mobility</option>
                  <option value="General Health">General Wellness & Recovery</option>
                  <option value="Athletic training">Athletic Performance Mapping</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-gold-500 hover:bg-gold-400 disabled:bg-gold-800 disabled:text-obsidian-900/50 text-obsidian-900 font-bold uppercase tracking-widest text-xs rounded transition-all duration-300 shadow-lg shadow-gold-500/20 cursor-pointer"
              >
                {loading ? 'Generating Pass...' : 'Generate Demo Pass'}
              </button>
            </form>
          </div>
        )}
      </section>
    </div>
  );
};

export default GuestPass;
