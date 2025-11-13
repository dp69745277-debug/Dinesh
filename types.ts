/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
export interface User {
  name: string;
  phone: string;
  avatarInitials: string;
  matchesPlayed: number;
  totalKills: number;
  totalWinnings: number;
  walletBalance: number;
}

export interface Tournament {
  id: string;
  name: string;
  game: string;
  image: string;
  status: 'ONGOING' | 'UPCOMING' | 'RESULT';
  dateTime: Date;
  prizePool: number;
  perKill: number;
  entryFee: number;
  slotsFilled: number;
  totalSlots: number;
}

export type Screen =
  | 'home'
  | 'leaderboard'
  | 'promotions'
  | 'wallet'
  | 'profile'
  | 'ai_assistant';
