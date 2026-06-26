import React from 'react';

const CookiesPolicy = ({ setCurrentPage }) => {
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
            Cookies Policy
          </h1>
          <p className="text-gray-400 mt-4 text-xs font-light">
            Last Updated: June 27, 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10 text-gray-300 font-light text-sm sm:text-base leading-relaxed">
          {/* What are cookies */}
          <div className="glass p-8 rounded-xl bg-obsidian-800">
            <h2 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wider mb-4 border-b border-white/5 pb-2 font-display">
              1. What Are Cookies
            </h2>
            <p>
              Cookies are small text files placed on your device (computer, tablet, or mobile phone) when you visit web applications. They are widely used to make websites function efficiently, preserve active settings, and provide usage statistics to site administrators.
            </p>
            <p className="mt-4">
              Cookies may be "persistent" (remaining on your device until they expire or are manually cleared) or "session-based" (deleted automatically as soon as your browser is closed).
            </p>
          </div>

          {/* Types of cookies used */}
          <div className="glass p-8 rounded-xl bg-obsidian-800">
            <h2 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wider mb-4 border-b border-white/5 pb-2 font-display">
              2. Types of Cookies We Use
            </h2>
            <p className="mb-4">
              AURA FIT uses several categories of cookies to serve our membership portal functions:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-white">Strictly Necessary Cookies:</strong> Essential for standard website navigation and portal authentication (such as securing JWT active tokens, local storage preferences, and keeping you logged in).
              </li>
              <li>
                <strong className="text-white">Performance & Functional Cookies:</strong> Remember your choices (e.g. your selected training plan tier, form inputs autofill configurations) to customize your dashboard layout.
              </li>
              <li>
                <strong className="text-white">Analytics Cookies:</strong> Accumulate aggregated navigation metrics (such as page load speeds, exit links paths) to help us optimize server bandwidth.
              </li>
            </ul>
          </div>

          {/* How cookies improve experience */}
          <div className="glass p-8 rounded-xl bg-obsidian-800">
            <h2 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wider mb-4 border-b border-white/5 pb-2 font-display">
              3. Improving User Experience
            </h2>
            <p>
              Cookies let our web application remember who you are.
            </p>
            <p className="mt-4">
              When you log in, cookies secure your active token state. This prevents you from having to type in your password and email credentials on every single page swap. They also cache static text configurations and Unsplash layout pictures parameters to speed up subsequent website load times.
            </p>
          </div>

          {/* Analytics and tracking */}
          <div className="glass p-8 rounded-xl bg-obsidian-800">
            <h2 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wider mb-4 border-b border-white/5 pb-2 font-display">
              4. Analytics & Tracking
            </h2>
            <p>
              We run lightweight analytics scripts to monitor general site traffic patterns and biological performance program queries trends.
            </p>
            <p className="mt-4">
              This analytics data is anonymous and aggregated. It does not disclose individual identities or record specific user information, serving strictly as a metric dashboard for our engineering staff to optimize database load and API speed performance.
            </p>
          </div>

          {/* Managing cookies */}
          <div className="glass p-8 rounded-xl bg-obsidian-800">
            <h2 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wider mb-4 border-b border-white/5 pb-2 font-display">
              5. Managing Cookie Preferences
            </h2>
            <p>
              You have the right to accept or block cookies:
            </p>
            <p className="mt-4">
              Most internet browsers automatically accept cookies by default. You can adjust your browser configurations to decline cookies or display warning prompts before a website saves a cookie. If you block strictly necessary cookies, note that authentication portals, session handling hooks, and database-backed services will be unable to run.
            </p>
          </div>

          {/* Third-party services */}
          <div className="glass p-8 rounded-xl bg-obsidian-800">
            <h2 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wider mb-4 border-b border-white/5 pb-2 font-display">
              6. Third-Party Services
            </h2>
            <p>
              AURA FIT integrates external services to support luxury layouts and scheduling:
            </p>
            <p className="mt-4">
              We fetch dynamic premium images from <strong>Unsplash</strong> and provide redirect buttons linking to <strong>WhatsApp</strong> advising chats. These third-party services may write their own tracking cookies to monitor referral links or load speed performance in accordance with their respective cookies policies.
            </p>
          </div>

          {/* Contact information */}
          <div className="glass p-8 rounded-xl bg-obsidian-800 border border-gold-500/10">
            <h2 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wider mb-4 border-b border-white/5 pb-2 font-display">
              7. Contact Information
            </h2>
            <p className="mb-4">
              If you have any questions or require clarifications regarding how we use cookies, please connect with us:
            </p>
            <div className="space-y-2 text-sm sm:text-base text-gray-300">
              <p><strong>AURA FIT Legal Department</strong></p>
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
            Acknowledge Policy
          </button>
        </div>
      </section>
    </div>
  );
};

export default CookiesPolicy;
