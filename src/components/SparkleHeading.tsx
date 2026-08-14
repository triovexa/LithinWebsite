import { useState, useEffect, useRef } from 'react';

interface SparkleHeadingProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  decay: number;
}

export default function SparkleHeading({
  text,
  className = '',
  speed = 45,
  delay = 150,
}: SparkleHeadingProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isRevealing, setIsRevealing] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const textSpanRef = useRef<HTMLSpanElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);

  // Scroll Trigger Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          setTimeout(() => {
            setIsRevealing(true);
          }, delay);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, delay]);

  // Particle Canvas Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;

    const resizeCanvas = () => {
      if (containerRef.current && canvas) {
        canvas.width = containerRef.current.clientWidth;
        canvas.height = containerRef.current.clientHeight;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const p = particlesRef.current[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particlesRef.current.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.shadowBlur = 12;
        ctx.shadowColor = p.color;
        ctx.fillStyle = p.color;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  // Spawn Fire Spark Particles at Leading Character Edge
  const spawnFireSparks = () => {
    if (!containerRef.current || !textSpanRef.current || !canvasRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const spanRect = textSpanRef.current.getBoundingClientRect();

    // Calculate leading edge position
    const sparkX = spanRect.right - containerRect.left;
    const sparkY = spanRect.top - containerRect.top + spanRect.height / 2;

    const sparkColors = ['#f59e0b', '#fbbf24', '#f97316', '#10b981', '#34d399', '#ef4444'];

    // Spawn 8-12 fire spark embers
    for (let i = 0; i < 10; i++) {
      particlesRef.current.push({
        x: sparkX + (Math.random() - 0.5) * 8,
        y: sparkY + (Math.random() - 0.5) * 12,
        vx: (Math.random() - 0.3) * 5,
        vy: (Math.random() - 0.7) * 5 - 1.5, // Fire sparks float upwards
        size: Math.random() * 3.5 + 1.2,
        color: sparkColors[Math.floor(Math.random() * sparkColors.length)],
        alpha: 1,
        decay: Math.random() * 0.04 + 0.02,
      });
    }
  };

  // Character-by-character reveal + spark trigger
  useEffect(() => {
    if (!isRevealing) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex));
        spawnFireSparks();
        currentIndex++;
      } else {
        clearInterval(interval);
        setIsRevealing(false);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [isRevealing, text, speed]);

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-center justify-center text-center max-w-5xl mx-auto w-full overflow-visible py-2"
    >
      {/* Fire Spark Canvas Layer */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-20 overflow-visible"
      />

      {/* Main Gradient Spark Heading */}
      <h2
        className={`text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-wide font-sans bg-gradient-to-r from-emerald-400 via-amber-300 to-teal-300 bg-clip-text text-transparent filter drop-shadow-[0_0_25px_rgba(16,185,129,0.4)] text-center leading-tight min-h-[1.3em] flex items-center justify-center flex-wrap relative z-10 ${className}`}
      >
        <span ref={textSpanRef} className="relative">
          {hasAnimated ? displayedText : ''}
        </span>

        {/* Glowing Fire Embers Tip */}
        {isRevealing && (
          <span className="inline-block w-2 h-6 sm:h-9 ml-1 bg-gradient-to-t from-amber-500 via-orange-400 to-amber-300 shadow-[0_0_15px_rgba(251,191,36,0.9)] animate-pulse rounded-full align-middle shrink-0" />
        )}
      </h2>
    </div>
  );
}
