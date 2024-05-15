"use strict";

(() => {
  const rpsArray = ["rock", "paper", "scissors"];

  const game = () => {
    const result = {
      computer: 0,
      player: 0,
      tie: 0,
    };

		const decidedNotToPlay = () => {
 		 alert("I guess you changed your mind. Maybe next time.");
		};	

    const getComputerChoice = (rpsArray) => {
      const randomNumber = Math.floor(Math.random() * 3);
      return rpsArray[randomNumber];
    };

		const getPlayerChoice = () => {
      return prompt("Please enter rock, paper, or scissors.");
    };

		const getChoice = (playerChoice) => {
			 if (playerChoice || playerChoice === '') {
      return playerChoice.trim().toLowerCase();
      } else  {
       alert("You didn't enter rock, paper, or scissors.");
       }
		}

		const initGame = () => {
      const startGame = confirm("Shall we play rock, paper, or scissors?");
      startGame ? getChoice : decidedNotToPlay();
    };

    const determineWinner = (player, computer) => {
      if (player === computer) {
        alert(`Player: ${player}\nComputer: ${computer}\nTie game!`);
      } else if (
        (player === "rock" && computer === "paper") ||
        (player === "paper" && computer === "scissors") ||
        (player === "scissors" && computer === "rock")
      ) {
				result.player;
        result.computer++;
        alert(
          `Player: ${player}\nComputer: ${computer}\nComputer wins!\nPl.: ${result.player}\nComp.: ${result.computer}`
        );
      } else {
        result.player++;
        result.computer;
        alert(
          `Player: ${player}\nComputer: ${computer}\nPlayer wins!\nPl.: ${result.player}\nComp.: ${result.computer}`
        );
      }
    };

    const askToPlayAgain = (start) => {
      const answer = confirm("Play Again?");
      if (answer) {
        start();
      } else {
        alert(`Player won ${result.player} times.\nComputer won ${result.computer} times.`);
      }
    };

    return function start() {
			initGame();
      // const ask = confirm('lan');
      // if (ask === "EN") {	
			
			const playerChoice = getPlayerChoice();
      const computerChoice = getComputerChoice(rpsArray);
      const check = determineWinner(playerChoice, computerChoice);
			askToPlayAgain(start);	

      console.log(check);
      result[check]++;
      console.log(result);
      console.log(playerChoice);
      console.log(computerChoice);
      // }
    };
  };

  window.rps = game;
})();

const play = window.rps();
play();

