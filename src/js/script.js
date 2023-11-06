'use strict';
{

  /* SOUNDS */
  const playSound = () => new Audio('./vendor/sounds/button-click.wav').play();
  const startSound = () => new Audio('./vendor/sounds/ready-fight.mp3').play();
  const openingSound = () => new Audio('./vendor/sounds/opening.wav').play();
  const badSound = () => new Audio('./vendor/sounds/no.mp3').play();
  const drawSound = () => new Audio('./vendor/sounds/wtf.mp3').play();
  const winSound = () => new Audio('./vendor/sounds/win.mp3').play();
  const audio = new Audio('./vendor/sounds/retro.mp3');
  const musicButton = document.getElementById('musicButton');
  const musicIcon = document.getElementById('musicIcon');

  const playIcon = './vendor/icon/play-50.png';
  const pauseIcon = './vendor/icon/pause-50.png';

  let isPlaying = false;

  musicButton.addEventListener('click', () => {
    switch (isPlaying) {
    case true:
      audio.pause();
      musicIcon.src = `${playIcon}`;
      break;
    case false:
      audio.play();
      audio.volume = 0.3;
      musicIcon.src = `${pauseIcon}`;
      break;
    }
    isPlaying = !isPlaying;
  });

  audio.addEventListener('ended', () => {
    musicIcon.src = `${playIcon}`;
    isPlaying = false;
  });

  /* SEND MESSAGES */
  const matchResult = (msg) => {
    let div = document.createElement('h4');
    div.innerHTML = msg;
    document.getElementById('matchResult').appendChild(div);
    setTimeout(() => {
      div.style.display = 'none';
    }, 5000);
  };

  const printMessage = (msg) => {
    let div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
  };

  const clearMessages = () => {
    document.getElementById('messages').innerHTML = '';
    document.getElementById('matchResult').innerHTML = '';
  };
  //...

  /* SCORE BOARD */
  let playerScore = 0;
  let computerScore = 0;
  //let drawScore = 0;

  function scoreBoard() {

    document.getElementById('player-score').innerHTML = playerScore;
    document.getElementById('computer-score').innerHTML = computerScore;
    //document.getElementById('draw-score').innerHTML = drawScore;
  }
  /* HANDS */
  const playerMovement = document.querySelector('.player_move');
  const computerMovement = document.querySelector('.computer_move');


  function resetMovement() {
    playerMovement.src = './images/rock/rock_left.png';
    computerMovement.src = './images/rock/rock_right.png';
  }
  function shake() {
    playerMovement.classList.add('shake');
    computerMovement.classList.add('shake');
    setTimeout(function () {
      playerMovement.classList.remove('shake');
      computerMovement.classList.remove('shake');
    }, 1500);
  }
  //...

  /* MENU */
  const playButton = document.querySelector('.play-btn');
  const infoButton = document.querySelector('.info-btn');
  const startButton = document.querySelector('.start-btn');
  const showMenu = document.querySelector('#container');
  const faq = document.querySelector('#faq');
  playButton.addEventListener('click', function (e) {
    e.target.disabled = true;
    infoButton.style.display = 'block';
    startButton.style.display = 'block';
    playButton.style.display = 'none';
    openingSound();
  });

  infoButton.addEventListener('click', function () {
    faq.style.display = 'block';
    showMenu.style.display = 'none';
    infoButton.style.display = 'none';
    startButton.style.display = 'none';
    playButton.style.display = 'none';
    openingSound();
  });

  const backButton = document.getElementById('backButton');
  backButton.addEventListener('click', function() {
    const previousPage = document.referrer;
    window.location.href = previousPage;
  });
  /* START GAME */
  startButton.addEventListener('click', function () {
    showMenu.style.display = 'block';
    infoButton.style.display = 'none';
    startButton.style.display = 'none';
    playButton.style.display = 'none';
    scoreBoard();
    openingSound();
    startSound();
  });

  const playGame = (playerInput) =>{

    clearMessages();
    resetMovement();

    const getMoveName = (argMoveId) =>{
      switch (argMoveId) {
      case 1:
        playerMovement.src = './images/rock/rock_left.png';
        return 'rock';
      case 2:
        playerMovement.src = './images/paper/paper_left.png';
        return 'paper';
      case 3:
        playerMovement.src = './images/scissors/scissors_left.png';
        return 'scissors';
      default:
        printMessage('I do not know such a movement ' + argMoveId + '.');
        return 'unknown movement';
      }
    };

    /* COMPUTER */
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    const argComputerMove = getMoveName(randomNumber);
    //printMessage('&nbsp;&nbsp;&nbsp;' + argComputerMove);

    function replaceComputerImage() {
      switch (argComputerMove) {
      case 'rock':
        computerMovement.src = './images/rock/rock_right.png';
        break;
      case 'paper':
        computerMovement.src = './images/paper/paper_right.png';
        break;
      case 'scissors':
        computerMovement.src = './images/scissors/scissors_right.png';
        break;
      }
    }

    //Player Move
    const argPlayerMove = getMoveName(playerInput);
    //printMessage(' &nbsp;&nbsp;&nbsp;' + argPlayerMove);
    replaceComputerImage();

    //Winning result//

    const displayResult = (argComputerMove, argPlayerMove) => {
      switch (true) {
      case (argComputerMove === 'rock' && argPlayerMove === 'paper'):
        matchResult('YOU WIN !!!');
        playerScore += 1;
        winSound();
        break;
      case (argComputerMove === 'paper' && argPlayerMove === 'scissors'):
        matchResult('YOU WIN !!!');
        playerScore += 1;
        winSound();
        break;
      case (argComputerMove === 'scissors' && argPlayerMove === 'rock'):
        matchResult('YOU WIN !!!');
        playerScore += 1;
        winSound();
        break;
      case (argComputerMove === argPlayerMove):
        matchResult('IT`S A DRAW !!!');
        //drawScore += 1;
        drawSound();
        break;
      default:
        matchResult('I WIN !!!');
        computerScore += 1;
        badSound();
        break;
      }
    };
    displayResult(argComputerMove, argPlayerMove);
    scoreBoard();
  };

  const buttons = document.querySelector( '.buttons' );
  buttons.addEventListener( 'click', ( e ) => {
    e.target.disabled = true;

    setTimeout( () => {
      e.target.disabled = false;
    }, 2000 );
  } ); // - SPRÓBUJ POSZUKAĆ INNEJ METODY NA BLOKOWANIE AKCJI PODCZAS WYKONYWANIA KODU (PO KLIKNIĘCIU W PRZYCISK BLOKUJ TEZ MOZLIWOŚĆ KLIKNIĘCIA INNYCH BUTTONÓW W TEJ CHWILI BLOKUJE TYLKO AKCJĘ OSTATNIO KLIKNIĘTEGO NA 2SEC)

  document.getElementById('rock').addEventListener('click', function(){
    setTimeout(function(){
      playGame(1);
    }, 1500);
    playSound();
    shake();
  });

  document.getElementById('paper').addEventListener('click', function(){
    setTimeout(function(){
      playGame(2);
    }, 1500);
    playSound();
    shake();
  });

  document.getElementById('scissors').addEventListener('click', function(){
    setTimeout(function(){
      playGame(3);
    }, 1500);
    playSound();
    shake();
  });
}
