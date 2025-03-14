const scrollHeader = () => {
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header-background");
        if (window.scrollY > window.innerHeight/2) { 
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

    feedbackEl.addEventListener('click', () => {
        overlayEl.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    closeBtn.addEventListener('click', () => {
        overlayEl.classList.remove('active');
        document.body.style.overflow = ''; 
    });

    overlayEl.addEventListener('click', (e) => {
        if (e.target === overlayEl) {
            overlayEl.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    const phoneInput = document.getElementById('phone');
    phoneInput.addEventListener('input', () => {
        let value = phoneInput.value.replace(/\D/g, ''); 
        if (value[0] !== '7') {
            value = '7' + value; 
        }
        if (value.length > 11) {
            value = value.slice(0, 11); 
        }
        phoneInput.value = '+' + value.slice(0, 1) + ' (' + value.slice(1, 4) + ') ' + value.slice(4, 7) + '-' + value.slice(7, 9) + '-' + value.slice(9, 11);
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name');
        const phone = document.getElementById('phone');
        const feedback = document.getElementById('feedback');

        let isValid = true;

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

        if (isValid) {
            form.style.display = 'none';
            feedbackSuccess.style.display = 'flex'; 
        }
    });

    closeSuccessBtn.addEventListener('click', () => {
        overlayEl.classList.remove('active');
        document.body.style.overflow = ''; 
    });
};

const scrollManufacturers = () => {
    const wrapper = document.querySelector('.manufacturers-services__wrapper');
    if (!wrapper) return false;

    wrapper.addEventListener('wheel', function(e) {
        if (e.deltaY !== 0) {
            e.preventDefault();  
            wrapper.scrollLeft += e.deltaY; 
        }
    });

}

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

const swiperAbout = () => {
    var swiper = new Swiper(".mySwiper-about", {
        slidesPerView: 4,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
            300: {
                slidesPerView: 3, 
                spaceBetween: 10,
              },
            640: {
              slidesPerView: 3, 
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3, 
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3, 
              spaceBetween: 30,
            },
            1200: {
                slidesPerView: 4, 
                spaceBetween: 30,
            }
          }
    });
}

const aboutPhotoClick = () => {
    const aboutEl = document.querySelectorAll('.mySwiper-about .swiper-slide')

    const aboutPhoto = document.querySelector('.about-photo__wrapper img')
    
    if (!aboutEl || !aboutPhoto) return false

    aboutEl.forEach(el => {
        el.addEventListener("click", () => {

            const srcValue = el.querySelector('img')

            if (srcValue) {
                aboutPhoto.src = srcValue.src
            }

        })
    });
}

const selectNews = () => {
    // const selectEl = document.querySelector(".news-select__wrapper select");

    // const arrowEl = document.querySelector(".news-select__arrow svg")

    // if (!selectEl || !arrowEl) return;

    // selectEl.addEventListener("click", () => {

    //     arrowEl.style.transform = 'rotate(180deg)'

    // })


};

const init = () => {
    swiperMain()
    scrollHeader()
    modalMain()
    scrollManufacturers()
    burgerMenu()
    swiperAbout()
    aboutPhotoClick()
    selectNews()
}

document.addEventListener("DOMContentLoaded", init)