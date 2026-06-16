// ==========================================
// گنجینه اشعار پارسی - جاوااسکریپت
// ==========================================

// لیست شعرها
const poems = [
    {
        poet: "حافظ شیرازی",
        text: "یوسف گمگشته باز آید به کنعان غم مخور\nکلبه احزان شود روزی گلستان غم مخور",
        mood: "امید و روشنایی"
    },
    {
        poet: "حافظ شیرازی",
        text: "الا یا ایها الساقی ادر کأسا و ناولها\nکه عشق آسان نمود اول ولی افتاد مشکل‌ها",
        mood: "عشق و شوریدگی"
    },
    {
        poet: "حافظ شیرازی",
        text: "هرگز نمیرد آن که دلش زنده شد به عشق\nثبت است بر جریده عالم دوام ما",
        mood: "جاودانگی عشق"
    },
    {
        poet: "سعدی شیرازی",
        text: "بنی آدم اعضای یکدیگرند\nکه در آفرینش ز یک گوهرند",
        mood: "وحدت و برادری"
    },
    {
        poet: "سعدی شیرازی",
        text: "توانا بود هر که دانا بود\nز دانش دل پیر برنا بود",
        mood: "دانش و خرد"
    },
    {
        poet: "سعدی شیرازی",
        text: "به جهان خرم از آنم که جهان خرم از اوست\nعاشقم بر همه عالم که همه عالم از اوست",
        mood: "عشق الهی"
    },
    {
        poet: "مولانا",
        text: "بشنو از نی چون حکایت می‌کند\nاز جدایی‌ها شکایت می‌کند",
        mood: "عرفان و معنویت"
    },
    {
        poet: "مولانا",
        text: "هر کسی کو دور ماند از اصل خویش\nباز جوید روزگار وصل خویش",
        mood: "بازگشت به اصل"
    },
    {
        poet: "مولانا",
        text: "دیوانه‌ام دیوانه‌ام دیوانه‌ام\nدر بند جان و دل نه‌ام دیوانه‌ام",
        mood: "شوریدگی و مستی"
    },
    {
        poet: "سهراب سپهری",
        text: "زندگی خالی نیست\nمهربانی هست، سیب هست، ایمان هست\nآری تا سبزه هست، ایمان هست",
        mood: "طراوت و امید"
    },
    {
        poet: "سهراب سپهری",
        text: "چشم‌ها را باید شست، جور دیگر باید دید\nواژه‌ها را باید شست",
        mood: "نگاه نو"
    },
    {
        poet: "سهراب سپهری",
        text: "من مسافرم\nپای در رکاب لحظه‌ها دارم\nزنده‌ام به نور آفتاب",
        mood: "سفر و زندگی"
    },
    {
        poet: "خیام",
        text: "این قافله عمر عجب می‌گذرد\nدریاب دمی که با طرب می‌گذرد",
        mood: "فلسفه زندگی"
    },
    {
        poet: "خیام",
        text: "بر چهره گل نسیم نوروز خوش است\nدر صحن چمن روی دلفروز خوش است",
        mood: "نوروز و شادی"
    },
    {
        poet: "فردوسی",
        text: "توانا بود هر که دانا بود\nز دانش دل پیر برنا بود",
        mood: "حماسه و افتخار"
    },
    {
        poet: "نظامی",
        text: "سخن چو دانه باشد و زمانه مثل دان\nز بهر دانه است کز نو شود چمن",
        mood: "سخن و ادب"
    },
    {
        poet: "عطار",
        text: "صد سال جستجو و دو سال دیدار\nصد سال شنیدن و دو سال گفتار",
        mood: "سلوک و عرفان"
    },
    {
        poet: "صائب تبریزی",
        text: "هر که را جامه ز عشق چاک شد\nاو ز حرص و عیب کلی پاک شد",
        mood: "پاک‌دلی"
    },
    {
        poet: "بیدل دهلوی",
        text: "در حیرتم که آینه‌دار وجود کیست\nاین جلوه‌گاه حسن و تماشاگه کیست",
        mood: "حیرت و عرفان"
    },
    {
        poet: "وحشی بافقی",
        text: "دل من بی‌تو به سر می‌شود و تاب ندارد\nچو چراغی که به باد است و پر از آب ندارد",
        mood: "دلتنگی و فراق"
    }
];

// متغیرها
let currentIndex = 0;
let favorites = JSON.parse(localStorage.getItem('poetryFavorites')) || [];

// انتخاب المان‌ها
const elements = {
    poetName: document.getElementById('poetName'),
    poemText: document.getElementById('poemText'),
    moodIndicator: document.getElementById('moodIndicator'),
    poemNumber: document.getElementById('poemNumber'),
    nextBtn: document.getElementById('nextBtn'),
    prevBtn: document.getElementById('prevBtn'),
    favoriteBtn: document.getElementById('favoriteBtn'),
    copyBtn: document.getElementById('copyBtn'),
    shareBtn: document.getElementById('shareBtn'),
    favoritesBtn: document.getElementById('favoritesBtn'),
    favoritesModal: document.getElementById('favoritesModal'),
    closeModal: document.getElementById('closeModal'),
    favoritesList: document.getElementById('favoritesList'),
    favCount: document.getElementById('favCount'),
    notification: document.getElementById('notification'),
    poemCard: document.getElementById('poemCard'),
    loader: document.getElementById('loader'),
    body: document.body
};

