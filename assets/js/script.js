// Enhanced JavaScript for Tere Har Mood Ke Naam 💘

// DOM Elements
const audioToggle = document.getElementById('audioToggle');
const audioIcon = document.getElementById('audioIcon');
const backgroundMusic = document.getElementById('backgroundMusic');
const particlesContainer = document.getElementById('particles');

// Add page transition class to body
document.body.classList.add('page-load');

// Audio Controls
let isMusicPlaying = false;

audioToggle.addEventListener('click', () => {
    if (isMusicPlaying) {
        backgroundMusic.pause();
        audioIcon.classList.remove('fa-volume-up');
        audioIcon.classList.add('fa-volume-mute');
    } else {
        backgroundMusic.play().catch(error => {
            console.log('Audio playback failed:', error);
        });
        audioIcon.classList.remove('fa-volume-mute');
        audioIcon.classList.add('fa-volume-up');
    }
    isMusicPlaying = !isMusicPlaying;
    
    // Add ripple effect to button
    audioToggle.classList.add('shake-element');
    setTimeout(() => {
        audioToggle.classList.remove('shake-element');
    }, 500);
});

// Create floating particles (hearts, stars)
function createParticles() {
    const particleCount = window.innerWidth < 768 ? 15 : 25;
    
    // Clear existing particles
    particlesContainer.innerHTML = '';
    
    for (let i = 0; i < particleCount; i++) {
        createParticle();
    }
}

