import React from 'react';

const Home = ({ setCurrentPage }) => {
  return (
    <div className="pt-20 animate-fade-in-up">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-cover bg-center" style={{
        backgroundImage: `linear-gradient(to bottom, rgba(13, 14, 18, 0.6), rgba(13, 14, 18, 0.95)), url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=75')`
      }}>
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian-900/95 via-obsidian-900/85 to-obsidian-900/60 md:via-obsidian-900/70 md:to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left z-10 w-full">
          <div className="max-w-3xl">
            <span className="text-gold-500 font-bold uppercase tracking-widest text-xs sm:text-sm">
              Welcome to the Elite Club
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white uppercase tracking-tight mt-3 mb-6 leading-none">
              REDEFINE YOUR <span className="text-gold-500 block sm:inline">LIMITS</span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-8 font-light leading-relaxed">
              Experience the pinnacle of luxury fitness. Aura Fit offers state-of-the-art facilities, world-renowned elite trainers, and bespoke health programming tailored specifically to your lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <button
                onClick={() => setCurrentPage('membership')}
                className="px-8 py-4 text-sm font-semibold uppercase tracking-wider text-obsidian-900 bg-gold-500 hover:bg-gold-400 rounded transition-all duration-300 shadow-lg shadow-gold-500/20 cursor-pointer"
              >
                Explore Memberships
              </button>
              <button
                onClick={() => setCurrentPage('guest-pass')}
                className="px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white border border-white/20 hover:border-gold-500 hover:text-gold-500 rounded transition-all duration-300 cursor-pointer"
              >
                Request Guest Pass
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-obsidian-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold-500 font-semibold uppercase tracking-widest text-xs">
              Why Aura Fit
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-wide mt-2">
              The Aura Experience
            </h2>
            <p className="text-gray-300 mt-4 font-light text-sm sm:text-base">
              Step into a space engineered for optimal athletic refinement and mental rejuvenation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="glass p-8 rounded-xl glass-card-hover flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-gold-500/10 flex items-center justify-center text-gold-500 mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white uppercase mb-3">Ultra-Premium Facility</h3>
                <p className="text-gray-300 text-sm font-light leading-relaxed">
                  Train with elite, high-performance equipment and enjoy spa-like locker rooms, steam rooms, and modern lounge spaces.
                </p>
              </div>
              <span className="text-gold-500 text-xs font-semibold uppercase tracking-widest mt-6 cursor-pointer hover:underline" onClick={() => setCurrentPage('facilities')}>Learn More &rarr;</span>
            </div>

            {/* Card 2 */}
            <div className="glass p-8 rounded-xl glass-card-hover flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-gold-500/10 flex items-center justify-center text-gold-500 mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white uppercase mb-3">Bespoke Coaching</h3>
                <p className="text-gray-300 text-sm font-light leading-relaxed">
                  Work one-on-one with our certified master trainers who engineer highly personalized workout and nutritional guides.
                </p>
              </div>
              <span className="text-gold-500 text-xs font-semibold uppercase tracking-widest mt-6 cursor-pointer hover:underline" onClick={() => setCurrentPage('trainers')}>Meet Trainers &rarr;</span>
            </div>

            {/* Card 3 */}
            <div className="glass p-8 rounded-xl glass-card-hover flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-gold-500/10 flex items-center justify-center text-gold-500 mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white uppercase mb-3">Holistic Wellness</h3>
                <p className="text-gray-300 text-sm font-light leading-relaxed">
                  Complimentary access to recovery therapy, nutrition consults, cold plunge, and sauna rooms to rebuild both muscles and mind.
                </p>
              </div>
              <span className="text-gold-500 text-xs font-semibold uppercase tracking-widest mt-6 cursor-pointer hover:underline" onClick={() => setCurrentPage('wellness')}>View Recovery &rarr;</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-obsidian-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold-500 font-semibold uppercase tracking-widest text-xs">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-wide mt-2">
              Member Stories
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-gold p-8 rounded-xl">
              <p className="text-gray-300 italic mb-6 text-base font-light leading-relaxed">
                "Aura Fit is not just a gym; it is a lifestyle. The level of care, the pristine cleanliness of the facilities, and the master coaching have completely transformed my health and athletic mindset."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-cover bg-center mr-4" style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=120&q=75')`
                }}></div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wider text-sm">Sarah Jenkins</h4>
                  <span className="text-gold-500 text-xs uppercase tracking-widest">Executive Member</span>
                </div>
              </div>
            </div>

            <div className="glass-gold p-8 rounded-xl">
              <p className="text-gray-300 italic mb-6 text-base font-light leading-relaxed">
                "The customized nutritional planning combined with elite strength coaching helped me drop 8% body fat while building lean muscle. The recovery zone is absolute luxury."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-cover bg-center mr-4" style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=75')`
                }}></div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wider text-sm">David Miller</h4>
                  <span className="text-gold-500 text-xs uppercase tracking-widest">Elite Member</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
