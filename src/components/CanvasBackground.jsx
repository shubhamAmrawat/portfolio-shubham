import { useEffect, useRef } from "react";

export default function CanvasBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let particles = [];
    const mouse = { x: null, y: null, radius: 150 };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    class Particle {
      constructor(x, y, dx, dy, size, color) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.size = size;
        this.color = color;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = Math.random() * 30 + 1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        // Bounce off edges
        if (this.x > canvas.width || this.x < 0) {
          this.dx = -this.dx;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.dy = -this.dy;
        }

        // Mouse interaction
        let dxMouse = mouse.x - this.x;
        let dyMouse = mouse.y - this.y;
        let distanceMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (distanceMouse < mouse.radius) {
          // Attract towards mouse or push away? Pushing away slightly feels more organic
          const forceDirectionX = dxMouse / distanceMouse;
          const forceDirectionY = dyMouse / distanceMouse;
          
          // Calculate force based on proximity
          const maxDistance = mouse.radius;
          const force = (maxDistance - distanceMouse) / maxDistance;
          
          // Apply movement
          this.x -= forceDirectionX * force * 1.5;
          this.y -= forceDirectionY * force * 1.5;
        } else {
          // Slowly return to normal drift
          this.x += this.dx;
          this.y += this.dy;
        }

        this.draw();
      }
    }

    const initParticles = () => {
      particles = [];
      const numberOfParticles = Math.min(Math.floor((canvas.width * canvas.height) / 12000), 100);
      
      const colors = [
        "rgba(99, 102, 241, 0.4)", // Indigo
        "rgba(6, 182, 212, 0.4)",  // Cyan
        "rgba(16, 185, 129, 0.3)", // Emerald
      ];

      for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 2 + 1;
        const x = Math.random() * (canvas.width - size * 2) + size;
        const y = Math.random() * (canvas.height - size * 2) + size;
        const dx = (Math.random() - 0.5) * 0.4;
        const dy = (Math.random() - 0.5) * 0.4;
        const color = colors[Math.floor(Math.random() * colors.length)];

        particles.push(new Particle(x, y, dx, dy, size, color));
      }
    };

    const drawLines = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            // Draw line with opacity based on distance
            const opacity = 1 - distance / 120;
            ctx.strokeStyle = `rgba(99, 102, 241, ${opacity * 0.12})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update particles
      particles.forEach((p) => p.update());
      
      // Draw network lines
      drawLines();
      
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resizeCanvas);
    
    // Track mouse
    const handleMouseMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Init
    resizeCanvas();
    animate();

    // Clean up
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
