import React, { useState, useRef, useEffect } from 'react';
import { sendMessage } from '../services/ChatService';

const ChatInterface = ({ onClose }) => {
    const [messages, setMessages] = useState([
        { type: 'bot', content: 'Hi! I can help you learn more about this portfolio. Ask me about skills, experience, or projects!' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = input.trim();
        setInput('');
        setMessages(prev => [...prev, { type: 'user', content: userMessage }]);
        setIsLoading(true);

        const response = await sendMessage(userMessage);
        setMessages(prev => [...prev, { type: 'bot', content: response }]);
        setIsLoading(false);
    };

    return (
        <div className="flex flex-col h-[500px] bg-gray-50">
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg, idx) => (
                    <div
                        key={idx}
                        className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        {msg.type === 'bot' && (
                            <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center mr-2">
                                <span className="text-indigo-600 text-sm">AI</span>
                            </div>
                        )}
                        <div className={`max-w-[80%] break-words ${
                            msg.type === 'user' 
                                ? 'bg-indigo-600 text-white rounded-t-2xl rounded-bl-2xl' 
                                : 'bg-white border border-gray-200 rounded-t-2xl rounded-br-2xl'
                        } p-3 shadow-sm`}>
                            <p className={`text-sm ${msg.type === 'user' ? 'text-white' : 'text-gray-800'}`}>
                                {msg.content}
                            </p>
                        </div>
                        {msg.type === 'user' && (
                            <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center ml-2">
                                <span className="text-white text-sm">You</span>
                            </div>
                        )}
                    </div>
                ))}
                
                {isLoading && (
                    <div className="flex items-center space-x-2 pl-10">
                        <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSubmit} className="border-t border-gray-200 p-4 bg-white rounded-b-lg">
                <div className="flex items-center gap-2">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask me anything..."
                        className="flex-1 p-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-700 text-sm"
                    />
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="p-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                        </svg>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ChatInterface;
