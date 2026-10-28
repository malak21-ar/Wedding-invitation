const weddingDate = new Date('2026-12-12T16:00:00+01:00').getTime();
function updateCountdown() {
  const difference = Math.max(0, weddingDate - Date.now());
  const totalSeconds = Math.floor(difference / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  document.getElementById('days').textContent = String(days).padStart(2, '0');
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}
updateCountdown();
setInterval(updateCountdown, 1000);

function ajusterDentelle() {
  const r = document.querySelector('.rabat');
  if (!r) return;
  const W = r.offsetWidth, H = r.offsetHeight;
  document.querySelector('.accueil').style.setProperty('--len', Math.hypot(W / 2, H) + 'px');
  document.querySelector('.accueil').style.setProperty('--ang', Math.atan2(H, W / 2) + 'rad');
}
ajusterDentelle();
window.addEventListener('resize', ajusterDentelle);
window.addEventListener('load', ajusterDentelle);
