import React from 'react';
import cryoImage from '../assets/cryo.png';

const Wellness = ({ setCurrentPage }) => {
  const offerings = [
    {
      title: 'Cryo & Compression Therapy',
      description: 'Accelerate muscular rebuild and reduce cellular inflammation with full-body cryotherapy and professional Normatec active compression garments.',
      image: cryoImage,
      benefits: ['Flushes lymphatic buildup', 'Slashes muscle soreness (DOMS)', 'Improves circulatory output', 'Boosts cellular recovery']
    },
    {
      title: 'Infrared Sauna & Cold Plunge',
      description: 'Experience contrast therapy using our high-temperature dry saunas followed by custom-filtered 39°F (4°C) cold plunge pools. Contrast therapy restores nervous system balance and boosts cardiovascular output.',
      image: 'https://images.unsplash.com/photo-1540496905036-5937c10647cc?auto=format&fit=crop&w=600&q=75',
      benefits: ['Detoxifies body via heat sweat', 'Vascoconstriction resets nervous path', 'Relieves chronic muscle tension', 'Releases endorphins & boosts sleep']
    },
    {
      title: 'Deep Tissue Massage & Alignment',
      description: 'Our licensed massage therapists deliver targeted myofascial release, joint mobility alignments, and sports trigger point therapies to restore skeletal balance.',
      image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=600&q=75',
      benefits: ['Breaks down scar tissue', 'Increases joint range of motion (ROM)', 'Improves posture alignment', 'Relieves tension headaches']
    },
    {
      title: 'Macro & Metabolic Consultation',
      description: 'Schedule one-on-one nutrition audits with sports dietitians to outline tailored caloric limits, macro targets, and gut health support guides matching your lifestyle.',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=75',
      benefits: ['Detailed bio-composition audits', 'Personalized daily macro guidelines', 'Sports supplement protocols', 'Sustainable digestive support']
    }
  ];

  return (
    <div className="pt-20 bg-obsidian-900 min-h-screen animate-fade-in-up">
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button 
          onClick={() => setCurrentPage('home')}
          className="flex items-center text-xs font-semibold text-gold-500 uppercase tracking-widest hover:text-gold-400 transition-colors mb-8 cursor-pointer"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </button>

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold-500 font-semibold uppercase tracking-widest text-xs">
            Holistic
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-wide mt-2 font-display">
            Wellness & Recovery
          </h1>
          <p className="text-gray-300 mt-4 font-light text-sm sm:text-base">
            Dedicated therapy protocols to rebuild muscle tissue, re-establish neural balance, and nourish biological health.
          </p>
        </div>

        {/* Offerings layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offerings.map((item, idx) => (
            <div 
              key={idx} 
              className="glass rounded-xl overflow-hidden border border-white/5 bg-obsidian-800 flex flex-col justify-between"
            >
              {/* Image */}
              <div className="relative group overflow-hidden h-[240px]">
                <div className="absolute inset-0 bg-gold-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=75';
                  }}
                />
              </div>

              {/* Text Description */}
              <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-wide mb-3 font-display">
                    {item.title}
                  </h2>
                  <p className="text-gray-300 font-light text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="border-t border-white/5 pt-6">
                  <h3 className="text-[10px] font-bold text-gold-500 uppercase tracking-widest mb-3">Key Benefits:</h3>
                  <ul className="space-y-2">
                    {item.benefits.map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-center text-xs text-gray-400">
                        <svg className="w-4 h-4 text-gold-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Wellness;
