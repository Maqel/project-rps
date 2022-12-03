'use strict';
{

  /* SOUNDS */
  let playSound = () => new Audio('./vendor/sounds/button-click.wav').play();
  
  const audio = new Audio('./vendor/sounds/retro.mp3');
  document.getElementById('musicButton').addEventListener('click', () => {
    audio.volume = 0.1;
    audio.play();
  });
  //...
  /* SEND MESSAGES */
  const matchResult = (msg) => {
    let div = document.createElement('h4');
    div.innerHTML = msg;
    document.getElementById('matchResult').appendChild(div);
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
  /* START GAME */
  const startButton = document.querySelector('.intro button');
  const showMenu = document.querySelector('#container');
  startButton.addEventListener('click', function () {
    showMenu.style.display = 'block';
    startButton.style.display = 'none';
    playSound();
  });

  const playGame = (playerInput) =>{

    clearMessages();
    resetMovement();
    const getMoveName = (argMoveId) =>{
      if(argMoveId === 1){
        playerMovement.src = './images/rock/rock_left.png';
        return 'rock';
      }
      else if(argMoveId === 2){
        playerMovement.src = './images/paper/paper_left.png';
        return 'paper';
      }
      else if(argMoveId === 3){
        playerMovement.src = './images/scissors/scissors_left.png';
        return 'scissors';
      }
      printMessage('I do not know such a movement ' + argMoveId + '.');
      return 'unknown movement';
    };
    /* COMPUTER */
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    const argComputerMove = getMoveName(randomNumber);

    printMessage('My chose: &nbsp;&nbsp;&nbsp;' + argComputerMove);

    function replaceComputerImage() {
      if (argComputerMove === 'rock') {
        computerMovement.src = './images/rock/rock_right.png';
      } else if (argComputerMove === 'paper') {
        computerMovement.src = './images/paper/paper_right.png';
      } else if (argComputerMove === 'scissors') {
        computerMovement.src = './images/scissors/scissors_right.png';
      }
    }

    //Player Move
    const argPlayerMove = getMoveName(playerInput);
    printMessage('Your chose is: &nbsp;&nbsp;&nbsp;' + argPlayerMove);
    replaceComputerImage();

    //Winning result//
    const displayResult = (argComputerMove, argPlayerMove) => {

      if(argComputerMove == 'rock' && argPlayerMove == 'paper'){
        matchResult('YOU WIN !!!');
      }
      else if(argComputerMove == 'paper' && argPlayerMove == 'scissors'){
        matchResult('YOU WIN !!!');
      }
      else if(argComputerMove == 'scissors' && argPlayerMove == 'rock'){
        matchResult('YOU WIN !!!');
      }
      else if(argComputerMove == argPlayerMove){
        matchResult('IT’S A DRAW !!!');
      }
      else {
        matchResult('I WIN !!!');
      }
    };
    displayResult(argComputerMove, argPlayerMove);
  };

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
