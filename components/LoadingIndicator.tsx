/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
/*
  This file is repurposed to be the ProfileScreen for the Tourna App.
  Original file: components/LoadingIndicator.tsx
*/
import React from 'react';
import { Screen, User } from '../types';
import { AboutIcon, AiIcon, GamepadIcon, HistoryIcon, KillsIcon, LogoutIcon, PrivacyIcon, ReferralsIcon, RightArrowIcon, SupportIcon, WinningsIcon } from './icons';

interface ProfileScreenProps {
  navigate: (screen: Screen) => void;
  onLogout: () => void;
}

const mockUser: User = {
  name: 'dinesh',
  phone: '9509790043',
  avatarInitials: 'MX',
  matchesPlayed: 0,
  totalKills: 0,
  totalWinnings: 0,
  walletBalance: 0.00
};

const StatCard: React.FC<{ icon: React.ReactNode; label: string; value: string | number }> = ({ icon, label, value }) => (
  <div className="flex flex-col items-center gap-2">
    <div className="text-[color:var(--accent-cyan)]">{icon}</div>
    <span className="text-lg font-bold text-white">{value}</span>
    <span className="text-xs text-[color:var(--text-secondary)]">{label}</span>
  </div>
);

const ProfileLink: React.FC<{ icon: React.ReactNode; label: string; onClick: () => void; isLogout?: boolean }> = ({ icon, label, onClick, isLogout = false }) => (
  <button onClick={onClick} className={`w-full flex items-center justify-between p-4 rounded-lg transition-colors ${isLogout ? 'text-red-400 hover:bg-red-500/10' : 'text-gray-200 hover:bg-[color:var(--background-light)]'}`}>
    <div className="flex items-center gap-4">
      <div className={isLogout ? 'text-red-400' : 'text-[color:var(--accent-cyan)]'}>{icon}</div>
      <span className="font-medium">{label}</span>
    </div>
    {!isLogout && <RightArrowIcon className="text-[color:var(--text-secondary)]" />}
  </button>
);


const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigate, onLogout }) => {
  return (
    <div className="p-4 text-white bg-[color:var(--background-dark)] min-h-full">
      <h1 className="text-2xl font-bold text-center mb-6">My Profile</h1>

      <div className="flex items-center gap-4 mb-8">
        <div className="w-16 h-16 rounded-full bg-[color:var(--accent-cyan)] flex items-center justify-center text-2xl font-bold text-black">
          {mockUser.avatarInitials}
        </div>
        <div>
          <h2 className="text-xl font-semibold">{mockUser.name}</h2>
          <p className="text-sm text-[color:var(--text-secondary)]">{mockUser.phone}</p>
        </div>
      </div>
      
      <div className="bg-[color:var(--background-med)] p-4 rounded-xl flex justify-around items-center mb-8">
        <StatCard icon={<GamepadIcon className="w-7 h-7" />} label="Matches Played" value={mockUser.matchesPlayed} />
        <StatCard icon={<KillsIcon className="w-7 h-7" />} label="Total Kills" value={mockUser.totalKills} />
        <StatCard icon={<WinningsIcon className="w-7 h-7" />} label="Total Winnings" value={`₹${mockUser.totalWinnings.toFixed(2)}`} />
      </div>

      <div className="bg-[color:var(--background-med)] p-2 rounded-xl space-y-1">
        <ProfileLink icon={<HistoryIcon />} label="My Matches" onClick={() => {}} />
        <ProfileLink icon={<HistoryIcon />} label="Transaction History" onClick={() => navigate('wallet')} />
        <ProfileLink icon={<ReferralsIcon />} label="My Referrals" onClick={() => {}} />
        <ProfileLink icon={<AiIcon />} label="AI Assistant" onClick={() => navigate('ai_assistant')} />
        <ProfileLink icon={<SupportIcon />} label="Customer Support" onClick={() => {}} />
        <ProfileLink icon={<PrivacyIcon />} label="Privacy Policy" onClick={() => {}} />
        <ProfileLink icon={<AboutIcon />} label="About Us" onClick={() => {}} />
        <ProfileLink icon={<LogoutIcon />} label="Logout" onClick={onLogout} isLogout />
      </div>

    </div>
  );
};

export default ProfileScreen;
