
import React, { useState } from 'react';
import { login, register } from '../services/authService';
import { GraduationCap, ArrowRight, Loader2, Mail, ArrowLeft } from 'lucide-react';
import Aurora from './Aurora';

interface Props {
  onAuthSuccess: () => void;
}

const AuthScreen: React.FC<Props> = ({ onAuthSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [universityId, setUniversityId] = useState('uw');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState(false);

  const validatePassword = (pwd: string) => {
    // At least 8 chars, 1 uppercase, 1 lowercase, 1 special char
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
    return regex.test(pwd);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!isLogin) {
      if (!validatePassword(password)) {
        setError('Password must be at least 8 characters and include uppercase, lowercase, and a special character (!@#$%^&*).');
        return;
      }
      if (!name.trim()) {
        setError('Please enter your name.');
        return;
      }
    }

    setIsLoading(true);

    try {
      if (isLogin) {
        await login(email, password);
        onAuthSuccess();
      } else {
        await register(email, password, name, universityId);
        // Show success screen for signup
        setSignupSuccess(true);
      }
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackToLogin = () => {
    setSignupSuccess(false);
    setIsLogin(true);
    setEmail('');
    setPassword('');
    setName('');
    setError('');
  };

  // Show success screen after signup
  if (signupSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black p-4 relative" style={{ fontFamily: "'Montserrat', sans-serif" }}>
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
        <div className="bg-black/60 backdrop-blur-xl w-full max-w-md p-8 rounded-md shadow-xl border border-white/20 relative z-10 text-center animate-in fade-in zoom-in-95 duration-300">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500 text-white rounded-full mb-6 shadow-lg">
            <Mail size={40} />
          </div>
          <h1 className="text-2xl font-bold text-white mb-3">Check Your Email!</h1>
          <p className="text-white/70 mb-2">
            We've sent a confirmation link to:
          </p>
          <p className="text-white font-semibold mb-6 bg-white/10 rounded-md py-2 px-4 inline-block">
            {email}
          </p>
          <div className="bg-white/5 rounded-md p-4 mb-6 text-left">
            <p className="text-white/60 text-sm mb-2">
              <strong className="text-white/80">Next steps:</strong>
            </p>
            <ol className="text-white/60 text-sm space-y-1 list-decimal list-inside">
              <li>Open the email from UniPilot</li>
              <li>Click the confirmation link</li>
              <li>Come back and log in!</li>
            </ol>
          </div>
          <p className="text-white/40 text-xs mb-6">
            Didn't receive it? Check your spam folder.
          </p>
          <button
            onClick={handleBackToLogin}
            className="w-full py-3 bg-white/10 hover:bg-white/20 text-white rounded-md transition-all font-medium flex items-center justify-center gap-2"
          >
            <ArrowLeft size={18} />
            Back to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4 relative" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      {/* Aurora Background */}
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />

      <div className="bg-black/60 backdrop-blur-xl w-full max-w-md p-8 rounded-md shadow-xl animate-in fade-in zoom-in-95 duration-300 border border-white/20 relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 text-white rounded-md mb-4 shadow-lg">
            <GraduationCap size={32} />
          </div>
          <h1 className="text-3xl font-bold text-white">UniPilot</h1>
          <p className="text-white/60 mt-2">Your AI Co-Pilot for University Life</p>
        </div>

        <div className="flex bg-white/10 p-1 rounded-md mb-6">
          <button
            onClick={() => { setIsLogin(true); setError(''); }}
            className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${isLogin ? 'bg-white/20 text-white shadow-sm' : 'text-white/60 hover:text-white'}`}
          >
            Login
          </button>
          <button
            onClick={() => { setIsLogin(false); setError(''); }}
            className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${!isLogin ? 'bg-white/20 text-white shadow-sm' : 'text-white/60 hover:text-white'}`}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="p-3 bg-red-500/20 border border-red-500/30 text-red-300 text-sm rounded-md text-center">
              {error}
            </div>
          )}

          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-white/80 mb-1">Full Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-white placeholder-white/40"
                placeholder="John Doe"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-white/80 mb-1">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-white placeholder-white/40"
              placeholder="student@university.edu"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white/80 mb-1">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-white placeholder-white/40"
              placeholder="••••••••"
            />
            {!isLogin && <p className="text-xs text-white/40 mt-1">Min 8 chars, Upper, Lower, Special (!@#$)</p>}
          </div>

          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-white/80 mb-1">Select University</label>
              <select
                value={universityId}
                onChange={(e) => setUniversityId(e.target.value)}
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-white"
              >
                <option value="uw" className="bg-black text-white">University of Waterloo</option>
                <option value="uoft" className="bg-black text-white">University of Toronto</option>
                <option value="mac" className="bg-black text-white">McMaster University</option>
                <option value="western" className="bg-black text-white">Western University</option>
                <option value="queens" className="bg-black text-white">Queen's University</option>
                <option value="tmu" className="bg-black text-white">Toronto Metropolitan U</option>
              </select>
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="cssbuttons-io-button w-full justify-center"
          >
            {isLoading ? (
              <Loader2 className="animate-spin" size={20} />
            ) : (
              isLogin ? 'Welcome Back' : 'Create Account'
            )}
            <span className="icon">
              <ArrowRight size={18} />
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthScreen;
