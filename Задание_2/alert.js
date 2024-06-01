const btn = document.getElementById('btn');

//const coords = document.getElementById('coords');


btn.addEventListener('click', function () {
    const srcWidth = window.screen.width;
    const srcHeight = window.screen.height;

    alert(`Ширина экрана: ${srcWidth}\n Высота Экрана: ${srcHeight}`);


});