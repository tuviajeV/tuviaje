
document.addEventListener("DOMContentLoaded", function() {
    alert("El script está conectado correctamente.");
});

//let currentIndex = 0;
//const slider = document.querySelector('.slider');
//const totalCards = slider.children.length;
//const maxIndex = totalCards - 3; // Mostrar 3 tarjetas a la vez

//function moveSlider(direction) {
    //currentIndex += direction;
   // if (currentIndex < 0) {
   //     currentIndex = maxIndex;
   // } else if (currentIndex > maxIndex) {
   //     currentIndex = 0;
   // }
   // const slideWidth = slider.children[0].offsetWidth;
   // slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
//}
//
// Movimiento automático cada 3 segundos
//setInterval(() => {
 //   moveSlider(1); // Mueve el slider a la derecha
//}, 3000);

// Eventos click para mover el slider manualmente
document.querySelector('.prev').addEventListener('click', () => moveSlider(-1));
document.querySelector('.next').addEventListener('click', () => moveSlider(1));
document.addEventListener("DOMContentLoaded", function() {
    let lastScrollTop = 0;
    const header = document.querySelector('.header-container');

    if (header) {
        window.addEventListener('scroll', function() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop) {
                // Ocultar header al bajar
                header.style.top = '-80px'; // Ajusta según el tamaño del header
            } else {
                // Mostrar header al subir
                header.style.top = '0';
            }

            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Evita valores negativos en el scroll
        });
    }
});


