const characters = {
  mizi: {
    name: "Mizi",
    info: "Race : Human<br>Age : 22<br>Family : Guardian Shine<br>Status : Alive",
    image: "mizi-pfp.jpg",
    audio: "myclematis.mp3"
  },
  sua: {
    name: "Sua",
    info: "Race : Human<br>Age : 23<br>Family : Guardian Nigeh<br>Status : Deceased",
    image: "sua-pfp.jpg",
    audio: "myclematis.mp3"
  },
  hyuna: {
    name: "Hyuna",
    info:"Race : Human<br>Age : 27<br>Family : Guardian Phan<br>Status : Deceased",
    image: "hyuna-pfp.jpg",
    audio: "allin-alienstage.mp3"
  },
  till: {
    name: "Till",
    info: "Race : Human<br>Age : 21<br>Family : Guardian Urak<br>Status : Deceased",
    image: "till-pfp.jpg",
    audio: "unknown.mp3"
  },
  ivan: {
    name: "Ivan",
    info: "Race : Human<br>Age : 22<br>Family : Guardian Unsha<br>Status : Deceased",
    image: "ivan-pfp.jpg",
    audio: "blacksorrow.mp3"
  }
};

function showCharacter(key) {
  const card = document.getElementById('characterCard');
  const char = characters[key];
  document.getElementById('portrait').src = char.image;
  document.getElementById('name').textContent = char.name;
  document.getElementById('info').innerHTML = char.info;
  document.getElementById('audio').src = char.audio;
  card.style.display = 'block';
  requestAnimationFrame(() => card.classList.add('show'));

document.getElementById('audio').pause();
document.getElementById('audio').currentTime = 0;

card.classList.remove('show');
void card.offsetWidth;
card.classList.add('show');
}

function toggleAudio() {
  const audio = document.getElementById('audio');
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

window.addEventListener('load', () => {
      setTimeout(() => {
        document.querySelector('.loading-screen').style.display = 'none';
        document.querySelector('h1').style.display = 'block';
        const card = document.getElementById('zekeCard');
        card.style.display = 'block';
        requestAnimationFrame(() => card.classList.add('show'));
      }, 2500);
});

const background = document.querySelector(".animated-background");
  for (let i = 0; i < 50; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.left = `${Math.random() * 100}%`;
    square.style.animationDuration = `${5 + Math.random() * 10}s`;
    square.style.animationDelay = `${Math.random() * 5}s`;
    square.style.opacity = Math.random();
    square.style.background = "#00ffff44";
    background.appendChild(square);
}
