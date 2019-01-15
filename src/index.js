import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const numberOfCorrectAnswer = 3;

const startGame = (description, gameTask) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  for (let i = 0; i < numberOfCorrectAnswer; i += 1) {
    const task = gameTask();
    const question = car(task);
    const correctAnswer = String(cdr(task));
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${username}!!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${username}!`);
};

export default startGame;
