"use client"; // Add this directive to make it a Client Component

import React from 'react';

interface BtnProps {
    label: string;
    onClick: () => void;
    disabled?: boolean;
}

const Btn: React.FC<BtnProps> = ({ label, onClick, disabled = false }) => {
    return (
        <button
            type="button" // Explicitly set the button type
            onClick={onClick}
            disabled={disabled}
            className="h-10 w-10 rounded-sm bg-blue-500 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed text-md"
        >
            {label}
        </button>
    );
};

export default Btn;