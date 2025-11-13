/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
/*
  This file is repurposed to be the LoginScreen for the Tourna App.
  Original file: components/PromptForm.tsx
*/
import React, { useState } from 'react';
import { EyeIcon, EyeOffIcon, LockIcon, PhoneIcon } from './icons';

interface LoginScreenProps {
  onLogin: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="h-dvh flex flex-col items-center justify-center p-8 bg-[color:var(--background-dark)] text-white">
      <div className="w-full max-w-sm text-center">
        <h1 className="text-5xl font-bold mb-12 text-[color:var(--accent-cyan)]" style={{ textShadow: '0 0 10px var(--accent-cyan)' }}>
          TOURNA APP
        </h1>

        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
          <div className="relative">
            <PhoneIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-[color:var(--text-secondary)]" />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full bg-[color:var(--background-med)] border-2 border-transparent focus:border-[color:var(--accent-cyan)] text-white placeholder-[color:var(--text-secondary)] rounded-full py-3 pl-12 pr-4 transition-all outline-none"
            />
          </div>
          <div className="relative">
            <LockIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-[color:var(--text-secondary)]" />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className="w-full bg-[color:var(--background-med)] border-2 border-transparent focus:border-[color:var(--accent-cyan)] text-white placeholder-[color:var(--text-secondary)] rounded-full py-3 pl-12 pr-12 transition-all outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[color:var(--text-secondary)]"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOffIcon /> : <EyeIcon />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-[color:var(--accent-cyan)] text-black font-bold py-4 rounded-full text-lg transition-transform active:scale-95 cyan-glow"
          >
            LOGIN
          </button>
        </form>

        <p className="mt-8 text-[color:var(--text-secondary)]">
          Don't have an account?{' '}
          <button className="font-semibold text-[color:var(--accent-cyan)] hover:underline">
            Register Now
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginScreen;
