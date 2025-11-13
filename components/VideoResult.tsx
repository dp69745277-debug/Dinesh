/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
/*
  This file is repurposed to be the HomeScreen for the Tourna App.
  Original file: components/VideoResult.tsx
*/
import React, { useState } from 'react';
import { Screen, Tournament, User } from '../types';
import { AddMoneyIcon } from './icons';

interface HomeScreenProps {
  navigate: (screen: Screen) => void;
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

const mockTournaments: Tournament[] = [
  { id: '1', name: '1v1 Showdown — One Wins All', game: 'FULL MAP SOLO', image: 'cs-1', status: 'UPCOMING', dateTime: new Date('2025-11-13T15:00:00'), prizePool: 45, perKill: 0, entryFee: 25, slotsFilled: 0, totalSlots: 2 },
  { id: '2', name: 'Squad Battle Royale', game: 'CS-1VS1', image: 'cs-2', status: 'UPCOMING', dateTime: new Date('2025-11-13T16:00:00'), prizePool: 200, perKill: 5, entryFee: 50, slotsFilled: 10, totalSlots: 12 },
  { id: '3', name: 'Lone Wolf Sniper Challenge', game: 'LONE WOLF-1', image: 'cs-3', status: 'UPCOMING', dateTime: new Date('2025-11-14T18:00:00'), prizePool: 100, perKill: 10, entryFee: 30, slotsFilled: 23, totalSlots: 50 },
];

const TournamentCard: React.FC<{ tournament: Tournament }> = ({ tournament }) => (
    <div className="bg-[color:var(--background-med)] rounded-2xl overflow-hidden cursor-pointer active:scale-[0.98] transition-transform duration-150">
        <div className="h-28 bg-[color:var(--background-light)] flex items-center justify-center font-bold text-3xl text-center p-2 text-[color:var(--accent-cyan)]">
            {tournament.game}
        </div>
        <div className="p-3">
            <h3 className="font-semibold text-white truncate">{tournament.name}</h3>
            <div className="flex justify-between items-center text-xs text-[color:var(--text-secondary)] mt-2 mb-3">
                <span>🗓️ {tournament.dateTime.toLocaleDateString()}</span>
                <span>⏰ {tournament.dateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
            </div>
            <div className="flex justify-between text-center text-xs mb-3">
                <div>
                    <p className="text-[color:var(--text-secondary)]">PRIZE POOL</p>
                    <p className="font-bold text-green-400">₹{tournament.prizePool}</p>
                </div>
                <div>
                    <p className="text-[color:var(--text-secondary)]">PER KILL</p>
                    <p className="font-bold text-yellow-400">₹{tournament.perKill}</p>
                </div>
                <div>
                    <p className="text-[color:var(--text-secondary)]">ENTRY FEE</p>
                    <p className="font-bold text-red-400">₹{tournament.entryFee}</p>
                </div>
            </div>
            <div className="w-full bg-[color:var(--background-light)] rounded-full h-2.5">
                <div className="bg-[color:var(--accent-cyan)] h-2.5 rounded-full" style={{ width: `${(tournament.slotsFilled / tournament.totalSlots) * 100}%` }}></div>
            </div>
            <p className="text-center text-xs text-[color:var(--text-secondary)] mt-1">{tournament.slotsFilled}/{tournament.totalSlots} Slots Filled</p>
        </div>
    </div>
);


const HomeScreen: React.FC<HomeScreenProps> = ({ navigate }) => {
  const [activeContestTab, setActiveContestTab] = useState<'ONGOING' | 'UPCOMING' | 'RESULT'>('UPCOMING');

  return (
    <div className="text-white min-h-full">
      <header className="p-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[color:var(--accent-cyan)] flex items-center justify-center font-bold text-black">
            {mockUser.avatarInitials}
          </div>
          <span className="font-semibold">{mockUser.name}</span>
        </div>
        <button onClick={() => navigate('wallet')} className="flex items-center gap-2 bg-[color:var(--background-med)] px-3 py-1.5 rounded-full">
          <span>₹{mockUser.walletBalance.toFixed(2)}</span>
          <AddMoneyIcon className="w-5 h-5 text-[color:var(--accent-cyan)]" />
        </button>
      </header>

      <section className="px-4 py-2">
        <div className="h-40 bg-[color:var(--background-med)] rounded-2xl flex items-center justify-center">
            <p className="text-[color:var(--text-secondary)]">Promotions Carousel</p>
        </div>
      </section>

      <section className="px-4 py-4">
        <h2 className="text-lg font-bold">My Contests</h2>
        <p className="text-xs text-[color:var(--text-secondary)] mb-4">Your Tournaments Journey</p>
        <div className="flex justify-around bg-[color:var(--background-med)] p-1 rounded-full">
            {['ONGOING', 'UPCOMING', 'RESULT'].map((tab) => (
                <button
                    key={tab}
                    onClick={() => setActiveContestTab(tab as any)}
                    className={`w-full py-2.5 rounded-full text-sm font-semibold transition-colors ${activeContestTab === tab ? 'bg-[color:var(--background-light)] text-white' : 'text-[color:var(--text-secondary)]'}`}
                >
                    {tab}
                </button>
            ))}
        </div>
      </section>

      <section className="px-4 py-2">
        <h2 className="text-lg font-bold">GAME-Z TOURNAMENTS</h2>
        <p className="text-xs text-[color:var(--text-secondary)] mb-4">Big Winnings For All</p>
        <div className="grid grid-cols-2 gap-4">
            {mockTournaments.map(t => <TournamentCard key={t.id} tournament={t} />)}
        </div>
      </section>
    </div>
  );
};

export default HomeScreen;
