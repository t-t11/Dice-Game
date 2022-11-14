const img1 = document.querySelectorAll('img')[0];
const img2 = document.querySelectorAll('img')[1];

img1.setAttribute('src', './images/dice1.png');
img2.setAttribute('src', './images/dice1.png');

function castDiceFunction() {
  const randomNumber1 = Math.floor(Math.random() * 6) + 1;
  const randomNumber2 = Math.floor(Math.random() * 6) + 1;

  const imgSource1 = './images/dice' + randomNumber1 + '.png';
  const imgSource2 = './images/dice' + randomNumber2 + '.png';
  img1.setAttribute('src', imgSource1);
  img2.setAttribute('src', imgSource2);

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
