document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('dark-toggle');
    const root = document.documentElement;
  
    if (localStorage.theme === 'dark') {
      root.classList.add('dark');
    }
  
    toggle.addEventListener('click', () => {
      root.classList.toggle('dark');
      localStorage.theme = root.classList.contains('dark') ? 'dark' : 'light';
    });
  });
  