// نمایش شعر
function displayPoem() {
    const poem = poems[currentIndex];
    
    elements.poetName.textContent = poem.poet;
    elements.poemText.innerHTML = poem.text.replace(/\n/g, '<br>');
    elements.moodIndicator.textContent = poem.mood;
    elements.poemNumber.textContent = (currentIndex + 1) + ' / ' + poems.length;
    
    // انیمیشن
    elements.poemCard.style.animation = 'none';
    setTimeout(() => {
        elements.poemCard.style.animation = 'fadeIn 0.6s';
    }, 10);
    
    updateFavoriteButton();
}

// شعر بعدی
function nextPoem() {
    currentIndex++;
    if (currentIndex >= poems.length) {
        currentIndex = 0;
    }
    displayPoem();
}

// شعر قبلی
function prevPoem() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = poems.length - 1;
    }
    displayPoem();
}

// علاقه‌مندی
function toggleFavorite() {
    const poem = poems[currentIndex];
    const index = favorites.findIndex(f => f.text === poem.text);
    
    if (index === -1) {
        favorites.push({
            poet: poem.poet,
            text: poem.text
        });
        showNotification('به علاقه‌مندی‌ها اضافه شد');
    } else {
        favorites.splice(index, 1);
        showNotification('از علاقه‌مندی‌ها حذف شد');
    }
    
    localStorage.setItem('poetryFavorites', JSON.stringify(favorites));
    updateFavoriteButton();
    updateFavCount();
}

// آپدیت دکمه علاقه‌مندی
function updateFavoriteButton() {
    const poem = poems[currentIndex];
    const isFavorite = favorites.some(f => f.text === poem.text);
    
    if (isFavorite) {
        elements.favoriteBtn.classList.add('favorite-active');
        elements.favoriteBtn.querySelector('i').classList.remove('far');
        elements.favoriteBtn.querySelector('i').classList.add('fas');
    } else {
        elements.favoriteBtn.classList.remove('favorite-active');
        elements.favoriteBtn.querySelector('i').classList.remove('fas');
        elements.favoriteBtn.querySelector('i').classList.add('far');
    }
}

// نمایش علاقه‌مندی‌ها
function showFavorites() {
    if (favorites.length === 0) {
        elements.favoritesList.innerHTML = '<p class="empty-favorites">هنوز شعری اضافه نکردید</p>';
    } else {
        elements.favoritesList.innerHTML = favorites.map((fav, index) => `
            <div class="favorite-item" data-index="${index}">
                <div class="fav-poet"><i class="fas fa-feather-alt"></i> ${fav.poet}</div>
                <div class="fav-text">${fav.text.replace(/\n/g, ' - ')}</div>
            </div>
        `).join('');
        
        document.querySelectorAll('.favorite-item').forEach(item => {
            item.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                const favPoem = favorites[index];
                const poemIndex = poems.findIndex(p => p.text === favPoem.text);
                
                if (poemIndex !== -1) {
                    currentIndex = poemIndex;
                    displayPoem();
                    elements.favoritesModal.classList.remove('active');
                }
            });
        });
    }
    
    elements.favoritesModal.classList.add('active');
}

// آپدیت شمارنده
function updateFavCount() {
    elements.favCount.textContent = favorites.length;
    if (favorites.length === 0) {
        elements.favCount.style.display = 'none';
    } else {
        elements.favCount.style.display = 'flex';
    }
}

// کپی شعر
async function copyPoem() {
    const poem = poems[currentIndex];
    const textToCopy = poem.text + '\n\n' + poem.poet;
    
    try {
        await navigator.clipboard.writeText(textToCopy);
        showNotification('شعر کپی شد');
    } catch (err) {
        const textArea = document.createElement('textarea');
        textArea.value = textToCopy;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showNotification('شعر کپی شد');
    }
}

// اشتراک‌گذاری
async function sharePoem() {
    const poem = poems[currentIndex];
    const shareData = {
        title: 'شعر از ' + poem.poet,
        text: poem.text + '\n\n' + poem.poet
    };
    
    if (navigator.share) {
        try {
            await navigator.share(shareData);
        } catch (err) {
            copyPoem();
        }
    } else {
        copyPoem();
    }
}

// نوتیفیکیشن
function showNotification(message) {
    elements.notification.textContent = message;
    elements.notification.classList.add('show');
    
    setTimeout(() => {
        elements.notification.classList.remove('show');
    }, 2500);
}

// افکت ذرات
function initParticles() {
    const canvas = document.getElementById('particles');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
        }
        
        draw() {
            ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    for (let i = 0; i < 30; i++) {
        particles.push(new Particle());
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// ایونت‌ها
function initEventListeners() {
    elements.nextBtn.addEventListener('click', nextPoem);
    elements.prevBtn.addEventListener('click', prevPoem);
    elements.favoriteBtn.addEventListener('click', toggleFavorite);
    elements.copyBtn.addEventListener('click', copyPoem);
    elements.shareBtn.addEventListener('click', sharePoem);
    elements.favoritesBtn.addEventListener('click', showFavorites);
    
    elements.closeModal.addEventListener('click', function() {
        elements.favoritesModal.classList.remove('active');
    });
    
    elements.favoritesModal.addEventListener('click', function(e) {
        if (e.target === elements.favoritesModal) {
            elements.favoritesModal.classList.remove('active');
        }
    });
}

// شروع
function init() {
    window.addEventListener('load', function() {
        setTimeout(function() {
            elements.loader.classList.add('hidden');
        }, 1200);
    });
    
    initParticles();
    initEventListeners();
    displayPoem();
    updateFavCount();
}

init();