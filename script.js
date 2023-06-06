function fadeInElements() {
  const elements = document.querySelectorAll('.fade-in');

  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementPosition < windowHeight) {
      element.classList.add('visible');
    } else {
      element.classList.remove('visible');
    }
  });
}

function handleScroll() {
  fadeInElements();
}

document.addEventListener('DOMContentLoaded', handleScroll);
window.addEventListener('scroll', handleScroll);
