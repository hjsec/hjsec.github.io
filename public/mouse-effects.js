const glow = document.createElement('div');
glow.id = 'mouse-glow';
document.body.appendChild(glow);

let mouseX = -100, mouseY = -100;
let targetX = -100, targetY = -100;
let visible = false;

function animate() {
  mouseX += (targetX - mouseX) * 0.1;
  mouseY += (targetY - mouseY) * 0.1;
  glow.style.left = mouseX + 'px';
  glow.style.top = mouseY + 'px';
  requestAnimationFrame(animate);
}
animate();

document.addEventListener('mousemove', (e) => {
  targetX = e.clientX;
  targetY = e.clientY;
  if (!visible) {
    visible = true;
    glow.style.opacity = '1';
  }
});

document.addEventListener('mouseleave', () => {
  visible = false;
  glow.style.opacity = '0';
});

document.addEventListener('mouseenter', () => {
  if (!visible) {
    visible = true;
    glow.style.opacity = '1';
    mouseX = targetX;
    mouseY = targetY;
    glow.style.left = mouseX + 'px';
    glow.style.top = mouseY + 'px';
  }
});
