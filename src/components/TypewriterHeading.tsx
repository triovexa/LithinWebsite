import { useState, useEffect, useRef } from 'react';

interface TypewriterHeadingProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
}

export default function TypewriterHeading({
  text,
  className = '',
  speed = 40,
  delay = 150,
}: TypewriterHeadingProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          setTimeout(() => {
            setIsTyping(true);
          }, delay);
        }
      },
      { threshold: 0.2 }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, delay]);

  useEffect(() => {
    if (!isTyping) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [isTyping, text, speed]);

  return (
    <div className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto w-full">
      <h2
        ref={headingRef}
        className={`text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight font-sans bg-gradient-to-r from-emerald-400 via-amber-300 to-teal-300 bg-clip-text text-transparent filter drop-shadow-[0_0_20px_rgba(16,185,129,0.35)] text-center leading-tight min-h-[1.3em] flex items-center justify-center flex-wrap ${className}`}
      >
        <span>{hasAnimated ? displayedText : ''}</span>
        {isTyping && (
          <span className="inline-block w-1 sm:w-2 h-6 sm:h-10 ml-1.5 bg-amber-400 animate-pulse rounded-full align-middle shrink-0" />
        )}
      </h2>
    </div>
  );
}
