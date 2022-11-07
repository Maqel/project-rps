'use strict';
{

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
    playerMovement.src = './images/rock/rock_left.png';
    computerMovement.src = './images/rock/rock_right.png';
  }

  /* START GAME */
  const startButton = document.querySelector('.intro button');
  const showMenu = document.querySelector('#container');
  startButton.addEventListener('click', function () {
    showMenu.style.display = 'block';
    startButton.style.display = 'none';
  });

  const playGame = (playerInput) =>{

    clearMessages();
    resetMovement();
    const getMoveName = (argMoveId) =>{
      if(argMoveId == 1){
        playerMovement.src = './images/rock/rock_left.png';
        return 'Rock';
      }
      else if(argMoveId == 2){
        playerMovement.src = './images/paper/paper_left.png';
        return 'Paper';
      }
      else if(argMoveId == 3){
        playerMovement.src = './images/scissors/scissors_left.png';
        return 'Scissors';
      }
      printMessage('I do not know such a movement ' + argMoveId + '.');
      return 'unknown movement';
    };

    //Random Number//
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    //console.log('Wylosowana liczba to: ' + randomNumber);

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
    //console.log('Gracz wpisał: ' + playerInput);
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
    playGame(1);

  });
  document.getElementById('paper').addEventListener('click', function(){
    playGame(2);
  });
  document.getElementById('scissors').addEventListener('click', function(){
    playGame(3);
  });


}
