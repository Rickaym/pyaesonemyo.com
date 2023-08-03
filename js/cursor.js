const cursor = document.getElementById("cursor");
let x = 0;
let y = 0;
let mx = 0;
let my = 0;

document.onmousemove = function (e) {
  mx = e.clientX;
  my = e.clientY;
};

function animate() {
  x += (mx - x) * 0.1;
  y += (my - y) * 0.1;

  cursor.style.top = `${y}px`;
  cursor.style.left = `${x}px`;

  requestAnimationFrame(animate);
}
animate();
