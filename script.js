const yes = document.getElementById("yes");
const no = document.getElementById("no");
const subtext = document.getElementById("subtext");
var counter = 0;
var counter2 = 0;
var sizeLimit = 7;
var moveLimit = 6;
let yesSize = 16;
let messages = [
  "are we deadahh",
  "lol jokes over",
  "accidents happen, 2nd chance",
  "stop hurting my feelings",
  "reservation to north",
  "ive spent my life savings on u",
  "im getting cheated on",
  "IM GETTING CHEATED ON??",
  "now ive lost my appetite and all will to live",
  "IM GONNA RIP DIOR TO SHREDS",
  "vro im crine",
  "vro",
  "is this on yonks?",
  "da fah?",
  "do u know how long this took to make",
  "please",
  "yo this cant be lola",
  "we legit play uno tg",
  "no",
  "im gonna tell ur mom",
  "im gonna tell max",
  "im gonna tell cece",
  "ill buy u dutch",
  "im gonna tell twin now",
  "im gonna tell ur lil brother",
  "food??"
  
  
];

let index = 0;

no.addEventListener("click", () => {
  let question = document.getElementById("question");
  
  question.innerText = messages[index];

  index++;
  counter2++;
  if (index >= messages.length) {
    index = messages.length - 1;
  }
  
  if(counter2 >= sizeLimit){
    yesSize += 6; 
    yes.style.fontSize = yesSize + "px";
    yes.style.padding = (yesSize/2) + "px " + (yesSize) + "px";
  }
if(yesSize > 120){ // when it gets big
    startFollowing();
  }
  
});

yes.addEventListener("click", () => {
  document.body.innerHTML = `
    <main style="height:100vh;display:grid;place-items:center;font-family:system-ui;text-align:center;">
      <div>
        <a class="gift-btn" href="gift.html">Gift 🎁</a>
        
        <h1>peer pressure strikes again</h1>
        <p>ok bet were valentines now</p>

        <div class="slideshow">
          <img id="slide" src="" alt="slideshow" />
        </div>

        <audio id="bgm" src="audiofo/Forever.mp3" autoplay></audio>
        <p style="opacity:0.7;margin-top:10px;font-size:18px;">I love you!</p>
    
      </div>
    </main>
  `;
  confettiBurst(180);
  confettiRain(90, 2500);

  startSlideshow([
    "imagesfo/IMG_1912.JPG",
    "imagesfo/yuh.png",
    "imagesfo/IMG_3513.JPG",
    "imagesfo/IMG_7279.JPG"
  ], 2000);
  
  document.body.style.background =
    "url('imagesfo/valentine.jpg') center/cover no-repeat";
  document.body.style.minHeight = "100vh";
  
  const audio = document.getElementById("bgm");
  audio.volume = 0.35;
  audio.play().catch(() => {



  });

 const secondSongSrc = "audiofo/Declan McKenna - Slipping Through My Fingers (Official Audio).mp3";

  setTimeout(() => {
    // fade out
    const fadeOut = setInterval(() => {
      if (audio.volume > 0.06) {
        audio.volume -= 0.06;
      } else {
        clearInterval(fadeOut);

        audio.pause();
        audio.src = secondSongSrc;
        audio.currentTime = 0;

        // reset volume then play
        audio.volume = 0.35;
        audio.play().catch(() => {});
      }
    }, 150);
  }, 7000);
});

  
});

no.addEventListener("mouseenter", () => {
if(counter >= moveLimit){
  subtext.textContent = "i did something else to see if youll say yes";
  return;
}
  const x = Math.random() * (window.innerWidth - no.offsetWidth);
  const y = Math.random() * (window.innerHeight - no.offsetHeight);
  counter++;
  

  
  no.style.position = "absolute";
  no.style.left = `${x}px`;
  no.style.top = `${y}px`;

  subtext.textContent = "bro just say yes gang";

});

function startSlideshow(images, intervalMs = 2000) {
  const img = document.getElementById("slide");
  if (!img || !images || images.length === 0) return;

  let i = 0;
  img.src = images[i];

  setInterval(() => {
    i = (i + 1) % images.length;
    img.src = images[i];
  }, intervalMs);
}

function confettiBurst(count = 150) {
  for (let i = 0; i < count; i++) {
    spawnConfettiPiece({
      x: window.innerWidth / 2,
      spread: 0.9,
      duration: 1200 + Math.random() * 900,
      size: 6 + Math.random() * 8,
    });
  }
}

function confettiRain(count = 80, durationMs = 2000) {
  const start = Date.now();
  const timer = setInterval(() => {
    for (let i = 0; i < count / 10; i++) {
      spawnConfettiPiece({
        x: Math.random() * window.innerWidth,
        spread: 0.2,
        duration: 2200 + Math.random() * 1400,
        size: 6 + Math.random() * 8,
      });
    }
    if (Date.now() - start > durationMs) clearInterval(timer);
  }, 120);
}

function spawnConfettiPiece({ x, spread, duration, size }) {
  const conf = document.createElement("div");
  conf.className = "confetti";

  // random pastel-ish colors without hardcoding a theme
  const colors = ["#ff4d88", "#ffd166", "#06d6a0", "#4dabf7", "#b197fc", "#ff9f1c"];
  conf.style.background = colors[Math.floor(Math.random() * colors.length)];

  conf.style.width = `${size}px`;
  conf.style.height = `${size * 1.3}px`;

  const startX = x + (Math.random() - 0.5) * window.innerWidth * spread;
  conf.style.left = `${Math.max(0, Math.min(window.innerWidth - 10, startX))}px`;

  conf.style.animationDuration = `${duration}ms`;

  // little random delay so it looks more organic
  conf.style.animationDelay = `${Math.random() * 120}ms`;

  document.body.appendChild(conf);

  // cleanup
  setTimeout(() => conf.remove(), duration + 500);
}



let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let yesX = 0;
let yesY = 0;

// Track mouse
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Make Yes float toward cursor
function followMouse() {
  const rect = yes.getBoundingClientRect();

  // target = mouse minus half button size (center it)
  const targetX = mouseX - rect.width / 2;
  const targetY = mouseY - rect.height / 2;

  // smooth follow (lower = slower)
  yesX += (targetX - yesX) * 0.04;
  yesY += (targetY - yesY) * 0.04;

  yes.style.position = "fixed";
  yes.style.left = yesX + "px";
  yes.style.top = yesY + "px";

  requestAnimationFrame(followMouse);
}

// Start following AFTER it grows big
function startFollowing() {
  followMouse();
}
