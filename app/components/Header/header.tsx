'use client';
import { useState } from 'react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="backdrop-blur m-5 rounded-md shadow sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center">
                    <span className="text-xl font-extralight ml-2">thoenelt.dev</span>
                </div>
                <div className="hidden md:flex space-x-4">
                    <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
                    <a href="#" className="text-gray-700 hover:text-gray-900">About</a>
                    <a href="#" className="text-gray-700 hover:text-gray-900">Services</a>
                    <a href="#" className="text-gray-700 hover:text-gray-900">Contact</a>
                </div>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Home</a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">About</a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Services</a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Contact</a>
                </div>
            )}
        </header>
    );
}