'use strict';
{

  /* RESULTS */
  const printMessage = (msg) => {
    let div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
  };

  const clearMessages = () => {
    document.getElementById('messages').innerHTML = '';
  };

  /* START GAME */

  const startButton = document.querySelector('.intro button');
  const showMenu = document.querySelector('#container');
  startButton.addEventListener('click', function () {
    showMenu.style.display = 'block';
    startButton.style.display = 'none';
  });

  const playGame = (playerInput) =>{

    clearMessages();
    const getMoveName = (argMoveId) =>{
      if(argMoveId == 1){
        return 'Rock';
      }
      else if(argMoveId == 2){
        return 'Paper';
      }
      else if(argMoveId == 3){
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

    //Player Move
    //console.log('Gracz wpisał: ' + playerInput);
    const argPlayerMove = getMoveName(playerInput);

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
