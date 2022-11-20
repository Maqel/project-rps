'use strict';
{

  /* SOUNDS */
  let playSound = () => new Audio('./vendor/sounds/button-click.wav').play();
  //let themeSound = () => new Audio('./vendor/sounds/retro-wave.mp3');

  /* RESULTS */
  const printMessage = (msg) => {
    let div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
  };

  /* CLEAR MESSAGES */
  const clearMessages = () => {
    document.getElementById('messages').innerHTML = '';
  };

  /*HANDS MOVEMENT*/
  const playerMovement = document.querySelector('.player-move');
  const computerMovement = document.querySelector('.computer-move');

  /* RESET MOVEMENT */
  function resetMovement() {
    playerMovement.src = '/.images/rock/rock_left.png';
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

  /* START GAME */
  const startButton = document.querySelector('.intro button');
  const showMenu = document.querySelector('#container');
  startButton.addEventListener('click', function () {
    showMenu.style.display = 'block';
    startButton.style.display = 'none';
    playSound();
  });

  const playGame = (playerInput) =>{

    resetMovement();
    clearMessages();
    const getMoveName = function(argMoveId){
      if(argMoveId == 1){
        playerMovement.src = './images/rock/rock_left.png';
        return 'rock';
      }
      else if(argMoveId == 2){
        playerMovement.src = './images/paper/paper_left.png';
        return 'paper';
      }
      else if(argMoveId == 3){
        playerMovement.src = './images/scissors/scissors_left.png';
        return 'scissors';
      }
      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
    };

    //Random Number//
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);

    //Computer Move//
    const argComputerMove = getMoveName(randomNumber);

    printMessage('My move is: ' + argComputerMove);


    function replaceComputerImage() {
      if (argComputerMove === 'Rock') {
        computerMovement.src = './images/rock/rock_right.png';
      } else if (argComputerMove === 'Paper') {
        computerMovement.src = './images/paper/paper_right.png';
      } else if (argComputerMove === 'Scissors') {
        computerMovement.src = './images/scissors/scissors_right.png';
      }
    }

    //Player Move
    console.log('Gracz wpisał: ' + playerInput);
    const argPlayerMove = getMoveName(playerInput);
    replaceComputerImage();

    printMessage('Your move is: ' + argPlayerMove);

    //Winning result//
    const displayResult = (argComputerMove, argPlayerMove) => {

      if(argComputerMove == 'rock' && argPlayerMove == 'paper'){
        printMessage('You Win!');
      }
      else if(argComputerMove == 'paper' && argPlayerMove == 'scissors'){
        printMessage('You Win');
      }
      else if(argComputerMove == 'scissors' && argPlayerMove == 'rock'){
        printMessage('You Win');
      }
      else if(argComputerMove == argPlayerMove){
        printMessage('it’s a draw');
      }
      else {
        printMessage('I Win');
      }
    };
    displayResult(argComputerMove, argPlayerMove);
  };

  document.getElementById('rock').addEventListener('click', function(){
    shake();
    setTimeout(function(){
      playGame(1);
    }, 1500);

    playSound();
  });
  document.getElementById('paper').addEventListener('click', function(){
    shake();
    setTimeout(function(){
      playGame(2);
    }, 1500);
    playSound();
  });
  document.getElementById('scissors').addEventListener('click', function(){
    shake();
    setTimeout(function(){
      playGame(3);
    }, 1500);
    playSound();
  });
}
