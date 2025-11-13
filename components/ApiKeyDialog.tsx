/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
/*
  This file is repurposed to be the BottomNav component for the Tourna App.
  Original file: components/ApiKeyDialog.tsx
*/
import React from 'react';
import { Screen } from '../types';
// FIX: Module '"./icons"' declares 'Megaphone' locally, but it is not exported. The correct component to use is 'PromotionsIcon'.
import { HomeIcon, LeaderboardIcon, PromotionsIcon, ProfileIcon, WalletIcon } from './icons';

interface BottomNavProps {
  activeScreen: Screen;
  setActiveScreen: (screen: Screen) => void;
}

const NavItem: React.FC<{
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}> = ({ icon, label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center justify-center gap-1 w-full transition-colors duration-200 ${
      isActive ? 'text-[color:var(--accent-cyan)]' : 'text-[color:var(--text-secondary)] hover:text-white'
    }`}
    aria-current={isActive ? 'page' : undefined}
  >
    {icon}
    <span className="text-xs font-medium">{label}</span>
  </button>
);

const BottomNav: React.FC<BottomNavProps> = ({ activeScreen, setActiveScreen }) => {
  const navItems = [
    { id: 'leaderboard', icon: <LeaderboardIcon className="w-6 h-6" />, label: 'Stats' },
    { id: 'promotions', icon: <PromotionsIcon className="w-6 h-6" />, label: 'Promos' },
    { id: 'home', icon: <HomeIcon className="w-6 h-6" />, label: 'Home' },
    { id: 'wallet', icon: <WalletIcon className="w-6 h-6" />, label: 'Wallet' },
    { id: 'profile', icon: <ProfileIcon className="w-6 h-6" />, label: 'Profile' },
  ] as const;

  return (
    <nav className="fixed bottom-0 left-0 right-0 w-full max-w-md mx-auto h-20 bg-[color:var(--background-med)] border-t border-t-[color:var(--background-light)] flex items-center justify-around px-2 z-50">
      {navItems.map((item) => (
        <NavItem
          key={item.id}
          icon={item.icon}
          label={item.label}
          isActive={activeScreen === item.id}
          onClick={() => setActiveScreen(item.id)}
        />
      ))}
    </nav>
  );
};

export default BottomNav;