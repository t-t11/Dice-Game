const img1 = document.querySelectorAll('img')[0];
const img2 = document.querySelectorAll('img')[1];

img1.setAttribute('src', './images/dice1.png');
img2.setAttribute('src', './images/dice1.png');

function castDiceFunction() {
  const randomNumber1 = Math.floor(Math.random() * 6) + 1;
  const randomNumber2 = Math.floor(Math.random() * 6) + 1;

  switch (randomNumber1) {
    case 1:
      img1.setAttribute('src', './images/dice1.png');
      break;
    case 2:
      img1.setAttribute('src', './images/dice2.png');
      break;
    case 3:
      img1.setAttribute('src', './images/dice3.png');
      break;
    case 4:
      img1.setAttribute('src', './images/dice4.png');
      break;
    case 5:
      img1.setAttribute('src', './images/dice5.png');
      break;
    case 6:
      img1.setAttribute('src', './images/dice6.png');
      break;
  }

  switch (randomNumber2) {
    case 1:
      document;
      img2.setAttribute('src', './images/dice1.png');
      break;
    case 2:
      document;
      img2.setAttribute('src', './images/dice2.png');
      break;
    case 3:
      document;
      img2.setAttribute('src', './images/dice3.png');
      break;
    case 4:
      document;
      img2.setAttribute('src', './images/dice4.png');
      break;
    case 5:
      document;
      img2.setAttribute('src', './images/dice5.png');
      break;
    case 6:
      document;
      img2.setAttribute('src', './images/dice6.png');
      break;
  }

  if (randomNumber1 === randomNumber2) {
    document.querySelector('h1').innerText = 'Draw!';
  } else if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerText = 'Player1 Win!';
  } else {
    document.querySelector('h1').innerText = 'Player2 Win!';
  }

  console.log(randomNumber1);
  console.log(randomNumber2);
}
