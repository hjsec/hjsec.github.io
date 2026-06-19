// 创建光晕元素
const glow = document.createElement('div'); glow.id = 'mouse-glow'; document.body.appendChild(glow);
const dot = document.createElement('div'); dot.id = 'mouse-glow-dot'; document.body.appendChild(dot);

let mouseX = -100, mouseY = -100;
let targetX = -100, targetY = -100;
let visible = false;

// 平滑动画
function animate() {
  mouseX += (targetX - mouseX) * 0.12;
  mouseY += (targetY - mouseY) * 0.12;
  glow.style.left = mouseX + 'px';
  glow.style.top = mouseY + 'px';
  dot.style.left = targetX + 'px';
  dot.style.top = targetY + 'px';
  requestAnimationFrame(animate);
}
animate();

// 生成粒子
function spawnParticle(x, y) {
  const particle = document.createElement('div');
  particle.className = 'mouse-particle';
  particle.style.left = x + 'px';
  particle.style.top = y + 'px';
  document.body.appendChild(particle);
  particle.addEventListener('animationend', () => particle.remove());
}

let lastParticleTime = 0;
document.addEventListener('mousemove', (e) => {
  targetX = e.clientX; targetY = e.clientY;
  if (!visible) { visible = true; glow.style.opacity = '1'; dot.style.opacity = '1'; }
  // 每 30ms 生成一个粒子
  const now = Date.now();
  if (now - lastParticleTime > 30) {
    spawnParticle(e.clientX, e.clientY);
    lastParticleTime = now;
  }
});

document.addEventListener('mouseleave', () => { visible = false; glow.style.opacity = '0'; dot.style.opacity = '0'; });
document.addEventListener('mouseenter', () => {
  if (!visible) { visible = true; glow.style.opacity = '1'; dot.style.opacity = '1'; mouseX = targetX; mouseY = targetY; }
});
