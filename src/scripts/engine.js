const emojis = [
  "🐶",
  "🐶",
  "🐥",
  "🐥",
  "🐮",
  "🐮",
  "🦁",
  "🦁",
  "🐷",
  "🐷",
  "🐻‍❄️",
  "🐻‍❄️",
  "🐭",
  "🐭",
  "😺",
  "😺",
];

let openCards = [];

let shuffledEmojis = emojis.sort(() =>( Math.random() > 0.5 ? 2 : -1));

for( let i = 0; i < emojis.length; i++ ) {
  let box = document.createElement("div");
  box.classList="item";
  box.innerHTML = shuffledEmojis[i];
  box.onclick = handleClick;
  document.querySelector(".game").appendChild(box);
}

let points = 0;

function playSound(audioName) {
  let audio = new Audio(`./src/sounds/${audioName}.m4a`);
  audio.volume = 0.2;
  audio.play();
}

function handleClick() {
  if (openCards.length < 2) {
    this.classList.add("boxOpen");
    openCards.push(this);
  }

  if(openCards.length === 2) {
    setTimeout(checkMatch, 500);
  }
}

function checkMatch() {
  let firstCard = openCards[0].innerHTML;
  let secondCard = openCards[1].innerHTML;

  if (firstCard === secondCard) {
    openCards[0].classList.add("boxMatch");
    openCards[1].classList.add("boxMatch");
    openCards = [];
    playSound("hit");
  } else {
    openCards[0].classList.remove("boxOpen");
    openCards[1].classList.remove("boxOpen");
    openCards = [];
    playSound("error");
  }

  let winCards = document.querySelectorAll(".boxMatch");

  if (winCards.length === emojis.length) {
    alert("Parabéns, você ganhou!");
    window.location.reload()
  }
}


