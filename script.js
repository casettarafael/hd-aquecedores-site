// Inicializa o Swiper para a seção de serviços
var mySwiper = new Swiper(".mySwiper", {
    slidesPerView: 1, // Começa mostrando 1 slide
    spaceBetween: 30, // Espaço entre os slides

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

// Inicializa o Swiper para a seção Sobre Nós (fotos) - AGORA COM AUTOPLAY
var aboutSwiper = new Swiper(".aboutSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: { // NOVO: Configuração para autoplay
        delay: 3000, // Tempo em milissegundos (3000ms = 3 segundos)
        disableOnInteraction: false, // Continua o autoplay mesmo se o usuário interagir
    },

    navigation: {
        nextEl: ".aboutSwiper .swiper-button-next", // Especifica as setas para este Swiper
        prevEl: ".aboutSwiper .swiper-button-prev", // Especifica as setas para este Swiper
    },
    pagination: {
        el: ".aboutSwiper .swiper-pagination", // Especifica a paginação para este Swiper
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2.5,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3.5,
            spaceBetween: 30,
        },
    },
});


// Inicializa o Swiper para a seção de Marcas (já com autoplay)
var brandsSwiper = new Swiper(".myBrandsSwiper", {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".myBrandsSwiper .swiper-button-next",
        prevEl: ".myBrandsSwiper .swiper-button-prev",
    },
    pagination: {
        el: ".myBrandsSwiper .swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
    },
});


// Implementação básica de animação on scroll para as seções
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.animate-on-scroll');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});