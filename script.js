document.addEventListener('DOMContentLoaded', function() {
    // Получаем ссылки на модальное окно и кнопку открытия модального окна
    var modal = document.getElementById('modal');
    var registerButton = document.getElementById('registerButton');
    var closeButton = document.getElementsByClassName('close')[0];

    // Открываем модальное окно при клике на кнопку
    registerButton.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    // Закрываем модальное окно при клике на кнопку "закрыть" или щелчке вне окна
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
