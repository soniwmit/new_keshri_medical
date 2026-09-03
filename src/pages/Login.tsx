import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { BUSINESS_CONFIG } from '../data/config';
import { 
  Lock, 
  User, 
  Eye, 
  EyeOff, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  KeyRound, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export const Login: React.FC = () => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [forgotInput, setForgotInput] = useState('');
  const [forgotSuccess, setForgotSuccess] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (!identifier.trim()) {
      setErrorMessage('Please enter your Registered Mobile Number or Email address.');
      return;
    }

    if (!password) {
      setErrorMessage('Please enter your account password.');
      return;
    }

    if (password.length < 6) {
      setErrorMessage('Password must contain at least 6 characters.');
      return;
    }

    setIsLoading(true);

    // Simulate secure authentication check
    setTimeout(() => {
      setIsLoading(false);
      setSuccessMessage('Login successful! Welcome back to New Keshri Medical Store.');
    }, 1200);
  };

  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (!forgotInput.trim()) return;
    setForgotSuccess(true);
    setTimeout(() => {
      setForgotSuccess(false);
      setShowForgotModal(false);
      setForgotInput('');
    }, 3000);
  };

  return (
    <div className="w-full min-h-[75vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-[#F9F7F2] dark:bg-[#141412]">
      <SEO
        title="Secure Customer & Staff Login"
        description="Login to your New Keshri Medical Store customer or pharmacist staff portal to view repeat prescriptions, order history, and billing."
        canonicalPath="/login"
      />

      <div className="w-full max-w-md space-y-6">
        {/* Branding & Header */}
        <div className="text-center space-y-2">
          <Link to="/" className="inline-flex items-center gap-2.5 mx-auto group">
            <div className="w-12 h-12 rounded-lg bg-[#1A4329] flex items-center justify-center p-2 border border-[#2C2B27] shadow-xs group-hover:scale-102 transition-transform">
              <img
                src="/icons/icon.svg"
                alt="New Keshri Medical Store"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-left">
              <span className="font-serif font-bold text-lg tracking-tight text-[#1A1A1A] dark:text-[#F4EFE6] block">
                NEW KESHRI
              </span>
              <span className="editorial-tag text-[#9C7B38] block -mt-1">
                Medical Store
              </span>
            </div>
          </Link>

          <h1 className="font-serif text-2xl font-bold tracking-tight text-[#1A1A1A] dark:text-[#F4EFE6] pt-2">
            Secure Portal Login
          </h1>
          <p className="text-xs text-[#5E5B54] dark:text-[#A8A49A]">
            Access your patient profile, refill history, or staff dispensary dashboard
          </p>
        </div>

        {/* Login Box */}
        <div className="p-6 sm:p-8 rounded-xl bg-white dark:bg-[#1C1C19] border border-[#E5E0D8] dark:border-[#2C2B27] shadow-xs space-y-5">
          {/* Error Message */}
          {errorMessage && (
            <div className="p-3 rounded-lg bg-[#FAF0ED] dark:bg-[#A64B2A]/20 border border-[#A64B2A]/30 text-[#A64B2A] dark:text-[#D98263] text-xs flex items-center gap-2 animate-in fade-in">
              <AlertCircle className="w-4 h-4 shrink-0 text-[#A64B2A]" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Success Message */}
          {successMessage && (
            <div className="p-3 rounded-lg bg-[#EBF3EE] dark:bg-[#1A4329]/20 border border-[#1A4329]/30 text-[#1A4329] dark:text-[#64AB82] text-xs flex items-center gap-2 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 shrink-0 text-[#1A4329]" />
              <span>{successMessage}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4 text-xs sm:text-sm">
            {/* Mobile / Email Field */}
            <div>
              <label 
                htmlFor="login-identifier" 
                className="block font-semibold text-[#1A1A1A] dark:text-[#F4EFE6] mb-1 text-xs"
              >
                Email or Mobile Number <span className="text-[#A64B2A]">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-[#8E8A80] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  id="login-identifier"
                  type="text"
                  required
                  autoComplete="username"
                  placeholder="e.g. 9876543210 or user@example.com"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  className="w-full pl-10 pr-3.5 py-2.5 rounded-lg border border-[#E5E0D8] dark:border-[#2C2B27] bg-[#F9F7F2] dark:bg-[#141412] text-[#1A1A1A] dark:text-[#F4EFE6] focus:ring-1 focus:ring-[#1A4329] focus:border-[#1A4329] focus:outline-hidden"
                />
              </div>
            </div>

            {/* Password Field with Show/Hide Toggle */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label 
                  htmlFor="login-password" 
                  className="block font-semibold text-[#1A1A1A] dark:text-[#F4EFE6] text-xs"
                >
                  Password <span className="text-[#A64B2A]">*</span>
                </label>
                <button
                  type="button"
                  onClick={() => setShowForgotModal(true)}
                  className="text-xs text-[#1A4329] dark:text-[#64AB82] hover:underline font-semibold"
                >
                  Forgot Password?
                </button>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-[#8E8A80] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  id="login-password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-10 py-2.5 rounded-lg border border-[#E5E0D8] dark:border-[#2C2B27] bg-[#F9F7F2] dark:bg-[#141412] text-[#1A1A1A] dark:text-[#F4EFE6] focus:ring-1 focus:ring-[#1A4329] focus:border-[#1A4329] focus:outline-hidden"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#8E8A80] hover:text-[#1A1A1A] dark:hover:text-[#F4EFE6] p-1"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Remember Me Checkbox */}
            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer select-none text-xs text-[#5E5B54] dark:text-[#A8A49A]">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded-sm border-[#E5E0D8] text-[#1A4329] focus:ring-[#1A4329] accent-[#1A4329]"
                />
                <span>Remember me on this device</span>
              </label>
            </div>

            {/* Submit Button with Loading State */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 rounded-lg bg-[#1A4329] hover:bg-[#12301D] active:bg-[#0E2416] text-[#F9F7F2] font-semibold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Verifying Credentials...</span>
                </>
              ) : (
                <>
                  <ShieldCheck className="w-4 h-4" />
                  <span>Secure Login</span>
                </>
              )}
            </button>
          </form>

          <div className="pt-2 border-t border-[#E5E0D8] dark:border-[#2C2B27] text-center text-xs text-[#5E5B54] dark:text-[#A8A49A]">
            <span>Need a customer account or recurring chronic prescription?</span>{' '}
            <a
              href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hello New Keshri Medical Store, I would like to register for chronic prescription refill services.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1A4329] dark:text-[#64AB82] font-semibold hover:underline"
            >
              Ask on WhatsApp
            </a>
          </div>
        </div>

        {/* Security Assurance Badge */}
        <div className="p-3 rounded-lg bg-white dark:bg-[#1C1C19] border border-[#E5E0D8] dark:border-[#2C2B27] text-[11px] text-[#8E8A80] text-center flex items-center justify-center gap-2 shadow-xs">
          <ShieldCheck className="w-4 h-4 text-[#1A4329] dark:text-[#64AB82] shrink-0" />
          <span>256-bit Encrypted SSL Healthcare Portal &bull; Arwal, Bihar</span>
        </div>
      </div>

      {/* Forgot Password Modal */}
      {showForgotModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F0E0C]/80 backdrop-blur-xs p-4 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-sm rounded-xl bg-white dark:bg-[#1C1C19] p-6 shadow-xl border border-[#E5E0D8] dark:border-[#2C2B27] space-y-4 text-xs sm:text-sm">
            <div className="flex items-center gap-2 text-[#1A1A1A] dark:text-[#F4EFE6]">
              <KeyRound className="w-5 h-5 text-[#9C7B38]" />
              <h3 className="font-serif font-bold text-base">Reset Password</h3>
            </div>
            <p className="text-xs text-[#5E5B54] dark:text-[#A8A49A]">
              Enter your registered mobile number or email address. We will send you an OTP or recovery link.
            </p>

            <form onSubmit={handleForgotPassword} className="space-y-3">
              <input
                type="text"
                required
                placeholder="Mobile Number or Email"
                value={forgotInput}
                onChange={(e) => setForgotInput(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-[#E5E0D8] dark:border-[#2C2B27] bg-[#F9F7F2] dark:bg-[#141412] text-[#1A1A1A] dark:text-[#F4EFE6] focus:ring-1 focus:ring-[#1A4329] focus:border-[#1A4329] focus:outline-hidden text-xs"
              />

              {forgotSuccess && (
                <p className="text-xs text-[#1A4329] dark:text-[#64AB82] font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Recovery instructions sent! Check your SMS/Email.
                </p>
              )}

              <div className="flex items-center justify-end gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setShowForgotModal(false)}
                  className="px-3.5 py-2 rounded-lg text-[#5E5B54] dark:text-[#A8A49A] hover:bg-[#F2EFE9] text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-[#1A4329] hover:bg-[#12301D] text-[#F9F7F2] text-xs font-semibold uppercase tracking-wider shadow-xs"
                >
                  Send OTP Link
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
