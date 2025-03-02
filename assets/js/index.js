const scrollHeader = () => {
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header-background");
        if (window.scrollY > window.innerHeight) { 
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });    
}

const swiperMain = () => {
    var swiper = new Swiper(".mySwiper-main", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
    });
}

const modalMain = () => {
    const feedbackEl = document.querySelector('.feedback-btn');
    const overlayEl = document.querySelector('.overlay');
    const closeBtn = overlayEl.querySelector('.lines');
    const form = document.getElementById('feedback-form');
    const feedbackSuccess = document.querySelector('.feedback-success');
    const closeSuccessBtn = feedbackSuccess.querySelector('.close-btn');
    
    if (!feedbackEl || !overlayEl || !closeBtn || !form || !feedbackSuccess || !closeSuccessBtn) return false;

    // Открытие модалки
    feedbackEl.addEventListener('click', () => {
        overlayEl.classList.add('active');
        document.body.style.overflow = 'hidden'; // Блокируем прокрутку на фоне
    });

    // Закрытие модалки при клике на крестик
    closeBtn.addEventListener('click', () => {
        overlayEl.classList.remove('active');
        document.body.style.overflow = ''; // Восстанавливаем прокрутку
    });

    // Закрытие модалки при клике вне формы (по overlay)
    overlayEl.addEventListener('click', (e) => {
        if (e.target === overlayEl) {
            overlayEl.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Маска для телефона (начинается с +7)
    const phoneInput = document.getElementById('phone');
    phoneInput.addEventListener('input', () => {
        let value = phoneInput.value.replace(/\D/g, ''); // Убираем все нечисловые символы
        if (value[0] !== '7') {
            value = '7' + value; // Если номер не начинается с 7, добавляем 7 в начало
        }
        if (value.length > 11) {
            value = value.slice(0, 11); // Ограничиваем длину номера
        }
        phoneInput.value = '+' + value.slice(0, 1) + ' (' + value.slice(1, 4) + ') ' + value.slice(4, 7) + '-' + value.slice(7, 9) + '-' + value.slice(9, 11);
    });

    // Валидация формы перед отправкой
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name');
        const phone = document.getElementById('phone');
        const feedback = document.getElementById('feedback');

        let isValid = true;

        // Проверка на пустые поля
        if (!name.value.trim()) {
            isValid = false;
            alert('Пожалуйста, заполните поле "ИМЯ"');
        }
        if (!phone.value.trim()) {
            isValid = false;
            alert('Пожалуйста, заполните поле "ТЕЛЕФОН"');
        }
        if (!feedback.value.trim()) {
            isValid = false;
            alert('Пожалуйста, заполните поле "ОТЗЫВ"');
        }

        // Если все поля валидны, показываем сообщение о успешной отправке
        if (isValid) {
            form.style.display = 'none'; // Скрываем форму
            feedbackSuccess.style.display = 'flex'; // Показываем сообщение
        }
    });

    // Закрытие модалки после отправки
    closeSuccessBtn.addEventListener('click', () => {
        overlayEl.classList.remove('active');
        document.body.style.overflow = ''; // Восстанавливаем прокрутку
    });
};

const scrollManufacturers = () => {
    const wrapper = document.querySelector('.manufacturers-services__wrapper');

    wrapper.addEventListener('wheel', function(e) {
        if (e.deltaY !== 0) {
            e.preventDefault();  
            wrapper.scrollLeft += e.deltaY; 
        }
    });

}

// const burgerMenu = () => {
//     const burgerOpen = document.querySelector('.header-burger');
//     if (!burgerOpen) return false;

//     const burgerMenu = document.querySelector('.burger-menu');
//     if (!burgerMenu) return false;

//     burgerOpen.addEventListener("click", () => {
//         const isActive = burgerMenu.classList.contains('active');
        
//         // Если меню открыто
//         if (isActive) {
//             burgerMenu.classList.remove('active'); 
//             document.body.style.overflow = ''; 
//         } else {
//             burgerMenu.classList.add('active'); 
//             document.body.style.overflow = 'hidden'; 
//         }
//     });
// };

const burgerMenu = () => {
    const burgerOpen = document.querySelector('.header-burger');
    const burgerMenu = document.querySelector('.burger-menu');
    if (!burgerOpen || !burgerMenu) return false;

    burgerOpen.addEventListener("click", () => {
        const isActive = burgerMenu.classList.contains('active');

        // Переключаем класс active для бургер-меню и иконки
        burgerMenu.classList.toggle('active');
        burgerOpen.classList.toggle('active'); // Меняем иконку бургера

        // Управление прокруткой body
        if (isActive) {
            document.body.style.overflow = '';
        } else {
            document.body.style.overflow = 'hidden';
        }
    });
}

const init = () => {
    swiperMain()
    scrollHeader()
    modalMain()
    scrollManufacturers()
    burgerMenu()
}

document.addEventListener("DOMContentLoaded", init)