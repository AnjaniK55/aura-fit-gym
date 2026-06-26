import React, { useState } from 'react';
import { API_BASE_URL } from '../config';

const Login = ({ setCurrentPage, onLoginSuccess }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed. Please check your credentials.');
      }

      onLoginSuccess(data.data);
      setCurrentPage('home');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-20 bg-obsidian-900 min-h-screen flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none" style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=75')`
      }}></div>
      
      <div className="relative glass w-full max-w-md p-8 rounded-xl z-10 animate-fade-in-up">
        <div className="text-center mb-8">
          <span className="text-2xl font-black uppercase tracking-wider text-white">
            AURA<span className="text-gold-500 font-normal text-xl">FIT</span>
          </span>
          <h2 className="text-lg font-bold text-gray-300 uppercase tracking-widest mt-2">Portal Access</h2>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-xs rounded p-4 mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className={`w-full bg-obsidian-900 border ${error ? 'border-red-500/50' : 'border-white/10'} rounded px-4 py-3 text-white text-sm focus:border-gold-500 focus:ring-1 focus:ring-gold-500/30 focus:outline-none transition-all`}
              placeholder="name@email.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className={`w-full bg-obsidian-900 border ${error ? 'border-red-500/50' : 'border-white/10'} rounded px-4 py-3 text-white text-sm focus:border-gold-500 focus:ring-1 focus:ring-gold-500/30 focus:outline-none transition-all`}
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-gold-500 hover:bg-gold-400 disabled:bg-gold-800 disabled:text-obsidian-900/50 text-obsidian-900 font-bold uppercase tracking-widest text-xs rounded transition-all duration-300 shadow-lg shadow-gold-500/20 cursor-pointer"
          >
            {loading ? (
              <span className="flex items-center justify-center space-x-2">
                <svg className="animate-spin h-4 w-4 text-obsidian-900" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Verifying...</span>
              </span>
            ) : 'Sign In'}
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-xs text-gray-400">
            Don't have an account yet?{' '}
            <button
              onClick={() => setCurrentPage('register')}
              className="text-gold-500 font-semibold hover:underline cursor-pointer"
            >
              Request Club Invite
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
