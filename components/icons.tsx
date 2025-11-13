/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import {
  Home,
  Wallet,
  User,
  BarChart2,
  Megaphone,
  Gamepad2,
  Flame,
  Trophy,
  Clock,
  History,
  Users,
  Bot,
  Headset,
  Shield,
  Info,
  LogOut,
  Phone,
  Lock,
  Eye,
  EyeOff,
  PlusCircle,
  ArrowLeft,
  ChevronRight,
  Send,
  Sparkles
} from 'lucide-react';

const defaultProps = {
  strokeWidth: 2,
  className: "w-5 h-5"
};

export const HomeIcon = (props) => <Home {...defaultProps} {...props} />;
export const WalletIcon = (props) => <Wallet {...defaultProps} {...props} />;
export const ProfileIcon = (props) => <User {...defaultProps} {...props} />;
export const LeaderboardIcon = (props) => <BarChart2 {...defaultProps} {...props} />;
export const PromotionsIcon = (props) => <Megaphone {...defaultProps} {...props} />;
export const GamepadIcon = (props) => <Gamepad2 {...defaultProps} {...props} />;
export const KillsIcon = (props) => <Flame {...defaultProps} {...props} />;
export const WinningsIcon = (props) => <Trophy {...defaultProps} {...props} />;
export const ClockIcon = (props) => <Clock {...defaultProps} {...props} />;
export const HistoryIcon = (props) => <History {...defaultProps} {...props} />;
export const ReferralsIcon = (props) => <Users {...defaultProps} {...props} />;
export const AiIcon = (props) => <Bot {...defaultProps} {...props} />;
export const SupportIcon = (props) => <Headset {...defaultProps} {...props} />;
export const PrivacyIcon = (props) => <Shield {...defaultProps} {...props} />;
export const AboutIcon = (props) => <Info {...defaultProps} {...props} />;
export const LogoutIcon = (props) => <LogOut {...defaultProps} {...props} />;
export const PhoneIcon = (props) => <Phone {...defaultProps} {...props} />;
export const LockIcon = (props) => <Lock {...defaultProps} {...props} />;
export const EyeIcon = (props) => <Eye {...defaultProps} {...props} />;
export const EyeOffIcon = (props) => <EyeOff {...defaultProps} {...props} />;
export const AddMoneyIcon = (props) => <PlusCircle {...defaultProps} {...props} />;
export const BackIcon = (props) => <ArrowLeft {...defaultProps} {...props} />;
export const RightArrowIcon = (props) => <ChevronRight {...defaultProps} {...props} />;
export const SendIcon = (props) => <Send {...defaultProps} {...props} />;
export const SparklesIcon = (props) => <Sparkles {...defaultProps} {...props} />;
