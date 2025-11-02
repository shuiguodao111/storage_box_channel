// 改进的音乐播放功能 - 专注于状态恢复
document.addEventListener('DOMContentLoaded', function() {
    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');

    if (musicToggle && bgMusic) {
        console.log('音乐播放器初始化...');
        
        // 设置音量
        bgMusic.volume = 0.3;
        
        // 检查之前的播放状态
        const wasPlaying = localStorage.getItem('musicPlaying') === 'true';
        const savedTime = localStorage.getItem('musicTime');
        
        console.log('之前的状态:', { wasPlaying, savedTime });
        
        if (wasPlaying) {
            // 设置为播放状态
            musicToggle.textContent = '🎵';
            musicToggle.classList.add('playing');
            
            // 恢复播放位置
            if (savedTime) {
                bgMusic.currentTime = parseFloat(savedTime);
            }
            
            // 尝试自动播放（但浏览器可能阻止）
            const playPromise = bgMusic.play();
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.log('自动播放被阻止，需要用户交互');
                    // 显示提示让用户知道需要点击
                    musicToggle.style.animation = 'pulse 1s infinite';
                });
            }
        } else {
            musicToggle.textContent = '🔇';
            musicToggle.classList.remove('playing');
        }

        // 点击播放/暂停
        musicToggle.addEventListener('click', function() {
            if (bgMusic.paused) {
                bgMusic.play().then(() => {
                    console.log('音乐开始播放');
                    musicToggle.textContent = '🎵';
                    musicToggle.classList.add('playing');
                    localStorage.setItem('musicPlaying', 'true');
                    musicToggle.style.animation = ''; // 移除动画
                }).catch(error => {
                    console.error('播放失败:', error);
                });
            } else {
                bgMusic.pause();
                musicToggle.textContent = '🔇';
                musicToggle.classList.remove('playing');
                localStorage.setItem('musicPlaying', 'false');
            }
        });

        // 定期保存播放时间
        setInterval(() => {
            if (!bgMusic.paused) {
                localStorage.setItem('musicTime', bgMusic.currentTime);
            }
        }, 3000);

        // 页面关闭前保存状态
        window.addEventListener('beforeunload', () => {
            localStorage.setItem('musicTime', bgMusic.currentTime);
            if (!bgMusic.paused) {
                localStorage.setItem('musicPlaying', 'true');
            }
        });
        
    } else {
        console.error('找不到音乐元素');
    }
});

// 添加脉冲动画提示
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);
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