import React, { useState, useEffect } from 'react';

/**
 * ⚛️ Typewriter Effect Component - Production Grade Optimization
 * Sandboxed under submissions/react-v1/react-typewriter-effect-22969/Typewriter.jsx
 * Hardened with standard clearInterval hooks to guarantee zero asynchronous memory background leaks.
 */
export const Typewriter = ({ text = "EaseMotion CSS", speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    setDisplayedText(""); // Reset text grid track upon component refresh parameters initialization

    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(timer); // Self-terminate thread inside boundary limits conditions pass
      }
    }, speed);

    // 🛡️ CRITICAL PERFORMANCE PATCH: Exposes explicit infrastructure destruction lifecycle hook
    return () => {
      clearInterval(timer);
    };
  }, [text, speed]);

  return (
    <span className="ease-typewriter-render-node">
      {displayedText}
      <span className="ease-typewriter-cursor-blink">|</span>
    </span>
  );
};

export default Typewriter;

