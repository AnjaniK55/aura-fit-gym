import React from 'react';

const PrivacyPolicy = ({ setCurrentPage }) => {
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
            Privacy Policy
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
              Welcome to <strong>AURA FIT</strong>. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal info, please contact us at <a href="mailto:privacy@aurafit.com" className="text-gold-500 hover:underline">privacy@aurafit.com</a>.
            </p>
            <p className="mt-4">
              When you visit our club, use our website, or enroll in our bespoke fitness and wellness programs, you trust us with your personal information. We take your privacy very seriously. In this privacy policy, we describe how we collect, use, and safeguard your data, and what rights you hold in relation to it.
            </p>
          </div>

          {/* Information we collect */}
          <div className="glass p-8 rounded-xl bg-obsidian-800">
            <h2 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wider mb-4 border-b border-white/5 pb-2 font-display">
              2. Information We Collect
            </h2>
            <p className="mb-4">
              We collect personal information that you voluntarily provide to us when registering at the portal, expressing interest in obtaining information about us, or subscribing to our membership plans.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-white">Personal Credentials:</strong> Name, email address, telephone number, login usernames, and password credentials (encrypted securely).
              </li>
              <li>
                <strong className="text-white">Membership Preferences:</strong> Subscribed subscription tiers (e.g. Club Access, Elite Access, VIP Private), trainer matches, and program schedules.
              </li>
              <li>
                <strong className="text-white">Fitness & Wellness Metrics:</strong> Optional health goals, physical objectives, body compositions, and wellness assessment records provided to coaching staff.
              </li>
              <li>
                <strong className="text-white">Billing Information:</strong> Payment transactions history, payment cards details, or invoicing addresses handled via secure payment processors.
              </li>
            </ul>
          </div>

          {/* How we use information */}
          <div className="glass p-8 rounded-xl bg-obsidian-800">
            <h2 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wider mb-4 border-b border-white/5 pb-2 font-display">
              3. How We Use Information
            </h2>
            <p className="mb-4">
              We process your information for purposes based on legitimate business interests, the fulfillment of our services, and compliance with our legal obligations:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>To facilitate account creation and logon process:</strong> To authenticate your portal login and track user sessions securely.
              </li>
              <li>
                <strong>To deliver services to the user:</strong> To fulfill personal training bookings, execute nutrition plans, and schedule spa/recovery facility entries.
              </li>
              <li>
                <strong>To send administrative information:</strong> To notify you of club schedule changes, policy updates, and billing receipts.
              </li>
              <li>
                <strong>To protect our Services:</strong> To monitor system logs, verify IP origins, prevent spam (e.g. through contact form rate limits), and maintain database integrity.
              </li>
            </ul>
          </div>

          {/* User account data */}
          <div className="glass p-8 rounded-xl bg-obsidian-800">
            <h2 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wider mb-4 border-b border-white/5 pb-2 font-display">
              4. User Account Data & Safety
            </h2>
            <p>
              Your account security is paramount. Your portal credentials are protected using industry-standard cryptography:
            </p>
            <p className="mt-4">
              Passwords undergo high-entropy salting and hashing using the <strong>bcrypt</strong> algorithm before database serialization. Plaintext passwords are never saved. Web-app session states are handled via cryptographically signed JSON Web Tokens (JWT) with strict expiration timeouts.
            </p>
          </div>

          {/* Cookies policy */}
          <div className="glass p-8 rounded-xl bg-obsidian-800">
            <h2 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wider mb-4 border-b border-white/5 pb-2 font-display">
              5. Cookies Policy
            </h2>
            <p>
              We utilize cookies and similar tracking tools (such as HTML5 local storage) to maintain active user session configurations, store preferences, and analyze website navigation speeds.
            </p>
            <p className="mt-4">
              Most web browsers default to accepting cookies. You are free to block cookies or empty your local storage via your browser settings. Be advised that blocking cookies may prevent components of our membership portal (including login sessions) from executing correctly.
            </p>
          </div>

          {/* Security */}
          <div className="glass p-8 rounded-xl bg-obsidian-800">
            <h2 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wider mb-4 border-b border-white/5 pb-2 font-display">
              6. Information Security
            </h2>
            <p>
              We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process.
            </p>
            <p className="mt-4">
              All data transmitted between the client application and the API endpoints is fortified with TLS/HTTPS transport encryption. Mongoose controller endpoints are reinforced with Helmet headers, and input buffers are constrained to block cross-site scripting (XSS) or database injection attempts.
            </p>
          </div>

          {/* Contact information */}
          <div className="glass p-8 rounded-xl bg-obsidian-800 border border-gold-500/10">
            <h2 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wider mb-4 border-b border-white/5 pb-2 font-display">
              7. Contact Information
            </h2>
            <p className="mb-4">
              If you have questions or comments about this policy, or request changes to your personal details, you may reach our Privacy Officer:
            </p>
            <div className="space-y-2 text-sm sm:text-base text-gray-300">
              <p><strong>AURA FIT Privacy Office</strong></p>
              <p>123 Luxury Avenue, Suite 100</p>
              <p>Beverly Hills, CA 90210</p>
              <p>Email: <a href="mailto:privacy@aurafit.com" className="text-gold-500 hover:underline">privacy@aurafit.com</a></p>
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
            Return to Homepage
          </button>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