function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Randomly choose between heart and star
    if (Math.random() > 0.5) {
        particle.classList.add('heart-particle');
        particle.innerHTML = '❤️';
        particle.style.fontSize = `${Math.random() * 20 + 10}px`;
    } else {
        particle.innerHTML = '✨';
        particle.style.fontSize = `${Math.random() * 15 + 8}px`;
    }
    
    // Random position
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    particle.style.left = `${posX}%`;
    particle.style.top = `${posY}%`;
    
    // Random animation duration and delay
    const duration = Math.random() * 10 + 10;
    const delay = Math.random() * 5;
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${delay}s`;
    
    // Random opacity
    particle.style.opacity = Math.random() * 0.5 + 0.3;
    
    particlesContainer.appendChild(particle);
    
    // Remove and recreate particle after animation cycle
    setTimeout(() => {
        particle.remove();
        createParticle();
    }, (duration + delay) * 1000);
}

// Typewriter effect for mood pages
function initTypewriter() {
    const typewriterElements = document.querySelectorAll('.typewriter');
    
    typewriterElements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        
        let i = 0;
        const speed = 50; // typing speed in milliseconds
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        // Start typing with a slight delay
        setTimeout(type, 1000);
    });
}

// Scroll animation for elements
function initScrollAnimation() {
    const animatedElements = document.querySelectorAll('.reveal-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Add scroll reveal to all mood cards
function initMoodCardAnimations() {
    const moodCards = document.querySelectorAll('.mood-card');
    
    moodCards.forEach((card, index) => {
        card.classList.add('reveal-on-scroll');
        card.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // Initialize scroll animation
    initScrollAnimation();
}

// Add heartbeat effect to emojis
function initEmojiHeartbeat() {
    const emojis = document.querySelectorAll('.mood-emoji');
    
    emojis.forEach(emoji => {
        emoji.classList.add('heartbeat');
    });
}

// Surprise button functionality
function initSurpriseButtons() {
    const surpriseButtons = document.querySelectorAll('.surprise-button');
    
    surpriseButtons.forEach(button => {
        // Add ripple effect to all surprise buttons
        button.classList.add('ripple');
        
        button.addEventListener('click', () => {
            // Create a surprise element
            const surprise = document.createElement('div');
            surprise.classList.add('surprise-element');
            
            // Random position near the button
            const buttonRect = button.getBoundingClientRect();
            const posX = buttonRect.left + Math.random() * 100 - 50;
            const posY = buttonRect.top + Math.random() * 100 - 50;
            
            surprise.style.left = `${posX}px`;
            surprise.style.top = `${posY}px`;
            
            // Random content
            const surpriseContent = ['❤️', '💖', '💕', '💓', '💗', '💘', '💝', '💞', '💟'];
            surprise.textContent = surpriseContent[Math.floor(Math.random() * surpriseContent.length)];
            
            document.body.appendChild(surprise);
            
            // Remove after animation
            setTimeout(() => {
                surprise.remove();
            }, 2000);
        });
    });
}

// Add glow effect to mood titles
function initMoodTitleGlow() {
    const moodTitles = document.querySelectorAll('.mood-page-title');
    
    moodTitles.forEach(title => {
        title.classList.add('glow');
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    
    // Initialize page-specific features if elements exist
    if (document.querySelector('.typewriter')) {
        initTypewriter();
    }
    
    if (document.querySelector('.mood-card')) {
        initMoodCardAnimations();
    }
    
    if (document.querySelector('.mood-emoji')) {
        initEmojiHeartbeat();
    }
    
    if (document.querySelector('.surprise-button')) {
        initSurpriseButtons();
    }
    
    if (document.querySelector('.mood-page-title')) {
        initMoodTitleGlow();
    }
    
    // Add transition class to all pages
    document.querySelector('.container').classList.add('page-transition');
    
    // Handle window resize for particles
    window.addEventListener('resize', () => {
        createParticles();
    });
    
    // Add sparkle effect to site title
    const siteTitle = document.querySelector('.site-title');
    if (siteTitle) {
        siteTitle.classList.add('sparkle');
    }
    
    // Add fade-in-up class to all mood content sections
    const moodContent = document.querySelector('.mood-content');
    if (moodContent) {
        const children = moodContent.children;
        for (let i = 0; i < children.length; i++) {
            children[i].classList.add('reveal-on-scroll');
            children[i].style.transitionDelay = `${i * 0.2}s`;
        }
        initScrollAnimation();
    }
});

// Special action buttons functionality
document.addEventListener('DOMContentLoaded', () => {
    // Slap button
    const slapButton = document.getElementById('slapButton');
    if (slapButton) {
        slapButton.addEventListener('click', () => {
            const slapSound = new Audio('../assets/audio/slap.mp3');
            slapSound.play().catch(error => console.log('Audio playback failed:', error));
            
            // Visual effect
            document.body.classList.add('shake');
            setTimeout(() => {
                document.body.classList.remove('shake');
            }, 500); 
            
            setTimeout(() => {
                message.remove();
            }, 2000);
        });
    }
    

    
    // Surprise gift button
    const giftButton = document.getElementById('giftButton');
    if (giftButton) {
        giftButton.addEventListener('click', () => {
            // Create gift popup
            
            document.getElementById("fireworks-container").style.display = "block";
            setTimeout(() => {
                document.getElementById("fireworks-container").style.display = "none";
            }, 2000);

           
            // Close button functionality
            closeButton.addEventListener('click', () => {
                giftPopup.remove();
            });
        });
    }
});

let slapCount = 0;
let emotionLevel = 1;
const emotionGirl = document.getElementById("emotionGirl");
const slapButton = document.getElementById("slapButton");
const slapSticker = document.getElementById("slapSticker");
const particles = document.getElementById("particles");

function showSlapSticker() {
    slapSticker.style.display = "block";
    slapSticker.classList.add("slap-animate");

    setTimeout(() => {
        slapSticker.style.display = "none";
        slapSticker.classList.remove("slap-animate");
    }, 500); // 1 second
}

if (emotionGirl && slapButton) {
    slapButton.addEventListener("click", () => {
        slapCount++;

        if (slapCount % 2 === 0 && emotionLevel < 9) {
            emotionLevel++;
            emotionGirl.src = `../assets/images/chid-chid-${emotionLevel}.png`;
        }

        particles.classList.add("shake");
        showSlapSticker();

        setTimeout(() => particles.classList.remove("shake"), 500);
    });
}

// === Floating Sticker Particle Stream ===
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
  
    const size = Math.random() * 20 + 30;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.animationDuration = `${10 + Math.random() * 5}s`;
  
    const img = document.createElement("img");
    const randomSticker = stickerList[Math.floor(Math.random() * stickerList.length)];
    const basePath = window.overrideStickerPath || "assets/images/stickers/";
img.src = `${basePath}${randomSticker}`;
 // ✅ Update if folder is different
    img.className = "sticker-img";
  
    particle.appendChild(img);
    container.appendChild(particle);
  
    setTimeout(() => {
      particle.remove();
    }, 19000); // Slightly more than animation duration
  }
  
  function startFloatingStickers() {
    const container = document.getElementById("particles");
    if (!container) return;
  
    const preload = 15;
    for (let i = 0; i < preload; i++) {
      setTimeout(createFloatingStickerParticle, i * 400);
    }
  
    setInterval(() => {
      if (document.hasFocus()) {
        createFloatingStickerParticle();
      }
    }, 300);
  }
  
  document.addEventListener("DOMContentLoaded", startFloatingStickers);
  
  const chidGiftButton = document.getElementById("giftButton");
const chidGiftPopup = document.getElementById("chidSurpriseGift");

// Optional love music for popup
const giftMusic = new Audio("../assets/audio/love-theme.mp3");
giftMusic.volume = 0.5;

function closeChidGift() {
  chidGiftPopup.style.display = "none";
  giftMusic.pause();
  giftMusic.currentTime = 0;
}

if (chidGiftButton && chidGiftPopup) {
  chidGiftButton.addEventListener("click", () => {
    chidGiftPopup.style.display = "flex";
    giftMusic.play();

    // Optional webhook notification here if you want 👀
  });
}

// === Cuddle Hug Logic ===
document.addEventListener("DOMContentLoaded", function () {
    const cuddleButton = document.getElementById("cuddleButton");
    const hugOverlay = document.getElementById("hugOverlay");
  
    if (cuddleButton && hugOverlay) {
      cuddleButton.addEventListener("click", () => {
        // 🫂 Show arms
        hugOverlay.classList.add("active");
        document.getElementById("hugWrapper").classList.add("hug-squeeze");

  
        // 💓 Vibrate
        if (navigator.vibrate) navigator.vibrate(200);
  
        // 💞 Floating hearts
        for (let i = 0; i < 20; i++) {
          const heart = document.createElement("div");
          heart.classList.add("cuddle-heart");
          heart.innerHTML = "❤️";
          heart.style.position = "fixed";
          heart.style.left = `${Math.random() * 100}vw`;
          heart.style.top = `${Math.random() * 100}vh`;
          heart.style.fontSize = `${Math.random() * 30 + 10}px`;
          heart.style.animation = "float 3s ease-in-out forwards";
          document.body.appendChild(heart);
          setTimeout(() => heart.remove(), 3000);
        }
  
        // 📝 Message
        const message = document.createElement("div");
        message.classList.add("cuddle-message");
        message.textContent = "Virtual cuddle sent! 🤗";
        message.style.position = "fixed";
        message.style.top = "20px";
        message.style.left = "50%";
        message.style.transform = "translateX(-50%)";
        message.style.padding = "10px 20px";
        message.style.background = "#ff8cbf";
        message.style.color = "white";
        message.style.borderRadius = "20px";
        message.style.fontSize = "1.1rem";
        message.style.zIndex = "99999";
        document.body.appendChild(message);
        setTimeout(() => message.remove(), 3000);
  
        // 🕐 Reset
        setTimeout(() => {
            hugOverlay.classList.remove("active");
            document.getElementById("hugWrapper").classList.remove("hug-squeeze");
          }, 4000);
          
      });
    }
  });

  
  
  