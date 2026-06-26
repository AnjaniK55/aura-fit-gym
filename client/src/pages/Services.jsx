import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Bespoke Strength Training',
      description: 'Custom programming targeting muscular hypertrophy, absolute power, or functional mechanics, using elite free weights and specialized selectorized machines.',
      features: ['One-on-One Master Coach', 'Biometric tracking & analysis', 'Weekly progressive planning', 'Custom nutrition guidance'],
      icon: '🏋️‍♂️'
    },
    {
      title: 'High-Performance Cardio',
      description: 'HIIT, circuit routines, and VO2 Max mapping. Ideal for cardiovascular endurance, high-octane conditioning, and fat-loss optimization.',
      features: ['Heart-rate zone monitoring', 'Technogym Skillrun equipment', 'Metabolic conditioning circuits', 'Stamina assessments'],
      icon: '🏃'
    },
    {
      title: 'Yoga & Functional Mobility',
      description: 'Dynamic flows and static stretching designed to restore movement patterns, improve flexibility, and balance muscle tension.',
      features: ['Infrared heated studio', 'Small group luxury classes', 'Posture alignment audits', 'Integrated meditation'],
      icon: '🧘'
    },
    {
      title: 'Elite Cryo & Recovery Therapy',
      description: 'Bespoke recovery protocols including full-body compression, hyperbaric oxygen chambers, infrared saunas, and custom cold plunges.',
      features: ['Normatec compression access', 'Contrast therapy rooms', 'Muscle tissue massage therapy', 'Inflammation relief protocols'],
      icon: '❄️'
    }
  ];

  return (
    <div className="pt-20 bg-obsidian-900 min-h-screen animate-fade-in-up">
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold-500 font-semibold uppercase tracking-widest text-xs">
            Bespoke Offerings
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-wide mt-2">
            Our Elite Services
          </h1>
          <p className="text-gray-400 mt-4 font-light text-sm sm:text-base">
            Every program is custom-engineered to optimize physical aesthetics, mobility, and biological performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="glass p-8 rounded-xl glass-card-hover flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-4xl" role="img" aria-label={service.title}>{service.icon}</span>
                  <h2 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-wider">
                    {service.title}
                  </h2>
                </div>
                <p className="text-gray-300 font-light text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="border-t border-white/5 pt-6">
                  <h3 className="text-xs font-semibold text-gold-500 uppercase tracking-widest mb-3">Included in Plan:</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-xs text-gray-400">
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

export default Services;
