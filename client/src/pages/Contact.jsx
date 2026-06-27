import React, { useState } from 'react';
import { API_BASE_URL } from '../config';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tier: 'Elite Access',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/inquiries`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      let data;
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      }

      if (!response.ok) {
        throw new Error((data && data.message) || `Inquiry submission failed (Status: ${response.status}).`);
      }

      if (!data || !data.success) {
        throw new Error('Invalid server response. Please verify that your API backend is running and reachable.');
      }

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        tier: 'Elite Access',
        message: ''
      });

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-20 bg-obsidian-900 min-h-screen animate-fade-in-up">
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold-500 font-semibold uppercase tracking-widest text-xs">
            Inquire
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-wide mt-2">
            Connect With Us
          </h1>
          <p className="text-gray-400 mt-4 font-light text-sm sm:text-base">
            Request club access, schedule a private tour, or speak with a membership advisor.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Details */}
          <div className="space-y-8">
            <div className="glass p-8 rounded-xl">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-6">Club Location</h2>
              <div className="space-y-4 text-sm sm:text-base text-gray-300 font-light">
                <p className="flex items-start">
                  <svg className="w-5 h-5 text-gold-500 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>123 Luxury Avenue, Suite 100<br />Beverly Hills, CA 90210</span>
                </p>
                <p className="flex items-center">
                  <svg className="w-5 h-5 text-gold-500 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+13105550199" className="hover:text-gold-500 transition-colors">+1 (310) 555-0199</a>
                </p>
                <p className="flex items-center">
                  <svg className="w-5 h-5 text-gold-500 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L22 8m-2 11H4a2 2 0 01-2-2V8a2 2 0 012-2h16a2 2 0 012 2v9a2 2 0 01-2 2z" />
                  </svg>
                  <a href="mailto:membership@aurafit.com" className="hover:text-gold-500 transition-colors">membership@aurafit.com</a>
                </p>

                {/* Social media details */}
                <p className="flex items-center group">
                  <svg className="w-5 h-5 text-gold-500 mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                  <a href="https://instagram.com/anjani_4u" target="_blank" rel="noopener noreferrer" className="hover:text-gold-500 transition-colors">@anjani_4u</a>
                </p>
                <p className="flex items-center group">
                  <svg className="w-5 h-5 text-gold-500 mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.45 5.503 0 9.98-4.47 9.985-9.97.002-2.665-1.033-5.17-2.915-7.054C16.545 1.705 14.043.67 11.998.67c-5.517 0-10.005 4.48-10.01 9.986-.002 1.8.48 3.555 1.396 5.11L2.35 21.65l6.297-1.653zM17.47 15.3c-.3-.15-1.775-.875-2.05-1.05-.275-.1-.475-.15-.675.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-3.51-1.747-4.16-2.5-4.99-3.925-.22-.375-.02-.575.13-.725.13-.13.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.589-.496-.589-.675-.589H8.16c-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.11 3.22 5.11 4.52 1.91.83 2.76.95 3.75.8.56-.08 1.725-.7 1.975-1.375.25-.675.25-1.25.175-1.375-.075-.125-.3-.2-.6-.35z" />
                  </svg>
                  <a href="https://wa.me/13105550199" target="_blank" rel="noopener noreferrer" className="hover:text-gold-500 transition-colors">+1 (310) 555-0199</a>
                </p>
                <p className="flex items-center group">
                  <svg className="w-5 h-5 text-gold-500 mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                  <a href="https://facebook.com/aurafitofficial" target="_blank" rel="noopener noreferrer" className="hover:text-gold-500 transition-colors">Aura Fit Official</a>
                </p>
              </div>
            </div>

            <div className="glass p-8 rounded-xl bg-gradient-to-br from-obsidian-800 to-obsidian-900 border border-gold-500/10">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">Membership Advising</h2>
              <p className="text-gray-300 font-light text-sm leading-relaxed">
                Our club advisors are available to guide you through registration, corporate memberships, and personal coaching match-ups. Walk-ins are welcome for scheduled facility tours.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="glass p-8 rounded-xl bg-obsidian-800">
            <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-6">Inquiry Form</h2>
            
            {error && (
              <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-xs rounded p-4 mb-6">
                {error}
              </div>
            )}

            {submitted ? (
              <div className="bg-gold-500/10 border border-gold-500 text-gold-500 rounded p-6 text-center animate-fade-in-up">
                <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="font-bold text-lg mb-1">Inquiry Sent</h3>
                <p className="text-sm font-light">Thank you. An advisor will contact you within 24 hours.</p>
              </div>
            ) : (
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
                    placeholder="Enter your name"
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
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-obsidian-900 border border-white/10 rounded px-4 py-3 text-white text-sm focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500/30 transition-colors"
                      placeholder="(555) 000-0000"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="tier" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Interested Tier</label>
                  <select
                    id="tier"
                    name="tier"
                    value={formData.tier}
                    onChange={handleChange}
                    className="w-full bg-obsidian-900 border border-white/10 rounded px-4 py-3 text-gray-300 text-sm focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500/30 transition-colors"
                  >
                    <option value="Club Access">Club Access ($150/mo)</option>
                    <option value="Elite Access">Elite Access ($250/mo)</option>
                    <option value="VIP Private">VIP Private ($500/mo)</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-obsidian-900 border border-white/10 rounded px-4 py-3 text-white text-sm focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500/30 transition-colors resize-none"
                    placeholder="Tell us about your fitness objectives..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-gold-500 hover:bg-gold-400 disabled:bg-gold-800 disabled:text-obsidian-900/50 text-obsidian-900 font-bold uppercase tracking-widest text-xs rounded transition-all duration-300 shadow-lg shadow-gold-500/20 cursor-pointer"
                >
                  {loading ? 'Submitting Inquiry...' : 'Submit Inquiry'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
