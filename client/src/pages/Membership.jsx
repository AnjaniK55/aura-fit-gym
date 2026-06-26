import React from 'react';

const Membership = ({ setCurrentPage }) => {
  const plans = [
    {
      name: 'Club Access',
      price: '150',
      description: 'Perfect for self-guided training with top-tier equipment.',
      features: [
        'Full access to luxury training floor',
        'Advanced cardio & free-weight facilities',
        'Pristine spa locker room & sauna access',
        'Complimentary towel service & Wi-Fi',
        '1 Assessment session with Master Coach'
      ],
      popular: false
    },
    {
      name: 'Elite Access',
      price: '250',
      description: 'Our most sought-after plan, combining coaching and wellness.',
      features: [
        'Everything in Club Access',
        'Unlimited group training & yoga classes',
        'Full access to Cryo & Recovery Therapy',
        '2 Personal training hours per month',
        'Bespoke monthly nutrition audits',
        'Priority shower & locker reservations'
      ],
      popular: true
    },
    {
      name: 'VIP Private',
      price: '500',
      description: 'Ultimate personalized physical refinement and priority care.',
      features: [
        'Everything in Elite Access',
        'Unlimited personal training sessions',
        '24/7 Digital contact with personal trainer',
        'Daily custom-prepped protein shake',
        'Private keycode VIP locker suite',
        'Quarterly body composition blood-panel audits'
      ],
      popular: false
    }
  ];

  return (
    <div className="pt-20 bg-obsidian-900 min-h-screen animate-fade-in-up">
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold-500 font-semibold uppercase tracking-widest text-xs">
            Pricing
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-wide mt-2">
            Membership Plans
          </h1>
          <p className="text-gray-400 mt-4 font-light text-sm sm:text-base">
            Select the tier that aligns with your athletic requirements and recovery routine.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl flex flex-col justify-between p-8 relative transition-all duration-300 ${
                plan.popular
                  ? 'bg-obsidian-800 border-2 border-gold-500 shadow-2xl shadow-gold-500/10 scale-105 z-10'
                  : 'glass border border-white/5 hover:border-gold-500/30'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 bg-gold-500 text-obsidian-900 text-xs font-bold uppercase tracking-widest rounded-full">
                  Recommended
                </span>
              )}
              <div>
                <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider block mb-2">
                  {plan.name}
                </span>
                <div className="flex items-baseline text-white mb-4">
                  <span className="text-2xl font-semibold">$</span>
                  <span className="text-5xl font-black tracking-tight">{plan.price}</span>
                  <span className="text-gray-400 ml-1 text-sm font-light">/month</span>
                </div>
                <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed mb-6">
                  {plan.description}
                </p>
                <div className="border-t border-white/5 pt-6 mb-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-xs sm:text-sm text-gray-400">
                        <svg
                          className="w-4 h-4 text-gold-500 mr-3 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <button
                onClick={() => setCurrentPage('contact')}
                className={`w-full py-4 rounded text-xs font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                  plan.popular
                    ? 'bg-gold-500 text-obsidian-900 hover:bg-gold-400 shadow-lg shadow-gold-500/20'
                    : 'border border-white/20 text-white hover:border-gold-500 hover:text-gold-500'
                }`}
              >
                Inquire Now
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Membership;
