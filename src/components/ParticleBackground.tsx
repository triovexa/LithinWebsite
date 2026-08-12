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

    // Mouse tracker
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
      color: string;
      pulseSpeed: number;
      pulseOffset: number;
    }

    const dots: Dot[] = [];
    const maxDots = 140; // Rich particle density across the screen

    for (let i = 0; i < maxDots; i++) {
      dots.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        size: Math.random() * 2.5 + 1.0,
        baseOpacity: Math.random() * 0.5 + 0.35,
        color: Math.random() > 0.3 ? 'rgba(16, 185, 129, ' : 'rgba(52, 211, 153, ',
        pulseSpeed: Math.random() * 0.02 + 0.008,
        pulseOffset: Math.random() * Math.PI * 2,
      });
    }

    // Helper function to fetch bounding rectangles of all images, videos, and media containers
    const getExcludedMediaRects = (): DOMRect[] => {
      const elements = document.querySelectorAll<HTMLElement>(
        'img, video, [data-no-particles], .no-particles'
      );
      const rects: DOMRect[] = [];
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
          rects.push(rect);
        }
      });
      return rects;
    };

    const isPointInExcludedMedia = (x: number, y: number, rects: DOMRect[]): boolean => {
      const padding = 4;
      for (let i = 0; i < rects.length; i++) {
        const r = rects[i];
        if (
          x >= r.left - padding &&
          x <= r.right + padding &&
          y >= r.top - padding &&
          y <= r.bottom + padding
        ) {
          return true;
        }
      }
      return false;
    };

    const isLineIntersectingExcludedMedia = (
      x1: number,
      y1: number,
      x2: number,
      y2: number,
      rects: DOMRect[]
    ): boolean => {
      const padding = 4;
      for (let i = 0; i < rects.length; i++) {
        const r = rects[i];
        const left = r.left - padding;
        const right = r.right + padding;
        const top = r.top - padding;
        const bottom = r.bottom + padding;

        const p1Inside = x1 >= left && x1 <= right && y1 >= top && y1 <= bottom;
        const p2Inside = x2 >= left && x2 <= right && y2 >= top && y2 <= bottom;
        if (p1Inside || p2Inside) return true;

        const midX = (x1 + x2) / 2;
        const midY = (y1 + y2) / 2;
        if (midX >= left && midX <= right && midY >= top && midY <= bottom) return true;

        const q1X = (x1 + midX) / 2;
        const q1Y = (y1 + midY) / 2;
        if (q1X >= left && q1X <= right && q1Y >= top && q1Y <= bottom) return true;

        const q2X = (midX + x2) / 2;
        const q2Y = (midY + y2) / 2;
        if (q2X >= left && q2X <= right && q2Y >= top && q2Y <= bottom) return true;
      }
      return false;
    };

    let time = 0;
    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // Get all current image & video bounding rectangles on screen
      const mediaRects = getExcludedMediaRects();

      // Save context state & apply evenodd clip to exclude all image/video areas completely
      ctx.save();
      ctx.beginPath();
      ctx.rect(0, 0, width, height);
      mediaRects.forEach((r) => {
        ctx.rect(r.left - 2, r.top - 2, r.width + 4, r.height + 4);
      });
      ctx.clip('evenodd');

      // Draw subtle connecting lines between nearby green dots (Constellation logistics network effect)
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxLinkDist = 120;

          if (
            dist < maxLinkDist &&
            !isLineIntersectingExcludedMedia(dots[i].x, dots[i].y, dots[j].x, dots[j].y, mediaRects)
          ) {
            const lineOpacity = (1 - dist / maxLinkDist) * 0.22;
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `rgba(16, 185, 129, ${lineOpacity})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw glowing emerald particles
      dots.forEach((dot) => {
        // Update positions
        dot.x += dot.vx;
        dot.y += dot.vy;

        // Interactive mouse repulsion
        if (mouse.active) {
          const dx = dot.x - mouse.x;
          const dy = dot.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const limitDist = 150;
          if (dist < limitDist) {
            const force = (limitDist - dist) / limitDist;
            dot.x += (dx / dist) * force * 1.8;
            dot.y += (dy / dist) * force * 1.8;
          }
        }

        // Screen wrap-around
        if (dot.x < 0) dot.x = width;
        if (dot.x > width) dot.x = 0;
        if (dot.y < 0) dot.y = height;
        if (dot.y > height) dot.y = 0;

        // Smooth pulse opacity
        const opacity = Math.min(
          1,
          Math.max(0.25, dot.baseOpacity + Math.sin(time * dot.pulseSpeed * 10 + dot.pulseOffset) * 0.3)
        );

        // Draw green particle with glow if not over any image or video
        if (!isPointInExcludedMedia(dot.x, dot.y, mediaRects)) {
          ctx.beginPath();
          ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
          ctx.fillStyle = `${dot.color}${opacity})`;
          ctx.shadowBlur = 8;
          ctx.shadowColor = 'rgba(16, 185, 129, 0.8)';
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      // Interactive cursor glow overlay
      if (mouse.active) {
        ctx.beginPath();
        const cursorGlow = ctx.createRadialGradient(
          mouse.x, mouse.y, 0,
          mouse.x, mouse.y, 140
        );
        cursorGlow.addColorStop(0, 'rgba(16, 185, 129, 0.18)');
        cursorGlow.addColorStop(0.5, 'rgba(16, 185, 129, 0.05)');
        cursorGlow.addColorStop(1, 'rgba(16, 185, 129, 0)');
        ctx.fillStyle = cursorGlow;
        ctx.arc(mouse.x, mouse.y, 140, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();

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

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full z-20 pointer-events-none" />;
}
