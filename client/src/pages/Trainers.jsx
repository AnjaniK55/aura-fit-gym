import React from 'react';

const Trainers = ({ setCurrentPage }) => {
  const trainers = [
    {
      name: 'Marcus Sterling',
      role: 'Head of Strength & Conditioning',
      experience: '12 Years',
      photo: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=400&q=75',
      certifications: ['CSCS (Certified Strength & Conditioning Specialist)', 'USAW Level 2 Weightlifting', 'B.S. Exercise Science'],
      specialization: 'Hypertrophy, absolute power, barbell mechanics, injury prevention.',
      program: 'Bespoke Strength & Barbell Mastery'
    },
    {
      name: 'Elena Rostova',
      role: 'Director of Yoga & Mindfulness',
      experience: '10 Years',
      photo: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=400&q=75',
      certifications: ['RYT 500 Certified Yoga Teacher', 'FMS Level 2 Mobility Specialist', 'B.A. Eastern Philosophy'],
      specialization: 'Vinyasa flow, functional mobility, breathing techniques, nervous system balance.',
      program: 'Mindful Flow & Joint Restoration'
    },
    {
      name: 'Dr. Alexandra Vance',
      role: 'Performance Nutritionist & Expert',
      experience: '8 Years',
      photo: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=400&q=75',
      certifications: ['Ph.D. Nutritional Sciences', 'RD (Registered Dietitian)', 'ISSN Sports Nutritionist'],
      specialization: 'Body composition auditing, macro mapping, gut health restoration, hormonal support.',
      program: 'Aesthetic Macro & Nutritional Reset'
    },
    {
      name: 'Dominic Sterling',
      role: 'Elite Conditioning Trainer',
      experience: '7 Years',
      photo: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=400&q=75',
      certifications: ['NASM-PES (Performance Enhancement)', 'IKFF Level 1 Kettlebell Coach', 'TRX Master Instructor'],
      specialization: 'Functional mobility, kettlebell flows, metabolic conditioning, endurance training.',
      program: 'Functional Body Refinement & Core'
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
            Bespoke
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-wide mt-2 font-display">
            Master Coaching Staff
          </h1>
          <p className="text-gray-300 mt-4 font-light text-sm sm:text-base">
            Work one-on-one with certified coaching elites to unlock biological performance and physical aesthetics.
          </p>
        </div>

        {/* Trainer Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {trainers.map((trainer, idx) => (
            <div 
              key={idx} 
              className="glass rounded-2xl overflow-hidden border border-white/5 flex flex-col sm:flex-row hover:border-gold-500/20 transition-colors duration-500 bg-obsidian-800"
            >
              {/* Image Column */}
              <div className="w-full sm:w-2/5 h-[280px] sm:h-auto relative overflow-hidden">
                <img 
                  src={trainer.photo} 
                  alt={trainer.name} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=400&q=75';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/80 via-transparent to-transparent sm:bg-gradient-to-r sm:from-transparent sm:via-transparent sm:to-obsidian-800/90"></div>
              </div>

              {/* Bio Details Column */}
              <div className="w-full sm:w-3/5 p-6 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-gold-500 uppercase tracking-widest">
                    {trainer.role}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-wide mt-1 mb-2 font-display">
                    {trainer.name}
                  </h2>
                  <p className="text-xs text-gray-400 font-light mb-4">
                    Experience: <span className="text-white font-semibold">{trainer.experience}</span>
                  </p>

                  <div className="space-y-3">
                    <div>
                      <h3 className="text-[10px] font-semibold text-gold-500 uppercase tracking-widest">Specialization</h3>
                      <p className="text-xs sm:text-sm text-gray-300 font-light mt-0.5">{trainer.specialization}</p>
                    </div>

                    <div>
                      <h3 className="text-[10px] font-semibold text-gold-500 uppercase tracking-widest">Certifications</h3>
                      <ul className="list-disc pl-4 text-[11px] sm:text-xs text-gray-400 font-light mt-0.5 space-y-0.5">
                        {trainer.certifications.map((cert, cIdx) => (
                          <li key={cIdx}>{cert}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/5 pt-4 mt-6">
                  <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Featured Program</span>
                  <p className="text-xs font-semibold text-gold-500 mt-0.5 font-display">{trainer.program}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Trainers;
