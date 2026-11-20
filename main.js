const burger = document.getElementById('burger');
const nav = document.getElementById('nav');


burger?.addEventListener("click" , () => {
    nav.classList.toggle("open")
});

nav?.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => nav.classList.remove("open"))
});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              

const subscriptionForm = document.getElementById("subscriptionForm")
subscriptionForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = subscriptionForm.querySelector("input").value.trim();
     if (email) {

      showToast(`Thank you! Email ${email} registered 💛`);
      subscriptionForm.reset();
    }
});

const footerForm = document.getElementById('footerForm');
footerForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = footerForm.querySelector('input').value.trim();
  if (email) {
    showToast(`Registration confirmed for ${email} 💛`);
    footerForm.reset();
  }
});

function showToast(message) {
  const toast = document.createElement('div');
  toast.textContent = message;
  Object.assign(toast.style, {
    position: 'fixed',
    bottom: '24px',
    left: '50%',
    transform: 'translateX(-50%) translateY(100px)',
    background: '#1F1F1F',
    color: '#fff',
    padding: '14px 26px',
    borderRadius: '999px',
    fontSize: '14px',
    fontFamily: 'Poppins, sans-serif',
    zIndex: 9999,
    opacity: '0',
    transition: 'all .4s ease',
    boxShadow: '0 10px 30px rgba(0,0,0,.25)'
  });
  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.style.transform = 'translateX(-50%) translateY(0)';
    toast.style.opacity = '1';
  });

  setTimeout(() => {
    toast.style.transform = 'translateX(-50%) translateY(100px)';
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.card, .reviews, .benefits li').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity .8s ease, transform .8s ease';
  observer.observe(el);
});


