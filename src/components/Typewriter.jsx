import React, { useEffect, useState } from 'react';

function Typewriter({ text, typingSpeed = 80, startDelay = 300, showCursor = true }) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let isCancelled = false;
    let timeoutId;
    let intervalId;

    // Reset state when text changes
    setDisplayedText('');
    setIsTypingComplete(false);

    const startTyping = () => {
      let index = 0;
      
      intervalId = setInterval(() => {
        if (isCancelled) return;
        
        if (index < text.length) {
          setDisplayedText(text.slice(0, index + 1));
          index++;
        } else {
          // Typing is complete
          clearInterval(intervalId);
          setIsTypingComplete(true);
        }
      }, typingSpeed);
    };

    // Start typing after delay
    timeoutId = setTimeout(startTyping, startDelay);

    return () => {
      isCancelled = true;
      if (timeoutId) clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [text, typingSpeed, startDelay]);

  return (
    <div 
      style={{
        display: 'inline-block',
        fontFamily: "'JetBrains Mono', monospace",
        position: 'relative',
        textAlign: 'left',
        whiteSpace: 'nowrap',
        width: `${text.length + 2}ch`, // Fixed width based on text length
        maxWidth: 'none'
      }}
    >
      <span 
        style={{
          display: 'inline-block',
          whiteSpace: 'nowrap',
          textAlign: 'left'
        }}
        aria-live="polite" 
        aria-atomic="true"
      >
        {displayedText}
        {showCursor && (
          <span 
            style={{
              display: 'inline-block',
              width: '0.1em',
              color: 'inherit',
              marginLeft: '2px',
              animation: isTypingComplete ? 'typeCaretBlink 1s ease-in-out infinite' : 'none',
              opacity: isTypingComplete ? undefined : 1
            }}
          >
            |
          </span>
        )}
      </span>
    </div>
  );
}

export default Typewriter;