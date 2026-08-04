import { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse position tracker
    const mouse = { x: width / 2, y: height / 2, active: false };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    interface Dot {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      baseOpacity: number;
      angle: number;
      speed: number;
      color: string;
      glowColor: string;
    }

    const dots: Dot[] = [];
    const maxDots = 150;

    // Palette: Deep Sky Blue, Cyan, Electric Blue on Light Sky background
    const colorPalette = [
      { color: 'rgba(2, 132, 199, ', glow: '#0284c7' },   // Deep Sky Blue
      { color: 'rgba(14, 165, 233, ', glow: '#0ea5e9' },  // Sky Blue
      { color: 'rgba(6, 182, 212, ', glow: '#06b6d4' },   // Cyan
      { color: 'rgba(3, 105, 161, ', glow: '#0369a1' },   // Ocean Blue
    ];

    for (let i = 0; i < maxDots; i++) {
      const paletteItem = colorPalette[i % colorPalette.length];
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 0.7 + 0.4;

      dots.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: Math.random() * 3.5 + 1.5,
        baseOpacity: Math.random() * 0.65 + 0.35,
        angle,
        speed,
        color: paletteItem.color,
        glowColor: paletteItem.glow,
      });
    }

    let globalRotationAngle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Light Sky Blue Radial Gradient Background
      const bgGrad = ctx.createRadialGradient(
        width / 2,
        height / 2,
        40,
        width / 2,
        height / 2,
        Math.max(width, height) * 0.95
      );
      bgGrad.addColorStop(0, '#f0f9ff'); // Very bright sky tint center
      bgGrad.addColorStop(0.5, '#e0f2fe'); // Light sky blue
      bgGrad.addColorStop(1, '#bae6fd'); // Soft sky blue edge
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      globalRotationAngle += 0.003;

      // Draw spinning sky-blue ring
      ctx.save();
      ctx.translate(width / 2, height / 2);
      ctx.rotate(globalRotationAngle);
      ctx.beginPath();
      ctx.arc(0, 0, Math.min(width, height) * 0.35, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(2, 132, 199, 0.12)';
      ctx.lineWidth = 2;
      ctx.setLineDash([15, 25]);
      ctx.stroke();
      ctx.restore();

      // Render & Move Dots
      dots.forEach((dot) => {
        dot.angle += 0.006;
        dot.x += dot.vx + Math.cos(dot.angle) * 0.5;
        dot.y += dot.vy + Math.sin(dot.angle) * 0.5;

        // Mouse Repulsion Effect
        if (mouse.active) {
          const dx = dot.x - mouse.x;
          const dy = dot.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const limitDist = 200;
          if (dist < limitDist) {
            const force = (limitDist - dist) / limitDist;
            dot.x += (dx / dist) * force * 2.8;
            dot.y += (dy / dist) * force * 2.8;
          }
        }

        // Screen loop
        if (dot.x < 0) dot.x = width;
        if (dot.x > width) dot.x = 0;
        if (dot.y < 0) dot.y = height;
        if (dot.y > height) dot.y = 0;

        // Draw dot
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fillStyle = `${dot.color}${dot.baseOpacity})`;
        ctx.shadowColor = dot.glowColor;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Interconnecting lines
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            const lineOpacity = (1 - dist / 120) * 0.25;
            ctx.strokeStyle = `rgba(2, 132, 199, ${lineOpacity})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Interactive Mouse Sky Blue Spotlight Overlay
      if (mouse.active) {
        ctx.beginPath();
        const cursorGlow = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          200
        );
        cursorGlow.addColorStop(0, 'rgba(56, 189, 248, 0.35)');
        cursorGlow.addColorStop(0.5, 'rgba(2, 132, 199, 0.15)');
        cursorGlow.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = cursorGlow;
        ctx.arc(mouse.x, mouse.y, 200, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none"
    />
  );
}
