// Music Player Functionality
document.addEventListener('DOMContentLoaded', function() {
    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');

    // Ensure elements exist before adding event listeners
    if (musicToggle && bgMusic) {
        // Ensure music only plays after user interaction
        document.addEventListener('click', function() {
            bgMusic.volume = 0.3; // Set volume
        }, { once: true });

        musicToggle.addEventListener('click', function() {
            if (bgMusic.paused) {
                bgMusic.play().catch(error => {
                    console.log('Audio play failed:', error);
                });
                musicToggle.classList.add('playing');
                musicToggle.textContent = '🎵';
            } else {
                bgMusic.pause();
                musicToggle.classList.remove('playing');
                musicToggle.textContent = '🔇';
            }
        });
    }

    // Simple page load effects for homepage only
    const currentPage = window.location.pathname.split('/').pop();
    if (currentPage === 'index.html' || currentPage === '' || currentPage === '/') {
        const textContent = document.querySelector('.text-content');
        const imageContent = document.querySelector('.image-content');
        
        if (textContent) {
            textContent.style.opacity = '0';
            textContent.style.transform = 'translateX(-20px)';
            textContent.style.transition = 'all 0.8s ease';
            
            setTimeout(() => {
                textContent.style.opacity = '1';
                textContent.style.transform = 'translateX(0)';
            }, 200);
        }
        
        if (imageContent) {
            imageContent.style.opacity = '0';
            imageContent.style.transform = 'translateX(20px)';
            imageContent.style.transition = 'all 0.8s ease 0.3s';
            
            setTimeout(() => {
                imageContent.style.opacity = '1';
                imageContent.style.transform = 'translateX(0)';
            }, 500);
        }
    }

    // Mobile menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    console.log('Storage Box Channel loaded successfully!');
});

// Smooth scrolling for anchor links (if any)
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Utility function to check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Lazy loading for images (optional enhancement)
document.addEventListener('DOMContentLoaded', function() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for older browsers
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
        });
    }
});