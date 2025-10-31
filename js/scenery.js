// Scenery data - mapping scenery IDs to their details
const sceneryData = {
    'beihai-park': {
        title: 'Beihai Park',
        date: '2024',
        description: 'A beautiful traditional Chinese park with willow trees, lakes, and historic architecture. Capturing the essence of Beijing\'s imperial gardens.',
        images: [
            'images/scenery/北海公园/垂柳.jpg',
            'images/scenery/北海公园/摄拍.jpg',
            'images/scenery/北海公园/水鸭.jpg',
            'images/scenery/北海公园/他拍.jpg'
        ]
    },
    'daidai-island': {
        title: 'Daidai Island',
        date: '2024',
        description: 'A charming island with pink cars and picturesque frames, offering stunning coastal views and relaxing atmosphere.',
        images: [
            'images/scenery/呆呆岛/粉红车.jpg',
            'images/scenery/呆呆岛/相框.jpg'
        ]
    },
    'defu-alley': {
        title: 'Defu Alley & Shuyuanmen',
        date: '2024',
        description: 'Historic streets filled with cultural heritage, delicious local food, traditional architecture, and vibrant street life.',
        images: [
            'images/scenery/德福巷和书院门/biangbiang面.jpg',
            'images/scenery/德福巷和书院门/财富.jpg',
            'images/scenery/德福巷和书院门/德福巷.jpg',
            'images/scenery/德福巷和书院门/三轮车.jpg',
            'images/scenery/德福巷和书院门/湘子庙.jpg'
        ]
    },
    'universal-studios': {
        title: 'Universal Studios',
        date: '2024',
        description: 'Magical theme park adventures with iconic globes, robots, nighttime illuminations, and unforgettable entertainment experiences.',
        images: [
            'images/scenery/环球影城/大地球.jpg',
            'images/scenery/环球影城/机器人.jpg',
            'images/scenery/环球影城/练功.jpg',
            'images/scenery/环球影城/夜球.jpg'
        ]
    },
    'lingshui': {
        title: 'Lingshui',
        date: '2024',
        description: 'Scenic coastal area with atmospheric portraits and breathtaking sunsets, capturing the natural beauty of Hainan.',
        images: [
            'images/scenery/陵水/氛围感女头.jpg',
            'images/scenery/陵水/晚霞.jpg'
        ]
    },
    'temple-of-heaven': {
        title: 'Temple of Heaven',
        date: '2024',
        description: 'Imperial sacrificial altar with magnificent architecture, historical significance, and beautiful park surroundings.',
        images: [
            'images/scenery/天坛/皇帝旗.jpg',
            'images/scenery/天坛/天坛.jpg',
            'images/scenery/天坛/天坛2.jpg'
        ]
    },
    'small-wild-goose-pagoda': {
        title: 'Small Wild Goose Pagoda',
        date: '2024',
        description: 'Ancient Buddhist pagoda with stone statues, religious artifacts, and peaceful temple grounds.',
        images: [
            'images/scenery/小雁塔/兜率.jpg',
            'images/scenery/小雁塔/石像.jpg',
            'images/scenery/小雁塔/相机.jpg'
        ]
    },
    'yangmeizhu-street': {
        title: 'Yangmeizhu Street',
        date: '2024',
        description: 'Traditional Beijing alley with cultural activities, street vendors, candy blowing artisans, and charming night scenes.',
        images: [
            'images/scenery/杨梅竹斜街/吹糖人.jpg',
            'images/scenery/杨梅竹斜街/夜猫.jpg'
        ]
    },
    'zhongliu-alley': {
        title: 'Zhongliu Alley',
        date: '2024',
        description: 'Quaint alleyway with artistic moments, Polaroid memories, and candid shots capturing urban life.',
        images: [
            'images/scenery/中柳巷/扶眼镜.jpg',
            'images/scenery/中柳巷/拍立得.jpg',
            'images/scenery/中柳巷/甩头发.jpg'
        ]
    }
};

// Modal functionality for scenery
const sceneryModal = document.getElementById('sceneryModal');
const sceneryModalContent = document.getElementById('sceneryModalContent');
const sceneryCloseBtn = document.querySelector('#sceneryModal .close-btn');

function openSceneryDetail(sceneryId) {
    const scenery = sceneryData[sceneryId];
    if (!scenery) return;
    
    // Create modal content
    sceneryModalContent.innerHTML = `
        <div class="scenery-detail">
            <div class="detail-header">
                <h2>${scenery.title}</h2>
                <p class="detail-date">${scenery.date}</p>
            </div>
            <div class="detail-description">
                <p>${scenery.description}</p>
            </div>
            <div class="detail-images">
                ${scenery.images.map(img => `
                    <div class="detail-image">
                        <img src="${img}" alt="${scenery.title}">
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    // Show modal
    sceneryModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeSceneryModal() {
    sceneryModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Event listeners
sceneryCloseBtn.addEventListener('click', closeSceneryModal);

// Close modal when clicking outside content
sceneryModal.addEventListener('click', function(event) {
    if (event.target === sceneryModal) {
        closeSceneryModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeSceneryModal();
    }
});

// Initialize scenery page
document.addEventListener('DOMContentLoaded', function() {
    console.log('Scenery page loaded successfully!');
});