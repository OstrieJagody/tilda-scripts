/**
 * Скрипты для страницы Каталога (pages/catalog.js)
 */

function addTestBanner() {
  if (document.getElementById('catalog-test-banner')) return;

  const banner = document.createElement('div');
  banner.id = 'catalog-test-banner';
  banner.innerHTML = `
    <div style="
      background-color: #ecfdf5;
      border: 3px solid #10b981;
      border-radius: 12px;
      padding: 20px 24px;
      margin: 25px auto;
      max-width: 1160px;
      text-align: center;
      box-shadow: 0 10px 25px -5px rgba(16, 185, 129, 0.2);
      box-sizing: border-box;
    ">
      <span style="
        font-size: 24px;
        font-weight: 800;
        color: #065f46;
        font-family: 'TildaSans', Arial, sans-serif;
        display: inline-flex;
        align-items: center;
        gap: 10px;
      ">
        <span>✅</span>
        <strong>Тест пройден</strong>
      </span>
    </div>
  `;

  // Вставляем прямо перед блоком каталога или в начало страницы
  const catalogBlock = document.getElementById('rec3509034201') || document.querySelector('.t-records');
  if (catalogBlock && catalogBlock.parentNode) {
    catalogBlock.parentNode.insertBefore(banner, catalogBlock);
  } else {
    document.body.prepend(banner);
  }

  console.log('✅ Блок "Тест пройден" успешно добавлен на страницу!');
}

function initCatalog() {
  addTestBanner();

  // Принудительное обновление размеров и lazyload для Tilda
  setTimeout(() => {
    window.dispatchEvent(new Event('resize'));
    if (typeof t_lazyload_update === 'function') {
      t_lazyload_update();
    }
  }, 150);
}

// Запуск при готовности DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCatalog);
} else {
  initCatalog();
}
