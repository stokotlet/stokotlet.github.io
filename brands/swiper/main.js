//new Swiper('.swiper-container');
// JS файл
new Swiper('.swiper-container', {
   pagination: {
   el: '.swiper-pagination',
   clickable: true,
   },
    slidesPerView: "auto",
    breakpoints: {
        768: {
            slidesPerView: 11,
        },

    }
})

let swiperCont = document.querySelector('.swiper-container')
let showAllBut = document.querySelector('.show-all__button')
showAllBut.addEventListener('click', function () {
    swiperCont.classList.toggle('brands-window-resizer');
    if (showAllBut.textContent === 'Показать все'){
        showAllBut.textContent = 'Скрыть';
    } else{
        showAllBut.textContent = 'Показать все'
    }
    showAllBut.classList.toggle('show-all__button--arrows-up');
})
