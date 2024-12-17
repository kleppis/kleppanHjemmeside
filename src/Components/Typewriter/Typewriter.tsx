import React, { useState, useEffect } from 'react';
import './typewriter.css'; // Importer en CSS-fil for styling

type TypewriterProps = {
    text: string;
    speed?: number; // Optional typing speed (ms per character)
    variant?: 'primary' | 'secondary'; // Variant for styling
    delay?: number;  // Optional delay in seconds before typing starts
};

const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 100, variant = 'primary', delay = 0 }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [hasStarted, setHasStarted] = useState(false);  // Track if the typing has started

    useEffect(() => {
        // Set a timeout to start typing after the delay
        const delayTimeout = setTimeout(() => {
            setHasStarted(true);
        }, delay * 1000);

        return () => clearTimeout(delayTimeout); // Cleanup the delay timeout
    }, [delay]);

    useEffect(() => {
        if (!hasStarted) return;  // Do not start typing if the delay has not passed

        if (displayedText.length < text.length) {
            const timeoutId = setTimeout(() => {
                setDisplayedText((prev) => prev + text[displayedText.length]);
            }, speed);

            return () => clearTimeout(timeoutId); // Cleanup the typing timeout
        }
    }, [displayedText, text, speed, hasStarted]);

    // Dynamic class based on the variant prop
    const typewriterClass = `typewriter typewriter--${variant}`;

    return <span className={typewriterClass}>{displayedText}</span>;
};

export default Typewriter;