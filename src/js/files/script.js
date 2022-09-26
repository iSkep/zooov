// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const descButtons = document.querySelectorAll('[data-popup="#popup-desc"]');
const descPopup = document.querySelector('#popup-desc');
const descMainImage = descPopup.querySelector('.image-preview__main-img');
const orderButtons = document.querySelectorAll('[data-popup="#popup-order"]');
const orderPopup = document.querySelector('#popup-order');
const orderThanksPopup = document.querySelector('#popup-order-thanks');

document.addEventListener("DOMContentLoaded", () => {

    // При открытии описания товара формируем контент для окон описания и заказа
    descButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            loadDescPopup(e.target.closest('.slider-rations__card'));
            loadOrderPopup(e.target.closest('.slider-rations__card'));
            calcPrice();
        });
    });

    // Формируем контент окна заказа
    orderButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            if (e.target.closest('#popup-desc')) {
                return;
            } else {
                loadOrderPopup(e.target.closest('.slider-rations__card'));
                calcPrice();
            }
        });
    });

    // При изменении селекта объема пересчитываем цену
    document.addEventListener("selectCallback", (e) => {
        const currentSelect = e.detail.select;
        if (currentSelect.closest('#popup-order')) {
            calcPrice();
        }
    });

    // Меняем главное изображение попап-описания при клике на превью
    descPopup.addEventListener('click', (e) => {
        if (e.target.closest('.image-preview__button')) {
            toggleImage(e.target.closest('.image-preview__button'));
        }
    })

});

// Переключаем главное изображение попапа по нажатию на превью
function toggleImage(selector) {
    if (document.querySelector('.image-preview__button_active')) {
        document.querySelector('.image-preview__button_active').classList.remove('image-preview__button_active');
    }
    selector.classList.add('image-preview__button_active');
    descMainImage.src = selector.querySelector('.image-preview__img').src;
    descMainImage.alt = selector.querySelector('.image-preview__img').alt;
}

// Заполняем попап с описанием для выбранного рациона
function loadDescPopup(selector) {
    let data = {
        name: `${selector.querySelector('.slider-rations__title-button').textContent}`,
        text: `${selector.querySelector('.slider-rations__desc').textContent}`,
        subtitle: `${selector.querySelector('.slider-rations__subtitle').textContent}`,
        weight: `${selector.querySelector('.slider-rations__weight').textContent}`,
        mainImageAlt: `${selector.querySelector('.slider-rations__image img').alt}`,
        images: [`${selector.querySelector('.slider-rations__image img').src}`, `img/popup/desc-popup_image-1.jpg`, `img/popup/desc-popup_image-2.jpg`, `img/popup/desc-popup_image-3.jpg`]
    }

    let imagePreviewList = ``;

    data.images.forEach((imageSrc, i) => {
        let alt = 'Ингредиенты';

        if (i == 0) {
            alt = data.mainImageAlt
        }

        imagePreviewList += `
        <li class="image-preview__item">
            <button class="image-preview__button" aria-label="Показать изображение №${++i}">
                <img src="${imageSrc}" alt="${alt}" class="image-preview__img" aria-hidden="true">
            </button>
        </li>
        `
    });

    descPopup.querySelector('.image-preview__list').innerHTML = imagePreviewList;
    descPopup.querySelector('.image-preview__list').firstElementChild.querySelector('.image-preview__button').classList.add('image-preview__button_active');
    descPopup.querySelector('.image-preview__main-img').src = data.images[0];
    descPopup.querySelector('.image-preview__main-img').alt = data.mainImageAlt;
    descPopup.querySelector('.desc-popup__title').textContent = data.name;
    descPopup.querySelector('.desc-popup__text').textContent = data.text;
    descPopup.querySelector('.desc-popup__subtitle').textContent = data.subtitle;
    descPopup.querySelector('.desc-popup__weight').textContent = data.weight;
}

// Заполняет попап заказа для выбранного рациона
function loadOrderPopup(selector) {
    let data = {
        name: `${selector.querySelector('.slider-rations__title-button').textContent}`,
        subtitle: `${selector.querySelector('.slider-rations__subtitle').textContent}`,
        mainImageSrc: `${selector.querySelector('.slider-rations__image img').src}`,
        mainImageAlt: `${selector.querySelector('.slider-rations__image img').alt}`
    }

    orderThanksPopup.querySelector('.order-thanks__img img').src = data.mainImageSrc;
    orderThanksPopup.querySelector('.order-thanks__img img').alt = data.mainImageAlt;

    orderPopup.querySelector('.order-popup__img img').src = data.mainImageSrc;
    orderPopup.querySelector('.order-popup__img img').alt = data.mainImageAlt;
    orderPopup.querySelector('.order-popup__title').textContent = data.name;
    orderPopup.querySelector('.order-popup__subtitle').textContent = data.subtitle;
}

// Калькулятор цены
export function calcPrice() {
	let price = 0;
    const volumeSelectror = document.querySelector('#volume-select');
	const volume = +volumeSelectror.value;
    const quantitySelector = document.querySelector('[data-quantity-value]');
    const quantity = +quantitySelector.value;
    const result = document.querySelector('.order-popup__price');
    const ratio = 1.2;

	price = (volume * ratio) * quantity;
	result.textContent = `${price}₽`;
}