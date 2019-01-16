import readlineSync from 'readline-sync';
import getRandomNumber from './utilites';
import brainBalance from './games/brain-balance';
import brainCalc from './games/brain-calc';
import brainEven from './games/brain-even';
import brainGCD from './games/brain-gcd';
import brainPrime from './games/brain-prime';
import brainProgression from './games/brain-progression';
import { greetings } from './gameEngine';

const gamePlay = (gameNumber, username) => {
  switch (gameNumber) {
    case 1:
      brainBalance(username);
      break;
    case 2:
      brainCalc(username);
      break;
    case 3:
      brainEven(username);
      break;
    case 4:
      brainGCD(username);
      break;
    case 5:
      brainPrime(username);
      break;
    case 6:
      brainProgression(username);
      break;
    case 42:
      console.log(`Buy buy,  ${username} ;)`);
      break;
    default:
      console.log('Wrong choice, try again.');
      break;
  }
};

const gameSelection = (username) => {
  console.log('Choose number a specific game or random:');
  console.log('1 - brain-balance,');
  console.log('2 - brain-calc,');
  console.log('3 - brain-even,');
  console.log('4 - brain-gcd,');
  console.log('5 - brain-prime,');
  console.log('6 - brain-progression,');
  console.log('7 - random game,');
  console.log('42 - exit.');

  const choice = Number(readlineSync.question('Your choice: '));

  if (choice === 7) {
    const randomGame = getRandomNumber(1, 6);
    gamePlay(randomGame, username);
    return;
  }

  gamePlay(choice, username);
};

const gameStart = () => {
  const username = greetings();
  gameSelection(username);
};

export const playAgain = (username) => {
  console.log("Let's play again ? Answer yes / no");
  const answer = readlineSync.question('Your answer: ');
  if (answer === 'yes') {
    gameSelection(username);
    return;
  }
  console.log(`Bye bye ${username}, comeback ;)`);
};
export default () => gameStart();
