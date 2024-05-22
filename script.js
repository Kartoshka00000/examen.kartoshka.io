function toggleTheme() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
}

// Проверяем, есть ли уже сохраненная тема в локальном хранилище
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme'); // Добавляем класс для темной темы
}

// Обработчик события изменения темы
function toggleTheme() {
    document.body.classList.toggle('dark-theme'); // Переключаем класс для темной темы
    // Сохраняем выбранную тему в локальное хранилище
    localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
}

// Привязываем обработчик к кнопке переключения темы
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);


