// Theme toggle (meets JS interaction requirement)
const toggleBtn = document.querySelector('#theme-toggle');
const root = document.documentElement;

function setTheme(isDark){
  if(isDark){
    root.setAttribute('data-theme','dark');
    toggleBtn.setAttribute('aria-pressed','true');
    toggleBtn.textContent = '☀️ Theme';
  } else {
    root.removeAttribute('data-theme');
    toggleBtn.setAttribute('aria-pressed','false');
    toggleBtn.textContent = '🌙 Theme';
  }
}

// Persist preference in localStorage
const saved = localStorage.getItem('prefers-dark') === 'true';
setTheme(saved);

toggleBtn.addEventListener('click',()=>{
  const nowDark = !root.hasAttribute('data-theme');
  setTheme(nowDark);
  localStorage.setItem('prefers-dark', String(nowDark));
});

// Show/Hide content notes (progressive disclosure)
const toggles = document.querySelectorAll('.toggle');
toggles.forEach(btn=>{
  btn.addEventListener('click',()=>{
    const id = btn.getAttribute('data-target');
    const box = document.getElementById(id);
    const isHidden = box.hasAttribute('hidden');
    if(isHidden){
      box.removeAttribute('hidden');
      btn.textContent = 'Hide content notes';
    }else{
      box.setAttribute('hidden','');
      btn.textContent = 'Show content notes';
    }
  });
});