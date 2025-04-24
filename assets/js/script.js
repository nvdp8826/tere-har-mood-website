// DOM Elements
const audioToggle = document.getElementById('audioToggle');
const audioIcon = document.getElementById('audioIcon');
const backgroundMusic = document.getElementById('backgroundMusic');
const particlesContainer = document.getElementById('particles');
let isMusicPlaying = false;

// Audio Controls
audioToggle.addEventListener('click', () => {
    isMusicPlaying = !isMusicPlaying;
    if (isMusicPlaying) {
        backgroundMusic.play().catch(error => console.log('Audio playback failed:', error));
        audioIcon.classList.replace('fa-volume-mute', 'fa-volume-up');
    } else {
        backgroundMusic.pause();
        audioIcon.classList.replace('fa-volume-up', 'fa-volume-mute');
    }
    // Add ripple effect
    audioToggle.classList.add('shake-element');
    setTimeout(() => audioToggle.classList.remove('shake-element'), 500);
});

// Create floating particles (hearts, stars)
function createParticles() {
    const particleCount = window.innerWidth < 768 ? 15 : 25;
    particlesContainer.innerHTML = ''; // Clear existing particles
    for (let i = 0; i < particleCount; i++) {
        createParticle();
    }
}

function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    // Randomly choose between heart and star
    particle.innerHTML = Math.random() > 0.5 ? '❤️' : '✨';
    particle.style.fontSize = `${Math.random() * 20 + 10}px`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
    particle.style.animationDelay = `${Math.random() * 5}s`;
    particle.style.opacity = Math.random() * 0.5 + 0.3;

    particlesContainer.appendChild(particle);

    setTimeout(() => particle.remove(), parseFloat(particle.style.animationDuration) * 1000);
}

// Typewriter effect
function initTypewriter() {
    const typewriterElements = document.querySelectorAll('.typewriter');
    typewriterElements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        let i = 0;
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, 50);
            }
        }
        setTimeout(type, 1000);
    });
}

// Scroll reveal animation
function initScrollAnimation() {
    const animatedElements = document.querySelectorAll('.reveal-on-scroll');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('revealed');
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(element => observer.observe(element));
}

// Initialize page elements
document.addEventListener('DOMContentLoaded', () => {
    createParticles();

    if (document.querySelector('.typewriter')) initTypewriter();
    if (document.querySelector('.mood-card')) initScrollAnimation();

    // Add transition class to all pages
    document.querySelector('.container')?.classList.add('page-transition');
    
    // Handle resize for particles
    window.addEventListener('resize', createParticles);
});

// Slap button functionality
const slapButton = document.getElementById('slapButton');
if (slapButton) {
    slapButton.addEventListener('click', () => {
        document.body.classList.add('shake');
        setTimeout(() => document.body.classList.remove('shake'), 500);
    });
}

// Surprise gift button
const giftButton = document.getElementById('giftButton');
const chidGiftPopup = document.getElementById('chidSurpriseGift');
if (giftButton && chidGiftPopup) {
    giftButton.addEventListener('click', () => {
        chidGiftPopup.style.display = 'flex';
        document.getElementById('fireworks-container').style.display = 'block';
        setTimeout(() => document.getElementById('fireworks-container').style.display = 'none', 2000);
    });
}

// Cuddle button
const cuddleButton = document.getElementById('cuddleButton');
const hugOverlay = document.getElementById('hugOverlay');
if (cuddleButton && hugOverlay) {
    cuddleButton.addEventListener('click', () => {
        hugOverlay.classList.add('active');
        setTimeout(() => hugOverlay.classList.remove('active'), 4000);
    });
}

// Floating sticker particles
function createFloatingStickerParticle() {
  const container = document.getElementById("particles");
  if (!container) return;

  const stickerList = [
    "tog1.png", "tog2.png", "tog3.png", "tog4.png", "tog5.png",
    "tog6.png", "tog7.png", "tog8.png", "tog9.png", "tog10.png", "tog11.png"
  ];

  const particle = document.createElement("div");
  particle.className = "particle";
  particle.style.left = `${Math.random() * 100}vw`;
  particle.style.bottom = `-80px`;
  particle.style.width = `${Math.random() * 30 + 40}px`;
  particle.style.height = particle.style.width;
  particle.style.animationDuration = `${8 + Math.random() * 4}s`;
  particle.style.animationTimingFunction = 'ease-in';
  particle.style.animationName = "floatUp";

  const img = document.createElement("img");
  const chosen = stickerList[Math.floor(Math.random() * stickerList.length)];
  img.src = `${window.overrideStickerPath || "assets/images/stickers/"}${chosen}`;
  img.style.width = "100%";
  img.style.height = "100%";
  img.style.objectFit = "contain";

  particle.appendChild(img);
  container.appendChild(particle);

  setTimeout(() => {
    particle.remove();
  }, 190000);
}

function startFloatingStickers() {
    for (let i = 0; i < 15; i++) {
        setTimeout(createFloatingStickerParticle, i * 400);
    }

    setInterval(() => {
        if (document.hasFocus()) createFloatingStickerParticle();
    }, 300);
}

document.addEventListener('DOMContentLoaded', startFloatingStickers);
// Slap sticker visual with emotion face logic
let slapCount = 0;
let emotionLevel = 1;
const slapSticker = document.getElementById('slapSticker');
const emotionGirl = document.getElementById("emotionGirl");
if (slapButton && slapSticker) {
    slapButton.addEventListener('click', () => {
        slapCount++;
        slapSticker.style.display = 'block';

        // Change emotion face every 2 slaps
        if (slapCount % 2 === 0 && emotionGirl && emotionLevel < 9) {
            emotionLevel++;
            emotionGirl.src = `assets/images/chid-chid-${emotionLevel}.png`;
        }

        setTimeout(() => {
            slapSticker.style.display = 'none';
        }, 300);

        // Add shake effect
        document.body.classList.add('shake');
        setTimeout(() => document.body.classList.remove('shake'), 500);
    });
}

// Surprise gift close button
const giftCloseButton = document.querySelector('.gift-close');
if (giftCloseButton && chidGiftPopup) {
    giftCloseButton.addEventListener('click', () => {
        chidGiftPopup.style.display = 'none';
        document.getElementById('fireworks-container').style.display = 'none';
    });
}