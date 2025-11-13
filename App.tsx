/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState } from 'react';
// File repurposed for LoginScreen
import LoginScreen from './components/PromptForm';
// File repurposed for HomeScreen
import HomeScreen from './components/VideoResult';
// File repurposed for ProfileScreen
import ProfileScreen from './components/LoadingIndicator';
// File repurposed for AIAssistantScreen
import AIAssistantScreen from './services/geminiService';
// File repurposed for BottomNav
import BottomNav from './components/ApiKeyDialog';
import { Screen } from './types';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeScreen, setActiveScreen] = useState<Screen>('home');

  const handleLogin = () => {
    setIsLoggedIn(true);
    setActiveScreen('home');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const renderScreen = () => {
    switch (activeScreen) {
      case 'home':
        return <HomeScreen navigate={setActiveScreen} />;
      case 'profile':
        return <ProfileScreen navigate={setActiveScreen} onLogout={handleLogout} />;
      case 'ai_assistant':
         return <AIAssistantScreen navigate={setActiveScreen} />;
      // Mock other screens to prevent crashes if their nav icons are clicked
      case 'leaderboard':
      case 'promotions':
      case 'wallet':
        return <div className="p-8 text-center"><h1 className="text-2xl font-bold">{activeScreen.charAt(0).toUpperCase() + activeScreen.slice(1)}</h1><p className="text-gray-400">This screen is not yet implemented.</p></div>;
      default:
        return <HomeScreen navigate={setActiveScreen} />;
    }
  };

  if (!isLoggedIn) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return (
    <div className="h-dvh w-full max-w-md mx-auto bg-[#0F1021] flex flex-col font-sans overflow-hidden">
      <main className="flex-grow overflow-y-auto pb-20">
        {renderScreen()}
      </main>
      <BottomNav activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
    </div>
  );
};

export default App;
