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

const init = () => {
    swiperMain()
    scrollHeader()
}

document.addEventListener("DOMContentLoaded", init)