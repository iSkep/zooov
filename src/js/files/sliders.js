/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Pagination, Autoplay } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
// import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
    // Перечень слайдеров
    // Проверяем, есть ли слайдер на стронице
    if (document.querySelector('.slider-about__slider')) { // Указываем скласс нужного слайдера
        // Создаем слайдер
        new Swiper('.slider-about__slider', { // Указываем скласс нужного слайдера
            // Подключаем модули слайдера
            // для конкретного случая
            modules: [Pagination, Autoplay],
            speed: 800,
            autoHeight: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: true,
            },
            
            //touchRatio: 0,
            //simulateTouch: false,

            //preloadImages: false,
            //lazy: true,

            // Пагинация
            pagination: {
                el: '.slider-about__pagination',
                clickable: true,
            },

            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
        
                600: {
                    slidesPerView: 2,
                    autoplay: false,
                },
            }
        });
    }

    if (document.querySelector('.slider-rations')) { // Указываем скласс нужного слайдера
        // Создаем слайдер
        new Swiper('.slider-rations', { // Указываем скласс нужного слайдера
            // Подключаем модули слайдера
            // для конкретного случая
            modules: [Pagination, Autoplay],
            speed: 800,
            autoHeight: true,
            slidesPerView: 'auto',
            spaceBetween: 24,
            loopedSlides: true,
            autoplay: {
                delay: 7000,
                disableOnInteraction: true,
            },
            
            //preloadImages: false,
            //lazy: true,

            // Пагинация
            pagination: {
                el: '.slider-rations__pagination',
                clickable: true,
            },
            breakpoints: {
                768: {
                    autoplay: false,
                },
            },
        });
    }
}

window.addEventListener("load", function (e) {
    // Запуск инициализации слайдеров
    initSliders();

    // Добавление нижнего отступа при наличии пагинации
    // (сделано через js на случай добавления доп. слайдов)
    const sliderAboutPagination = document.querySelector(".slider-about__pagination");
    const sliderAboutWrapper = document.querySelector(".slider-about__wrapper");

    const sliderRationsPagination = document.querySelector(".slider-rations__pagination");
    const sliderRationsWrapper = document.querySelector(".slider-rations__wrapper");

    function addPaginationPadding(paginationSelector, sliderWrapper) {
        if (!paginationSelector.classList.contains('swiper-pagination-lock')) {
            sliderWrapper.style.paddingBottom="40px";
        }
    }

    addPaginationPadding(sliderAboutPagination, sliderAboutWrapper);
    addPaginationPadding(sliderRationsPagination, sliderRationsWrapper);
});