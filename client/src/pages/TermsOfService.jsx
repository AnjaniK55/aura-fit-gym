import React from 'react';

const TermsOfService = ({ setCurrentPage }) => {
  return (
    <div className="pt-20 bg-obsidian-900 min-h-screen animate-fade-in-up">
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back navigation */}
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
        <div className="mb-12 border-b border-white/5 pb-8">
          <span className="text-gold-500 font-semibold uppercase tracking-widest text-xs">
            Legal
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-wide mt-2 font-display">
            Terms of Service
          </h1>
          <p className="text-gray-400 mt-4 text-xs font-light">
            Last Updated: June 27, 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10 text-gray-300 font-light text-sm sm:text-base leading-relaxed">
          {/* Introduction */}
          <div className="glass p-8 rounded-xl bg-obsidian-800">
            <h2 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wider mb-4 border-b border-white/5 pb-2 font-display">
              1. Introduction
            </h2>
            <p>
              Welcome to <strong>AURA FIT</strong>. These Terms of Service ("Terms") govern your use of our physical facilities, personal training sessions, membership portal, and website located at <a href="http://localhost:5173" className="text-gold-500 hover:underline">localhost:5173</a>.
            </p>
            <p className="mt-4">
              By registering an account, purchasing a membership subscription plan, or entering our club facilities, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you must not use our website, services, or facilities.
            </p>
          </div>

          {/* User responsibilities */}
          <div className="glass p-8 rounded-xl bg-obsidian-800">
            <h2 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wider mb-4 border-b border-white/5 pb-2 font-display">
              2. User Responsibilities
            </h2>
            <p className="mb-4">
              To utilize our website portal and physical gym space, you agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-white">Provide Accurate Details:</strong> Supply truthful, complete, and current registration information.
              </li>
              <li>
                <strong className="text-white">Maintain Account Safety:</strong> Guard your credentials and restrict access to your login tokens. You are liable for any portal logs or actions taken using your credentials.
              </li>
              <li>
                <strong className="text-white">Health Clearance:</strong> Certify that you are in good physical health and have no medical constraints preventing you from engaging in active physical workouts. Consult a physician before undertaking strenuous routines.
              </li>
            </ul>
          </div>

          {/* Membership rules */}
          <div className="glass p-8 rounded-xl bg-obsidian-800">
            <h2 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wider mb-4 border-b border-white/5 pb-2 font-display">
              3. Membership & Facility Rules
            </h2>
            <p className="mb-4">
              To protect the luxury standard and safety of all AURA FIT members, the following rules are strictly enforced:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Dress Code:</strong> Clean athletic apparel and closed-toe athletic footwear are required at all times. In spa and recovery Plunge/Sauna rooms, proper swimwear must be worn.
              </li>
              <li>
                <strong>Conduct:</strong> Show respect to all other members, trainers, and staff. Disruptive, abusive, or inappropriate behavior will result in immediate suspension or termination of club access.
              </li>
              <li>
                <strong>Equipment Usage:</strong> Wipe down equipment after use. Avoid dropping weights excessively, and return all training assets to their designated racks.
              </li>
              <li>
                <strong>Guests:</strong> Members may bring guests only under pre-authorized club passes and guest waivers.
              </li>
            </ul>
          </div>

          {/* Payments and subscriptions */}
          <div className="glass p-8 rounded-xl bg-obsidian-800">
            <h2 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wider mb-4 border-b border-white/5 pb-2 font-display">
              4. Payments & Subscriptions
            </h2>
            <p>
              AURA FIT offers monthly and annual subscription plans (e.g. Club Access, Elite Access, VIP Private).
            </p>
            <p className="mt-4">
              All subscription charges are billed in advance on a recurring monthly cycle. You authorize us to store your payment methods and charge the recurring monthly fee automatically until you cancel. All pricing is exclusive of local taxes where applicable. We reserve the right to modify our pricing tiers by providing at least 30 days notice to active members.
            </p>
          </div>

          {/* Cancellation and refund policy */}
          <div className="glass p-8 rounded-xl bg-obsidian-800">
            <h2 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wider mb-4 border-b border-white/5 pb-2 font-display">
              5. Cancellation & Refund Policy
            </h2>
            <p>
              You may cancel your membership subscription at any time by contacting our advising office or submitting an inquiry via the portal contact page.
            </p>
            <p className="mt-4">
              To prevent the next automatic cycle billing, cancellation requests must be filed at least <strong>5 business days</strong> prior to your billing renewal date. Membership payments are non-refundable. AURA FIT does not offer pro-rated refunds or credit balances for partial-month cancellations.
            </p>
          </div>

          {/* Website usage rules */}
          <div className="glass p-8 rounded-xl bg-obsidian-800">
            <h2 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wider mb-4 border-b border-white/5 pb-2 font-display">
              6. Website Usage Rules
            </h2>
            <p className="mb-4">
              When accessing our online portal, you agree NOT to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Engage in web-scraping, automated bots requests, or DDoS attacks on API servers.
              </li>
              <li>
                Inject malicious code, cross-site scripting (XSS), or try database SQL/JSON injection tricks.
              </li>
              <li>
                Register duplicate accounts using dummy emails, or share your access token with unauthorized parties.
              </li>
              <li>
                Submit false inquiries, or attempt to bypass form rate limits.
              </li>
            </ul>
          </div>

          {/* Limitation of liability */}
          <div className="glass p-8 rounded-xl bg-obsidian-800">
            <h2 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wider mb-4 border-b border-white/5 pb-2 font-display">
              7. Limitation of Liability
            </h2>
            <p>
              AURA FIT, its coaching staff, and parent entities shall not be held liable for any personal injuries, property damage, loss of valuables, or medical conditions resulting from physical training, equipment usage, or enrollment in our recovery therapy sequences.
            </p>
            <p className="mt-4">
              You assume full responsibility for your fitness activities, and accept that physical workouts involve inherent biological risks. Our online services and website contents are provided "as is" without warranty of any kind.
            </p>
          </div>

          {/* Contact information */}
          <div className="glass p-8 rounded-xl bg-obsidian-800 border border-gold-500/10">
            <h2 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wider mb-4 border-b border-white/5 pb-2 font-display">
              8. Contact Information
            </h2>
            <p className="mb-4">
              If you have any questions or require clarifications regarding these terms, please connect with our advising staff:
            </p>
            <div className="space-y-2 text-sm sm:text-base text-gray-300">
              <p><strong>AURA FIT Management</strong></p>
              <p>123 Luxury Avenue, Suite 100</p>
              <p>Beverly Hills, CA 90210</p>
              <p>Email: <a href="mailto:membership@aurafit.com" className="text-gold-500 hover:underline">membership@aurafit.com</a></p>
              <p>Phone: +1 (310) 555-0199</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button 
            onClick={() => setCurrentPage('home')}
            className="px-8 py-4 bg-gold-500 hover:bg-gold-400 text-obsidian-900 font-bold uppercase tracking-widest text-xs rounded transition-all duration-300 shadow-lg shadow-gold-500/20 cursor-pointer"
          >
            I Accept terms
          </button>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
