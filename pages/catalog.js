/**
 * Скрипты для страницы Каталога (pages/catalog.js)
 */

document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 Скрипты страницы каталога успешно загружены!');

  // Принудительное обновление размеров и lazyload для блока #rec3509034201
  const catalogBlock = document.getElementById('rec3509034201');
  if (catalogBlock) {
    // Небольшая задержка, чтобы стили успели примениться
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
      if (typeof t_lazyload_update === 'function') {
        t_lazyload_update();
      }
    }, 150);
  }
});
