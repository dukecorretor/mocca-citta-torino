// ==================== Carrossel de Hero ====================
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    if (n >= slides.length) {
        currentSlideIndex = 0;
    }
    if (n < 0) {
        currentSlideIndex = slides.length - 1;
    }
    
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[currentSlideIndex].classList.add('active');
    dots[currentSlideIndex].classList.add('active');
}

function currentSlide(n) {
    currentSlideIndex = n;
    showSlide(currentSlideIndex);
    resetAutoSlide();
}

function nextSlide() {
    currentSlideIndex++;
    showSlide(currentSlideIndex);
}

// Auto-rotate do carrossel
let autoSlideTimer;

function autoSlide() {
    nextSlide();
    autoSlideTimer = setTimeout(autoSlide, 5000);
}

function resetAutoSlide() {
    clearTimeout(autoSlideTimer);
    autoSlideTimer = setTimeout(autoSlide, 5000);
}

// ==================== Formulário de Cadastro ====================
document.addEventListener('DOMContentLoaded', function() {
    // Inicia o carrossel
    if (document.querySelector('.hero-slider')) {
        showSlide(currentSlideIndex);
        autoSlideTimer = setTimeout(autoSlide, 5000);
    }

    // Formulário de cadastro
    const cadastroForm = document.getElementById('cadastroForm');
    if (cadastroForm) {
        cadastroForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const telefone = document.getElementById('telefone').value;
            const interesse = document.getElementById('interesse').value;
            const mensagem = document.getElementById('mensagem').value;
            
            // Validação básica
            if (!nome || !email || !telefone || !interesse) {
                alert('Por favor, preencha todos os campos obrigatórios');
                return;
            }
            
            // Formata o número do telefone (remove caracteres)
            const telefoneLimpo = telefone.replace(/\D/g, '');
            
            // Cria mensagem para WhatsApp
            const mensagemWhatsApp = `Olá! Meu nome é ${nome}. Estou interessado em ${interesse} do Torino Mooca Città. ${mensagem ? 'Mensagem: ' + mensagem : ''} 📍 Email: ${email}`;
            const urlWhatsApp = `https://wa.me/55${telefoneLimpo}?text=${encodeURIComponent(mensagemWhatsApp)}`;
            
            // Envia para WhatsApp
            window.open(urlWhatsApp, '_blank');
            
            // Limpa o formulário
            cadastroForm.reset();
            
            // Feedback ao usuário
            alert('Obrigado! Você será redirecionado para o WhatsApp para confirmar suas informações.');
        });
    }

    // Função trocar abas
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.querySelector('.gallery-image');

    if (thumbnails.length > 0 && mainImage) {
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', function() {
                mainImage.src = this.src;
            });
        });
    }

    // Smooth scroll para links de navegação
    const navLinks = document.querySelectorAll('.nav-link, .nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});

// ==================== Download de Arquivo ====================
function downloadBook() {
    // Aqui você colocaria o link para o arquivo PDF real
    // Por enquanto, simula um download ou redireciona
    const urlBook = '#'; // Alterar para a URL real do PDF
    
    // Alternativa: Abrir o Google Drive ou link do PDF
    // window.open('https://seu-link-do-pdf.com/book.pdf', '_blank');
    
    alert('O PDF do Book será enviado para seu email em breve!');
}

// ==================== Máscara de Telefone ====================
document.addEventListener('DOMContentLoaded', function() {
    const telefonInput = document.getElementById('telefone');
    if (telefonInput) {
        telefonInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 0) {
                if (value.length <= 2) {
                    value = `(${value}`;
                } else if (value.length <= 7) {
                    value = `(${value.substring(0, 2)}) ${value.substring(2)}`;
                } else {
                    value = `(${value.substring(0, 2)}) ${value.substring(2, 7)}-${value.substring(7, 11)}`;
                }
            }
            e.target.value = value;
        });
    }
});

// Função trocar abas (mantida para compatibilidade)
function switchTab(tabName) {
    const panes = document.querySelectorAll('.tab-pane');
    panes.forEach(pane => {
        pane.classList.remove('active');
    });

    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    const selectedPane = document.getElementById(tabName);
    if (selectedPane) {
        selectedPane.classList.add('active');
    }

    if (event && event.target) {
        event.target.classList.add('active');
    }
}    // Efeito de fade-in ao scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Seleciona elementos para animar
    const elementsToAnimate = document.querySelectorAll('.projeto-content, .diferenciais-content, .tab-content, .ficha-container');
    elementsToAnimate.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });

    // Botão de Download
    const bookButton = document.querySelector('.btn-book');
    if (bookButton) {
        bookButton.addEventListener('click', function() {
            alert('Livro de arquitetura será enviado para seu email em breve!');
            // Aqui você poderia integrar com um serviço real de download
        });
    }
});

// Função para mostrar/ocultar menu mobile (se necessário no futuro)
function toggleMobileMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
}

// Navbar sticky com efeito de sombra mais pronunciada ao scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    }
});
