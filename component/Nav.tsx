'use client';

import React from 'react';
import Image from 'next/image'; // Import the Next.js Image component

const Navbar: React.FC = () => {
    return (
        <nav className="h-16 bg-gray-800 text-white flex items-center">
            <div className="container mx-auto flex justify-between items-center px-4">
                <div className="flex items-center">
                    
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={56} // Set the width of the image
                        height={56} // Set the height of the image
                        className=""
                    />
                    <a href="/">Hello</a>
                </div>
                <div className="flex space-x-8 text-2xl">
                    <span>About</span>
                    <span>Github</span>
                    <span>Blog</span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;