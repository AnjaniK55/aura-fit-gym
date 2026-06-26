import React from 'react';

const About = () => {
  const trainers = [
    {
      name: 'Marcus Sterling',
      role: 'Head of Strength & Conditioning',
      specialty: 'Hypertrophy & Athletic Power',
      bio: 'Former Olympian weightlifter with 12+ years of elite coaching experience.',
      image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=400&q=75'
    },
    {
      name: 'Elena Rostova',
      role: 'Director of Yoga & Mindfulness',
      specialty: 'Vinyasa, Mobility & Breathwork',
      bio: 'Certified master instructor in Rishikesh with a focus on functional movement and alignment.',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=400&q=75'
    },
    {
      name: 'Dr. Alexandra Vance',
      role: 'Performance Nutritionist',
      specialty: 'Metabolic Optimization & Recovery',
      bio: 'Ph.D. in Kinesiology, specializing in endurance performance and bespoke nutrition mapping.',
      image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=400&q=75'
    },
    {
      name: 'Dominic Sterling',
      role: 'Elite Conditioning Trainer',
      specialty: 'Functional Mobility & Metabolic Conditioning',
      bio: 'NASM-PES specialist with 7+ years of experience engineering high-performance athletic flows.',
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=400&q=75'
    }
  ];

  return (
    <div className="pt-20 bg-obsidian-900 min-h-screen animate-fade-in-up">
      {/* Brand Heritage */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-gold-500 font-semibold uppercase tracking-widest text-xs">
              Our Heritage
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-wide mt-2 mb-6">
              A Legacy of <br /><span className="text-gold-500">Physical Perfection</span>
            </h1>
            <p className="text-gray-300 font-light text-sm sm:text-base leading-relaxed mb-6">
              Founded in 2018, Aura Fit was established to challenge the conventional, crowded gym experience. We set out to create a sanctuary where physical conditioning, aesthetic refinement, and mental focus coalesce.
            </p>
            <p className="text-gray-300 font-light text-sm leading-relaxed mb-6">
              Every detail of our space—from the customized clean air filtration system to the soundscapes and advanced equipment design—has been meticulously selected to eliminate distractions and maximize athletic output.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="border-l-2 border-gold-500 pl-4">
                <span className="text-3xl font-black text-white block">10,000+</span>
                <span className="text-gray-400 text-xs uppercase tracking-wider">Sq. Ft. Luxury Club</span>
              </div>
              <div className="border-l-2 border-gold-500 pl-4">
                <span className="text-3xl font-black text-white block">15+</span>
                <span className="text-gray-400 text-xs uppercase tracking-wider">Master Trainers</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-gold-500 to-amber-600 rounded-xl blur opacity-30"></div>
            <div className="relative h-[300px] sm:h-[450px] w-full rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=800&q=75" 
                alt="Aura Fit Luxury Club Floor" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=75';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="py-24 bg-obsidian-800 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-gold-500 font-semibold uppercase tracking-widest text-xs">
              Elite Staff
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-wide mt-2">
              Master Coaches
            </h2>
            <p className="text-gray-300 mt-4 font-light text-sm sm:text-base">
              Work with globally certified specialists committed to your performance and aesthetic goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <div key={index} className="glass rounded-xl overflow-hidden glass-card-hover group">
                <div className="h-72 overflow-hidden relative">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=400&q=75';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900 via-transparent to-transparent"></div>
                </div>
                <div className="p-6">
                  <span className="text-gold-500 text-xs font-semibold uppercase tracking-wider block mb-1">
                    {trainer.role}
                  </span>
                  <h3 className="text-xl font-bold text-white uppercase mb-2">
                    {trainer.name}
                  </h3>
                  <span className="text-gray-300 text-xs block mb-4 border border-white/10 rounded px-2 py-1 w-max">
                    Specialty: {trainer.specialty}
                  </span>
                  <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed">
                    {trainer.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
