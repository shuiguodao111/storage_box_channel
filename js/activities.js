// 确保音乐播放器正常工作
document.addEventListener('DOMContentLoaded', function() {
    console.log('Activities page music check:', {
        musicToggle: document.getElementById('musicToggle'),
        bgMusic: document.getElementById('bgMusic'),
        musicState: localStorage.getItem('musicPlaying')
    });
});
// Activity data - mapping activity IDs to their details
const activities = {
    'poplar-performance': {
        title: 'Poplar Performance',
        date: '2023',
        description: 'A wonderful performance event with friends, capturing group moments and distant views.',
        images: [
            'images/activities/白杨汇演/合照.jpg',
            'images/activities/白杨汇演/眺望.jpg'
        ]
    },
    'british-library': {
        title: 'British Library Exhibition',
        date: '2023',
        description: 'An exciting library exhibition featuring phone booths, book stairs, scrolling text, group photos, and Juliet.',
        images: [
            'images/activities/大英图书馆展会/电话亭.jpg',
            'images/activities/大英图书馆展会/书阶.jpg',
            'images/activities/大英图书馆展会/滚动文字.jpg',
            'images/activities/大英图书馆展会/合照.jpg',
            'images/activities/大英图书馆展会/朱丽叶.jpg'
        ]
    },
    'uestc-dance': {
        title: 'UESTC Dance Party',
        date: '2023',
        description: 'A beautiful dance party with nine-square grid photos and gentle breeze moments.',
        images: [
            'images/activities/电子科大舞会/九宫格.jpg',
            'images/activities/电子科大舞会/微风吹.jpg'
        ]
    },
    'uestc-music': {
        title: 'UESTC Music Festival',
        date: '2023',
        description: 'An energetic music festival with group photos, candid shots, and selfies.',
        images: [
            'images/activities/电子科大音乐节/合照.jpg',
            'images/activities/电子科大音乐节/合照2.jpg',
            'images/activities/电子科大音乐节/亚麻几.jpg',
            'images/activities/电子科大音乐节/抓拍.jpg',
            'images/activities/电子科大音乐节/自拍.jpg'
        ]
    },
    'rehearsal': {
        title: 'Rehearsal',
        date: '2023',
        description: 'Rehearsal sessions with CR and Yamaji, preparing for performances.',
        images: [
            'images/activities/排练/cr.jpg',
            'images/activities/排练/亚麻几.jpg'
        ]
    },
    'fun-sports': {
        title: 'Fun Sports Day',
        date: '2023',
        description: 'A fun sports day with activities and absent-minded moments.',
        images: [
            'images/activities/趣味运动会/运动会.jpg',
            'images/activities/趣味运动会/走神.jpg'
        ]
    },
    'one-less-8am': {
        title: 'One Less 8AM Memory',
        date: '2023',
        description: 'Special memories of one less 8 AM class, with friends, Brenda\'s masterpiece, morning glories, and hydrangeas.',
        images: [
            'images/activities/少一天早八专属回忆/宝贝们.jpg',
            'images/activities/少一天早八专属回忆/布兰达杰作.jpg',
            'images/activities/少一天早八专属回忆/牵牛花.jpg',
            'images/activities/少一天早八专属回忆/绣球.jpg'
        ]
    },
    'christmas': {
        title: 'Christmas',
        date: '2023',
        description: 'Christmas celebration with artistic paintings.',
        images: [
            'images/activities/圣诞节/绘画.jpg'
        ]
    },
    'worldline-comic': {
        title: 'Worldline Comic Con',
        date: '2023',
        description: 'Comic convention with CC, masked characters, Kim Dokja, and Nanami.',
        images: [
            'images/activities/世界线漫展/CC.jpg',
            'images/activities/世界线漫展/覆面系.jpg',
            'images/activities/世界线漫展/金独子.jpg',
            'images/activities/世界线漫展/娜娜米.jpg'
        ]
    },
    'halloween': {
        title: 'Halloween',
        date: '2023',
        description: 'Halloween party with duo dance and little devil costumes.',
        images: [
            'images/activities/万圣节/双人舞.jpg',
            'images/activities/万圣节/小恶魔.jpg'
        ]
    },
    'siamese-cat': {
        title: 'Siamese Cat',
        date: '2023',
        description: 'Siamese cat memories: first manicure, first day, and selfies.',
        images: [
            'images/activities/暹罗猫/第一次美甲.jpg',
            'images/activities/暹罗猫/第一天.jpg',
            'images/activities/暹罗猫/自拍.jpg'
        ]
    },
    '129-choir': {
        title: '129 Choir',
        date: '2023',
        description: '129 choir performance with selfies and photos taken by others.',
        images: [
            'images/activities/一二九合唱/自拍.jpg',
            'images/activities/一二九合唱/他拍.jpg'
        ]
    },
    'excellent-freshman': {
        title: 'Excellent Freshman',
        date: '2023',
        description: 'Recognition as an excellent freshman with scholarship.',
        images: [
            'images/activities/优秀新生/奖学金.jpg'
        ]
    },
    'cuc-music': {
        title: 'CUC Music Festival',
        date: '2023',
        description: 'CUC Music Festival with toxic, toxin, back views, squatting, back of head, bad woman, head shaking, and looking up.',
        images: [
            'images/activities/中传音乐节/toxic.jpg',
            'images/activities/中传音乐节/toxin.jpg',
            'images/activities/中传音乐节/背影.jpg',
            'images/activities/中传音乐节/蹲厕.jpg',
            'images/activities/中传音乐节/后脑勺.jpg',
            'images/activities/中传音乐节/坏女人.jpg',
            'images/activities/中传音乐节/甩头.jpg',
            'images/activities/中传音乐节/抬头.jpg'
        ]
    }
};

// Modal functionality
const modal = document.getElementById('activityModal');
const modalContent = document.getElementById('modalContent');
const closeBtn = document.querySelector('.close-btn');

function openActivityDetail(activityId) {
    const activity = activities[activityId];
    if (!activity) return;
    
    // Create modal content
    modalContent.innerHTML = `
        <div class="activity-detail">
            <div class="detail-header">
                <h2>${activity.title}</h2>
                <p class="detail-date">${activity.date}</p>
            </div>
            <div class="detail-description">
                <p>${activity.description}</p>
            </div>
            <div class="detail-images">
                ${activity.images.map(img => `
                    <div class="detail-image">
                        <img src="${img}" alt="${activity.title}">
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Event listeners
closeBtn.addEventListener('click', closeModal);

// Close modal when clicking outside content
modal.addEventListener('click', function(event) {
    if (event.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Initialize activities page
document.addEventListener('DOMContentLoaded', function() {
    console.log('Activities page loaded successfully!');
});