import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';
import { playAgain } from '.';

const numberOfCorrectAnswer = 3;

export const greetings = () => {
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  return username;
};

const startGame = (description, gameTask, name = '') => {
  const username = name === '' ? greetings() : name;
  console.log(description);
  for (let i = 0; i < numberOfCorrectAnswer; i += 1) {
    const task = gameTask();
    const question = car(task);
    const correctAnswer = cdr(task);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${username}!!`);
      playAgain(username);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${username}!`);
  playAgain(username);
};

export default startGame;
