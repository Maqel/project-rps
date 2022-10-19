'use strict';
{

  function printMessage(msg){
    let div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
  }

  function clearMessages(){
    document.getElementById('messages').innerHTML = '';
  }



  function playGame(playerInput){

    clearMessages();
    const getMoveName = function(argMoveId){
      if(argMoveId == 1){
        return 'rock';
      }
      else if(argMoveId == 2){
        return 'paper';
      }
      else if(argMoveId == 3){
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

    printMessage('Mój ruch to: ' + argComputerMove);

    //Player Move
    console.log('Gracz wpisał: ' + playerInput);
    const argPlayerMove = getMoveName(playerInput);

    printMessage('Twój ruch to: ' + argPlayerMove);

    //Winning result//
    const displayResult = function(argComputerMove, argPlayerMove){

      if(argComputerMove == 'rock' && argPlayerMove == 'paper'){
        printMessage('Ty wygrywasz!');
      }
      else if(argComputerMove == 'paper' && argPlayerMove == 'scissors'){
        printMessage('Ty wygrywasz');
      }
      else if(argComputerMove == 'scissors' && argPlayerMove == 'rock'){
        printMessage('Ty wygrywasz');
      }
      else if(argComputerMove == argPlayerMove){
        printMessage('Jest Remis');
      }
      else {
        printMessage('Ja Wygrałem');
      }
    };
    displayResult(argComputerMove, argPlayerMove);
  }

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
