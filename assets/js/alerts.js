document.addEventListener('DOMContentLoaded', () => {
  const closeButtons = document.querySelectorAll('.close');

  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const alert = button.parentElement;
      alert.style.display = 'none';
    });
  });
});
