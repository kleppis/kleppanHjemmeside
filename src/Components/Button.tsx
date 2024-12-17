import React from 'react';
import './Button.css'; // Import your CSS styles

const Button = ({ children, onClick, variant = 'primary', size = 'medium', disabled = false }) => {
    return (
        <button
            className={`rounded-lg btn ${variant} ${size}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;