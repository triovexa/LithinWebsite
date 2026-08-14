import { useEffect, useRef } from 'react';

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

export default function VideoSparkleBorder({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;

    const resizeCanvas = () => {
      if (containerRef.current && canvas) {
        // Expand canvas size slightly to allow floating fire embers outside border
        canvas.width = containerRef.current.clientWidth + 48;
        canvas.height = containerRef.current.clientHeight + 48;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const sparkColors = ['#f59e0b', '#fbbf24', '#f97316', '#10b981', '#34d399', '#38bdf8', '#ef4444'];

    // Spawn sparks continuously along container perimeter (Dense Top & Bottom Coverage)
    const spawnBorderSparks = () => {
      if (!containerRef.current || !canvas) return;
      const width = canvas.width;
      const height = canvas.height;
      const offset = 24; // 24px offset matching inner border box

      // 1. TOP EDGE SPARKS (Spawns 5 particles per tick along top width)
      for (let i = 0; i < 5; i++) {
        particlesRef.current.push({
          x: offset + Math.random() * (width - offset * 2),
          y: offset + (Math.random() - 0.5) * 4,
          vx: (Math.random() - 0.5) * 3,
          vy: -Math.random() * 2.5 - 0.5, // Float upwards
          size: Math.random() * 3.5 + 1.2,
          color: sparkColors[Math.floor(Math.random() * sparkColors.length)],
          alpha: 1,
          decay: Math.random() * 0.03 + 0.015,
        });
      }

      // 2. BOTTOM EDGE SPARKS (Spawns 5 particles per tick along bottom width)
      for (let i = 0; i < 5; i++) {
        particlesRef.current.push({
          x: offset + Math.random() * (width - offset * 2),
          y: height - offset + (Math.random() - 0.5) * 4,
          vx: (Math.random() - 0.5) * 3,
          vy: Math.random() * 2.5 + 0.5, // Float downwards
          size: Math.random() * 3.5 + 1.2,
          color: sparkColors[Math.floor(Math.random() * sparkColors.length)],
          alpha: 1,
          decay: Math.random() * 0.03 + 0.015,
        });
      }

      // 3. LEFT EDGE SPARKS (Spawns 3 particles per tick)
      for (let i = 0; i < 3; i++) {
        particlesRef.current.push({
          x: offset + (Math.random() - 0.5) * 4,
          y: offset + Math.random() * (height - offset * 2),
          vx: -Math.random() * 2.5 - 0.5, // Float leftwards
          vy: (Math.random() - 0.5) * 3,
          size: Math.random() * 3.5 + 1.2,
          color: sparkColors[Math.floor(Math.random() * sparkColors.length)],
          alpha: 1,
          decay: Math.random() * 0.03 + 0.015,
        });
      }

      // 4. RIGHT EDGE SPARKS (Spawns 3 particles per tick)
      for (let i = 0; i < 3; i++) {
        particlesRef.current.push({
          x: width - offset + (Math.random() - 0.5) * 4,
          y: offset + Math.random() * (height - offset * 2),
          vx: Math.random() * 2.5 + 0.5, // Float rightwards
          vy: (Math.random() - 0.5) * 3,
          size: Math.random() * 3.5 + 1.2,
          color: sparkColors[Math.floor(Math.random() * sparkColors.length)],
          alpha: 1,
          decay: Math.random() * 0.03 + 0.015,
        });
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      spawnBorderSparks();

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
        ctx.shadowBlur = 14;
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

  return (
    <div ref={containerRef} className="relative w-full overflow-visible">
      {/* Real-time Fire Spark Embers Canvas Overlay */}
      <canvas
        ref={canvasRef}
        className="absolute -top-6 -left-6 pointer-events-none z-30 overflow-visible"
      />
      {children}
    </div>
  );
}
