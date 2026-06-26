import React from 'react';
import cardioImage from '../assets/cardio.png';

const Facilities = ({ setCurrentPage }) => {
  const sections = [
    {
      title: 'Bespoke Strength Arena',
      description: 'Engineered with elite selectorized lines, plate-loaded stations, and premium Olympic platforms. Access a curated arsenal of custom dumbbells, premium barbells, and specialized strength machinery to support muscular hypertrophy and absolute power mapping.',
      image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=600&q=75',
      features: ['Hammer Strength Plate-Loaded Stations', 'Eleiko Olympic Lifting Platforms', 'Dumbbells up to 150 lbs', 'Custom Power Racks & Cable Towers']
    },
    {
      title: 'High-Performance Cardio Zone',
      description: 'Features high-octane conditioning machines with biometric trackers. Train on Technogym Skillruns, Peloton commercial cycles, and Woodway treadmills. Includes integrated real-time heart rate mapping to optimize aerobic conditioning.',
      image: cardioImage,
      features: ['Woodway Slat-Belt Treadmills', 'Peloton Commercial Bikes', 'Concept2 Rower & SkiErg Stations', 'Real-time telemetry displays']
    },
    {
      title: 'Functional Mechanics Area',
      description: 'A spacious turf area designed for agility, kettlebell drills, and athletic movement sequencing. Equipped with premium plyometric blocks, resistance sleds, battle ropes, and suspension trainers.',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=75',
      features: ['20-meter indoor athletic turf', 'Rogue Fitness Kettlebell racks', 'Battle Ropes & Plyo boxes', 'TRX suspension bays']
    },
    {
      title: 'Luxury Lockers & Steam Suite',
      description: 'Rejuvenate in pristine, marble-tiled dressing suites complete with digital lockers, rainfall showers, eucalyptus steam rooms, and premium grooming accessories.',
      image: 'https://images.unsplash.com/photo-1543975200-8e313fb04f43?auto=format&fit=crop&w=600&q=75',
      features: ['Eucalyptus-infused Steam Rooms', 'Keyless digital locker suites', 'Malin+Goetz luxury bath products', 'Rainfall shower stalls']
    },
    {
      title: 'Member Lounge & Fuel Bar',
      description: 'Relax, socialize, or conduct business in our quiet luxury members lounge. Enjoy custom post-workout recovery shakes, cold-brewed drinks, and health foods prepared fresh at our bespoke Fuel Bar.',
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=75',
      features: ['High-speed secure Wi-Fi', 'Custom-prepped protein shakes', 'Ergonomic business workstations', 'Complimentary cold-brew & teas']
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
            Excellence
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-wide mt-2 font-display">
            Our Club Facilities
          </h1>
          <p className="text-gray-300 mt-4 font-light text-sm sm:text-base">
            An environment engineered to details, providing the pinnacle of modern physical refinement.
          </p>
        </div>

        {/* Sections layout */}
        <div className="space-y-20">
          {sections.map((section, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative group overflow-hidden rounded-xl border border-white/5 shadow-2xl">
                  <div className="absolute inset-0 bg-gold-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <img 
                    src={section.image} 
                    alt={section.title}
                    className="w-full h-[300px] sm:h-[400px] object-cover group-hover:scale-105 transition-transform duration-700" 
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=75';
                    }}
                  />
                </div>
              </div>

              {/* Descriptions */}
              <div className="w-full lg:w-1/2 space-y-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-wide font-display">
                  {section.title}
                </h2>
                <p className="text-gray-300 font-light text-sm sm:text-base leading-relaxed">
                  {section.description}
                </p>
                <div className="border-t border-white/5 pt-6">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {section.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center text-xs sm:text-sm text-gray-400">
                        <svg className="w-4 h-4 text-gold-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
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

export default Facilities;
