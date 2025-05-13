document.addEventListener('DOMContentLoaded', function() {
    // Menu Mobile
    const menuBtn = document.querySelector('#menu-btn');
    const navbar = document.querySelector('.navbar');
    
    menuBtn.addEventListener('click', () => {
        navbar.classList.toggle('active');
        menuBtn.classList.toggle('fa-times');
    });
    
    // Scroll Header
    window.addEventListener('scroll', () => {
        navbar.classList.remove('active');
        menuBtn.classList.remove('fa-times');
        
        if(window.scrollY > 60) {
            document.querySelector('.header').classList.add('scrolled');
        } else {
            document.querySelector('.header').classList.remove('scrolled');
        }
    });
    
    // Slider de Depoimentos
    const reviewCards = document.querySelectorAll('.review-card');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;
    
    function showReview(index) {
        reviewCards.forEach((card, i) => {
            if (i === index) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        });
    }
    
    function nextReview() {
        currentIndex = (currentIndex + 1) % reviewCards.length;
        showReview(currentIndex);
    }
    
    function prevReview() {
        currentIndex = (currentIndex - 1 + reviewCards.length) % reviewCards.length;
        showReview(currentIndex);
    }
    
    nextBtn.addEventListener('click', nextReview);
    prevBtn.addEventListener('click', prevReview);
    
    // Iniciar com o primeiro depoimento visível
    showReview(currentIndex);
    
    // Auto-play para o slider (opcional)
    let autoSlide = setInterval(nextReview, 5000);
    
    const sliderContainer = document.querySelector('.slider-container');
    
    sliderContainer.addEventListener('mouseenter', () => {
        clearInterval(autoSlide);
    });
    
    sliderContainer.addEventListener('mouseleave', () => {
        autoSlide = setInterval(nextReview, 5000);
    });
    
    // Animação ao rolar a página
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
    
    // Formulário de Contato
    const contactForm = document.querySelector('.contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simulação de envio
        const formData = new FormData(contactForm);
        const name = formData.get('name') || 'Sem nome';
        
        alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.`);
        contactForm.reset();
    });
    
    // Newsletter
    const newsletterForm = document.querySelector('.newsletter-form');
    
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        
        if (emailInput.value) {
            alert(`Obrigado por assinar nossa newsletter! Um e-mail de confirmação foi enviado para ${emailInput.value}`);
            newsletterForm.reset();
        }
    });
});