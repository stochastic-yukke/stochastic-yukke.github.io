document.addEventListener('DOMContentLoaded', () => {
  const isTouchDevice = window.matchMedia("(any-hover: none)").matches || 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  if (isTouchDevice) return;

  const cursor = document.getElementById('cursor');
  const canvas = document.getElementById('cursor-canvas');
  if (!cursor || !canvas) return;

  const ctx = canvas.getContext('2d');

  const savedX = localStorage.getItem('cursorX');
  const savedY = localStorage.getItem('cursorY');

  let mouse = {
    x: savedX ? parseFloat(savedX) : -100,
    y: savedY ? parseFloat(savedY) : -100
  };
  let particles = [];
  let pathPoints = []; // 座標の履歴を保持
  let moveTimeout;     // マウスの停止を検知
  let isDrawing = false;

  if (savedX && savedY) {
    const initialSize = 26;
    cursor.style.transform = `translate(${mouse.x - initialSize/2}px, ${mouse.y - initialSize/2}px)`;
  }

  // Canvasをresize
  function resizeCanvas() {
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
    ctx.scale(dpr, dpr);
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  document.addEventListener('mouseover', (e) => {
    const target = e.target.closest('a, button, .genre-summary, summary');
    if (target) {
      cursor.classList.add('is-hover');
    } else {
      cursor.classList.remove('is-hover');
    }
  });

  // マウスが移動したらparticeを生成
  window.addEventListener('mousemove', (e) => {
    if (document.body.classList.contains('ud-mode')) return;

    mouse.x = e.clientX;
    mouse.y = e.clientY;

    localStorage.setItem('cursorX', mouse.x);
    localStorage.setItem('cursorY', mouse.y);

    const isHover = cursor.classList.contains('is-hover');
    const size = isHover ? 30 : 24;
    const offset = size / 2;

    cursor.style.transform = `translate(${mouse.x - offset}px, ${mouse.y - offset}px)`;

    // 座標履歴のリセット
    clearTimeout(moveTimeout);
    moveTimeout = setTimeout(() => { pathPoints = []; }, 100);

    if (!isHover) {
      pathPoints.push({ x: mouse.x, y: mouse.y });
      // Bézier曲線を利用した
      if (pathPoints.length === 3) {
        const xc1 = (pathPoints[0].x + pathPoints[1].x) / 2;
        const yc1 = (pathPoints[0].y + pathPoints[1].y) / 2;
        const xc2 = (pathPoints[1].x + pathPoints[2].x) / 2;
        const yc2 = (pathPoints[1].y + pathPoints[2].y) / 2;
        // 曲線の長さから生成する粒子数を決定
        const dist = Math.hypot(xc1 - pathPoints[1].x, yc1 - pathPoints[1].y) + Math.hypot(pathPoints[1].x - xc2, pathPoints[1].y - yc2);
        const steps = Math.max(1, dist);
        for (let i = 0; i <= steps; i++) {
          const t = i / steps;
          const px = (1 - t) * (1 - t) * xc1 + 2 * (1 - t) * t * pathPoints[1].x + t * t * xc2;
          const py = (1 - t) * (1 - t) * yc1 + 2 * (1 - t) * t * pathPoints[1].y + t * t * yc2;
          particles.push(new Particle(px, py));
        }
        // 古い点を破棄，更新
        pathPoints.shift();
      }
    } else {
      pathPoints = [];
    }

    if (!isDrawing && particles.length > 0) {
      isDrawing = true;
      draw();
    }
  });

  // particleの配列のclass
  class Particle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.size = 12;
      this.life = 1;
      this.decay = 0.025;
    }
    update() {
      this.life -= this.decay;
      this.size *= 0.96;
    }
    draw(context) {
      context.beginPath();
      context.arc(this.x, this.y, Math.max(0, this.size), 0, Math.PI * 2);
      context.fillStyle = `rgba(255, 255, 255, ${this.life})`;
      context.fill();
    }
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width / (window.devicePixelRatio || 1), canvas.height / (window.devicePixelRatio || 1));
    for (let i = 0; i < particles.length; i++) {
      let p = particles[i];
      p.update(); p.draw(ctx);
      if (p.life <= 0 || p.size <= 0.1) {
        particles.splice(i, 1); i--;
      }
    }
    if (particles.length > 0) {
      requestAnimationFrame(draw);
    } else {
      isDrawing = false;
    }
  }
});
