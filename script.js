document.addEventListener('DOMContentLoaded', () => {
    console.log("Scripts iniciados.");

    // ==================================================
    // 1. CARROSSEL DE SERVIÇOS
    // ==================================================
    if (document.querySelector(".mySwiper")) {
        new Swiper(".mySwiper", {
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
    // 2. NOVO CARROSSEL DE PRODUTOS (AQUECEDORES)
    // ==================================================
    if (document.querySelector(".myProductsSwiper")) {
        new Swiper(".myProductsSwiper", {
            slidesPerView: 1, // Mobile: 1 produto por vez
            spaceBetween: 25,
            navigation: {
                nextEl: ".myProductsSwiper .swiper-button-next",
                prevEl: ".myProductsSwiper .swiper-button-prev",
            },
            pagination: {
                el: ".myProductsSwiper .swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                640: { slidesPerView: 2, spaceBetween: 20 }, // Tablet pequeno: 2 produtos
                992: { slidesPerView: 3, spaceBetween: 30 }, // Desktop: 3 produtos
                1200: { slidesPerView: 4, spaceBetween: 30 }, // Telas grandes: 4 produtos
            },
        });
    }

    // ==================================================
    // 3. CARROSSEL DE MARCAS
    // ==================================================
    if (document.querySelector(".myBrandsSwiper")) {
        new Swiper(".myBrandsSwiper", {
            slidesPerView: 2, 
            spaceBetween: 20,
            loop: true,       
            speed: 1000,      
            autoplay: {
                delay: 2000,  
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
    // 4. LIGHTBOX (ZOOM)
    // ==================================================
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("img-full");
    const images = document.querySelectorAll(".product-image");

    if (modal && modalImg) {
        images.forEach(img => {
            img.addEventListener("click", function() {
                modal.style.display = "flex";
                modalImg.src = this.src;
            });
        });

        const span = document.querySelector(".close-modal");
        if (span) {
            span.onclick = function() { modal.style.display = "none"; }
        }
        modal.onclick = function(event) {
            if (event.target === modal) { modal.style.display = "none"; }
        }
    }

    // ==================================================
    // 5. ANIMAÇÃO SCROLL
    // ==================================================
    const sections = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { root: null, rootMargin: '0px', threshold: 0.1 });
    sections.forEach(section => observer.observe(section));
});