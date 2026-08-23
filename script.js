const form = document.getElementById('orderForm');
const success = document.getElementById('formSuccess');
const year = document.getElementById('year');

if (year) year.textContent = new Date().getFullYear();

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  success.hidden = false;
  form.reset();
  success.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.focus({ preventScroll: true });
  });
});
