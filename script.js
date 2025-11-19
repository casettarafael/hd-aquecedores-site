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
    autoplay: { // Configuração para autoplay
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
    slidesPerView: 2, // Começa mostrando 2 logos em telas pequenas
    spaceBetween: 20, // Espaço entre os logos
    loop: true, // Carrossel infinito para marcas
    autoplay: { // Autoplay opcional para marcas
        delay: 2500, // Passa a cada 2.5 segundos
        disableOnInteraction: false, // Continua autoplay mesmo se o usuário interagir
    },
    navigation: { // Setas para navegação
        nextEl: ".myBrandsSwiper .swiper-button-next",
        prevEl: ".myBrandsSwiper .swiper-button-prev",
    },
    pagination: { // Paginação (bolinhas)
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

// ==========================================
// SCRIPT DO LIGHTBOX (ZOOM NAS IMAGENS)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // Pega o modal e a imagem de dentro dele
    var modal = document.getElementById("image-modal");
    var modalImg = document.getElementById("img-full");

    // Pega todas as imagens com a classe .product-image
    var images = document.querySelectorAll(".product-image");

    // Verifica se o modal existe na página antes de executar (evita erros)
    if (modal && modalImg) {
        // Adiciona o evento de clique em CADA imagem de produto
        images.forEach(function(img) {
            img.addEventListener("click", function(){
                modal.style.display = "flex"; // Mostra o modal
                modalImg.src = this.src;      // Pega a foto clicada e joga no modal
            });
        });

        // Fecha o modal ao clicar no X
        var span = document.getElementsByClassName("close-modal")[0];
        if (span) {
            span.onclick = function() { 
                modal.style.display = "none";
            }
        }

        // Fecha o modal ao clicar fora da imagem (no fundo preto)
        modal.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        }
    }
});