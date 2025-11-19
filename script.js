document.addEventListener('DOMContentLoaded', () => {
    
    // ==================================================
    // 1. CARROSSEL DE SERVIÇOS (PRINCIPAL)
    // ==================================================
    // Verifica se existe o elemento antes de tentar iniciar
    if (document.querySelector(".mySwiper")) {
        var mySwiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                768: { slidesPerView: 2, spaceBetween: 30 },
                1024: { slidesPerView: 3, spaceBetween: 30 },
            },
        });
    }

    // ==================================================
    // 2. CARROSSEL DE MARCAS (CORRIGIDO)
    // ==================================================
    if (document.querySelector(".myBrandsSwiper")) {
        var brandsSwiper = new Swiper(".myBrandsSwiper", {
            slidesPerView: 2, // No celular mostra 2
            spaceBetween: 20,
            loop: true,       // Roda infinito
            speed: 1000,      // Transição suave
            autoplay: {
                delay: 2000,  // Passa sozinho a cada 2 segundos
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
                640: { slidesPerView: 3, spaceBetween: 30 },
                768: { slidesPerView: 4, spaceBetween: 40 },
                1024: { slidesPerView: 5, spaceBetween: 50 }, 
            },
        });
    }

    // ==================================================
    // 3. ANIMAÇÃO AO ROLAR (FADE IN)
    // ==================================================
    const sections = document.querySelectorAll('.animate-on-scroll');
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };

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

    // ==================================================
    // 4. LIGHTBOX (ZOOM NAS FOTOS DOS PRODUTOS)
    // ==================================================
    var modal = document.getElementById("image-modal");
    var modalImg = document.getElementById("img-full");
    var images = document.querySelectorAll(".product-image");

    // Só executa se o modal existir na página
    if (modal && modalImg) {
        images.forEach(function(img) {
            img.addEventListener("click", function(){
                modal.style.display = "flex";
                modalImg.src = this.src;
            });
        });

        var span = document.getElementsByClassName("close-modal")[0];
        if (span) {
            span.onclick = function() { 
                modal.style.display = "none";
            }
        }

        modal.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        }
    }
});