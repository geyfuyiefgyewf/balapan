window.addEventListener('load', function() {
  // Когда страница полностью загружена
  // Изменяем значение непрозрачности на 1 для плавного появления
  document.body.style.opacity = 1;
});

function startSlideshow() {
  const images = document.querySelectorAll('.slideshow img');
  let currentIndex = 0;

  // Устанавливаем первое изображение с полной прозрачностью
  images[currentIndex].classList.add('active');

  setInterval(() => {
    // Устанавливаем текущее изображение с нулевой прозрачностью
    images[currentIndex].classList.remove('active');
    // Увеличиваем индекс или переходим на начало, если достигнут конец
    currentIndex = (currentIndex + 1) % images.length;
    // Устанавливаем следующее изображение с полной прозрачностью
    images[currentIndex].classList.add('active');
  }, 3000); // Интервал переключения в миллисекундах (здесь 3 секунды)
}

startSlideshow();
