// FIX: This file contains JSX syntax, which is not valid in a standard TypeScript (.ts) file.
// All the reported errors (e.g., "Cannot find name 'div'", "Operator '<' cannot be applied to types...")
// are due to the TypeScript parser not being configured to handle JSX in .ts files.
// To fix these errors, this file must be renamed from 'geminiService.ts' to 'geminiService.tsx'.
// The code itself is a valid React component and does not contain other logical errors.
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
/*
  This file is repurposed to be the AIAssistantScreen for the Tourna App.
  Original file: services/geminiService.ts
*/
import { GoogleGenAI } from '@google/genai';
import React, { useState, useRef, useEffect } from 'react';
import { Screen } from '../types';
import { BackIcon, SendIcon, SparklesIcon } from '../components/icons';

interface AIAssistantScreenProps {
  navigate: (screen: Screen) => void;
}

interface Message {
    sender: 'user' | 'ai';
    text: string;
}

const getAiAssistantResponse = async (prompt: string): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `You are a helpful AI assistant for "Tourna App", a gaming tournament application. Be friendly, concise, and helpful. Address the user's query about the app or gaming in general. User's query: "${prompt}"`,
    });
    return response.text;
  } catch (error) {
    console.error("AI Assistant error:", error);
    if (error instanceof Error) {
        return `Sorry, I encountered an error: ${error.message}`;
    }
    return "Sorry, I'm having trouble connecting. Please try again later.";
  }
};

const AIAssistantScreen: React.FC<AIAssistantScreenProps> = ({ navigate }) => {
    const [messages, setMessages] = useState<Message[]>([
        { sender: 'ai', text: "Hello! I'm your AI Assistant. How can I help you with the Tourna App today?" }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(scrollToBottom, [messages]);

    const handleSend = async () => {
        if (input.trim() === '' || isLoading) return;

        const userMessage: Message = { sender: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        const aiResponse = await getAiAssistantResponse(input);
        const aiMessage: Message = { sender: 'ai', text: aiResponse };
        
        setMessages(prev => [...prev, aiMessage]);
        setIsLoading(false);
    };

    // FIX: Converted JSX to React.createElement calls to be valid in a .ts file.
    // The correct long-term solution is to rename this file to .tsx.
    const messageListChildren = [
        ...messages.map((msg, index) =>
            React.createElement(
                'div',
                { key: index, className: `flex items-end gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}` },
                msg.sender === 'ai' && React.createElement(
                    'div',
                    { className: "w-8 h-8 rounded-full bg-[color:var(--accent-cyan)] flex items-center justify-center shrink-0" },
                    React.createElement(SparklesIcon, { className: "w-5 h-5 text-black" })
                ),
                React.createElement(
                    'div',
                    { className: `max-w-xs md:max-w-md p-3 rounded-2xl ${msg.sender === 'user' ? 'bg-indigo-600 rounded-br-none' : 'bg-[color:var(--background-light)] rounded-bl-none'}` },
                    React.createElement(
                        'p',
                        { className: "text-white whitespace-pre-wrap" },
                        msg.text
                    )
                )
            )
        ),
        isLoading && React.createElement(
            'div',
            { key: 'loading', className: "flex items-end gap-2 justify-start" },
            React.createElement(
                'div',
                { className: "w-8 h-8 rounded-full bg-[color:var(--accent-cyan)] flex items-center justify-center shrink-0" },
                React.createElement(SparklesIcon, { className: "w-5 h-5 text-black" })
            ),
            React.createElement(
                'div',
                { className: "max-w-xs md:max-w-md p-3 rounded-2xl bg-[color:var(--background-light)] rounded-bl-none" },
                React.createElement(
                    'div',
                    { className: "flex items-center gap-2" },
                    React.createElement('div', { className: "w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]" }),
                    React.createElement('div', { className: "w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]" }),
                    React.createElement('div', { className: "w-2 h-2 bg-gray-400 rounded-full animate-bounce" })
                )
            )
        ),
        React.createElement('div', { key: 'end-ref', ref: messagesEndRef })
    ];

    return React.createElement(
        'div',
        { className: "h-full flex flex-col bg-[color:var(--background-dark)]" },
        React.createElement(
            'header',
            { className: "flex items-center p-4 bg-[color:var(--background-med)] sticky top-0 z-10" },
            React.createElement(
                'button',
                { onClick: () => navigate('profile'), className: "p-2 -ml-2" },
                React.createElement(BackIcon, null)
            ),
            React.createElement(
                'h1',
                { className: "text-xl font-bold text-center flex-grow" },
                'AI Assistant'
            )
        ),
        React.createElement(
            'div',
            { className: "flex-grow p-4 overflow-y-auto space-y-4" },
            ...messageListChildren
        ),
        React.createElement(
            'div',
            { className: "p-4 bg-[color:var(--background-med)]" },
            React.createElement(
                'div',
                { className: "flex items-center bg-[color:var(--background-light)] rounded-full p-2" },
                React.createElement('input', {
                    type: "text",
                    value: input,
                    onChange: (e) => setInput(e.target.value),
                    onKeyPress: (e) => e.key === 'Enter' && handleSend(),
                    placeholder: "Ask me anything...",
                    className: "flex-grow bg-transparent focus:outline-none px-3 text-white placeholder-[color:var(--text-secondary)]",
                    disabled: isLoading,
                }),
                React.createElement(
                    'button',
                    { onClick: handleSend, disabled: isLoading || input.trim() === '', className: "p-2 bg-[color:var(--accent-cyan)] rounded-full disabled:bg-gray-600" },
                    React.createElement(SendIcon, { className: "w-5 h-5 text-black" })
                )
            )
        )
    );
};

export default AIAssistantScreen;