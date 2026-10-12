/**
 * Скрипты для страницы Каталога (pages/catalog.js)
 */

function initCatalog() {
  // Гарантированно удаляем прелоадер (серые пустые прямоугольники) после загрузки
  const preloader = document.querySelector('#rec3509034201 .js-store-grid-cont-preloader');
  if (preloader) {
    preloader.remove();
  }

  // Обновление размеров и lazyload для картинок товаров в Tilda
  setTimeout(() => {
    window.dispatchEvent(new Event('resize'));
    if (typeof t_lazyload_update === 'function') {
      t_lazyload_update();
    }
  }, 100);
}

// Запуск при готовности DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCatalog);
} else {
  initCatalog();
}
